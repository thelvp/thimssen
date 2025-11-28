import type { PortfolioItemProps } from '../components/PortfolioItem/PortfolioItem';

import echoBeach from './echo_beach.jpeg';
import boyleLighter from './boyle_lighter.jpg'
import dust from './dust02.png'
import hunger from './hunger02.png'
import lighthouse from './lighthouse02.png'
import dellaDixLivesessie from './delladix_livesessie.jpg'
import wijamersoortMarketingVideo from './wijamersfoort_marketingvideo.jpg'
import wijamersfoortWijkgedichten from './wijamersfoort_wijkgedichten.png'

export const PORTFOLIO_ITEMS: PortfolioItemProps[] = [
  {
    artistName: 'Citymarketing Amersfoort',
    title: 'Promo "Wij Amersfoort"',
    year: '2025',
    categoryItems: ['voice-over recording'],
    href: 'https://www.instagram.com/p/DReznH-laAE/',
    imageSrc: wijamersoortMarketingVideo,
  },
  {
    artistName: 'Citymarketing Amersfoort',
    title: 'Wijkgedichten',
    year: '2025',
    categoryItems: ['voice-over recording'],
    href: 'https://www.instagram.com/p/DPODT55iI_L/',
    imageSrc: wijamersfoortWijkgedichten,
  },
  {
    artistName: 'Della Dix',
    title: 'Livesessie "De Wereld"',
    year: '2025',
    categoryItems: ['recording'],
    href: 'https://www.instagram.com/reel/DFuq6ZDiKGF/',
    imageSrc: dellaDixLivesessie,
  },
  {
    artistName: 'Echo Beach',
    title: 'Hunger',
    year: '2023',
    categoryItems: ['songwriting', 'recording', 'production'],
    href: 'https://open.spotify.com/track/3ElsAYN8H5qZRZoqv03XWF?si=3a0daa0764ad40f1',
    imageSrc: lighthouse,
  },
  {
    artistName: 'Echo Beach',
    title: 'The Lighthouse',
    year: '2023',
    categoryItems: ['songwriting', 'recording', 'production'],
    href: 'https://open.spotify.com/track/5In11rjF2ODWyENoZSIF0o?si=d219e896b8554191',
    imageSrc: hunger,
  },
  {
    artistName: 'Echo Beach',
    title: 'Dust',
    year: '2022',
    categoryItems: ['songwriting', 'recording', 'production'],
    href: 'https://open.spotify.com/track/3MDbgsID3K5g9KP99UhOEv?si=02b63262b6134fe9',
    imageSrc: dust,
  },
  {
    artistName: 'Boyle',
    title: 'Lighter',
    year: '2023',
    categoryItems: ['recording', 'mixing'],
    href: 'https://open.spotify.com/track/1T7eXnSAiRlvhQujzZGZK3?si=9355849cb3f5471c',
    imageSrc: boyleLighter,
  },
];
