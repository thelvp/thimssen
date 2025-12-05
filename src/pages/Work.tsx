import { PORTFOLIO_ITEMS } from '../data/PORTFOLIO_ITEMS';
import { PortfolioItem } from '../components/PortfolioItem/PortfolioItem';

export function Work() {
  return (
    <div className="w-full md:w-[90%]">
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-2">
        {PORTFOLIO_ITEMS.map((item) => {
          return (
            <PortfolioItem
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
