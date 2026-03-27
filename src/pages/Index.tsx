import { useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import InsightSignalBar from "@/components/landing/InsightSignalBar";
import CompanyLogosSection from "@/components/landing/CompanyLogosSection";
import ClarityCallSection from "@/components/landing/ClarityCallSection";
import PlateauRecognitionSection from "@/components/landing/PlateauRecognitionSection";
import StrategicInsightCallout from "@/components/landing/StrategicInsightCallout";
import FutureIdentitySection from "@/components/landing/FutureIdentitySection";
import FrameworkSection from "@/components/landing/FrameworkSection";
import CareerPathSection from "@/components/landing/CareerPathSection";
import VideoSection from "@/components/landing/VideoSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import SelectiveEngagementSection from "@/components/landing/SelectiveEngagementSection";
import DiagnosticSection from "@/components/landing/DiagnosticSection";
import FAQSection from "@/components/landing/FAQSection";
import ReflectionSection from "@/components/landing/ReflectionSection";
import BlogSection from "@/components/landing/BlogSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import StickyBookButton from "@/components/landing/StickyBookButton";
import StickyHeader from "@/components/landing/StickyHeader";
import BookingModal from "@/components/landing/BookingModal";
import FadeInSection from "@/components/landing/FadeInSection";

const GoldDivider = () => <div className="gold-divider" />;

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <main>
      <HeroSection onBookCall={openBooking} />
      <InsightSignalBar />
      <GoldDivider />
      <FadeInSection>
        <CompanyLogosSection />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <ClarityCallSection onBookCall={openBooking} />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <PlateauRecognitionSection onBookCall={openBooking} />
      </FadeInSection>
      <FadeInSection>
        <StrategicInsightCallout
          text="Many high-performing leaders believe promotion depends primarily on performance. In reality, senior leadership advancement is often determined by perceived strategic influence rather than execution capability alone."
        />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <FutureIdentitySection onBookCall={openBooking} />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <FrameworkSection onBookCall={openBooking} />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <CareerPathSection onBookCall={openBooking} />
      </FadeInSection>
      <FadeInSection>
        <StrategicInsightCallout
          text="The leaders who reach the highest levels of an organisation do not simply outperform their peers — they strategically shape how their leadership is perceived by the people who make advancement decisions."
        />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <VideoSection />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <SocialProofSection />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <SelectiveEngagementSection onBookCall={openBooking} />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <DiagnosticSection onBookCall={openBooking} />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <FAQSection />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <ReflectionSection />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <BlogSection />
      </FadeInSection>
      <GoldDivider />
      <FadeInSection>
        <FinalCTASection onBookCall={openBooking} />
      </FadeInSection>
      <StickyBookButton onBookCall={openBooking} />
      <StickyHeader onBookCall={openBooking} />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </main>
  );
};

export default Index;
