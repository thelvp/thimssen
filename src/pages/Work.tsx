import { PORTFOLIO_ITEMS } from '../assets/PortfolioItemList';
import { PortfolioItem } from '../components/PortfolioItem/PortfolioItem';

export function Work() {
  return (
    <div className="w-full md:w-[90%]">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3">
        {PORTFOLIO_ITEMS.map((item) => {
          return (
            <PortfolioItem
              artistName={item.artistName}
              title={item.title}
              year={item.year}
              categoryItems={item.categoryItems}
              imageSrc={item.imageSrc}
              href={item.href}
            />
          );
        })}
      </div>
    </div>
  );
}
