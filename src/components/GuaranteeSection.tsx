import { Shield } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-card border border-neon/30 rounded-2xl p-8 md:p-12 shadow-glow">
          <div className="flex-shrink-0">
            <div className="bg-neon/20 rounded-full p-6">
              <Shield className="h-16 w-16 text-neon" />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Garantia de <span className="text-neon">7 Dias</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Leia o ebook. Aplique o protocolo. Se em 7 dias você não sentir que seu 
              trading evoluiu, devolvemos 100% do seu investimento. Sem perguntas, 
              sem complicação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
