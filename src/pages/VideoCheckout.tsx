import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { CTAButton } from "@/components/CTAButton";
import { X } from "lucide-react";

const VideoCheckout = () => {
  const navigate = useNavigate();
  const [videoUrl] = useState("https://www.youtube.com/embed/dQw4w9WgXcQ"); // Substitua pelo seu vídeo
  
  const handlePurchase = () => {
    window.open("https://pay.hotmart.com/X102550943O", "_blank");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      <InteractiveBackground />
      
      <div className="relative z-10 w-full max-w-4xl">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-glow border border-neon/20">
          <div className="mb-6">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-glow-strong">
              <iframe
                src={videoUrl}
                title="Vídeo do Produto"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              onClick={handlePurchase}
              className="flex-1 sm:flex-none sm:min-w-[200px] text-base md:text-lg"
            >
              💳 COMPRAR AGORA
            </CTAButton>
            
            <button
              onClick={handleCancel}
              className="flex-1 sm:flex-none sm:min-w-[200px] inline-flex items-center justify-center gap-2 bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 font-bold text-base md:text-lg px-8 py-6 rounded-lg transition-all duration-300 border border-border hover:border-neon/50"
            >
              <X className="h-5 w-5" />
              DESISTIR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCheckout;
