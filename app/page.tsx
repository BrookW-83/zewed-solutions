import ContactCard from "@/components/ContactUs";
import Hero from "@/components/Hero";
import OurService from "@/components/OurServices";
import PreviousCompanies from "@/components/PreviousCompanies";
import Projects from "@/components/Projects";
import LanguagesWeSpeak from "@/components/TechStacks";
import WhatOurClientSay from "@/components/Testimonial";
import WhatWeOffer from "@/components/WhatWeOffer";



export default function Home() {
  return (
    <main className="w-screen scroll-smooth">
      <section id="home">
        <Hero />
      </section>

      <section id="what-we-offer">
        <WhatWeOffer />
      </section>

      <section id="previous-companies">
        <PreviousCompanies />
      </section>

      <section id="tech-stack">
        <LanguagesWeSpeak />
      </section>

      <section id="services">
        <OurService />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="testimonials">
        <WhatOurClientSay />
      </section>

      <section id="contact">
        <ContactCard />
      </section>
    </main>
  );
}

