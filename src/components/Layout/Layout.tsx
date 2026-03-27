import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import type { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
