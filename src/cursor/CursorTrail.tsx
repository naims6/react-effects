import { useEffect, useRef, useState } from "react";

export interface CursorTrailProps {
  color?: string;
  size?: number;
  trailLength?: number;
}

interface TrailDot {
  x: number;
  y: number;
  id: number;
}

export const CursorTrail: React.FC<CursorTrailProps> = ({
  color = "#ff00ff",
  size = 8,
  trailLength = 8,
}) => {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const counterRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prev) => {
        const newTrail = [
          { x: e.clientX, y: e.clientY, id: counterRef.current++ },
          ...prev,
        ].slice(0, trailLength);
        return newTrail;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [trailLength]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            backgroundColor: color,
            pointerEvents: "none",
            zIndex: 9999,
            transform: `translate(${dot.x - size / 2}px, ${dot.y - size / 2}px)`,
            opacity: 1 - index / trailLength,
            transition: "opacity 0.3s ease-out",
          }}
        />
      ))}
    </>
  );
};
