import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Wrench, Scan, Monitor, Zap } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const technologies = [
  { icon: Wrench, label: "Precision Tools" },
  { icon: Scan, label: "3D Scanning" },
  { icon: Monitor, label: "Digital Diagnostics" },
  { icon: Zap, label: "Performance Tech" },
];

const Workshop = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={workshopImage}
          alt="Advanced marine workshop"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-glow-strong mb-6">Powered by Innovation</h2>
          <p className="text-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            We combine marine craftsmanship with next-generation engineering — 
            <span className="text-primary"> precision, data, and design in harmony</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center gap-4 p-8 rounded-lg bg-navy-deep/60 border border-primary/30 backdrop-blur-sm hover:border-primary hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] smooth-transition"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <Icon className="w-12 h-12 text-primary" />
                </motion.div>
                <p className="text-center font-semibold text-foreground">
                  {tech.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workshop;
