import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Mina CRM AI',
  description: 'Multi-tenant AI-powered CRM built with Next.js, Prisma, and Tailwind CSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background font-display min-h-screen">
        {children}
      </body>
    </html>
  );
}