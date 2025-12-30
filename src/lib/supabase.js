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
