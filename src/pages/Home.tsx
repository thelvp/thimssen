import { AboutBlock } from '../components/AboutBlock/AboutBlock';
import { ContactBlock } from '../components/ContactBlock/ContactBlock';
import { HomeBanner } from '../components/HomeBanner/HomeBanner';
import { MusicBlock } from '../components/MusicBlock/MusicBlock';
import { ProducingBlock } from '../components/ProducingBlock/ProducingBlock';

export function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <section className="h-[70vh] snap-start" id="home">
        <HomeBanner />
      </section>

      <section
        className="min-h-2/3 max-h-screen snap-start overflow-hidden py-10"
        id="producing"
      >
        <ProducingBlock />
      </section>

      <section
        className="min-h-2/3 max-h-screen snap-start bg-blue-900"
        id="about"
      >
        <AboutBlock />
      </section>

      <section className="min-h-2/3 max-h-screen snap-start p-10" id="music">
        <MusicBlock />
      </section>

      <section
        className="min-h-2/3 max-h-screen snap-start bg-amber-800 py-10"
        id="contact"
      >
        <ContactBlock />
      </section>
    </main>
  );
}
