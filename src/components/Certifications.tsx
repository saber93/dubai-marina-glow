import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Anchor, Ship, Zap, Cog, CheckCircle } from "lucide-react";

const partners = [
  { name: "Nautique", icon: Ship },
  { name: "Centurion", icon: Anchor },
  { name: "Supreme Boats", icon: Ship },
  { name: "Volvo Penta", icon: Cog },
  { name: "Mercury Marine", icon: Zap },
  { name: "RINA Certified", icon: CheckCircle },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        style={{
          backgroundImage: "linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--navy)) 50%, hsl(var(--primary) / 0.05))",
        }}
        className="absolute inset-0"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Award className="w-12 h-12 text-primary mx-auto mb-4 animate-glow" />
          <h2 className="text-glow-strong mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Certified partners in marine excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-4 p-6 rounded-lg bg-navy/30 border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] smooth-transition"
              >
                <Icon className="w-12 h-12 text-primary" />
                <p className="text-sm text-center font-semibold text-foreground">
                  {partner.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
