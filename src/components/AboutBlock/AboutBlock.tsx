import echoBeach from '../../assets/thimssen_about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import ScrollLink from '../common/ScrollLink/ScrollLink';

export const AboutBlock = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col justify-center gap-12 p-6 text-start md:flex-row md:items-center md:gap-16">
      <div className="w-full md:w-1/2">
        <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src={echoBeach}
            className="h-full w-full object-cover"
            alt="photo of Echo Beach performing"
          />
        </div>
      </div>

      <div className="flex w-full flex-col justify-center leading-6 md:w-1/2">
        <h2 className="mb-5 text-3xl font-bold text-white/90 sm:text-4xl">
          Tim Thomassen
        </h2>
        <div className="text-base sm:text-base [&>p]:mb-6">
          <p>
            Ik ben{' '}
            <ScrollLink
              to="#producing"
              className="interactive focus-ring font-bold hover:underline"
            >
              producer
            </ScrollLink>{' '}
            en{' '}
            <ScrollLink
              to="#music"
              className="interactive focus-ring font-bold hover:underline"
            >
              muzikant
            </ScrollLink>
            . Vanuit mijn studio werk ik aan uiteenlopende projecten: van
            elektronische producties en live performances tot podcasts en
            bandopnames.
          </p>
          <p>
            Na jaren actief te zijn geweest als drummer, toetsenist en zanger
            ben ik me steeds meer gaan richten op produceren. Wat begon met
            demo’s voor mijn eigen bands groeide uit tot releases en
            samenwerkingen met andere artiesten en makers.
          </p>
          <p>
            Ik geloof dat elk nummer een eigen wereld kan zijn. Samen met
            muzikanten ga ik op zoek naar de sound en sfeer die daarbij horen.
          </p>
          <p>
            <FontAwesomeIcon icon={faComments} className="mr-3" />
            <ScrollLink
              to="#contact"
              className="interactive focus-ring font-bold hover:underline"
            >
              Interesse om samen te werken? Stuur me een bericht!
            </ScrollLink>
          </p>
        </div>
      </div>
    </div>
  );
};
