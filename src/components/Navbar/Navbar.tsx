import { Link } from 'react-router';
import { NavbarLink } from './NavbarLink';
import { Logo } from '../Logo/Logo';

export const Navbar = () => {
  const NavbarLinks = [
    {
      href: '/',
      title: 'Home',
      color: 'blue-500',
    },
    { href: '/about', title: 'About', color: 'purple-500' },
    { href: '/work', title: 'Work', color: 'pink-500' },
    {
      href: '/contact',
      title: 'Contact',
      color: 'orange-500',
    },
  ];

  return (
    <div className="flex w-full items-center justify-between py-5 sm:px-8">
      <Link to={'/'} className="mx-4">
        <Logo />
      </Link>
      <ul className="md:gap-13 flex flex-wrap items-center gap-2 pr-6 sm:gap-4 sm:pr-8 md:pr-12">
        {NavbarLinks.map((link) => {
          return (
            <NavbarLink
              color={link.color}
              title={link.title}
              href={link.href}
            />
          );
        })}
      </ul>
    </div>
  );
};
