import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const LeadCaptureSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e email",
        variant: "destructive"
      });
      return;
    }
    
    // Aqui você integraria com seu serviço de email marketing
    console.log("Lead captured:", { name, email });
    
    toast({
      title: "Sucesso!",
      description: "Verifique seu email para baixar o trecho gratuito"
    });
    
    setName("");
    setEmail("");
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-neon rounded-2xl p-8 md:p-12 text-center">
          <Download className="h-16 w-16 mx-auto mb-6 text-background" />
          
          <h3 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Baixe um Trecho GRATUITO
          </h3>
          <p className="text-lg text-background/90 mb-8 max-w-2xl mx-auto">
            Veja com seus próprios olhos a qualidade do conteúdo. 
            Receba agora um capítulo completo no seu email.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background/90 border-background text-foreground placeholder:text-muted-foreground"
            />
            <Input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/90 border-background text-foreground placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              className="w-full bg-background text-neon hover:bg-background/90 font-bold text-lg py-6"
            >
              📧 ENVIAR TRECHO GRATUITO
            </Button>
          </form>
          
          <p className="text-sm text-background/80 mt-4">
            Não enviamos spam. Seus dados estão seguros.
          </p>
        </div>
      </div>
    </section>
  );
};
