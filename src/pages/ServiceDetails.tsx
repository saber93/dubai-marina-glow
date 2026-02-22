import { useParams, Link, useNavigate } from "react-router-dom";
import { getServiceById } from "@/data/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

import { useToast } from "@/hooks/use-toast";

const ServiceDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { toast } = useToast();
    const service = id ? getServiceById(id) : null;

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!service) {
            navigate("/404");
        }
    }, [service, navigate]);

    if (!service) return null;

    const highlights = service.longDescription
        .split("\n")
        .filter((line) => line.startsWith("- "))
        .map((line) => line.replace("- ", ""));

    const mainContent = service.longDescription
        .split("\n")
        .filter((line) => !line.startsWith("- ") && !line.startsWith("**") && line.trim() !== "")
        .join("\n\n");

    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-background" />
                </motion.div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/#services"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 smooth-transition mb-8 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 smooth-transition" />
                            Back to Services
                        </Link>
                        <h1 className="text-glow text-white mb-6 uppercase tracking-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="md:col-span-2 space-y-8"
                        >
                            <div className="prose prose-invert max-w-none">
                                {mainContent.split("\n\n").map((para, i) => (
                                    <p key={i} className="text-gray-300 text-lg leading-relaxed mb-6">
                                        {para}
                                    </p>
                                ))}
                            </div>

                            {/* Action */}
                            <div className="pt-8 border-t border-border/50">
                                <Button
                                    size="lg"
                                    onClick={() => {
                                        const message = `*Service Inquiry: ${service.title}*\n\nHi, I'm interested in the *${service.title}* service. Can you provide more information?`;
                                        const encodedMessage = encodeURIComponent(message);
                                        window.open(`https://wa.me/971568101108?text=${encodedMessage}`, "_blank");

                                        import("@/hooks/use-toast").then(({ useToast }) => {
                                            // Since we can't easily use the hook inside the callback if not already defined
                                            // provided we have it in the component scope
                                        });
                                    }}
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 animate-glow"
                                >
                                    Book this Service
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Sidebar / Highlights */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-8"
                        >
                            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 sticky top-32">
                                <service.icon className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-6 text-white">What we offer</h3>
                                <ul className="space-y-4">
                                    {highlights.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-sm leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default ServiceDetails;
