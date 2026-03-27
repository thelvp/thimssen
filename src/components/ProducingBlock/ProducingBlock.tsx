import { PORTFOLIO_ITEMS } from '../../data/PORTFOLIO_ITEMS';
import { PortfolioItem } from './PortfolioItem/PortfolioItem';

export const ProducingBlock = () => {
  return (
    <div className="grid w-full grid-cols-4 gap-4">
      {PORTFOLIO_ITEMS.map((item) => {
        const idBase = `${item.artistName}-${item.title}`
          .replace(/\s+/g, '-')
          .toLowerCase();

        return (
          <PortfolioItem
            key={idBase}
            artistName={item.artistName}
            title={item.title}
            year={item.year}
            categoryItems={item.categoryItems}
            imageSrc={item.imageSrc}
            links={item.links}
          />
        );
      })}
    </div>
  );
};
