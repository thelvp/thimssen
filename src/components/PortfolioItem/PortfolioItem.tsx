import { PortfolioImage } from './PortfolioImage';
import { PortfolioContent } from './PortfolioContent';

export type MediaType = 'Instagram' | 'Youtube' | 'Spotify' | 'Other';

export interface PortfolioItemProps {
  artistName: string;
  title: string;
  year: string;
  categoryItems?: string[];
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
  const primaryLink = links[0];
  const ariaLabel = `Open ${title} by ${artistName} on ${primaryLink.mediaType} (opens in a new tab)`;

  return (
    <a
      tabIndex={0}
      className="interactive hover:scale-99 focus-ring m-4 flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white text-left text-black/90 sm:m-2 md:m-0"
      href={primaryLink.url}
      aria-label={ariaLabel}
      target={primaryLink ? '_blank' : undefined}
      rel={primaryLink ? 'noopener noreferrer' : undefined}
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
    </a>
  );
};
