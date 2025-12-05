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
        onClick={onHandleClick}
        className="cursor-pointer"
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <FontAwesomeIcon
          icon={open ? faXmark : faBars}
          className="px-4 text-white sm:text-2xl"
        />
      </button>

      {open && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 overflow-auto bg-black/95 p-6"
          onClick={() => setOpen(false)}
        >
          <ul className="flex min-h-[60vh] flex-col items-start justify-center gap-4 pl-6">
            {NAV_ITEMS.map((item) => (
              <li className="text-3xl font-bold">
                <Link to={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
