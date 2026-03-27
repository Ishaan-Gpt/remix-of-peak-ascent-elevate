import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs uppercase tracking-label text-primary font-medium">A Personal Message</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Hear From <span className="text-gold-gradient">Gurmeet Bhatia</span>
          </h2>
          <p className="text-muted-foreground max-prose mx-auto">
            Discover why capable leaders get stuck despite strong performance, why hard work alone does not create promotions,
            and what strategic repositioning actually means for your career trajectory. Watch before booking your call.
          </p>
        </div>

        {/* Video Embed Placeholder */}
        <div className="relative rounded-2xl overflow-hidden card-shadow summit-glow aspect-video bg-card group cursor-pointer border border-primary/10">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
              <Play className="w-9 h-9 text-primary ml-1" />
            </div>
            <p className="text-sm text-muted-foreground">Video coming soon</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          A 3-minute introduction to how Peak Ascent works with senior leaders.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
