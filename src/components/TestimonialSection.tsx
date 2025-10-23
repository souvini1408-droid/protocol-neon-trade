import { Star } from "lucide-react";

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Rafael T.",
      role: "Trader Independente",
      text: "Depois que li, minha forma de operar mudou. Simples, direto e eficaz."
    },
    {
      name: "Marina S.",
      role: "Day Trader",
      text: "Finalmente entendi o que estava fazendo errado. O protocolo mudou meu jogo completamente."
    },
    {
      name: "Carlos M.",
      role: "Swing Trader",
      text: "A parte sobre mentalidade valeu cada centavo. Agora opero com muito mais consistência."
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
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-neon fill-neon" />
                ))}
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
