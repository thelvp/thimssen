import { Link } from 'react-router';
import { NavbarListItem } from './NavbarListItem';
import { Logo } from '../Logo/Logo';

export const Navbar = () => {
  const NavbarLinks = [
    { href: '/', title: 'Home', color: 'blue-500' },
    { href: '/about', title: 'About', color: 'purple-500' },
    { href: '/work', title: 'Work', color: 'pink-500' },
    {
      href: '/contact',
      title: 'Contact',
      color: 'orange-500',
    },
  ];

  return (
    <div className="flex w-full items-center justify-between px-8 py-5">
      <Link to={'/'} className="flex text-3xl font-bold">
        <Logo />
      </Link>
      <ul className="gap-13 mt-3 flex flex-wrap items-center pr-12 text-xl font-bold sm:mt-0">
        {NavbarLinks.map((link) => {
          return (
            <NavbarListItem
              color={link.color}
              navTitle={link.title}
              href={link.href}
            />
          );
        })}
      </ul>
    </div>
  );
};
