import { CheckCircle2 } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Estratégias práticas de análise gráfica",
    "Técnicas de controle emocional no trading",
    "Protocolo operacional diário completo",
    "Método para eliminar erros recorrentes"
  ];

  return (
    <section id="sobre" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-black/30" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <div className="w-full max-w-sm mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-glow-strong">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                <source src="/videos/protocolo-grafico.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>
          
          <div className="flex-1 space-y-4 lg:space-y-6 animate-fade-in px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-foreground">Sobre o</span>{" "}
              <span className="text-neon">Livro</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              <strong className="text-foreground">O Protocolo do Gráfico - Mente do Trader</strong> não é apenas mais um manual de análise técnica.
              É um guia completo que une <span className="text-neon">estratégia gráfica</span> com <span className="text-neon">mentalidade vencedora</span>.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Aprenda a ler os gráficos com clareza, montar seu protocolo operacional e desenvolver 
              a disciplina necessária para ser consistente, mesmo nos dias mais desafiadores do mercado.
            </p>
            
            <div className="space-y-3 lg:space-y-4 pt-2 lg:pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-neon flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
