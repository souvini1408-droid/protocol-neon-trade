import { useNavigate } from "react-router-dom";
import ebookCover from "@/assets/ebook-cover-3d.jpg";
import { CTAButton } from "./CTAButton";
import { Interactive3DBook } from "./Interactive3DBook";

export const HeroSection = () => {
  const navigate = useNavigate();
  
  const handlePurchase = () => {
    navigate("/video");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left space-y-4 lg:space-y-6 animate-fade-in px-2">
            <div className="inline-block">
              <span className="text-neon text-xs md:text-sm font-bold tracking-wider uppercase">
                Ebook Exclusivo
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-foreground">O Protocolo do</span>
              <br />
              <span className="text-neon">Gráfico</span>
              <br />
              <span className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Mente do Trader</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed px-2">
              Domine a mentalidade e as técnicas que transformam traders medianos em operadores consistentes
            </p>
            
            <div className="pt-2 lg:pt-4">
              <CTAButton onClick={handlePurchase} className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 py-3 sm:py-4">
                📥 COMPRAR AGORA – R$ 115,99
              </CTAButton>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center animate-scale-in w-full">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <Interactive3DBook
                src={ebookCover}
                alt="O Protocolo do Gráfico - Mente do Trader"
                className="w-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
