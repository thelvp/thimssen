import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <div className="max-w-xl">
      <h1 className="mb-8 text-5xl font-semibold underline">Contact</h1>
      <p>
        Heb je interesse in een samenwerking, wil je een nummer laten produceren
        of heb je gewoon een vraag? Vul het formulier hieronder in en ik kom bij
        je terug.
      </p>
      <ContactForm />
    </div>
  );
}
