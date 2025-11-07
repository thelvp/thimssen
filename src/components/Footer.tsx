import { faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  const baseFocusA11YClasses =
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-sm';

  return (
    <footer className="z-20 w-full py-4 text-gray-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 sm:grid-cols-3">
        <div className="hidden sm:block" />
        <ul className="flex flex-wrap items-center justify-center text-sm">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/thimssen/"
              className={` ${baseFocusA11YClasses} hover:text-pink-600`}
            >
              Instagram
              <FontAwesomeIcon
                icon={faInstagram}
                className="ml-1 mr-4"
                aria-hidden="true"
                focusable={false}
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/artist/2uhfXqGrbL6MDekftEEDMD?si=RTCS8gXOQHO1zlk8fMht0A"
              className={`${baseFocusA11YClasses} hover:text-green-500`}
            >
              Spotify
              <FontAwesomeIcon
                icon={faSpotify}
                className="ml-1 text-green-500"
                aria-hidden="true"
                focusable={false}
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>

        <p className="justify-self-end text-right text-xs">
          <a
            className={`group hover:underline ${baseFocusA11YClasses}`}
            href="https://github.com/thelvp"
          >
            Designed with{' '}
            <span
              aria-hidden="true"
              className="group-hover:font-extrabold group-hover:text-red-400"
            >
              ♡
            </span>{' '}
            by thelvp
          </a>
        </p>
      </div>
    </footer>
  );
};
