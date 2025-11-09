import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogArticles = [
  {
    id: "hull-antifouling",
    title: "Top 5 Signs Your Hull Needs Antifouling",
    excerpt: "Learn the critical indicators that your yacht's hull requires professional attention and maintenance.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
    date: "March 2024",
    author: "Captain Michael Sterling",
    content: `
      <p>Your yacht's hull is the foundation of performance and efficiency. Regular antifouling maintenance is crucial for optimal operation in Dubai's warm waters.</p>
      
      <h3>1. Decreased Top Speed and Performance</h3>
      <p>If you notice your yacht struggling to reach its usual top speed, marine growth on the hull is likely creating drag. Even a thin layer of algae can reduce speed by up to 10%.</p>
      
      <h3>2. Increased Fuel Consumption</h3>
      <p>A fouled hull forces your engines to work harder, dramatically increasing fuel consumption. If you're refueling more frequently than usual, it's time for an inspection.</p>
      
      <h3>3. Visible Marine Growth</h3>
      <p>During routine checks, look for barnacles, algae, or slime on the hull. Early detection prevents extensive damage and costly repairs.</p>
      
      <h3>4. Rough or Discolored Surface</h3>
      <p>The hull should feel smooth to the touch. Any roughness or significant discoloration indicates deteriorating antifouling protection.</p>
      
      <h3>5. Time Since Last Application</h3>
      <p>In Dubai's waters, antifouling typically lasts 12-18 months. If it's been longer, schedule professional maintenance immediately.</p>
      
      <h3>Professional Antifouling Service</h3>
      <p>Our team uses premium marine coatings specifically formulated for Gulf waters. We ensure proper surface preparation, precise application, and extended protection against marine organisms.</p>
    `,
  },
  {
    id: "engine-diagnostics",
    title: "Why Regular Engine Diagnostics Save You Thousands",
    excerpt: "Discover how preventive maintenance protects your investment and ensures peak performance.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
    date: "February 2024",
    author: "Chief Engineer Sarah Ahmed",
    content: `
      <p>Marine engines represent a significant investment. Regular diagnostics are not an expense—they're insurance against catastrophic failures.</p>
      
      <h3>Early Detection Saves Money</h3>
      <p>Professional diagnostics catch minor issues before they escalate. A simple seal replacement costs hundreds; engine replacement costs hundreds of thousands.</p>
      
      <h3>What We Check During Diagnostics</h3>
      <p>Our comprehensive diagnostic service includes:</p>
      <ul>
        <li>Computerized engine analysis and error code reading</li>
        <li>Compression testing on all cylinders</li>
        <li>Fuel system pressure and injection timing</li>
        <li>Cooling system integrity and thermostat function</li>
        <li>Electrical system and alternator performance</li>
        <li>Transmission fluid analysis and gear inspection</li>
      </ul>
      
      <h3>Real-World Example</h3>
      <p>Recently, our diagnostics detected early signs of cooling system failure on an 85ft yacht. The repair cost $3,000. If undetected, complete engine failure would have cost $120,000 plus lost season revenue.</p>
      
      <h3>Recommended Service Schedule</h3>
      <p>For recreational use: comprehensive diagnostics every 100 hours or annually. For commercial vessels: every 50 hours or quarterly.</p>
      
      <h3>Advanced Technology</h3>
      <p>We use state-of-the-art diagnostic equipment compatible with all major marine engine brands: Volvo Penta, MAN, Caterpillar, MTU, and Cummins.</p>
    `,
  },
  {
    id: "dubai-yachting",
    title: "How Dubai Became the Heart of Luxury Yachting",
    excerpt: "Explore the evolution of Dubai's marine industry and its world-class yacht services.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    date: "January 2024",
    author: "Maritime Historian James Wilson",
    content: `
      <p>Dubai's transformation into a global yachting hub is one of modern maritime history's most remarkable stories.</p>
      
      <h3>The Early Days</h3>
      <p>In the 1990s, Dubai's marine infrastructure was modest. Traditional dhows dominated the creek, while modern yachting facilities were virtually non-existent.</p>
      
      <h3>Strategic Vision</h3>
      <p>Sheikh Mohammed bin Rashid Al Maktoum recognized yachting's potential as a luxury tourism pillar. Massive investments followed: world-class marinas, maintenance facilities, and regulatory frameworks.</p>
      
      <h3>Dubai Marina: A Game Changer</h3>
      <p>Opened in 2003, Dubai Marina became the Middle East's largest man-made marina. Its 800+ berths attracted international yacht owners, establishing Dubai as a serious yachting destination.</p>
      
      <h3>The Service Ecosystem</h3>
      <p>Premium marinas demanded premium services. We were among the pioneers, bringing European-standard yacht maintenance to the Gulf. Today, Dubai rivals Monaco and Fort Lauderdale for service quality.</p>
      
      <h3>Current Status</h3>
      <p>Dubai now hosts:</p>
      <ul>
        <li>Over 10 world-class marinas</li>
        <li>Annual Dubai International Boat Show</li>
        <li>Hundreds of specialized marine service companies</li>
        <li>A superyacht support infrastructure</li>
        <li>Year-round perfect cruising weather</li>
      </ul>
      
      <h3>The Future</h3>
      <p>With ongoing marina expansions and the upcoming Dubai Harbour project, the city continues solidifying its position as the yachting capital of the Middle East and beyond.</p>
    `,
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const article = blogArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
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
        <section className="relative h-[60vh] overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-end pb-16">
            <div className="max-w-4xl mx-auto px-6 w-full">
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
                  Back to Home
                </Button>
                
                <h1 className="text-glow-strong mb-6">{article.title}</h1>
                
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-foreground prose-headings:font-bold prose-headings:text-glow
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-muted-foreground prose-ul:my-6
                prose-li:my-2"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-navy/50">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Need Expert Yacht Services?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team is ready to help with all your maintenance and repair needs.
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
              Schedule Service
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
