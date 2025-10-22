import { Check } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { CountdownTimer } from "./CountdownTimer";

export const PriceSection = () => {
  const includes = [
    "Ebook completo em PDF",
    "Acesso imediato após pagamento",
    "Leitura em qualquer dispositivo",
    "Atualizações gratuitas",
    "Suporte via email"
  ];

  const handlePurchase = () => {
    window.open("https://pay.hotmart.com/X102550943O", "_blank");
  };

  return (
    <section id="preco" className="py-20 px-4 bg-gradient-to-b from-background to-neon-dark/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in space-y-6">
          <div className="flex justify-center">
            <CountdownTimer />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Transforme Seu</span>{" "}
            <span className="text-neon">Trading Hoje</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Investimento único para resultados duradouros
          </p>
        </div>
        
        <div className="bg-card border-2 border-neon/50 rounded-2xl p-8 md:p-12 shadow-glow-strong animate-scale-in">
          <div className="text-center mb-8">
            <div className="mb-4">
              <span className="text-muted-foreground line-through text-3xl md:text-4xl">De R$ 299,00</span>
            </div>
            <div className="mb-2">
              <span className="text-2xl text-muted-foreground">Por apenas</span>
            </div>
            <div className="text-6xl md:text-8xl font-bold text-neon mb-2">
              R$ 115,99
            </div>
            <div className="inline-block bg-destructive/20 text-destructive px-4 py-2 rounded-full font-bold text-lg mb-4">
              61% DE DESCONTO
            </div>
            <p className="text-lg text-muted-foreground">
              Pagamento único • Acesso vitalício
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-neon/20 rounded-full p-1">
                  <Check className="h-5 w-5 text-neon" />
                </div>
                <p className="text-lg text-foreground">{item}</p>
              </div>
            ))}
          </div>
          
          <CTAButton onClick={handlePurchase} className="w-full text-xl py-8">
            📥 GARANTIR DESCONTO – R$ 115,99
          </CTAButton>
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            🔒 Pagamento 100% seguro via Hotmart
          </p>
        </div>
      </div>
    </section>
  );
};
