import { AboutBlock } from '../components/AboutBlock/AboutBlock';
import { ContactBlock } from '../components/ContactBlock/ContactBlock';
import { HomeBanner } from '../components/HomeBanner/HomeBanner';
import { MusicBlock } from '../components/MusicBlock/MusicBlock';
import { ProducingBlock } from '../components/ProducingBlock/ProducingBlock';

export function HomePage() {
  return (
    <main className="h-screen snap-y overflow-y-auto scroll-smooth">
      <section className="h-[70vh]" id="home">
        <HomeBanner />
      </section>

      <section className="max-h-screen py-10" id="producing">
        <ProducingBlock />
      </section>

      <section className="max-h-screen bg-gray-900 py-10" id="about">
        <AboutBlock />
      </section>

      <section className="max-h-screen p-10" id="music">
        <MusicBlock />
      </section>

      <section
        className="min-h-2/3 b max-h-screen bg-gray-900 py-10"
        id="contact"
      >
        <ContactBlock />
      </section>
    </main>
  );
}
