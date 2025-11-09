import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CinematicDivider from "@/components/CinematicDivider";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import FeaturedProjects from "@/components/FeaturedProjects";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Workshop from "@/components/Workshop";
import Sustainability from "@/components/Sustainability";
import Blog from "@/components/Blog";
import Awards from "@/components/Awards";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
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
      <FeaturedProjects />
      <Certifications />
      <Testimonials />
      <Workshop />
      <Sustainability />
      <Blog />
      <Awards />
      <FAQ />
      <Gallery />
      <Contact />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
