import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getUser } from '../utils/auth';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = getUser();
    if (user) {
      // Already logged in, go to dashboard
      router.push('/dashboard');
    } else {
      // Not logged in, go to login page
      router.push('/login');
    }
  }, [router]);

  return <LoadingScreen />;
}
