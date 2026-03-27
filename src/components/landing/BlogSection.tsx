const articles = [
  {
    title: "Why High Performers Often Miss Senior Leadership Roles",
    excerpt:
      "Strong performance creates career momentum — but at senior levels, the rules change. Discover why execution alone stops translating into advancement.",
  },
  {
    title: "The Invisible Barrier Between Execution and Strategic Authority",
    excerpt:
      "Most capable leaders never realise the gap between being valued for what they deliver and being recognised for the strategic leader they could become.",
  },
  {
    title: "How Decision Makers Evaluate Leadership Influence",
    excerpt:
      "Senior promotions are shaped by perception, not just results. Learn how leadership influence is quietly assessed in organisations.",
  },
];

const BlogSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-label text-primary font-medium">
            Insights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Insights on Strategic Leadership and{" "}
            <span className="text-gold-gradient">Career Elevation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <div
              key={i}
              className="bg-card rounded-xl overflow-hidden card-shadow card-hover border border-primary/10 hover:border-primary/25 flex flex-col"
            >
              {/* Placeholder image area */}
              <div className="aspect-[16/9] bg-accent/40 flex items-center justify-center">
                <span className="text-xs text-muted-foreground/60 uppercase tracking-label">
                  Featured Image
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <h3 className="text-lg font-serif font-semibold text-foreground leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <span className="text-xs text-primary font-medium uppercase tracking-label cursor-pointer hover:underline">
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
