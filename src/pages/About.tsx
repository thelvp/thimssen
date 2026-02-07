import { Link } from 'react-router';
import echoBeach from '../assets/thimssen_about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

export function About() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 px-6 py-8 text-start md:flex-row md:items-start md:gap-16">
      <div className="w-full md:w-1/2">
        <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src={echoBeach}
            className="h-full w-full object-cover"
            alt="photo of Echo Beach performing"
          />
        </div>
      </div>

      <div className="w-full justify-center md:w-1/2 md:pr-8 md:pt-8">
        <h2 className="mb-4 text-3xl font-bold text-white/90 sm:text-4xl">
          Tim Thomassen
        </h2>
        <div className="text-sm leading-6 sm:text-base [&>h2]:mb-2 [&>p]:mb-6">
          <p>
            Ik ben{' '}
            <Link
              to={'/producing'}
              className="interactive focus-ring font-bold hover:underline"
            >
              producer
            </Link>{' '}
            en{' '}
            <Link
              to={'/music'}
              className="interactive focus-ring font-bold hover:underline"
            >
              muzikant
            </Link>
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
            Interesse om samen werken? Stuur me een{' '}
            <Link
              to="/contact"
              className="interactive focus-ring font-bold hover:underline"
            >
              bericht
            </Link>
            !
          </p>
        </div>
      </div>
    </div>
  );
}
