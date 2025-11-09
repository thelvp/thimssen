import { Outlet } from 'react-router';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';

export function Layout() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="bg-linear-to-b flex w-full flex-1 flex-col justify-center text-center text-gray-300 sm:flex-row">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
