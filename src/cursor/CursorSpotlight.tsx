import { useEffect, useRef } from "react";

export interface CursorSpotlightProps {
  size?: number;
  color?: string;
  blur?: number;
  opacity?: number;
}

export const CursorSpotlight: React.FC<CursorSpotlightProps> = ({
  size = 200,
  color = "#ffffff",
  blur = 100,
  opacity = 0.3,
}) => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current.x = e.clientX;
      positionRef.current.y = e.clientY;
    };

    const animate = () => {
      const pos = positionRef.current;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate(${pos.x - size / 2}px, ${
          pos.y - size / 2
        }px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [size]);

  if (typeof window === "undefined") return null;

  return (
    <div
      ref={spotlightRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        opacity,
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
      }}
    />
  );
};
