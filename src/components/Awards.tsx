import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Trophy, Star } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Best Marine Service Dubai 2023",
    organization: "Dubai Maritime Awards",
  },
  {
    icon: Shield,
    title: "ISO 9001 Certified",
    organization: "International Standards",
  },
  {
    icon: Award,
    title: "Excellence in Yacht Maintenance",
    organization: "UAE Marine Association",
  },
  {
    icon: Star,
    title: "5-Star Customer Rating",
    organization: "Industry Review Board",
  },
];

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Parallax Reflection Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="absolute inset-0 bg-gradient-to-r from-navy via-primary/10 to-navy"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-glow-strong mb-4">Recognized for Excellence</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-leading standards and certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-8 rounded-lg bg-navy-deep/60 border border-primary/30 hover:border-primary hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] smooth-transition"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="mb-6 p-4 rounded-full bg-primary/10 border-2 border-primary/50 animate-glow"
                >
                  <Icon className="w-12 h-12 text-primary" />
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {award.organization}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
