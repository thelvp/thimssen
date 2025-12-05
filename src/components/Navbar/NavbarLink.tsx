import { Link } from 'react-router';

export type NavbarLinkProps = {
  href: string;
  title: string;
  color: string;
};

export const NavbarLink = ({ color, title, href }: NavbarLinkProps) => {
  return (
    <li className="text-sm font-bold sm:text-xl">
      <Link to={href} className={`sm:hover:text-${color} sm:hover:underline`}>
        {title}
      </Link>
    </li>
  );
};
