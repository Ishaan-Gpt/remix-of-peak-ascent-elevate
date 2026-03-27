import { Button } from "@/components/ui/button";
import peakLogo from "@/assets/peak-logo.png";
import skyscraperBg from "@/assets/skyscraper-hero-bg.jpg";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onBookCall: () => void;
}

const HeroSection = ({ onBookCall }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic skyscraper background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${skyscraperBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark navy overlay for brand consistency */}
      <div className="absolute inset-0 z-[1] bg-background/75" />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, hsl(220, 55%, 12%, 0.7) 100%)",
        }}
      />

      {/* Subtle gold edge glow */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, hsl(42, 55%, 53%, 0.06) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28 lg:py-0">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center mb-10 lg:mb-14"
        >
          <img src={peakLogo} alt="Peak Ascent" className="w-16 h-16 sm:w-20 sm:h-20 mb-4 summit-glow" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground tracking-wide">
            PEAK <span className="text-gold-gradient">ASCENT</span>
          </h2>
          <span className="text-[10px] sm:text-xs uppercase tracking-label text-muted-foreground font-medium mt-2">
            Executive Leadership Advisory
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-[28px] sm:text-[40px] lg:text-[48px] font-serif font-bold text-foreground leading-[1.15]">
            This Is Not Career Guidance
            <br />
            <span className="block mt-2">
              This Is{" "}
              <span className="text-gold-gradient">Career Transformation</span>
            </span>
          </h1>
        </motion.div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ opacity: 0.85 }}
        >
          Most high performers stay stuck not because they lack capability
          <br className="hidden sm:block" />
          but because they are invisible where it matters.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            variant="hero"
            size="lg"
            className="text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 w-full sm:w-auto"
            onClick={onBookCall}
          >
            Book Your Career Clarity Call
          </Button>
          <p className="text-[11px] sm:text-xs text-muted-foreground/70 italic">
            Limited Clarity Calls Available This Week
          </p>
        </motion.div>

        {/* Supertransformed branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 sm:mt-20"
        >
          <p className="text-[9px] sm:text-[10px] text-muted-foreground/40 uppercase tracking-[0.25em]">
            A Strategic Leadership Program by
          </p>
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-medium mt-1 text-gold" style={{ opacity: 0.35 }}>
            Supertransformed Consulting
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
