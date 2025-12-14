import { PortfolioImage } from './PortfolioImage';
import { PortfolioContent } from './PortfolioContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICON_MAP } from '../../utils/ICON_MAP';

export type MediaType = 'Instagram' | 'Youtube' | 'Spotify' | 'Other';

export interface PortfolioItemProps {
  artistName: string;
  title: string;
  year: string;
  categoryItems: string[];
  links: { url: string; mediaType: MediaType }[];
  imageSrc: string;
}

export const PortfolioItem = ({
  artistName,
  title,
  year,
  categoryItems,
  links = [],
  imageSrc,
}: PortfolioItemProps) => {
  return (
    <div
      tabIndex={0}
      className="m-3 overflow-hidden rounded-2xl bg-white text-left text-black/90"
    >
      {/* Image */}
      <PortfolioImage imageSrc={imageSrc} />

      {/* Content */}
      <PortfolioContent
        artistName={artistName}
        title={title}
        year={year}
        categoryItems={categoryItems}
        links={links}
      />
    </div>
  );
};
