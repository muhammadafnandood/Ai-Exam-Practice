// Authentication utility functions

export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('user');
};

export const getUser = () => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const login = (email, password) => {
  if (typeof window === 'undefined') return false;
  // Simulate login (in real app, this would call an API)
  const user = { email, name: email.split('@')[0] };
  localStorage.setItem('user', JSON.stringify(user));
  return true;
};

export const signup = (name, email, password) => {
  if (typeof window === 'undefined') return false;
  // Simulate signup (in real app, this would call an API)
  const user = { email, name };
  localStorage.setItem('user', JSON.stringify(user));
  return true;
};

export const logout = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('user');
};

export const requireAuth = (router) => {
  if (typeof window === 'undefined') return;
  if (!isAuthenticated()) {
    router.push('/login');
  }
};
