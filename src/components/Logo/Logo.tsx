import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logo = () => {
  return (
    <div className="flex items-center text-xl font-bold sm:text-3xl">
      <FontAwesomeIcon icon={faCompactDisc} className="pr-2 text-blue-600" />
      <h1 className="bg-[linear-gradient(to_right,var(--color-blue-600),var(--color-purple-500),var(--color-pink-400),var(--color-orange-300))] bg-clip-text text-transparent">
        Tim Thomassen
      </h1>
    </div>
  );
};
