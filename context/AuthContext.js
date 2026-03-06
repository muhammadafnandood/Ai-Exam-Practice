import { createContext, useContext, useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  return (
    <AuthProviderInner>
      {children}
    </AuthProviderInner>
  );
}

function AuthProviderInner({ children }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') {
      setLoading(true);
    } else if (status === 'authenticated') {
      setUser(session.user);
      setLoading(false);
    } else if (status === 'unauthenticated') {
      setUser(null);
      setLoading(false);
    }
  }, [session, status]);

  const login = async (email, password) => {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    return result;
  };

  const loginWithGoogle = async () => {
    await signIn('google', { callbackUrl: '/dashboard' });
  };

  const logout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  const value = {
    user,
    loading,
    login,
    loginWithGoogle,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
