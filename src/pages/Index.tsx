import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CinematicDivider from "@/components/CinematicDivider";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <CinematicDivider />
      <Process />
      <Stats />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
