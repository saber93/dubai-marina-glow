import { Anchor, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-16 px-6 border-t border-border/50 bg-navy/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 mb-4 group cursor-pointer"
            >
              <Anchor className="w-10 h-10 text-primary group-hover:rotate-12 smooth-transition" />
              <div>
                <div className="font-bold text-xl">Precision Marine</div>
                <div className="text-sm text-muted-foreground">Dubai Yacht Services</div>
              </div>
            </button>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Expert yacht and boat maintenance, repair, and upgrades.
              Where precision engineering meets the sea — crafted with excellence in Dubai.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary smooth-transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary smooth-transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary smooth-transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary smooth-transition text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary smooth-transition text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-muted-foreground hover:text-primary smooth-transition text-left"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-muted-foreground hover:text-primary smooth-transition text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary smooth-transition text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Al Jadaf Marine Facility<br />Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">+971 56 810 1108</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">info@michealmarineservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Precision Marine Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary smooth-transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary smooth-transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
