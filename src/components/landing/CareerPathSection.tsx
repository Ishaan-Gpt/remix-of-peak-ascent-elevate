import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

interface CareerPathSectionProps {
  onBookCall: () => void;
}

const tiers = [
  { label: "Execution Excellence", description: "Consistently delivering strong results and operational outcomes", width: "w-full", bg: "bg-[hsl(222,45%,14%)]", text: "text-foreground" },
  { label: "Strategic Thinking", description: "Contributing to decisions beyond your immediate scope", width: "w-[82%]", bg: "bg-[hsl(222,42%,17%)]", text: "text-foreground" },
  { label: "Influence Capital", description: "Building trust and credibility with senior decision-makers", width: "w-[64%]", bg: "bg-[hsl(222,38%,20%)]", text: "text-foreground" },
  { label: "Leadership Narrative", description: "Being recognised as a strategic voice, not just a strong executor", width: "w-[46%]", bg: "bg-[hsl(222,32%,24%)]", text: "text-foreground", highlight: true },
  { label: "Strategic Authority", description: "The position where leadership opportunities seek you", width: "w-[30%]", apex: true },
];

const CareerPathSection = ({ onBookCall }: CareerPathSectionProps) => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-label text-primary font-medium">The Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            The Leadership <span className="text-gold-gradient">Elevation Path</span>
          </h2>
        </div>

        {/* Pyramid Visual with upward arrow */}
        <div className="relative max-w-3xl mx-auto mb-16 flex flex-col items-center gap-0">
          {/* Upward gold arrow */}
          <div className="absolute -right-8 sm:-right-14 top-0 bottom-0 flex flex-col items-center justify-center z-10">
            <ChevronUp className="w-6 h-6 text-primary mb-1" />
            <div className="w-px flex-1 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
          </div>

          {[...tiers].reverse().map((tier, i) => {
            const isApex = tier.apex;
            const isHighlight = tier.highlight;
            const tierNumber = tiers.length - i;
            return (
              <div
                key={tier.label}
                className={`${tier.width} transition-all duration-300`}
              >
                <div
                  className={`
                    relative px-10 sm:px-14 py-5 sm:py-6 text-center border-b border-border/30
                    ${isApex
                      ? "bg-gold-gradient text-primary-foreground rounded-t-xl summit-glow"
                      : isHighlight
                        ? `${tier.bg} border-l-2 border-primary/40`
                        : tier.bg || "bg-card/60"
                    }
                    ${i === tiers.length - 1 ? "rounded-b-xl" : ""}
                  `}
                >
                  {/* Gold numbered badge */}
                  <div className={`absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-tabular
                    ${isApex
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-primary/15 text-primary border border-primary/30"
                    }`}>
                    {String(tierNumber).padStart(2, "0")}
                  </div>

                  <h3 className={`font-serif font-bold text-lg sm:text-xl ${isApex ? "text-primary-foreground" : isHighlight ? "text-gold-gradient" : tier.text || "text-foreground"}`}>
                    {tier.label}
                  </h3>
                  <p className={`text-xs sm:text-sm mt-1 ${isApex ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {tier.description}
                  </p>
                </div>
              </div>
            );
          })}
          {/* Decorative side lines */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent hidden sm:block" />
        </div>

        <div className="text-center space-y-6">
          <p className="text-muted-foreground max-prose mx-auto">
            Most senior professionals plateau between execution excellence and strategic thinking. The leaders who
            reach the highest levels deliberately build influence capital and shape their leadership narrative.
          </p>
          <Button variant="hero" size="lg" onClick={onBookCall}>
            Start Your Ascent
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareerPathSection;
