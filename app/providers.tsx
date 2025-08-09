'use client';

import { AuthProvider } from '@/context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { fonts } from './fonts';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fonts.sans.style.fontFamily};
          --font-mono: ${fonts.mono.style.fontFamily};
        }
      `}</style>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}>
        <AuthProvider>{children}</AuthProvider>
      </GoogleOAuthProvider>
    </>
  );
}
