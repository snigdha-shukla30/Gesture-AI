import { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const missingSupabaseError = () =>
    new Error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to continue.');

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setLoading(false);
      return undefined;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      (async () => {
        setUser(session?.user ?? null);
      })();
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email, password) => {
    if (!supabase) {
      return { data: null, error: missingSupabaseError() };
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    return { data, error };
  };

  const signIn = async (email, password) => {
    if (!supabase) {
      return { data: null, error: missingSupabaseError() };
    }
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });
      return { data, error };
    } catch (err) {
      console.error('Sign in error:', err);
      return { 
        data: null, 
        error: { message: err.message || 'Failed to sign in. Please try again.' } 
      };
    }
  };

  const signOut = async () => {
    if (!supabase) {
      return { error: missingSupabaseError() };
    }
    const { error } = await supabase.auth.signOut();
    if (!error) setUser(null);
    return { error };
  };

  const signInWithProvider = async (provider) => {
    if (!supabase) {
      return { error: missingSupabaseError() };
    }
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({ provider });
      return { data, error };
    } catch (err) {
      return { data: null, error: err };
    }
  };

  const updateProfile = async (profileData) => {
    if (!supabase) {
      return { data: null, error: missingSupabaseError() };
    }
    try {
      const { data, error } = await supabase.auth.updateUser({ data: profileData });
      if (!error && data?.user) setUser(data.user);
      return { data, error };
    } catch (err) {
      console.error('updateProfile error:', err);
      return { data: null, error: err };
    }
  };

  const resetPassword = async (email) => {
    if (!supabase) {
      return { data: null, error: missingSupabaseError() };
    }
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    return { data, error };
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    signInWithProvider,
    updateProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
