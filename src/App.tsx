import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MenuShowcase } from '@/components/MenuShowcase';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

import { LanguageProvider } from '@/lib/language';

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <MenuShowcase />
        <HowItWorks />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
    </LanguageProvider>
  );
}

export default App;
