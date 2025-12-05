import { useMemo } from 'react';
import { PortfolioItemOverlay } from './PortfolioItemOverlay';
import { PortfolioImage } from './PortfolioImage';
import { PortfolioContent } from './PortfolioContent';

export type MediaType = 'Instagram' | 'Youtube' | 'Spotify' | 'Other';

export interface PortfolioItemProps {
  artistName: string;
  title: string;
  year: string;
  categoryItems: string[];
  links: { url: string; mediaType: MediaType }[];
  imageSrc: string;
}

type Props = PortfolioItemProps & {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

export const PortfolioItem = ({
  artistName,
  title,
  year,
  categoryItems,
  links = [],
  imageSrc,
  isOpen = false,
  onOpen,
  onClose,
}: Props) => {
  const modalOpen = isOpen;
  const idBase = `${artistName}-${title}`.replace(/\s+/g, '-').toLowerCase();

  const toggleClick = () => {
    if (modalOpen) {
      onClose?.();
    } else {
      onOpen?.();
    }
  };

  const closeOverlay = () => {
    onClose?.();
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={modalOpen}
      aria-controls={`${idBase}-overlay`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleClick();
        }
      }}
      onClick={toggleClick}
      onMouseEnter={() => onOpen?.()}
      onMouseLeave={() => onClose?.()}
      className="relative m-3 transform cursor-pointer overflow-hidden rounded-2xl bg-white text-left text-black/90"
    >
      {/* Image */}
      <PortfolioImage imageSrc={imageSrc} />

      {/* Content */}
      <PortfolioContent
        artistName={artistName}
        title={title}
        year={year}
        categoryItems={categoryItems}
      />

      {/* Overlay controlled by parent */}
      {modalOpen && (
        <PortfolioItemOverlay
          links={links}
          closeOverlay={closeOverlay}
          modalOpen={modalOpen}
        />
      )}
    </div>
  );
};
