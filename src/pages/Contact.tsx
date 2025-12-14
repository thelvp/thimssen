import { ContactForm } from '../components/ContactForm/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export function Contact() {
  return (
    <div className="mx-auto flex w-full flex-col items-center px-6 sm:py-8">
      <h2 className="mb-4 text-3xl font-bold text-white/90 sm:text-4xl">
        Let's get in touch
      </h2>
      <p className="mb-4 w-full text-sm leading-relaxed sm:w-2/5 sm:text-base">
        Heb je interesse in een samenwerking, wil je een nummer laten produceren
        of heb je gewoon een vraag? Neem contact met me op via <a href='https://www.instagram.com/thimssen/' target="_blank" rel="noopener noreferrer" className={"text-blue-500"}>
          <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
          <span>Instagram</span>
        </a> of vul het formulier hieronder in en ik kom bij je terug.
      </p>
      <FontAwesomeIcon icon='instagram' aria-hidden="true" />
      <div className="w-full sm:w-2/6">
        <ContactForm />
      </div>
    </div>
  );
}
