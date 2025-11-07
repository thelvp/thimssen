import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <main className="flex min-h-screen flex-col bg-black/90">
      <Navbar />
      <div className="bg-linear-to-b flex w-full flex-1 flex-col justify-center bg-black/90 text-center md:flex-row">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
