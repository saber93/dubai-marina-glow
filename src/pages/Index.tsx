import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CinematicDivider from "@/components/CinematicDivider";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <CinematicDivider />
      <Process />
      <Stats />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
