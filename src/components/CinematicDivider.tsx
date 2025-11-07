import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hullImage from "@/assets/hull-detail.jpg";

const CinematicDivider = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[60vh] overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <img
          src={hullImage}
          alt="Precision yacht craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy/80" />
        <div className="absolute inset-0 bg-primary/5" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center text-center px-6"
      >
        <div>
          <h3 className="text-3xl md:text-5xl font-bold text-glow-strong mb-4">
            Precision Engineering
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every detail matters when excellence is the standard
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CinematicDivider;
