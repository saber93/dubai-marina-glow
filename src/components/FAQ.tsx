import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does a full yacht refit take?",
    answer: "A complete yacht refit typically takes 4-12 weeks depending on the scope of work. We provide a detailed timeline after our initial inspection and work closely with you to minimize downtime.",
  },
  {
    question: "Do you offer mobile maintenance at private docks?",
    answer: "Yes, we offer convenient mobile maintenance services at private docks throughout Dubai and the UAE. Our fully equipped mobile units can handle most repairs and maintenance on-site.",
  },
  {
    question: "Can you handle engine imports and warranty work?",
    answer: "Absolutely. We're authorized dealers for major marine engine brands and can handle imports, installations, and warranty work. We maintain full documentation and use only OEM parts.",
  },
  {
    question: "Do you offer annual service contracts?",
    answer: "Yes, we provide comprehensive annual service contracts with scheduled maintenance, priority booking, discounted rates, and 24/7 emergency support for contract holders.",
  },
  {
    question: "How to book emergency service?",
    answer: "For emergency service, call our 24/7 hotline or use our WhatsApp button. We aim to respond within 2 hours for urgent issues and can dispatch our mobile team immediately.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4 animate-glow" />
          <h2 className="text-glow-strong mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-primary/20 rounded-lg px-6 bg-navy-deep/60 hover:border-primary/40 smooth-transition"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                  <span className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="font-semibold">{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pl-11">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
