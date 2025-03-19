import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Service } from "./_components/service";
import { Testmonials } from "./_components/testimonials";
import { Footer } from "./_components/footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Testmonials />
      <Footer />
    </main>
  );
}
