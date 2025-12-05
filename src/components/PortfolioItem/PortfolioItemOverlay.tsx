import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { MediaType } from './PortfolioItem';
import { ICON_COLOR_MAP, ICON_MAP } from '../../utils';

interface PortfolioItemOverlayProps {
  links: { url: string; mediaType: MediaType }[];
  closeOverlay: () => void;
  modalOpen: boolean;
}

export const PortfolioItemOverlay = ({
  links,
  closeOverlay,
  modalOpen,
}: PortfolioItemOverlayProps) => {
  return (
    <div
      role="dialog"
      aria-hidden={!modalOpen}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeOverlay();
      }}
    >
      <p className="mb-6 text-center text-3xl text-white">Luisteren:</p>
      <ul className="flex gap-6">
        {links.map((link) => {
          const Icon = ICON_MAP[link.mediaType] || faLink;
          const colorClass =
            ICON_COLOR_MAP[link.mediaType] || ICON_COLOR_MAP.Other;

          return (
            <li
              key={link.url}
              className={`text-6xl text-white hover:${colorClass}`}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  closeOverlay();
                }}
                className="inline-flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={Icon}
                  aria-hidden="true"
                  focusable={false}
                />
                <span className="sr-only">Open on {link.mediaType}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
