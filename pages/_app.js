import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <AuthProvider>
          <Head>
            <title>AI Exam Platform</title>
            <meta name="description" content="AI-Powered Exam Platform with High-Retention Learning System" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
