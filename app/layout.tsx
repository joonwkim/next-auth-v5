// app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { SessionProvider } from 'next-auth/react';
import CustomNavbar from './components/CustomNavbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <CustomNavbar />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
