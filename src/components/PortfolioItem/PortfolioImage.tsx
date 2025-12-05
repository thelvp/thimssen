import type { PortfolioItemProps } from './PortfolioItem';

type PortfolioImageProps = Pick<PortfolioItemProps, 'imageSrc'>;

export const PortfolioImage = ({ imageSrc }: PortfolioImageProps) => {
  return (
    <div className="relative">
      <img
        src={imageSrc}
        alt=""
        className="block h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
