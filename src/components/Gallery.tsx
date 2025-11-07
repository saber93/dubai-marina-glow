import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-yacht.jpg";
import workshopImage from "@/assets/workshop.jpg";
import hullImage from "@/assets/hull-detail.jpg";

const galleryImages = [
  { src: heroImage, alt: "Luxury yachts at Dubai Marina", span: "md:col-span-2" },
  { src: workshopImage, alt: "Expert craftsmanship", span: "" },
  { src: hullImage, alt: "Precision detailing", span: "" },
  { src: heroImage, alt: "Marina at golden hour", span: "md:col-span-2" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-semibold">
            Gallery
          </span>
          <h2 className="mt-4 text-glow">
            Our Craftsmanship in Focus
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 smooth-transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-end p-6">
                <p className="text-foreground font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
