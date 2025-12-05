type MediaType = 'Instagram' | 'Youtube' | 'Spotify' | 'Other';

export interface PortfolioItemProps {
  artistName: string;
  title: string;
  year: string;
  categoryItems: string[];
  links: { url: string; mediaType: MediaType }[];
  imageSrc: string;
}

export const PortfolioItem = ({
  artistName,
  title,
  year,
  categoryItems,
  // TODO:
  links,
  imageSrc,
}: PortfolioItemProps) => {
  return (
    <div
      // href={href}
      // target="_blank"
      // rel="noopener noreferrer"
      className="m-3 transform cursor-pointer rounded-2xl bg-white text-left text-black/90 transition-transform duration-200 ease-out hover:scale-95"
    >
      <div>
        <img src={imageSrc} className="h-full w-full object-cover" alt="" />
      </div>

      <div className="flex flex-col justify-center border-b-4 border-b-black p-3 font-extrabold">
        <h3 className="text-xl">{artistName}</h3>
        <h3 className="text-3xl"> {title}</h3>
      </div>

      <div className="flex items-center justify-between p-3">
        <p className="mr-8 text-base">{year}</p>
        <ul className="flex flex-wrap">
          {categoryItems.map((item) => {
            return (
              <li key={item} className="m-1">
                <p className="rounded-2xl bg-amber-400 px-2 py-1 font-mono text-[10px] sm:px-3 sm:py-2 sm:text-xs">
                  {item}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
