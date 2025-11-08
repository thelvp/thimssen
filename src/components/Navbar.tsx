import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

export const Navbar = () => {
  const linkStyle = 'hover:underline';

  return (
    <div className="flex w-full items-center justify-between px-8 py-5">
      <Link to={'/'} className="flex text-3xl font-bold">
        <FontAwesomeIcon icon={faCompactDisc} className="pr-2 text-blue-600" />
        <h1 className="bg-[linear-gradient(to_right,var(--color-blue-600),var(--color-purple-500),var(--color-pink-400),var(--color-orange-300))] bg-clip-text text-transparent">
          Thimssen
        </h1>
      </Link>
      <ul className="gap-13 mt-3 flex flex-wrap items-center pr-12 text-xl font-bold sm:mt-0">
        <li>
          <Link to="/" className={`${linkStyle} hover:text-blue-500`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={`${linkStyle} hover:text-purple-500`}>
            About
          </Link>
        </li>
        <li>
          <Link to="/work" className={`${linkStyle} hover:text-pink-500`}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`${linkStyle} hover:text-orange-500`}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
