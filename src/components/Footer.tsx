export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-secondary border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            © 2025 O Protocolo dos Gráficos. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Este produto não garante resultados financeiros. Trading envolve riscos.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-neon transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
