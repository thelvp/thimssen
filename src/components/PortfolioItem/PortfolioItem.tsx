import {
  faInstagram,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type MediaType = 'Instagram' | 'Youtube' | 'Spotify' | 'Other';

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
  links,
  imageSrc,
}: PortfolioItemProps) => {
  const [clickedOpen, setClickedOpen] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);
  const modalOpen = clickedOpen || hoverOpen;

  const onHandleClick = () => {
    setClickedOpen((state) => !state);
  };

  const getIcon = (mediaType: MediaType) => {
    switch (mediaType) {
      case 'Instagram':
        return <FontAwesomeIcon icon={faInstagram} />;
      case 'Spotify':
        return <FontAwesomeIcon icon={faSpotify} />;
      case 'Youtube':
        return <FontAwesomeIcon icon={faYoutube} />;
      case 'Other':
        return <FontAwesomeIcon icon={faLink} />;
      default:
        return <FontAwesomeIcon icon={faLink} />;
    }
  };

  const getIconColor = (mediaType: MediaType) => {
    switch (mediaType) {
      case 'Instagram':
        return 'pink-700';
      case 'Spotify':
        return 'green-500';
      case 'Youtube':
        return 'red-500';
      case 'Other':
        return 'blue-500';
      default:
        return 'blue-500';
    }
  };

  return (
    <article
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onHandleClick();
        }
      }}
      onClick={onHandleClick}
      onMouseEnter={() => setHoverOpen(true)}
      onMouseLeave={() => setHoverOpen(false)}
      aria-expanded={modalOpen}
      className="relative m-3 transform cursor-pointer overflow-hidden rounded-2xl bg-white text-left text-black/90 transition-transform duration-200 ease-out"
    >
      <div>
        <img
          src={imageSrc}
          className="block h-full w-full object-cover"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center p-3 font-extrabold">
        <h3 className="text-xl">{artistName}</h3>
        <h3 className="text-3xl"> {title}</h3>
      </div>

      <div className="flex items-center justify-between border-t-2 border-black/20 p-3">
        <p className="mr-8 text-base font-bold">{year}</p>
        <ul className="flex flex-wrap">
          {categoryItems.map((item) => {
            return (
              <li key={item} className="flex justify-evenly">
                <p className="m-0.5 rounded-2xl bg-amber-400/75 px-2 py-1 font-mono text-sm text-black">
                  {item}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {modalOpen && (
        <div
          role="dialog"
          aria-hidden={!modalOpen}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center overflow-auto bg-black/80 p-6"
          onClick={(e) => {
            e.stopPropagation();
            if (e.target === e.currentTarget) {
              setClickedOpen(false);
              setHoverOpen(false);
            }
          }}
        >
          <p className="mb-6 text-center text-2xl text-white">
            Check het hier:
          </p>
          <ul className="not-last:mr-1 flex">
            {links.map((link) => (
              <li key={link.url} className="mb-4 text-6xl">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setClickedOpen(false);
                    setHoverOpen(false);
                  }}
                  className="inline-flex items-center gap-3"
                >
                  <span
                    aria-hidden="true"
                    className={`text-white hover:text-${getIconColor(link.mediaType)} `}
                  >
                    {getIcon(link.mediaType)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};
