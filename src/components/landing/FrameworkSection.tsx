import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Crown } from "lucide-react";

interface FrameworkSectionProps {
  onBookCall: () => void;
}

const pillars = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Strategic Clarity",
    description: "Understanding how your leadership potential is currently evaluated and where the gaps exist between your capability and how decision-makers perceive you.",
  },
  {
    icon: Users,
    number: "02",
    title: "Visibility Architecture",
    description: "Building deliberate influence with the senior stakeholders and decision-makers who shape leadership appointments — not through self-promotion, but through strategic positioning.",
  },
  {
    icon: Crown,
    number: "03",
    title: "Leadership Narrative",
    description: "Repositioning yourself as a strategic authority rather than an excellent executor. Crafting the professional narrative that aligns with how senior leaders are selected.",
  },
];

const FrameworkSection = ({ onBookCall }: FrameworkSectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-label text-primary font-medium">The Framework</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            The Peak Ascent Strategic{" "}
            <span className="text-gold-gradient">Repositioning Framework</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-card rounded-xl p-8 card-shadow card-hover space-y-5 border border-primary/10 hover:border-primary/25">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-3xl font-serif font-bold text-primary/20">{pillar.number}</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" onClick={onBookCall}>
            Discover Your Strategic Path
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
