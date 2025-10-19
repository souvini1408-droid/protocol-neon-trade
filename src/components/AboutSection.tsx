import ebookCover from "@/assets/ebook-cover-real.jpeg";
import { CheckCircle2 } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Estratégias práticas de análise gráfica",
    "Técnicas de controle emocional no trading",
    "Protocolo operacional diário completo",
    "Método para eliminar erros recorrentes"
  ];

  return (
    <section id="sobre" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <img
              src={ebookCover}
              alt="O Protocolo do Gráfico"
              className="w-full max-w-sm mx-auto drop-shadow-2xl"
            />
          </div>
          
          <div className="flex-1 space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground">Sobre o</span>{" "}
              <span className="text-neon">Livro</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">O Protocolo do Gráfico</strong> não é apenas mais um manual de análise técnica.
              É um guia completo que une <span className="text-neon">estratégia gráfica</span> com <span className="text-neon">mentalidade vencedora</span>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aprenda a ler os gráficos com clareza, montar seu protocolo operacional e desenvolver 
              a disciplina necessária para ser consistente, mesmo nos dias mais desafiadores do mercado.
            </p>
            
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-neon flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
