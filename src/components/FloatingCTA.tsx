import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handlePurchase = () => {
    window.open("https://pay.hotmart.com/X102550943O", "_blank");
  };

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
      )}
    >
      <CTAButton onClick={handlePurchase} className="shadow-2xl">
        📥 R$ 115,99
      </CTAButton>
    </div>
  );
};
