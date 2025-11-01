import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  const baseLinkClasses = 'me-4 md:me-6 font-bold';

  return (
    <footer className="fixed bottom-0 left-0 z-20 flex w-full justify-between p-8 text-gray-300">
      <ul className="mt-3 flex flex-wrap items-center text-sm sm:mt-0">
        <li>
          <a href="/" className={`${baseLinkClasses} hover:text-blue-500`}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={`${baseLinkClasses} hover:text-purple-500`}>
            About
          </a>
        </li>
        <li>
          <a href="#" className={`${baseLinkClasses} hover:text-pink-500`}>
            Work
          </a>
        </li>
        <li>
          <a href="#" className={`${baseLinkClasses} hover:text-orange-500`}>
            Contact
          </a>
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
  );
};
