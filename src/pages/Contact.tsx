import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <div className="max-w-xl py-16">
      <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
        Let's get in touch
      </h2>
      <p className="mb-4 text-lg leading-relaxed">
        Heb je interesse in een samenwerking, wil je een nummer laten produceren
        of heb je gewoon een vraag? Vul het formulier hieronder in en ik kom bij
        je terug.
      </p>
      <ContactForm />
    </div>
  );
}
