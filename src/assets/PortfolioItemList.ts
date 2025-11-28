import type { PortfolioItemProps } from '../components/PortfolioItem/PortfolioItem';

import echoBeach from './echo_beach.jpeg';

export const PORTFOLIO_ITEMS: PortfolioItemProps[] = [
  {
    artistName: 'Echo Beach',
    title: 'Sunset Sessions',
    year: '2024',
    categoryItems: ['recording', 'production', 'mixing'],
    href: 'https://open.spotify.com/album/example1',
    imageSrc: echoBeach,
  },
  {
    artistName: 'Thimssen',
    title: ' analog dreams',
    year: '2023',
    categoryItems: ['songwriting', 'production', 'synths'],
    href: 'https://soundcloud.com/example2',
    imageSrc: echoBeach,
  },
  {
    artistName: 'Luna Vale',
    title: 'Night Drive EP',
    year: '2022',
    categoryItems: ['production', 'mixing', 'mastering'],
    href: 'https://example.com/night-drive',
    imageSrc: echoBeach,
  },
  {
    artistName: 'The Mariners',
    title: 'Harbour Tales',
    year: '2021',
    categoryItems: ['recording', 'drums', 'guitar'],
    href: 'https://example.com/harbour-tales',
    imageSrc: echoBeach,
  },
  {
    artistName: 'Sofia Green',
    title: 'Voice & Strings',
    year: '2020',
    categoryItems: ['vocals', 'production', 'mastering'],
    href: 'https://example.com/voice-strings',
    imageSrc: echoBeach,
  },
  {
    artistName: 'Minimal Drift',
    title: 'Tape Loops',
    year: '2019',
    categoryItems: ['recording', 'synths', 'mixing'],
    href: 'https://example.com/tape-loops',
    imageSrc: echoBeach,
  },
  {
    artistName: 'Various Artists',
    title: 'Compilation — Backstage',
    year: '2025',
    categoryItems: ['production', 'mixing', 'mastering'],
    href: 'https://example.com/backstage-comp',
    imageSrc: echoBeach,
  },
  {
    artistName: 'Studio Sessions',
    title: 'Live Room Take',
    year: '2024',
    categoryItems: ['recording', 'production', 'bass'],
    href: 'https://example.com/backstage-comp',
    imageSrc: echoBeach,
  },
];
