import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ContentLayout } from './ContentLayout';

export function Layout() {
  return (
    <main className={`px-8`}>
      <Navbar />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <Footer />
    </main>
  );
}
