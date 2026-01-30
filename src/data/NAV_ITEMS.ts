interface NavItemProps {
  href: string;
  title: string;
}

export const NAV_ITEMS: NavItemProps[] = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'Over' },
  { href: '/projects', title: 'Projecten' },
  // { href: '/music', title: 'Muziek' },
  { href: '/contact', title: 'Contact' },
];
