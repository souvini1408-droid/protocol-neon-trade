import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reinicia o timer quando chega a 0
          return 10 * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="inline-flex items-center gap-3 bg-destructive/20 border-2 border-destructive px-6 py-3 rounded-lg animate-pulse">
      <Clock className="h-6 w-6 text-destructive" />
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Oferta expira em:</span>
        <span className="text-2xl font-bold text-destructive tabular-nums">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};
