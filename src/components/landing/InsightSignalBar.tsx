const phrases = [
  "Strategic Leadership Positioning",
  "Executive Influence Development",
  "Accelerated Career Growth",
];

const InsightSignalBar = () => {
  return (
    <div className="bg-card/80 border-y border-border/50 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
          {phrases.map((phrase, i) => (
            <span key={i} className="flex items-center gap-6 sm:gap-10">
              {i > 0 && (
                <span className="hidden sm:block w-px h-4 bg-primary/30" />
              )}
              <span className="text-xs sm:text-sm tracking-label uppercase text-muted-foreground font-medium">
                {phrase}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightSignalBar;
