import ebookCover from "@/assets/ebook-cover-transparent.png";
import { CTAButton } from "./CTAButton";

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
                📥 COMPRAR AGORA – R$ 39,90
              </CTAButton>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center animate-scale-in">
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-neon/20 blur-3xl rounded-full animate-pulse" />
              <img
                src={ebookCover}
                alt="O Protocolo do Gráfico - Mente do Trader"
                className="relative w-full max-w-md drop-shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 group-hover:drop-shadow-[0_0_50px_rgba(132,204,22,0.6)] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
