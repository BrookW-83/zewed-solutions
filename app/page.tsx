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

      <section id="what-we-offer" data-theme="light">
        <WhatWeOffer />
      </section>

      <section id="previous-companies" data-theme="dark">
        <PreviousCompanies />
      </section>

      <section id="tech-stack" data-theme="light">
        <LanguagesWeSpeak />
      </section>

      <section id="services" data-theme="dark">
        <OurService />
      </section>

      <section id="projects" data-theme="light">
        <Projects />
      </section>

      <section id="testimonials" data-theme="dark">
        <WhatOurClientSay />
      </section>

      <section id="contact" data-theme="light">
        <ContactCard />
      </section>
    </main>
  );
}

