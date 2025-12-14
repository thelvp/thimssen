import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICON_MAP } from '../../utils/ICON_MAP';
import type { PortfolioItemProps } from './PortfolioItem';

type PortfolioContentProps = Pick<
  PortfolioItemProps,
  'title' | 'artistName' | 'year' | 'categoryItems' | 'links'
>;

export const PortfolioContent = ({
  title,
  artistName,
  year,
  categoryItems,
  links,
}: PortfolioContentProps) => {
  return (
    <>
      {/* Artist & title  */}
      <div className="flex justify-between p-3 font-extrabold">
        <div className="flex flex-col justify-center">
          <h3 className="text-xl">{artistName}</h3>
          <h3 className="text-3xl">{title}</h3>
        </div>
      </div>

      {/* Year & category items */}
      <div className="flex justify-between border-t-2 border-black/20 p-2">
        <div className="flex items-center">
          <p className="mr-3 text-base font-bold">{year}</p>
          <ul className="flex-10 flex flex-wrap">
            {categoryItems.map((item) => (
              <li key={item} className="m-0.5">
                <span className="rounded-2xl bg-amber-400/70 px-2 py-1 font-mono text-sm text-black">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Social media icons  */}
        <ul className="ml-0.5 flex flex-wrap">
          {links.map((link) => {
            const { icon, classes } =
              ICON_MAP[link.mediaType] || ICON_MAP.Other;

            return (
              <li
                key={link.url}
                className={`text-3xl ${classes} transform cursor-pointer ease-in hover:scale-105`}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={icon} aria-hidden="true" />
                  <span className="sr-only">Open on {link.mediaType}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
