import { Button } from "@/components/ui/button";
import { CheckSquare } from "lucide-react";
import coachingImg from "@/assets/coaching-discussion.png";

interface ClarityCallSectionProps {
  onBookCall: () => void;
}

const bullets = [
  <>Discover the <strong className="text-foreground">one hidden factor</strong> quietly limiting your promotion trajectory</>,
  <>Understand how <strong className="text-foreground">senior decision-makers</strong> currently perceive your leadership potential</>,
  <>Gain clarity on the <strong className="text-foreground">strategic repositioning</strong> needed to move from execution to influence</>,
  <>Leave with a clear, <strong className="text-foreground">actionable roadmap</strong> for your next leadership move</>,
];

const ClarityCallSection = ({ onBookCall }: ClarityCallSectionProps) => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Book Your Career <span className="text-gold-gradient">Clarity Call</span>
            </h2>

            {/* Value Statement */}
            <p className="text-base sm:text-lg text-muted-foreground italic max-prose">
              This is not a coaching session. It is a <strong className="text-foreground not-italic">strategic diagnostic conversation</strong> where
              we analyse how your leadership is currently perceived, identify the invisible barriers slowing your progression,
              and outline a clear path to becoming a recognised strategic authority.
            </p>

            {/* Qualification Bullets */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground italic">
                In this conversation you will
              </p>
              <ul className="space-y-3">
                {bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckSquare className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm sm:text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start gap-4 pt-4">
              <Button variant="hero" size="lg" className="text-base px-10 py-6" onClick={onBookCall}>
                Book Your Clarity Call Now
              </Button>
              <p className="text-sm text-muted-foreground italic">
                An executive level conversation delivering actionable insight and a clear roadmap.
              </p>
            </div>

            {/* Social Proof */}
            <blockquote className="border-t border-border pt-6 mt-6">
              <p className="text-sm sm:text-base text-muted-foreground italic">
                "After this clarity call I was able to reposition my role and gain recognition
                for work that had previously gone unnoticed."
              </p>
            </blockquote>
          </div>

          {/* Coaching Image */}
          <div className="hidden lg:flex justify-center">
            <div className="image-gold-border">
              <img
                src={coachingImg}
                alt="Executive strategic advisory conversation"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClarityCallSection;
