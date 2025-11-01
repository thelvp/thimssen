import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 flex w-full justify-between p-6 text-gray-400">
      <ul className="text-md mt-3 flex flex-wrap items-center font-bold sm:mt-0">
        <li>
          <a href="#" className="me-4 hover:text-blue-500 md:me-6">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="me-4 hover:text-purple-500 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="me-4 hover:text-pink-500 md:me-6">
            Work
          </a>
        </li>
        <li>
          <a href="#" className="me-4 hover:text-orange-500 md:me-6">
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/thimssen/"
            className="hover:font-extrabold hover:text-yellow-500 md:me-6"
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
