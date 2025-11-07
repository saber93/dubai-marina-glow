import { Anchor } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Anchor className="w-8 h-8 text-primary" />
            <div>
              <div className="font-bold text-lg">Precision Marine</div>
              <div className="text-sm text-muted-foreground">Dubai Yacht Services</div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Precision Marine Services. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Al Jadaf, Dubai, UAE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
