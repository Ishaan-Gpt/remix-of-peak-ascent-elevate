import { Briefcase, Award, Shield, Clock } from "lucide-react";
import gurmeetFormal from "@/assets/gurmeet-formal.png";

const profiles = [
  { role: "Senior Manager", org: "Global Consulting Firm", icon: Briefcase },
  { role: "Delivery Leader", org: "Technology Services Organisation", icon: Award },
  { role: "Director", org: "International Advisory Firm", icon: Shield },
];

const reflections = [
  "\"The conversation helped me see that my challenge wasn't about working harder — it was about how I was being perceived at the leadership table.\"",
  "\"For the first time, I had a clear framework for understanding why strong performance alone wasn't translating into career progression.\"",
];

const credentials = [
  "ICF Trained Coach",
  "NLP Master Practitioner",
  "CBT Specialist",
  "25 Years Corporate Leadership",
];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leaders section */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-label text-primary font-medium">Authority</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Leaders Who Engage With <span className="text-gold-gradient">This Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {profiles.map((p, i) => (
            <div key={i} className="bg-card rounded-xl p-8 card-shadow card-hover text-center space-y-4 border border-primary/10 hover:border-primary/25">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground">{p.role}</h3>
              <p className="text-sm text-muted-foreground">{p.org}</p>
            </div>
          ))}
        </div>

        {/* Reflections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {reflections.map((r, i) => (
            <div key={i} className="bg-card rounded-xl p-8 card-shadow border-l-2 border-primary/40">
              <p className="text-muted-foreground text-sm leading-relaxed italic">{r}</p>
            </div>
          ))}
        </div>

        {/* About Gurmeet */}
        <div className="border-t border-border pt-20">
          <div className="text-center space-y-4 mb-12">
            <span className="text-xs uppercase tracking-label text-primary font-medium">Credentials & Experience</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              About <span className="text-gold-gradient">Gurmeet Bhatia</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                {/* Radial glow behind portrait */}
                <div className="absolute inset-0 -m-8 rounded-full blur-3xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle, hsl(42, 55%, 53%, 0.08) 0%, transparent 70%)' }}
                />
                <div className="w-80 h-96 rounded-2xl overflow-hidden image-gold-border portrait-glow relative">
                  <img src={gurmeetFormal} alt="Gurmeet Bhatia" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
             <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                With over two decades of corporate leadership experience across global organisations, Gurmeet Bhatia
                advises senior professionals at the pivotal moment where strong performance alone stops creating career
                progression. He is the creator of the Peak Ascent Strategic Repositioning Framework.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His advisory work draws on deep expertise in executive leadership psychology, stakeholder influence
                dynamics, and organisational perception. Gurmeet helps leaders move beyond being valued for execution
                to being recognised as strategic authorities who shape decisions at the highest levels.
              </p>
              <p className="text-sm text-muted-foreground/80">
                Founder, <span className="text-foreground">Supertransformed Consulting</span>
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-4">
                {credentials.map((c, i) => (
                  <span key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    {i > 0 && <span className="text-primary/40">·</span>}
                    <Clock className="w-3 h-3 text-primary/60" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
