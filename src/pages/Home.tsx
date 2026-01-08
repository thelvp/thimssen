import { Link } from 'react-router';
import band from '../assets/echo_beach.jpeg';

export function Home() {
  return (
    <div className="relative flex h-full w-full items-center justify-center pb-3 text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${band})`,
        }}
        aria-hidden="true"
      />
      <div className="bg-linear-to-b absolute inset-0 from-transparent to-black/90"></div>

      <div className="max-w-1/2 l z-10">
        <h1 className="text-3xl font-extrabold sm:text-6xl">
          Thimssen - producer & muzikant
        </h1>

        <p className="mt-3 text-lg sm:text-xl">
          recording / mixing / music production
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
