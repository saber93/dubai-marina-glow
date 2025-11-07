import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Wrench,
  Gauge,
  PaintBucket,
  Sparkles,
  Radio,
  Snowflake,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Mechanical & Electrical Repairs",
    description: "Complete system diagnostics and repairs for all mechanical and electrical components.",
  },
  {
    icon: Gauge,
    title: "Engine Diagnostics & Refits",
    description: "Advanced engine analysis, performance optimization, and complete refit services.",
  },
  {
    icon: PaintBucket,
    title: "Hull Painting & Antifouling",
    description: "Professional hull treatment, painting, and protective coating applications.",
  },
  {
    icon: Sparkles,
    title: "Interior Restoration & Deck Refinishing",
    description: "Luxury interior upgrades and deck restoration to pristine condition.",
  },
  {
    icon: Radio,
    title: "Electronics, Navigation & Audio",
    description: "State-of-the-art marine electronics installation and navigation system upgrades.",
  },
  {
    icon: Snowflake,
    title: "A/C & Refrigeration Systems",
    description: "Climate control installation, maintenance, and repair for optimal comfort.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="py-24 px-6 bg-navy/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-semibold">
            Our Services
          </span>
          <h2 className="mt-4 text-glow">
            Complete Marine Solutions
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-3xl mx-auto">
            From routine maintenance to complex refits, we provide comprehensive yacht care services
            that meet the highest standards of marine excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 smooth-transition hover:shadow-lg hover:shadow-primary/10 group">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 smooth-transition" />
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
