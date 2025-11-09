import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Anchor } from "lucide-react";
import heroImage from "@/assets/hero-yacht.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects based on scroll
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax & Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <motion.img
          style={{ scale }}
          src={heroImage}
          alt="Luxury yachts at Dubai Marina"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </motion.div>

      {/* Wave & Light Motion Overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-[1] bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"
      />
      
      {/* Content with Scroll Fade */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <Anchor className="w-16 h-16 text-primary animate-glow" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-glow-strong mb-6 uppercase tracking-wider"
        >
          Where Precision Meets the Sea
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Expert yacht and boat maintenance, repair, and upgrades — crafted in Dubai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl smooth-transition animate-glow"
          >
            Request Maintenance
          </Button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-muted-foreground"
          >
            Trusted by yacht owners across the UAE since 2008
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator with Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm text-primary uppercase tracking-widest"
        >
          Explore
        </motion.p>
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2 animate-glow">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
