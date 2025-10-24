import { Star } from "lucide-react";

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Rafael T.",
      role: "Trader há 3 anos",
      text: "Estava queimando minha conta todo mês por falta de disciplina. Depois de aplicar o protocolo gráfico, consegui manter 4 meses seguidos no positivo. O capítulo sobre gestão de risco me salvou uns R$ 8 mil fácil.",
      stars: 5
    },
    {
      name: "Marina S.",
      role: "Arquiteta, faz day trade nas horas vagas",
      text: "Eu entrava em operações por impulso e sempre me ferrava. O livro me mostrou que eu ignorava sinais óbvios do gráfico. Agora espero meu setup acontecer. Mês passado fiz 12% de gain seguindo o protocolo.",
      stars: 4
    },
    {
      name: "Carlos M.",
      role: "Ex-funcionário público, trader desde 2022",
      text: "Comprei mais por curiosidade, mas quando li a parte sobre psicologia do trader, me identifiquei demais. Percebi que meu problema não era técnico, era emocional. Hoje consigo segurar loss sem entrar em revenge trade.",
      stars: 4.5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">O que dizem</span>{" "}
            <span className="text-neon">Nossos Leitores</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-neon/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => {
                  const isFilled = i < Math.floor(testimonial.stars);
                  const isHalf = i === Math.floor(testimonial.stars) && testimonial.stars % 1 !== 0;
                  
                  if (isHalf) {
                    return (
                      <div key={i} className="relative h-5 w-5">
                        <Star className="h-5 w-5 text-neon absolute" />
                        <Star 
                          className="h-5 w-5 text-neon fill-neon absolute" 
                          style={{ clipPath: 'inset(0 50% 0 0)' }}
                        />
                      </div>
                    );
                  }
                  
                  return (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 text-neon ${isFilled ? 'fill-neon' : ''}`}
                    />
                  );
                })}
              </div>
              
              <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
