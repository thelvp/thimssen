import { Link } from 'react-router';
import banner from '../assets/banner.jpeg';

export function Home() {
  return (
    <div className="relative flex min-h-[75vh] w-full items-center justify-center text-center text-white">
      {/* decorative background image — hidden from AT */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
        aria-hidden="true"
      />
      <div className="bg-linear-to-b absolute inset-0 from-transparent to-black/90"></div>

      <div className="max-w-1/2 l z-10">
        <h1 className="text-6xl font-extrabold">
          Thimssen - music producer & muzikant
        </h1>

        <p className="mt-3 text-xl">
          Van gelaagde producties tot live shows met{' '}
          <a
            className="font-semibold underline-offset-4 hover:underline"
            href="https://open.spotify.com/artist/2uhfXqGrbL6MDekftEEDMD?si=POmMI-6FS5CiPgkctsKoWw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Echo Beach
          </a>
          .
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold shadow-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-xl"
        >
          Let's make some music
        </Link>
      </div>
    </div>
  );
}
