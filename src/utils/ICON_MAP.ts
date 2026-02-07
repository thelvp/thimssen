import {
  faInstagram,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { MediaType } from '../components/PortfolioItem/PortfolioItem';

export const ICON_MAP: Record<
  MediaType,
  { icon: IconDefinition; classes: string }
> = {
  Instagram: {
    icon: faInstagram,
    classes: 'text-pink-600 hover:text-pink-900',
  },
  Spotify: { icon: faSpotify, classes: 'text-green-500 hover:text-green-700' },
  Youtube: { icon: faYoutube, classes: 'text-red-500 hover:text-red-700' },
  Other: { icon: faLink, classes: 'text-blue-500 hover:text-blue-700' },
};
