import type { PortfolioItemProps } from '../components/PortfolioItem/PortfolioItem';

import dust from '../assets/dust02.png';
import hunger from '../assets/hunger02.png';
import lighthouse from '../assets/lighthouse02.png';
import palmerDoubt from '../assets/palmer_doubt.jpg';
import thimssenDaydreaming from '../assets/thimssen_daydreaming.png';

export const MUSIC_ITEMS: PortfolioItemProps[] = [
  {
    artistName: 'Thimssen',
    title: 'Daydreaming',
    year: '2026',
    links: [
      {
        url: 'https://open.spotify.com/track/20PZ1ExYOZEPUKVn4SXmhj',
        mediaType: 'Spotify',
      },
    ],
    imageSrc: thimssenDaydreaming,
  },
  {
    artistName: 'Echo Beach',
    title: 'Hunger',
    year: '2023',
    links: [
      {
        url: 'https://open.spotify.com/track/3ElsAYN8H5qZRZoqv03XWF?si=3a0daa0764ad40f1',
        mediaType: 'Spotify',
      },
    ],
    imageSrc: hunger,
  },
  {
    artistName: 'Echo Beach',
    title: 'The Lighthouse',
    year: '2023',
    links: [
      {
        url: 'https://open.spotify.com/track/5In11rjF2ODWyENoZSIF0o?si=d219e896b8554191',
        mediaType: 'Spotify',
      },
    ],
    imageSrc: lighthouse,
  },
  {
    artistName: 'Echo Beach',
    title: 'Dust',
    year: '2022',
    links: [
      {
        url: 'https://open.spotify.com/track/3MDbgsID3K5g9KP99UhOEv?si=02b63262b6134fe9',
        mediaType: 'Spotify',
      },
    ],
    imageSrc: dust,
  },
  {
    artistName: 'PALMER',
    title: 'Doubt',
    year: '2016',
    links: [
      {
        url: 'https://www.youtube.com/watch?v=qalzuCevF2w',
        mediaType: 'Youtube',
      },
    ],
    imageSrc: palmerDoubt,
  },
];
