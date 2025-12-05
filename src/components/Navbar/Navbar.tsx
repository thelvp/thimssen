import { Link } from 'react-router';
import { NavbarLink } from './NavbarLink';
import { Logo } from '../Logo/Logo';
import { useIsMobile } from '../../hooks/useIsMobile';
import { NAV_ITEMS } from '../../data/NAV_ITEMS';

export const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <nav role="navigation" aria-label="Primary">
      <div className="flex w-full items-center justify-between py-5 sm:px-8">
        <Link to="/" className="mx-4">
          <Logo />
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <ul className="md:gap-13 flex flex-wrap items-center gap-4 pr-6 sm:gap-4 sm:pr-8 md:pr-12">
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

        {/* Mobile menu component will be added separately and rendered here */}
        {isMobile && (
          <div className="sm:hidden" aria-hidden="false">
            {/* TODO: replace this placeholder with <MobileMenu /> component */}
          </div>
        )}
      </div>
    </nav>
  );
};
