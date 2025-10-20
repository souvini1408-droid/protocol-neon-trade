import ebookCover from "@/assets/ebook-cover-3d.jpg";
import { CTAButton } from "./CTAButton";
import { Interactive3DBook } from "./Interactive3DBook";

export const HeroSection = () => {
  const scrollToPrice = () => {
    const priceSection = document.getElementById("preco");
    priceSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-black" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-neon text-sm font-bold tracking-wider uppercase">
                Ebook Exclusivo
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">O Protocolo do</span>
              <br />
              <span className="text-neon">Gráfico</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Domine a mentalidade e as técnicas que transformam traders medianos em operadores consistentes
            </p>
            
            <div className="pt-4">
              <CTAButton onClick={scrollToPrice} className="w-full sm:w-auto">
                📥 COMPRAR AGORA – R$ 115,99
              </CTAButton>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center animate-scale-in">
            <div className="relative w-full max-w-md">
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
