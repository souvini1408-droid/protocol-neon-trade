import { TrendingUp, Brain, Target, AlertCircle } from "lucide-react";

export const LearnSection = () => {
  const topics = [
    {
      icon: TrendingUp,
      title: "Padrões de Entrada Confiáveis",
      description: "Identifique setups de alta probabilidade e aprenda a filtrar sinais falsos"
    },
    {
      icon: Brain,
      title: "Disciplina em Dias Voláteis",
      description: "Técnicas para manter a cabeça fria e seguir seu plano em qualquer cenário"
    },
    {
      icon: Target,
      title: "Protocolo Operacional Diário",
      description: "Monte sua rotina de trade com checklist prático e objetivo"
    },
    {
      icon: AlertCircle,
      title: "Elimine Erros Recorrentes",
      description: "Pare de cometer os mesmos erros e evolua como trader profissional"
    }
  ];

  return (
    <section id="aprender" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">O que você vai</span>{" "}
            <span className="text-neon">Aprender</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conteúdo prático e direto ao ponto para transformar sua operação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-neon/50 transition-all duration-300 hover:shadow-glow animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <topic.icon className="h-12 w-12 text-neon mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-neon transition-colors">
                {topic.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
