import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import mentoringImg from "@/assets/mentoring-conversation.png";

interface SelectiveEngagementSectionProps {
  onBookCall: () => void;
}

const forItems = [
  "Senior Managers, Directors, AVPs, VPs, and Delivery Leaders with a strong track record",
  "Leaders who sense their career has plateaued despite consistent high performance",
  "Professionals ready to take strategic ownership of how their leadership is perceived",
];

const notForItems = [
  "Early career professionals seeking general career guidance or mentoring",
  "Those looking for resume optimisation, interview coaching, or job search support",
  "Anyone seeking quick motivational advice rather than strategic repositioning",
];

const SelectiveEngagementSection = ({ onBookCall }: SelectiveEngagementSectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-label text-primary font-medium">Selective</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Peak Ascent Is A <span className="text-gold-gradient">Selective Engagement</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Mentoring Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="image-gold-border">
              <img
                src={mentoringImg}
                alt="Executive mentoring conversation"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* For */}
          <div className="bg-card rounded-xl p-8 card-shadow card-hover border border-primary/20">
            <h3 className="text-sm uppercase tracking-label text-primary font-medium mb-6">Who This Is Designed For</h3>
            <ul className="space-y-4">
              {forItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className="bg-card rounded-xl p-8 card-shadow card-hover border border-border/50">
            <h3 className="text-sm uppercase tracking-label text-muted-foreground font-medium mb-6">Who This Is Not For</h3>
            <ul className="space-y-4">
              {notForItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-muted-foreground/50 shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center space-y-6">
          <p className="text-muted-foreground italic">
            This engagement is designed for leaders who are ready to take strategic ownership of their career
            trajectory and leadership visibility — not for those seeking quick motivational solutions.
          </p>
          <Button variant="hero" size="lg" onClick={onBookCall}>
            Apply for a Clarity Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SelectiveEngagementSection;
