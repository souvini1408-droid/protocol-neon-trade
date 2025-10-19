import { TrendingUp } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-neon p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-background" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-foreground">Protocolo dos</span>{" "}
              <span className="text-neon">Gráficos</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
