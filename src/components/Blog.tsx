import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: "hull-antifouling",
    title: "Top 5 Signs Your Hull Needs Antifouling",
    excerpt: "Learn the critical indicators that your yacht's hull requires professional attention and maintenance.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    date: "March 2024",
  },
  {
    id: "engine-diagnostics",
    title: "Why Regular Engine Diagnostics Save You Thousands",
    excerpt: "Discover how preventive maintenance protects your investment and ensures peak performance.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    date: "February 2024",
  },
  {
    id: "dubai-yachting",
    title: "How Dubai Became the Heart of Luxury Yachting",
    excerpt: "Explore the evolution of Dubai's marine industry and its world-class yacht services.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    date: "January 2024",
  },
];

const Blog = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-glow-strong mb-4">Captain's Journal</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights, tips, and stories from the world of luxury yachting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card 
                onClick={() => navigate(`/blog/${article.id}`)}
                className="h-full overflow-hidden bg-navy/60 border-primary/20 hover:border-primary/50 smooth-transition group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 bg-primary/90 text-navy px-3 py-1 rounded-full text-sm font-semibold">
                      {article.date}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary smooth-transition">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 smooth-transition">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
