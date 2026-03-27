import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface ImmediateBookingSectionProps {
  onBookCall: () => void;
}

const ImmediateBookingSection = ({ onBookCall }: ImmediateBookingSectionProps) => {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
          Ready to Break the <span className="text-primary">Plateau</span>?
        </h2>
        <p className="text-muted-foreground max-prose mx-auto">
          The clarity call is a private, focused conversation designed to understand your current leadership position, 
          explore what's holding you back, and identify the strategic shifts that could change your trajectory. 
          No obligation. No pressure. Just clarity.
        </p>
        
        {/* Calendly placeholder */}
        <div className="bg-card rounded-xl p-8 sm:p-12 card-shadow max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-semibold text-foreground">Schedule Your Clarity Call</h3>
              <p className="text-sm text-muted-foreground">
                Select a time that works for your schedule
              </p>
            </div>
            <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={onBookCall}>
              Schedule Your Clarity Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmediateBookingSection;
