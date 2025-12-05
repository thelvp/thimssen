import {
  faInstagram,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import type { MediaType } from '../components/PortfolioItem/PortfolioItem';

export const ICON_MAP: Record<MediaType, any> = {
  Instagram: faInstagram,
  Spotify: faSpotify,
  Youtube: faYoutube,
  Other: faLink,
};
