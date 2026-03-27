import { Button } from "@/components/ui/button";
import { TrendingUp, Eye, Target, Compass } from "lucide-react";
import skylineBg from "@/assets/skyline-bg.jpg";

interface PlateauRecognitionSectionProps {
  onBookCall: () => void;
}

const insights = [
  {
    icon: TrendingUp,
    title: "Delivering Consistently, Watching Others Move Ahead",
    description: "You consistently exceed expectations yet watch less capable peers advance into leadership roles — because they are positioned differently, not performing better.",
  },
  {
    icon: Target,
    title: "Respected Operationally, Not Seen as Strategic",
    description: "Your team and peers value your expertise, but senior decision-makers see you as a strong executor rather than a strategic leader ready for the next level.",
  },
  {
    icon: Eye,
    title: "Capable of Greater Impact, Unsure How to Reposition",
    description: "You know you are ready for more responsibility and influence, but the path from operational excellence to strategic authority remains unclear.",
  },
  {
    icon: Compass,
    title: "Visibility and Influence Shape Promotion Decisions",
    description: "You are beginning to realise that the leaders who advance are not always the most capable — they are the most strategically visible to the people who make decisions.",
  },
];

const PlateauRecognitionSection = ({ onBookCall }: PlateauRecognitionSectionProps) => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Skyline atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${skylineBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          opacity: 0.04,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-label text-primary font-medium">Recognition</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            The Hidden Ceiling Many Capable Leaders{" "}
            <span className="text-gold-gradient">Eventually Hit</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {insights.map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-8 card-shadow card-hover space-y-4 border border-primary/10 hover:border-primary/25">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-8">
          <p className="text-lg text-muted-foreground italic max-prose mx-auto">
            At senior levels, promotions are rarely decided by performance alone. They are shaped by how your leadership is perceived by the people who make those decisions.
          </p>
          <Button variant="hero" size="lg" onClick={onBookCall}>
            Explore Strategic Positioning
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlateauRecognitionSection;
