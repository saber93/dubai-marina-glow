import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Leaf, Droplet, Recycle } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Eco Paints",
    description: "Environmentally friendly coatings that protect your yacht and our oceans",
  },
  {
    icon: Droplet,
    title: "Fuel Efficiency",
    description: "Advanced engine tuning to reduce consumption and emissions",
  },
  {
    icon: Recycle,
    title: "Waste-Free Process",
    description: "Sustainable practices with complete recycling of materials",
  },
];

const Sustainability = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden flex items-center">
      {/* Parallax Ocean Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="w-full h-full bg-gradient-to-b from-navy/95 via-primary/10 to-navy/95">
          {/* Lens Flare Effect */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-glow-strong mb-4">Safe. Sustainable. Certified.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Excellence in marine care, respect for our environment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="flex flex-col items-center text-center p-8 rounded-lg bg-navy-deep/40 backdrop-blur-md border border-primary/30 hover:border-primary hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] smooth-transition"
              >
                <div className="mb-6 p-4 rounded-full bg-primary/10 border border-primary/30">
                  <Icon className="w-12 h-12 text-primary animate-glow" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
