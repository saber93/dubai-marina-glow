import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import workshopImage from "@/assets/workshop.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-background to-navy">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={workshopImage}
                alt="Expert marine engineers at work"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-primary text-sm uppercase tracking-widest font-semibold">
                About Us
              </span>
              <h2 className="mt-4 mb-6 text-glow">
                Craftsmanship Meets Innovation
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                In the heart of Dubai's maritime excellence, we bring together decades
                of engineering expertise with cutting-edge marine technology.
              </p>
              <p>
                Our workshop is where precision tools meet passionate craftsmen. Every
                yacht that enters our facility receives meticulous attention to detail,
                from routine maintenance to complex system overhauls.
              </p>
              <p>
                We don't just repair vessels — we restore confidence, ensuring every
                journey on the water is safe, smooth, and spectacular.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Yachts Serviced
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Support Available
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
