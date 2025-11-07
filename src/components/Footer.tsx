import { faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

export const Footer = () => {
  const baseLinkClasses = 'me-4 md:me-6';
  const baseFocusA11YClasses =
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-sm';

  return (
    <footer className="z-20 flex w-full justify-between px-8 py-4 text-gray-300">
      <ul className="mt-3 flex flex-wrap items-center text-sm sm:mt-0">
        <li>
          <Link to="/" className={`${baseLinkClasses} hover:text-blue-500`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${baseLinkClasses} hover:text-purple-500`}
          >
            About
          </Link>
        </li>
        <li>
          <Link to="/work" className={`${baseLinkClasses} hover:text-pink-500`}>
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${baseLinkClasses} hover:text-orange-500`}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/thimssen/"
            className={`${baseLinkClasses} ${baseFocusA11YClasses} hover:text-yellow-500`}
          >
            Instagram
            <FontAwesomeIcon
              icon={faInstagram}
              className="ml-1"
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
            className={`${baseLinkClasses} ${baseFocusA11YClasses} hover:text-green-500`}
          >
            Spotify
            <FontAwesomeIcon
              icon={faSpotify}
              className="ml-1"
              aria-hidden="true"
              focusable={false}
            />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
      <p className="text-xs">
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
    </footer>
  );
};
