import { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../../data/PORTFOLIO_ITEMS';
import {
  PortfolioItem,
  type PortfolioItemProps,
} from './PortfolioItem/PortfolioItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const chunkArray = (array: PortfolioItemProps[], size: number) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
};

export const ProducingBlock = () => {
  const ITEMS_PER_CLICK = 4;
  const portfolioItemsArray = useMemo(
    () => chunkArray(PORTFOLIO_ITEMS, ITEMS_PER_CLICK),
    []
  );
  const maxItems = portfolioItemsArray.length - 1;
  const [page, setPage] = useState(0);

  const renderItem = (item: PortfolioItemProps) => {
    return (
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
  };

  const scrollNext = () => {
    setPage((p) => Math.min(p + 1, maxItems));
  };

  const scrollBack = () => {
    setPage((p) => Math.max(p - 1, 0));
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between"></div>

      {/* Desktop */}
      <div className="hidden items-center gap-4 md:flex">
        {/* LEFT BUTTON */}
        <button
          onClick={scrollBack}
          disabled={page === 0}
          className="text-white disabled:opacity-50"
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>

        {/* CAROUSEL */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${page * 100}%)`,
            }}
          >
            {portfolioItemsArray.map((group, i) => (
              <ul key={i} className="grid min-w-full grid-cols-4 gap-4">
                {group.map(renderItem)}
              </ul>
            ))}
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollNext}
          disabled={page === maxItems}
          className="text-white disabled:opacity-50"
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      </div>

      {/* Mobile (Swipe) */}
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto md:hidden">
        {PORTFOLIO_ITEMS.map((item) => (
          <div
            key={`${item.artistName}-${item.title}`}
            className="min-w-[80%] snap-center"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};
