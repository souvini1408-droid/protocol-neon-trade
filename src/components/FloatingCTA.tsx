import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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
    navigate("/video");
  };

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
      )}
    >
      <CTAButton onClick={handlePurchase} className="shadow-2xl">
        📥 R$ 113,90
      </CTAButton>
    </div>
  );
};
