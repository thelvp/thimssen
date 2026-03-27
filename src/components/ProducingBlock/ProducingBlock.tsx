import { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../../data/PORTFOLIO_ITEMS';
import {
  PortfolioItem,
  type PortfolioItemProps,
} from './PortfolioItem/PortfolioItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const chunkArray = (array: PortfolioItemProps[], size: number) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
};

export const ProducingBlock = () => {
  const ITEMS_PER_BATCH = 8;
  const portfolioGroups = useMemo(
    () => chunkArray(PORTFOLIO_ITEMS, ITEMS_PER_BATCH),
    []
  );

  const maxGroups = portfolioGroups.length;
  const [visibleGroups, setVisibleGroups] = useState(1);

  const renderItem = (item: PortfolioItemProps) => (
    <PortfolioItem
      key={`${item.artistName}-${item.title}`}
      artistName={item.artistName}
      title={item.title}
      year={item.year}
      categoryItems={item.categoryItems}
      imageSrc={item.imageSrc}
      links={item.links}
    />
  );

  const loadMore = () => setVisibleGroups((v) => Math.min(v + 1, maxGroups));

  const visibleGroupsArray = portfolioGroups.slice(0, visibleGroups);

  return (
    <div className="w-full">
      {/* Desktop: stacked groups, each group is an 8-item grid (2 rows × 4 cols on wide screens) */}
      <div className="hidden md:block">
        {visibleGroupsArray.map((group, i) => (
          <ul
            key={i}
            className="mb-4 grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-4"
          >
            {group.map(renderItem)}
          </ul>
        ))}
      </div>

      {/* Mobile: horizontal swipe of visible items */}
      <div className="flex snap-x snap-mandatory overflow-x-auto md:hidden">
        {PORTFOLIO_ITEMS.map((item) => (
          <div
            key={`${item.artistName}-${item.title}`}
            className="grid-row-1 grid min-w-[90%] snap-center"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>

      {visibleGroups < maxGroups && (
        <div className="mt-6 hidden justify-center text-2xl md:flex">
          <button
            onClick={loadMore}
            aria-label="load more"
            className="interactive focus-ring rounded bg-black px-6 py-3 text-white opacity-75 hover:scale-105 hover:opacity-100"
          >
            <FontAwesomeIcon icon={faAnglesDown} />
          </button>
        </div>
      )}
    </div>
  );
};
