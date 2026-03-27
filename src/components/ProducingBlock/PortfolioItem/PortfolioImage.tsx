import type { PortfolioItemProps } from './PortfolioItem';

type PortfolioImageProps = Pick<PortfolioItemProps, 'imageSrc'>;

export const PortfolioImage = ({ imageSrc }: PortfolioImageProps) => {
  return (
    <div className="relative w-full overflow-hidden pb-[100%]">
      <img
        src={imageSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
