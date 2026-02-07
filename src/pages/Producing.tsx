import { PORTFOLIO_ITEMS } from '../data/PORTFOLIO_ITEMS';
import { PortfolioItem } from '../components/PortfolioItem/PortfolioItem';

export function Producing() {
  return (
    <div className="w-full md:w-[90%]">
      <div className="grid w-full grid-cols-1 place-items-stretch sm:grid-cols-3 sm:gap-4 md:grid-cols-3 md:gap-6">
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
    </div>
  );
}
