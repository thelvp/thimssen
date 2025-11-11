import { Link } from 'react-router';
import { useIsMobile } from '../../hooks/useIsMobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import iconMap from '../../hooks/useIconMap';

type NavbarLinkProps = {
  color: string;
  title: string;
  href: string;
};

export const NavbarLink = ({ color, title, href }: NavbarLinkProps) => {
  const isMobile = useIsMobile();
  const resolvedIcon: IconProp = iconMap[title] as IconProp;

  return (
    <li className="text-sm font-bold sm:text-xl">
      <Link to={href} className={`sm:hover:text-${color} sm:hover:underline`}>
        {isMobile ? (
          <FontAwesomeIcon
            icon={resolvedIcon}
            className="text-lg text-gray-400"
          />
        ) : (
          title
        )}
      </Link>
    </li>
  );
};
