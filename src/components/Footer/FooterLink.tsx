import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FooterLinkProps = {
  title: string;
  href: string;
  icon: IconProp;
};

export const FooterLink = ({ title, icon, href }: FooterLinkProps) => {
  return (
    <li className="mr-2 last:mr-0 sm:mr-4">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="interactive focus-ring"
      >
        <FontAwesomeIcon icon={icon} aria-hidden="true" focusable={false} />{' '}
        {title} <span className="sr-only">(opens in a new tab)</span>
      </a>
    </li>
  );
};
