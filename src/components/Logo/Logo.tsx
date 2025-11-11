import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsMobile } from '../../hooks/useIsMobile';

export const Logo = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex text-xl font-bold sm:text-3xl">
      <FontAwesomeIcon icon={faCompactDisc} className="pr-2 text-blue-600" />
      {!isMobile && (
        <h1 className="bg-[linear-gradient(to_right,var(--color-blue-600),var(--color-purple-500),var(--color-pink-400),var(--color-orange-300))] bg-clip-text text-transparent">
          Thimssen
        </h1>
      )}
    </div>
  );
};
