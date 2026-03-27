import { Button } from "@/components/ui/button";
import { Square } from "lucide-react";

interface DiagnosticSectionProps {
  onBookCall: () => void;
}

const categories = [
  {
    title: "Strategic Visibility",
    items: [
      "Key stakeholders are unaware of your strategic contributions",
      "Your leadership perspective is rarely sought in critical decisions",
    ],
  },
  {
    title: "Leadership Narrative",
    items: [
      "Your professional reputation centres on execution rather than strategy",
      "You struggle to articulate your leadership value beyond deliverables",
    ],
  },
  {
    title: "Stakeholder Influence",
    items: [
      "You lack meaningful relationships with senior decision-makers",
      "Your influence network hasn't expanded in the past two years",
    ],
  },
  {
    title: "Career Direction",
    items: [
      "You feel ready for a bigger role but uncertain about the path",
      "Your career trajectory has plateaued despite strong performance",
    ],
  },
];

const DiagnosticSection = ({ onBookCall }: DiagnosticSectionProps) => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-label text-primary font-medium">Reflection</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Leadership Plateau <span className="text-gold-gradient">Diagnostic</span>
          </h2>
          <p className="text-muted-foreground max-prose mx-auto">
            Consider each statement below. If several resonate, a strategic repositioning conversation may be valuable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((cat, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-lg font-serif font-semibold text-gold-gradient">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground">
                    <Square className="w-4 h-4 text-border shrink-0 mt-0.5 rounded-sm" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" onClick={onBookCall}>
            Explore a Clarity Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
