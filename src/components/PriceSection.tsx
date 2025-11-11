import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { CountdownTimer } from "./CountdownTimer";

export const PriceSection = () => {
  const navigate = useNavigate();
  
  const includes = [
    "Ebook completo em PDF",
    "Vídeo aulas exclusivas",
    "Sala de sinais VIP",
    "Acesso imediato após pagamento",
    "Atualizações gratuitas"
  ];

  const handlePurchase = () => {
    navigate("/video");
  };

  return (
    <section id="preco" className="py-20 px-4 bg-gradient-to-b from-background to-neon-dark/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in space-y-4 lg:space-y-6 px-2">
          <div className="flex justify-center">
            <CountdownTimer />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Transforme Seu</span>{" "}
            <span className="text-neon">Trading Hoje</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-2">
            Investimento único para resultados duradouros
          </p>
        </div>
        
        <div className="bg-card border-2 border-neon/50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-glow-strong animate-scale-in">
          <div className="text-center mb-6 sm:mb-8">
            <div className="mb-3 sm:mb-4">
              <span className="text-muted-foreground line-through text-2xl sm:text-3xl md:text-4xl">De R$ 299,00</span>
            </div>
            <div className="mb-2">
              <span className="text-xl sm:text-2xl text-muted-foreground">Por apenas</span>
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neon mb-2">
              R$ 113,90
            </div>
            <div className="inline-block bg-destructive/20 text-destructive px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-base sm:text-lg mb-3 sm:mb-4">
              61% DE DESCONTO
            </div>
            <p className="text-base sm:text-lg text-muted-foreground px-2">
              Pagamento único • Acesso vitalício
            </p>
          </div>
          
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-neon/20 rounded-full p-1">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-neon flex-shrink-0" />
                </div>
                <p className="text-base sm:text-lg text-foreground">{item}</p>
              </div>
            ))}
          </div>
          
          <CTAButton onClick={handlePurchase} className="w-full text-base sm:text-lg md:text-xl py-6 sm:py-7 md:py-8">
            📥 GARANTIR DESCONTO – R$ 113,90
          </CTAButton>
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            🔒 Pagamento 100% seguro via Hotmart
          </p>
        </div>
      </div>
    </section>
  );
};
