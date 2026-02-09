import { Outlet } from 'react-router';
import { useLayoutEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { useIsMobile } from '../../hooks/useIsMobile';

export function Layout() {
  const isMobile = useIsMobile();
  const [navHeight, setNavHeight] = useState(0);

  useLayoutEffect(() => {
    function update() {
      const el = document.querySelector('nav[role="navigation"] > div');
      setNavHeight(el ? Math.ceil(el.getBoundingClientRect().height) : 0);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [isMobile]);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div
        className="bg-linear-to-b flex w-full flex-1 flex-col justify-center bg-black text-center text-gray-300 sm:flex-row"
        style={{ paddingTop: isMobile ? navHeight : undefined }}
      >
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}
