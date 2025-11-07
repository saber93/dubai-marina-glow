import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // WhatsApp link with pre-filled message
  const phoneNumber = "971XXXXXXXXX"; // Replace with actual number
  const message = encodeURIComponent(
    "Hi! I'm interested in your yacht maintenance services. Can you help me?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  if (isMinimized) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl animate-glow z-50 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </motion.button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.button
            key="collapsed"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsExpanded(true)}
            className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl smooth-transition group relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-8 h-8 text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
            
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border/50 overflow-hidden w-80"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Chat with us</h3>
                  <p className="text-xs text-white/80">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center smooth-transition"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="bg-[#E7F8E9] rounded-lg p-4 mb-4 relative">
                <div className="absolute -left-2 top-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#E7F8E9]" />
                <p className="text-sm text-gray-800">
                  Hello! 👋 Need help with yacht maintenance or repairs? We're here to assist you.
                </p>
                <span className="text-xs text-gray-500 mt-2 block">
                  Precision Marine Services
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Start a conversation on WhatsApp to get instant support from our marine specialists.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
                <Button
                  onClick={() => setIsMinimized(true)}
                  variant="outline"
                  size="icon"
                  className="flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-3">
                Available 24/7 for emergency support
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppButton;
