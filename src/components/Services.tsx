import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="py-24 px-6 bg-navy/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-semibold">
            Our Services
          </span>
          <h2 className="mt-4 text-glow text-white">
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
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Link to={`/service/${service.id}`} className="block h-full group">
                <Card className="h-full relative overflow-hidden bg-card/10 backdrop-blur-sm border-border/20 group-hover:border-primary/50 smooth-transition group-hover:shadow-2xl group-hover:shadow-primary/20 min-h-[320px]">
                  {/* Background Image with Gradient Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent transition-opacity duration-300 group-hover:via-navy/60" />
                  </div>

                  {/* Content */}
                  <CardHeader className="relative z-10 h-full flex flex-col justify-end p-8">
                    <div className="mb-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                      <service.icon className="w-10 h-10 text-primary group-hover:text-white smooth-transition filter drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                    </div>
                    <CardTitle className="text-xl mb-3 text-white group-hover:text-primary smooth-transition">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 leading-relaxed line-clamp-2 group-hover:text-white smooth-transition">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
