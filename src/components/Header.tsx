import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Anchor, Menu, Phone } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(2, 12, 27, 0)", "rgba(11, 19, 43, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      style={{ backgroundColor: headerBg }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-lg backdrop-blur-md" : ""
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <Anchor className="w-8 h-8 text-primary group-hover:rotate-12 smooth-transition" />
            <div className="hidden sm:block">
              <div className="font-bold text-lg tracking-tight">Precision Marine</div>
              <div className="text-xs text-muted-foreground">Dubai Yacht Services</div>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary smooth-transition relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full smooth-transition" />
              </button>
            ))}
          </motion.nav>

          {/* CTA Buttons & Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3"
          >
            {/* Call Button - Desktop */}
            <Button
              asChild
              variant="outline"
              size="icon"
              className="hidden sm:flex border-primary/50 text-primary hover:bg-primary/20 hover:border-primary"
            >
              <a href="tel:+971568101108" aria-label="Call us">
                <Phone className="w-4 h-4" />
              </a>
            </Button>

            {/* Book Service Button - Desktop */}
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="default"
              className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 animate-glow"
            >
              Book Service
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-navy border-border/50">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 pb-6 border-b border-border/50">
                    <Anchor className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-bold text-lg">Precision Marine</div>
                      <div className="text-xs text-muted-foreground">Dubai Yacht Services</div>
                    </div>
                  </div>

                  {navItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-primary smooth-transition py-2"
                    >
                      {item.label}
                    </button>
                  ))}

                  {/* Call Button - Mobile */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/50 text-primary hover:bg-primary/20"
                  >
                    <a href="tel:+971568101108">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now: +971 56 810 1108
                    </a>
                  </Button>

                  {/* Book Service Button - Mobile */}
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                  >
                    Book Service
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
