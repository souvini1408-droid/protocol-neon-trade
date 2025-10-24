import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const LeadCaptureSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e email",
        variant: "destructive"
      });
      return;
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-lead-email', {
        body: { name, email }
      });

      if (error) throw error;

      toast({
        title: "Solicitação enviada! ✅",
        description: "Verifique seu email para receber o capítulo gratuito"
      });
      
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "📧 ENVIAR TRECHO GRATUITO"}
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
