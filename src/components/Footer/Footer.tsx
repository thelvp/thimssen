import { faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FooterLink } from './FooterLink';
import { FooterCreds } from './FooterCreds';

export const Footer = () => {
  return (
    <footer className="z-20 w-full bg-black p-4 text-gray-400">
      <div className="mx-auto grid max-w-full grid-cols-1 items-center gap-4 sm:grid-cols-3">
        <div className="hidden sm:block" />

        <ul className="flex flex-wrap items-center justify-center text-sm">
          <FooterLink
            color="hover:text-blue-500"
            title="Instagram"
            href="https://www.instagram.com/thimssen/"
            icon={faInstagram}
          />
          <FooterLink
            color="hover:text-green-500"
            title="Spotify"
            href="https://open.spotify.com/artist/2uhfXqGrbL6MDekftEEDMD?si=RTCS8gXOQHO1zlk8fMht0A"
            icon={faSpotify}
          />
        </ul>

        <div className="text-wrap text-center sm:text-right">
          <FooterCreds />
        </div>
      </div>
    </footer>
  );
};
