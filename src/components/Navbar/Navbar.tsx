import { useIsMobile } from '../../hooks/useIsMobile';
import { NAV_ITEMS } from '../../data/NAV_ITEMS';
import { MobileNavbarMenu } from './MobileNavbarMenu';
import { ScrollLink } from '../common/ScrollLink/ScrollLink';

export const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <nav role="navigation" aria-label="Primary">
      {/* Desktop */}
      {!isMobile && (
        <ul className="flex w-full flex-wrap items-center justify-center gap-8 rounded-2xl bg-black p-5">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="text-sm font-bold sm:text-xl">
              <ScrollLink
                to={item.href}
                className="interactive focus-ring sm:hover:underline"
              >
                {item.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}

      {/* Mobile */}
      {isMobile && (
        <div className="fixed top-0 z-20 flex w-full items-center justify-between bg-black px-4 py-5">
          <MobileNavbarMenu />
        </div>
      )}
    </nav>
  );
};
