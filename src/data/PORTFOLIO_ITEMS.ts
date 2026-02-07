import type { PortfolioItemProps } from '../components/PortfolioItem/PortfolioItem';

import boyleLighter from '../assets/boyle_lighter.jpg';
import dust from '../assets/dust02.png';
import hunger from '../assets/hunger02.png';
import lighthouse from '../assets/lighthouse02.png';
import dellaDixLivesessie from '../assets/delladix_livesessie.jpg';
import wijamersoortMarketingVideo from '../assets/wijamersfoort_marketingvideo.jpg';
import wijamersfoortWijkgedichten from '../assets/wijamersfoort_wijkgedichten.png';
import tanjaTerBrake_Ruimtevaarder from '../assets/tanjaterbrake_ruimtevaarder.jpg';

export const PORTFOLIO_ITEMS: PortfolioItemProps[] = [
  {
    artistName: 'Tanja ter Brake',
    title: 'Soundscape theaterstuk \'Ruimtevaarder\'',
    year: '2026',
    categoryItems: ['production'],
    links: [
      {
        url: 'https://www.tanjaterbrake.nl/cabaretier-1',
        mediaType: 'website'
      }
    ],
    imageSrc: tanjaTerBrake_Ruimtevaarder
  },
  {
    artistName: 'Citymarketing Amersfoort',
    title: 'Promo "Wij Amersfoort"',
    year: '2025',
    categoryItems: ['voice-over recording'],
    links: [
      {
        url: 'https://www.instagram.com/p/DReznH-laAE/',
        mediaType: 'Instagram',
      },
    ],
    imageSrc: wijamersoortMarketingVideo,
  },
  {
    artistName: 'Citymarketing Amersfoort',
    title: 'Wijkgedichten',
    year: '2025',
    categoryItems: ['voice-over recording'],
    links: [
      {
        url: 'https://www.instagram.com/p/DPODT55iI_L/',
        mediaType: 'Instagram',
      },
    ],
    imageSrc: wijamersfoortWijkgedichten,
  },
  {
    artistName: 'Della Dix',
    title: 'Livesessie "De Wereld"',
    year: '2025',
    categoryItems: ['recording'],
    links: [
      {
        url: 'https://www.instagram.com/reel/DFuq6ZDiKGF/',
        mediaType: 'Instagram',
      },
    ],
    imageSrc: dellaDixLivesessie,
  },
  {
    artistName: 'Echo Beach',
    title: 'Hunger',
    year: '2023',
    categoryItems: ['production'],
    links: [
      {
        url: 'https://open.spotify.com/track/3ElsAYN8H5qZRZoqv03XWF?si=3a0daa0764ad40f1',
        mediaType: 'Spotify',
      },
    ],
    imageSrc: lighthouse,
  },
  {
    artistName: 'Echo Beach',
    title: 'The Lighthouse',
    year: '2023',
    categoryItems: ['production'],
    links: [
      {
        url: 'https://open.spotify.com/track/5In11rjF2ODWyENoZSIF0o?si=d219e896b8554191',
        mediaType: 'Spotify',
      },
    ],
    imageSrc: hunger,
  },
  {
    artistName: 'Boyle',
    title: 'Lighter',
    year: '2023',
    categoryItems: ['recording', 'mixing'],
    links: [
      {
        url: 'https://open.spotify.com/track/1T7eXnSAiRlvhQujzZGZK3?si=9355849cb3f5471c',
        mediaType: 'Spotify',
      },
    ],
    imageSrc: boyleLighter,
  },
  {
    artistName: 'Echo Beach',
    title: 'Dust',
    year: '2022',
    categoryItems: ['production'],
    links: [
      {
        url: 'https://open.spotify.com/track/3MDbgsID3K5g9KP99UhOEv?si=02b63262b6134fe9',
        mediaType: 'Spotify',
      },
    ],
    imageSrc: dust,
  },
];
