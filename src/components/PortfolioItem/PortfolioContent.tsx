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
    <div className="flex flex-1 flex-col justify-between">
      {/* -- First row -- */}

      {/* Artist & title  */}
      <div className="p-3 font-extrabold">
        <div className="min-h-15">
          <h3 className="text-xl">{artistName}</h3>
          <h3 className="text-3xl leading-tight">{title}</h3>
        </div>
      </div>

      {/* -- Second row -- */}
      <div className="flex justify-between border-t-2 border-black/20 p-2">
        <div className="flex items-center">
          {/* year  */}
          <p className="mr-3 text-base font-bold">{year}</p>
          {/* category */}
          {categoryItems && (
            <ul className="flex-10 flex flex-wrap">
              {categoryItems.map((item) => (
                <li key={item} className="m-0.5">
                  <span className="rounded-2xl bg-amber-400/70 px-2 py-1 font-mono text-[11px] text-black">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Social media icons  */}
        <ul className="ml-0.5 flex flex-wrap">
          {links.map((link) => {
            const { icon, classes } =
              ICON_MAP[link.mediaType] || ICON_MAP.Other;

            return (
              <li
                key={link.url}
                className={`text-3xl ${classes} cursor-pointer font-extralight`}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={icon}
                    aria-hidden="true"
                    className=""
                  />
                  <span className="sr-only">Open on {link.mediaType}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
