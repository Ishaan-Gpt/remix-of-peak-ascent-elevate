import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface StickyBookButtonProps {
  onBookCall: () => void;
}

const StickyBookButton = ({ onBookCall }: StickyBookButtonProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-6 right-6 z-50 hidden md:block"
        >
          <Button variant="hero" size="lg" className="shadow-lg" onClick={onBookCall}>
            Book Strategy Call
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBookButton;
