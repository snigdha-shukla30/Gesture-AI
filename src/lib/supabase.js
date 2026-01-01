import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Log configuration status (only in development)
if (import.meta.env.DEV) {
  console.log('Supabase Configuration:', {
    url: supabaseUrl ? '✓ Configured' : '✗ Missing',
    key: supabaseAnonKey ? '✓ Configured' : '✗ Missing',
    configured: isSupabaseConfigured
  });
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    })
  : null;

export async function uploadAvatar(userId, file) {
  if (!supabase) {
    return { error: new Error('Supabase is not configured') };
  }
  if (!userId) {
    return { error: new Error('Missing user id') };
  }
  if (!file) {
    return { error: new Error('No file provided') };
  }

  try {
    const fileName = `${userId}/${Date.now()}_${file.name}`;
    const { data, error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(fileName, file, { cacheControl: '3600', upsert: true });

    if (uploadError) return { error: uploadError };

    // Try to get a public URL for the uploaded file
    const { data: urlData } = await supabase.storage.from('avatars').getPublicUrl(fileName);
    // support different return shapes
    const publicUrl = (urlData && (urlData.publicUrl || urlData.public_url || urlData.publicURL)) || null;

    return { data, publicUrl, error: null };
  } catch (err) {
    return { error: err };
  }
}
