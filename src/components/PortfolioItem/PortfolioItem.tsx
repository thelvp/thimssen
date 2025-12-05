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
      className="hover:scale-99 m-3 transform cursor-pointer overflow-hidden rounded-2xl bg-white text-left text-black/90 transition-transform duration-200 ease-out"
    >
      <div>
        <img
          src={imageSrc}
          className="block h-full w-full object-cover"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center p-3 font-extrabold">
        <h3 className="text-xl">{artistName}</h3>
        <h3 className="text-3xl"> {title}</h3>
      </div>

      <div className="flex items-center justify-between border-t-2 border-black/20 p-3">
        <p className="mr-8 text-base font-bold">{year}</p>
        <ul className="flex flex-wrap">
          {categoryItems.map((item) => {
            return (
              <li key={item} className="flex justify-evenly">
                <p className="m-0.5 rounded-2xl bg-amber-400/75 px-2 py-1 font-mono text-sm text-black">
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
