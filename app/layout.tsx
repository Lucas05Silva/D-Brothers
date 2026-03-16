import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "D'Brothers Pan Pizza",
  description: "Premium link in bio page for D'Brothers Pan Pizza",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
