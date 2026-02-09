import { PortfolioItem } from '../components/PortfolioItem/PortfolioItem';
import { MUSIC_ITEMS } from '../data/MUSIC_ITEMS';

export function Music() {
  return (
    <div className="w-full sm:mt-3 md:w-[90%]">
      <div className="grid w-full grid-cols-1 place-items-stretch sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {MUSIC_ITEMS.map((item) => {
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
