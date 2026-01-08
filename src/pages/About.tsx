import echoBeach from '../assets/thimssen_about.jpg';

export function About() {
  const paragraphStyle = 'mb-4 leading-relaxed text-sm sm:text-base';

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 px-6 py-8 md:flex-row md:items-start md:gap-16">
      <div className="w-full md:w-1/2">
        <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src={echoBeach}
            className="h-full w-full object-cover"
            alt="photo of Echo Beach performing"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 md:pr-8 md:pt-8">
        <h2 className="mb-4 text-3xl font-bold text-white/90 sm:text-4xl">
          Thimssen
        </h2>
        <p className={paragraphStyle}>
          Ik ben een producer en muzikant met een passie voor het maken van muziek.
          Vanuit de studio werk ik aan projecten die variëren van elektronische producties
          tot live performances en van het opnemen van podcasts tot volledige bands.
        </p>
        <p className={paragraphStyle}>
          Na jaren als drummer, toetsenist en zanger actief geweest te zijn in verschillende bands,
          met vele opgenomen demo's tot gevolg, ben ik het produceren serieuzer gaan oppakken. Demo's
          werden releases en waar dit eerst enkel was voor mijn eigen bands, ben ik ook steeds meer 
          projecten met andere artiesten en kunstenaars gaan uitvoeren.
        </p>
        <p className={paragraphStyle}>
          Ik geloof dat elk nummer een eigen wereld kan vormen waar je als luisteraar even
          in kunt verdwijnen. Ik ga graag met muzikanten aan de slag om samen op zoek te
          gaan naar de wereld die zij voor ogen hebben.
        </p>
      </div>
    </div>
  );
}
