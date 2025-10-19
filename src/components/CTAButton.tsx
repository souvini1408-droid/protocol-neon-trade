import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const CTAButton = ({ className, children, onClick }: CTAButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "bg-primary text-primary-foreground hover:bg-neon-light font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 shadow-glow hover:shadow-glow-strong hover:scale-105",
        className
      )}
    >
      <ShoppingCart className="mr-2 h-5 w-5" />
      {children}
    </Button>
  );
};
