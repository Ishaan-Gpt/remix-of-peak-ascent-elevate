import { Button } from "@/components/ui/button";

interface FutureIdentitySectionProps {
  onBookCall: () => void;
}

const beforeItems = [
  "Known for operational excellence but overlooked for strategic roles",
  "Strong performance reviews but no movement toward senior leadership",
  "Invisible to the decision-makers who shape promotion outcomes",
];

const afterItems = [
  "Recognised as a strategic voice in leadership conversations",
  "Positioned as the natural choice when senior roles open",
  "Career trajectory aligned with your capability and ambition",
];

const FutureIdentitySection = ({ onBookCall }: FutureIdentitySectionProps) => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-label text-primary font-medium">Possibility</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            The Shift From Execution to <span className="text-gold-gradient">Strategic Authority</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Before */}
          <div className="bg-card rounded-xl p-8 card-shadow card-hover border border-border/50">
            <h3 className="text-sm uppercase tracking-label text-muted-foreground font-medium mb-6">Before</h3>
            <ul className="space-y-4">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-card rounded-xl p-8 card-shadow card-hover border border-primary/20">
            <h3 className="text-sm uppercase tracking-label text-primary font-medium mb-6">After</h3>
            <ul className="space-y-4">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center space-y-6">
          <p className="text-muted-foreground max-prose mx-auto">
            Promotions to senior leadership are rarely based on performance alone. They are based on strategic perception —
            how decision-makers see your leadership potential. Peak Ascent helps you bridge that gap.
          </p>
          <Button variant="hero" size="lg" onClick={onBookCall}>
            Begin Your Repositioning
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FutureIdentitySection;
