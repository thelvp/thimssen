interface NavItemProps {
  href: string;
  title: string;
}

export const NAV_ITEMS: NavItemProps[] = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'Over' },
  { href: '/producing', title: 'Producing' },
  { href: '/music', title: 'Music' },
  { href: '/contact', title: 'Contact' },
];
