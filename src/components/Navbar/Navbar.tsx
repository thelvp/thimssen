import { Link } from 'react-router';
import { NavbarLink } from './NavbarLink';
import { Logo } from '../Logo/Logo';
import { useIsMobile } from '../../hooks/useIsMobile';
import { NAV_ITEMS } from '../../data/NAV_ITEMS';
import { MobileNavbarMenu } from './MobileNavbarMenu';

export const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <nav role="navigation" aria-label="Primary">
      <div className="flex w-full items-center justify-between px-4 py-5">
        {/* Logo  */}
        <Link to="/" className="">
          <Logo />
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <ul className="md:gap-13 flex flex-wrap items-center gap-4 pr-6">
            {NAV_ITEMS.map((item) => (
              <NavbarLink
                key={item.href}
                color={item.color}
                title={item.title}
                href={item.href}
              />
            ))}
          </ul>
        )}

        {/* Mobile menu */}
        {isMobile && <MobileNavbarMenu />}
      </div>
    </nav>
  );
};
