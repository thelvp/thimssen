import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex w-full flex-1 flex-col justify-center text-center md:flex-row">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
