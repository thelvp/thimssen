import type { PortfolioItemProps } from './PortfolioItem';

type PortfolioContentProps = Pick<
  PortfolioItemProps,
  'title' | 'artistName' | 'year' | 'categoryItems'
>;

export const PortfolioContent = ({
  title,
  artistName,
  year,
  categoryItems,
}: PortfolioContentProps) => {
  return (
    <div className="flex flex-1 flex-col justify-between">
      {/* -- First row -- */}

      {/* Artist & title  */}
      <div className="min-h-15 p-3 leading-tight">
        <h3 className="text-lg font-bold">{artistName}</h3>
        <h3 className="text-2xl font-extrabold">{title}</h3>
      </div>

      {/* -- Second row -- */}
      <div className="flex items-center justify-between border-t-2 border-black/10 p-2">
        {/* year  */}
        <p className="mr-3 text-base font-bold">{year}</p>
        {/* category */}
        {categoryItems && (
          <ul className="flex-10 flex flex-wrap justify-end">
            {categoryItems.map((item) => (
              <li
                key={item}
                className="m-0.5 rounded-xl bg-black/10 px-2 py-1 font-mono text-[13px] leading-tight text-black"
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
