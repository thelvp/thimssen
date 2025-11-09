import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FooterLinkProps = {
  color: string;
  title: string;
  href: string;
  icon: IconProp;
};

export const FooterLink = ({ color, title, icon, href }: FooterLinkProps) => {
  return (
    <li className="mr-2 last:mr-0">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className={`hover:font-semibold ${color}`}
      >
        {title}{' '}
        <FontAwesomeIcon icon={icon} aria-hidden="true" focusable={false} />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </li>
  );
};
