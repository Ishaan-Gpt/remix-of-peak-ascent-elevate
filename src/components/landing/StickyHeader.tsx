import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import peakLogo from "@/assets/peak-logo.png";

interface StickyHeaderProps {
  onBookCall: () => void;
}

const StickyHeader = ({ onBookCall }: StickyHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/40"
          style={{ backgroundColor: "hsl(220, 55%, 12%, 0.85)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={peakLogo} alt="Peak Ascent" className="w-8 h-8" />
              <span className="font-serif font-bold text-foreground text-lg tracking-wide">
                PEAK <span className="text-gold-gradient">ASCENT</span>
              </span>
            </div>
            <Button variant="hero" size="sm" className="text-xs px-5 py-2" onClick={onBookCall}>
              Book Call
            </Button>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
