const ReflectionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs uppercase tracking-label text-primary font-medium">Reflection</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
          Your Next Promotion Decision May Already Be{" "}
          <span className="text-gold-gradient">Taking Shape</span>
        </h2>
        <p className="text-muted-foreground max-prose mx-auto text-lg">
          Promotion decisions are often shaped months before the appraisal cycle — through perception,
          stakeholder conversations, and leadership positioning that happens long before any formal review begins.
        </p>
      </div>
    </section>
  );
};

export default ReflectionSection;
