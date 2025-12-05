interface NavItemProps {
  href: string;
  title: string;
  color?: string;
}

export const NAV_ITEMS: NavItemProps[] = [
  { href: '/', title: 'Home', color: 'blue-500' },
  { href: '/about', title: 'About', color: 'purple-500' },
  { href: '/work', title: 'Work', color: 'pink-500' },
  { href: '/contact', title: 'Contact', color: 'orange-500' },
];
