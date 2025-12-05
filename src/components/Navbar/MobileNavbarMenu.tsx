import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MobileNavbarMenu = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faBars} className="px-4 text-white sm:text-xl" />
    </div>
  );
};
