const companies = [
  { name: "Deloitte", short: "Deloitte" },
  { name: "McKinsey & Company", short: "McKinsey" },
  { name: "Accenture", short: "Accenture" },
  { name: "PwC", short: "PwC" },
  { name: "KPMG", short: "KPMG" },
  { name: "IBM", short: "IBM" },
];

const CompanyLogosSection = () => {
  return (
    <section className="py-14 bg-background border-t border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-label text-muted-foreground font-medium mb-10">
          Trusted by Leaders From Top Global Organisations
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-center px-4 py-2 opacity-50 hover:opacity-80 transition-opacity duration-300"
            >
              <span className="text-lg sm:text-xl font-serif font-semibold text-foreground tracking-wide">
                {c.short}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosSection;
