import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

export const Footer = () => {
  const baseLinkClasses = 'me-4 md:me-6';

  return (
    <>
      <footer className="left-0 z-20 flex w-full justify-between py-8 text-gray-300">
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
            <Link
              to="/work"
              className={`${baseLinkClasses} hover:text-pink-500`}
            >
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
              className={`${baseLinkClasses} hover:font-extrabold hover:text-yellow-500`}
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
        <p className="text-xs">
          Designed with ♡ by{' '}
          <a className="hover:underline" href="https://github.com/thelvp">
            thelvp
          </a>
        </p>
      </footer>
    </>
  );
};
