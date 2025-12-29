import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const url = process.env.VITE_SUPABASE_URL;
const key = process.env.VITE_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in env');
  process.exit(1);
}

const supabase = createClient(url, key);

async function run() {
  const testEmail = `tester${Date.now()}@gmail.com`;
  const testPassword = 'Testpass123!';

  console.log('Signing up:', testEmail);
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: testEmail,
    password: testPassword,
  });
  if (signUpError) {
    console.error('Sign up error:', signUpError.message || signUpError);
  } else {
    console.log('Sign up response:', signUpData);
  }

  // Attempt sign in
  console.log('Signing in');
  const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
    email: testEmail,
    password: testPassword,
  });
  if (signInError) {
    console.error('Sign in error:', signInError.message || signInError);
    process.exit(1);
  }

  console.log('Sign in success. User id:', signInData.user?.id);

  // Clean up: sign out
  await supabase.auth.signOut();
  process.exit(0);
}

run().catch((e) => {
  console.error('Unexpected error', e);
  process.exit(1);
});
