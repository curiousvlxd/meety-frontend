import NextAuth from 'next-auth';
import { OAuthConfig } from 'next-auth/providers';

// Налаштуйте Zoom Provider
const ZoomProvider = OAuthConfig({
  id: 'zoom',
  name: 'Zoom',
  type: 'oauth',
  version: '2.0',
  scope: 'user:read',
  params: { grant_type: 'authorization_code' },
  accessTokenUrl: 'https://zoom.us/oauth/token',
  authorizationUrl: 'https://zoom.us/oauth/authorize?response_type=code',
  profileUrl: 'https://api.zoom.us/v2/users/me',
  clientId: process.env.NEXT_APP_ZOOM_CLIENT_ID,
  clientSecret: process.env.NEXT_APP_ZOOM_CLIENT_SECRET,
  profile: (profile) => ({
    id: profile.id,
    name: profile.name,
    email: profile.email,
  }),
});

export default NextAuth({
  providers: [
    ZoomProvider,
    // Інші провайдери, якщо потрібно
  ],
  pages: {
    signIn: '/auth/signin', // Можна вказати свою сторінку для входу
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
});
