import { Button } from "@/components/ui/button";
import peakLogo from "@/assets/peak-logo.png";
import skylineBg from "@/assets/skyline-bg.jpg";

interface FinalCTASectionProps {
  onBookCall: () => void;
}

const FinalCTASection = ({ onBookCall }: FinalCTASectionProps) => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: 'hsl(220, 60%, 8%)' }}>
      {/* Skyline atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${skylineBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          opacity: 0.06,
        }}
      />

      {/* Summit glow — stronger */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[700px] h-[700px] rounded-full opacity-[0.14]"
          style={{ background: "radial-gradient(circle, hsl(42, 55%, 53%) 0%, transparent 70%)" }}
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.5)' }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <span className="text-xs uppercase tracking-label text-primary font-medium">Your Next Chapter</span>
        
        <img src={peakLogo} alt="Peak Ascent" className="w-16 h-16 mx-auto" />

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.15]">
          Your Next Promotion Decision Is Being{" "}
          <span className="text-gold-gradient">Shaped Right Now</span>
        </h2>

        <p className="text-muted-foreground max-prose mx-auto">
          Many leaders realise too late that their next promotion decision was shaped long before
          the appraisal conversation began. The leaders who advance are not always the most capable —
          they are the most strategically positioned.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-10 py-6" onClick={onBookCall}>
            Begin Your Strategic Clarity Conversation
          </Button>
          <p className="text-xs text-muted-foreground/60 italic">
            Limited Clarity Calls Available This Week
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs text-muted-foreground">
          <span>Private conversation</span>
          <span className="hidden sm:inline text-primary/40">·</span>
          <span>Confidential</span>
          <span className="hidden sm:inline text-primary/40">·</span>
          <span>No obligation</span>
        </div>

        {/* Supertransformed Consulting branding */}
        <div className="pt-16 space-y-2">
          <p className="text-[11px] tracking-[0.25em] font-sans font-medium text-gold-gradient" style={{ opacity: 0.5 }}>
            A STRATEGIC LEADERSHIP PROGRAM BY
          </p>
          <p className="text-sm tracking-[0.3em] font-sans font-semibold text-gold-gradient" style={{ opacity: 0.45 }}>
            SUPERTRANSFORMED CONSULTING
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
