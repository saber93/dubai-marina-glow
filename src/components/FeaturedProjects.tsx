import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    name: "85ft Azimut Refit",
    scope: "Complete Engine Overhaul",
    description: "Full mechanical restoration with custom performance tuning",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
  },
  {
    name: "Sunseeker Predator",
    scope: "Hull Restoration & Paint",
    description: "Precision gelcoat repair and luxury finish application",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
  },
  {
    name: "Gulf Craft Majesty",
    scope: "Navigation Systems Upgrade",
    description: "State-of-the-art electronics and entertainment installation",
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
  },
  {
    name: "Princess V58",
    scope: "Interior Restoration",
    description: "Premium deck refinishing and cabin modernization",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80",
  },
];

const FeaturedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-navy-deep relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-glow-strong mb-4">Our Work in Motion</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every project tells a story of precision, passion, and perfection
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-12"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden bg-navy/80 border-primary/20 hover:border-primary/40 smooth-transition">
                      <CardContent className="p-0">
                        <div className="relative h-64 overflow-hidden group">
                          <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent opacity-80 group-hover:opacity-60 smooth-transition" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {project.name}
                          </h3>
                          <p className="text-primary text-sm uppercase tracking-wider mb-3">
                            {project.scope}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {project.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/50 text-primary hover:bg-primary/20" />
            <CarouselNext className="border-primary/50 text-primary hover:bg-primary/20" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
