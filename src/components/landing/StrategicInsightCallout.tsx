import { Lightbulb } from "lucide-react";

interface StrategicInsightCalloutProps {
  text: string;
}

const StrategicInsightCallout = ({ text }: StrategicInsightCalloutProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-card/80 border border-primary/20 rounded-xl p-8 sm:p-10 space-y-3">
        <div className="flex items-center gap-3">
          <Lightbulb className="w-5 h-5 text-primary" />
          <span className="text-xs uppercase tracking-label font-semibold text-gold-gradient">
            Strategic Insight
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
          {text}
        </p>
      </div>
    </div>
  );
};

export default StrategicInsightCallout;
