import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { LearnSection } from "@/components/LearnSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { PriceSection } from "@/components/PriceSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <LearnSection />
        <TestimonialSection />
        <PriceSection />
        <GuaranteeSection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
