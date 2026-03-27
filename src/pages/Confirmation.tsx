import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import peakLogo from "@/assets/peak-logo.png";
import { CheckCircle, Calendar, Target, Users, Compass, MessageSquare } from "lucide-react";

const exploreBullets = [
  "How your leadership is currently perceived by senior decision-makers",
  "The gap between your operational contribution and your strategic visibility",
  "What specific positioning shifts could accelerate your next promotion",
  "A clear understanding of your leadership elevation trajectory",
];

const preparationSteps = [
  "Reflect on the leadership role you feel ready for — and what has prevented you from stepping into it",
  "Consider the career challenge that concerns you most at this stage",
  "Think about what success would look like twelve months from now",
];

const audiencePoints = [
  "Senior Managers and Directors seeking their next leadership move",
  "AVPs and VPs navigating the transition from execution to strategic authority",
  "Delivery Leaders who want to be recognised for strategic impact, not just operational results",
];

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Confirmed */}
      <section className="hero-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <img src={peakLogo} alt="Peak Ascent" className="w-16 h-16 mx-auto summit-glow" />
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Your Strategic Clarity Call Is{" "}
            <span className="text-primary">Confirmed</span>
          </h1>
          <p className="text-muted-foreground max-prose mx-auto text-lg">
            This is the beginning of a thoughtful conversation about your leadership trajectory
            and what strategic repositioning could look like for you.
          </p>
          <Button variant="gold_outline" size="lg" className="gap-2">
            <Calendar className="w-4 h-4" />
            Add to Calendar
          </Button>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Section 2: What We Will Explore */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-4">
            <Target className="w-8 h-8 text-primary mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              What We Will <span className="text-primary">Explore Together</span>
            </h2>
          </div>
          <ul className="space-y-4">
            {exploreBullets.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-muted-foreground">
                <span className="text-primary font-serif text-lg font-bold mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Section 3: How To Prepare */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-4">
            <Compass className="w-8 h-8 text-primary mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              How To Prepare For <span className="text-primary">The Conversation</span>
            </h2>
          </div>
          <div className="bg-card rounded-xl p-8 card-shadow space-y-5 border border-border/50">
            {preparationSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 text-muted-foreground">
                <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Section 4: Orientation Video */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-4">
            <MessageSquare className="w-8 h-8 text-primary mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              A Brief Welcome from <span className="text-primary">Gurmeet</span>
            </h2>
          </div>
          <div className="aspect-video bg-card rounded-xl card-shadow flex items-center justify-center border border-border/50">
            <p className="text-muted-foreground text-sm">Welcome video coming soon</p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Section 5: Who This Is For */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-4">
            <Users className="w-8 h-8 text-primary mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Who This Conversation Is <span className="text-primary">For</span>
            </h2>
          </div>
          <ul className="space-y-4">
            {audiencePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Section 6: Closing */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <img src={peakLogo} alt="Peak Ascent" className="w-14 h-14 mx-auto" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground">
            Your Next Leadership Chapter May Require{" "}
            <span className="text-primary">Strategic Repositioning</span>
          </h2>
          <p className="text-muted-foreground max-prose mx-auto">
            We look forward to a meaningful conversation about your leadership trajectory.
          </p>
          <Link to="/">
            <Button variant="gold_outline" size="lg">
              Return to Peak Ascent
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Confirmation;
