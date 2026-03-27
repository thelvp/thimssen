import React from 'react';

type ScrollLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

export const ScrollLink: React.FC<ScrollLinkProps> = ({
  to,
  onClick,
  ...rest
}) => {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const id = to.replace(/^#/, '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    if (onClick) onClick(e as any);
  }

  return <a href={to} onClick={handleClick} {...rest} />;
};

export default ScrollLink;
