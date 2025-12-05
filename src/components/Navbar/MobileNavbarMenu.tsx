import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NAV_ITEMS } from '../../data';
import { Link } from 'react-router';

export const MobileNavbarMenu = () => {
  const [open, setOpen] = useState(false);

  function onHandleClick() {
    setOpen((state) => !state);
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={onHandleClick}
        className={`cursor-pointer ${!open && 'hidden'}}`}
      >
        <FontAwesomeIcon
          icon={faBars}
          className="px-4 text-white sm:text-2xl"
        />
      </button>

      {open && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          aria-hidden={!open}
          className="fixed inset-0 z-50 overflow-auto bg-black/90 p-6"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-4 top-4 cursor-pointer p-2 text-white"
          >
            <FontAwesomeIcon icon={faXmark} className="text-2xl" />
          </button>
          <ul className="flex min-h-[60vh] flex-col items-center justify-center gap-4 pl-6">
            {NAV_ITEMS.map((item) => (
              <li
                className="text-3xl font-bold hover:underline"
                onClick={() => setOpen(false)}
              >
                <Link to={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
