import { useEffect, useRef } from "react";

export interface CursorGlowProps {
  color?: string;
  size?: number;
  smoothness?: number;
}

export const CursorGlow: React.FC<CursorGlowProps> = ({
  color = "#00ffff",
  size = 20,
  smoothness = 0.15,
}) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current.targetX = e.clientX;
      positionRef.current.targetY = e.clientY;
    };

    const animate = () => {
      const pos = positionRef.current;
      pos.x += (pos.targetX - pos.x) * smoothness;
      pos.y += (pos.targetY - pos.y) * smoothness;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.x - size / 2}px, ${
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
  }, [size, smoothness]);

  if (typeof window === "undefined") return null;

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
      }}
    />
  );
};
