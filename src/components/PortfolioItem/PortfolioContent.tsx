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
    <>
      <div className="flex flex-col justify-center p-3 font-extrabold">
        <h3 className="text-xl">{artistName}</h3>
        <h3 className="text-3xl">{title}</h3>
      </div>

      <div className="flex items-center justify-between border-t-2 border-black/20 p-3">
        <p className="mr-8 text-base font-bold">{year}</p>
        <ul className="flex flex-wrap">
          {categoryItems.map((item) => (
            <li key={item} className="flex justify-evenly">
              <span className="m-0.5 rounded-2xl bg-amber-400/75 px-2 py-1 font-mono text-sm text-black">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
