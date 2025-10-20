import { useState, useRef, MouseEvent } from "react";

interface Interactive3DBookProps {
  src: string;
  alt: string;
  className?: string;
}

export const Interactive3DBook = ({ src, alt, className = "" }: Interactive3DBookProps) => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = ((centerY - y) / centerY) * 15;

    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
      style={{ perspective: "1000px" }}
    >
      <img
        src={src}
        alt={alt}
        className={`transition-transform duration-200 ease-out ${className}`}
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(1.05)`,
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
};
