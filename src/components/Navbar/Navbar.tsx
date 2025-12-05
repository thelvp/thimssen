import { Link } from 'react-router';
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

        {/* Desktop */}
        {!isMobile && (
          <ul className="flex flex-wrap items-center gap-8 last:pr-8">
            {NAV_ITEMS.map((item) => (
              <li className="text-sm font-bold sm:text-xl">
                <Link
                  to={item.href}
                  className={`sm:hover:text-${item.color} sm:hover:underline`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile */}
        {isMobile && <MobileNavbarMenu />}
      </div>
    </nav>
  );
};
