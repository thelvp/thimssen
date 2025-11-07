import echoBeach from '../assets/echo_beach.jpeg';

export function About() {
  return (
    <div className="w-full py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:items-start md:gap-16">
        <div className="w-full md:w-1/2">
          <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
            <img src={echoBeach} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Thimssen</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Thimssen is een producer en muzikant met een passie voor het creëren
            van sferen en verhalen door geluid. Vanuit zijn studio werkt hij aan
            projecten die variëren van elektronische producties tot live
            performances met zijn band Echo Beach.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Zijn werk kenmerkt zich door een warme, analoge sound gecombineerd
            met moderne productietechnieken. Hij gelooft dat elk nummer een
            eigen wereld kan vormen — een emotionele ruimte waarin luisteraars
            even kunnen verdwijnen.
          </p>
          <p className="text-lg leading-relaxed">
            Naast het produceren voor anderen is Thimssen actief als performer.
            Op het podium brengt hij energie, improvisatie en een diepe
            verbinding met het publiek samen in een meeslepende live-ervaring.
          </p>
        </div>
      </div>
    </div>
  );
}
