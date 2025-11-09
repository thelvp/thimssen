import { Link } from 'react-router';

type NavbarLinkProps = {
  color: string;
  navTitle: string;
  href: string;
};

export const NavbarListItem = ({ color, navTitle, href }: NavbarLinkProps) => {
  return (
    <li>
      <Link to={href} className={`hover:text-${color} hover:underline`}>
        {navTitle}
      </Link>
    </li>
  );
};
