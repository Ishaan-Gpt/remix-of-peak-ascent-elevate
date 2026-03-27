import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What happens during the clarity call?",
    a: "The clarity call is a private, 30-minute conversation where we explore your current leadership position, identify what may be holding you back, and discuss whether strategic repositioning could shift your trajectory. It's reflective, not prescriptive.",
  },
  {
    q: "Who is Peak Ascent designed for?",
    a: "Peak Ascent is designed for experienced senior professionals — typically at manager, director, or VP level — who have a strong track record but feel their career progression has plateaued despite continued strong performance.",
  },
  {
    q: "Is the conversation confidential?",
    a: "Absolutely. Every conversation is held in complete confidence. What you share stays between us. This is a safe, professional space for honest reflection about your career.",
  },
  {
    q: "Is this coaching or advisory?",
    a: "Peak Ascent is a strategic advisory engagement, not traditional coaching. Rather than focusing on personal development goals, we focus on the strategic positioning decisions that shape how you're perceived and where opportunities flow.",
  },
  {
    q: "How long does the conversation last?",
    a: "The initial clarity call is approximately 30 minutes. If we move forward together, the advisory engagement is structured around your specific situation and timeline.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-label text-primary font-medium">Questions</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Frequently <span className="text-gold-gradient">Asked</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-primary py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
