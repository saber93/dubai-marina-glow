import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Anchor, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projectsData = [
  {
    id: "azimut-refit",
    name: "85ft Azimut Refit",
    scope: "Complete Engine Overhaul",
    description: "Full mechanical restoration with custom performance tuning",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
    date: "November 2023",
    duration: "6 weeks",
    location: "Dubai Marina",
    challenge: "The client's 85ft Azimut presented with declining performance and increasing fuel consumption. After 2,000 hours of operation, both engines required comprehensive overhaul.",
    solution: `Our team executed a complete engine restoration including:
      <ul>
        <li>Full engine teardown and component inspection</li>
        <li>Cylinder head reconditioning and valve replacement</li>
        <li>Fuel injection system calibration and upgrade</li>
        <li>Cooling system optimization for Gulf waters</li>
        <li>ECU remapping for improved efficiency</li>
        <li>Installation of upgraded monitoring systems</li>
      </ul>`,
    results: [
      "30% improvement in fuel efficiency",
      "Restored original top speed of 32 knots",
      "Enhanced reliability for long-range cruising",
      "Extended engine life expectancy by 1,500+ hours",
    ],
    testimonial: {
      text: "The transformation is incredible. My yacht runs smoother and faster than when I first bought it. The team's attention to detail and expertise is unmatched in Dubai.",
      author: "Ahmed K.",
      role: "Yacht Owner",
    },
    gallery: [
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    ],
  },
  {
    id: "sunseeker-restoration",
    name: "Sunseeker Predator",
    scope: "Hull Restoration & Paint",
    description: "Precision gelcoat repair and luxury finish application",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80",
    date: "October 2023",
    duration: "4 weeks",
    location: "Dubai Harbour",
    challenge: "Years of sun exposure and minor impacts had left the hull with multiple gelcoat cracks, oxidation, and color fading. The owner wanted showroom-quality restoration.",
    solution: `Our restoration process included:
      <ul>
        <li>Complete hull surface preparation and crack repair</li>
        <li>Professional gelcoat application using premium marine materials</li>
        <li>Multi-stage wet sanding (400-3000 grit progression)</li>
        <li>Ceramic coating application for UV protection</li>
        <li>Mirror-finish polishing and detailing</li>
        <li>Waterline repainting with antifouling</li>
      </ul>`,
    results: [
      "Showroom-quality mirror finish achieved",
      "All structural integrity restored",
      "Enhanced UV and weather protection",
      "Increased resale value by estimated 15%",
    ],
    testimonial: {
      text: "I thought my yacht's gelcoat damage was beyond repair. The team proved me wrong—it looks brand new. The craftsmanship is exceptional.",
      author: "David R.",
      role: "Palm Jumeirah Resident",
    },
    gallery: [
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    ],
  },
  {
    id: "gulf-craft-upgrade",
    name: "Gulf Craft Majesty",
    scope: "Navigation Systems Upgrade",
    description: "State-of-the-art electronics and entertainment installation",
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200&q=80",
    date: "September 2023",
    duration: "3 weeks",
    location: "Dubai Creek",
    challenge: "The vessel's original navigation and entertainment systems were outdated, limiting functionality and user experience. The client wanted cutting-edge marine technology integration.",
    solution: `Complete electronics upgrade including:
      <ul>
        <li>Garmin multifunction display installation (3x 24" screens)</li>
        <li>Integrated radar, sonar, and AIS systems</li>
        <li>Autopilot system with GPS integration</li>
        <li>Premium Fusion marine audio with zone control</li>
        <li>Satellite TV and high-speed internet connectivity</li>
        <li>Custom helm station redesign for ergonomics</li>
      </ul>`,
    results: [
      "Modern navigation with real-time weather integration",
      "Enhanced safety through advanced collision avoidance",
      "Entertainment system throughout vessel",
      "Simplified operation with touchscreen controls",
    ],
    testimonial: {
      text: "The technology upgrade has transformed how I use my yacht. Navigation is effortless, and the entertainment system rivals any luxury hotel.",
      author: "Mohammed S.",
      role: "Business Owner",
    },
    gallery: [
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
    ],
  },
  {
    id: "princess-restoration",
    name: "Princess V58",
    scope: "Interior Restoration",
    description: "Premium deck refinishing and cabin modernization",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=80",
    date: "August 2023",
    duration: "5 weeks",
    location: "Dubai Marina",
    challenge: "The interior teak decking showed wear from years of use, and the cabin furnishings needed modernization while maintaining the yacht's classic elegance.",
    solution: `Comprehensive interior restoration:
      <ul>
        <li>Complete teak deck removal and replacement</li>
        <li>Premium marine-grade teak installation with traditional caulking</li>
        <li>Custom upholstery using Sunbrella marine fabrics</li>
        <li>Galley modernization with new appliances</li>
        <li>LED lighting upgrade throughout</li>
        <li>Cabin climate control system enhancement</li>
      </ul>`,
    results: [
      "Restored classic yacht aesthetics",
      "Enhanced comfort and livability",
      "Improved energy efficiency with LED lighting",
      "Extended teak deck lifespan with proper maintenance",
    ],
    testimonial: {
      text: "The interior restoration exceeded all expectations. The craftsmanship in the teak work is extraordinary, and every detail was perfected.",
      author: "Sarah M.",
      role: "Yacht Enthusiast",
    },
    gallery: [
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
    ],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-end pb-16">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => navigate("/")}
                  className="mb-6 text-foreground/80 hover:text-primary"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
                
                <p className="text-primary text-sm uppercase tracking-wider mb-4">
                  {project.scope}
                </p>
                <h1 className="text-glow-strong mb-6">{project.name}</h1>
                
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Anchor className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-glow">The Challenge</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-glow">Our Solution</h2>
              <div 
                className="text-muted-foreground text-lg leading-relaxed prose prose-invert prose-ul:my-2 prose-li:my-1"
                dangerouslySetInnerHTML={{ __html: project.solution }}
              />
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 px-6 bg-navy/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center text-glow"
            >
              Results & Impact
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-navy/80 border border-primary/20 rounded-lg p-6 hover:border-primary/40 smooth-transition"
                >
                  <div className="text-primary text-4xl font-bold mb-2">✓</div>
                  <p className="text-foreground leading-relaxed">{result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center text-glow"
            >
              Project Gallery
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {project.gallery.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 overflow-hidden rounded-lg group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`${project.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover smooth-transition group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 px-6 bg-navy/50">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-primary text-6xl mb-6">"</div>
            <p className="text-2xl text-foreground mb-8 italic leading-relaxed">
              {project.testimonial.text}
            </p>
            <div className="border-t border-primary/30 pt-6">
              <p className="text-foreground font-semibold">{project.testimonial.author}</p>
              <p className="text-muted-foreground">{project.testimonial.role}</p>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Have a Similar Project in Mind?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let our expert team bring your yacht restoration or upgrade vision to life.
            </p>
            <Button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 animate-glow"
            >
              Start Your Project
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;
