import { useEffect, useRef } from "react";

interface Candlestick {
  x: number;
  y: number;
  vx: number;
  vy: number;
  open: number;
  close: number;
  high: number;
  low: number;
  width: number;
}

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const candlesticksRef = useRef<Candlestick[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize candlesticks
    const numCandlesticks = 12;
    candlesticksRef.current = Array.from({ length: numCandlesticks }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: 0,
      vy: 0,
      open: 20 + Math.random() * 30,
      close: 20 + Math.random() * 30,
      high: 60 + Math.random() * 20,
      low: 10 + Math.random() * 10,
      width: 8 + Math.random() * 4,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const drawCandlestick = (candle: Candlestick) => {
      if (!ctx) return;

      const bodyTop = Math.min(candle.open, candle.close);
      const bodyBottom = Math.max(candle.open, candle.close);
      const bodyHeight = Math.abs(candle.close - candle.open);
      const isGreen = candle.close > candle.open;

      ctx.globalAlpha = 0.15;

      // Draw wick (high to low)
      ctx.strokeStyle = isGreen ? "#ffffff" : "#000000";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(candle.x + candle.width / 2, candle.y - candle.high);
      ctx.lineTo(candle.x + candle.width / 2, candle.y - candle.low);
      ctx.stroke();

      // Draw body
      ctx.fillStyle = isGreen ? "#ffffff" : "#000000";
      ctx.fillRect(candle.x, candle.y - bodyTop, candle.width, bodyHeight);
      
      // Draw body border
      ctx.strokeStyle = isGreen ? "#ffffff" : "#000000";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(candle.x, candle.y - bodyTop, candle.width, bodyHeight);
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      candlesticksRef.current.forEach((candle) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - candle.x;
        const dy = mouseRef.current.y - candle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = 150;

        // Apply repulsion force
        if (distance < minDistance) {
          const force = (minDistance - distance) / minDistance;
          candle.vx -= (dx / distance) * force * 2;
          candle.vy -= (dy / distance) * force * 2;
        }

        // Apply friction
        candle.vx *= 0.95;
        candle.vy *= 0.95;

        // Update position
        candle.x += candle.vx;
        candle.y += candle.vy;

        // Bounce off edges
        if (candle.x < 0 || candle.x > canvas.width) {
          candle.vx *= -0.5;
          candle.x = Math.max(0, Math.min(canvas.width, candle.x));
        }
        if (candle.y < 0 || candle.y > canvas.height) {
          candle.vy *= -0.5;
          candle.y = Math.max(0, Math.min(canvas.height, candle.y));
        }

        drawCandlestick(candle);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "multiply" }}
    />
  );
};
