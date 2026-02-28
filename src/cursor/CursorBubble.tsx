import { useEffect, useRef, useState } from "react";

export interface CursorBubbleProps {
  color?: string;
  minSize?: number;
  maxSize?: number;
  lifetime?: number;
  frequency?: number;
}

interface Bubble {
  x: number;
  y: number;
  size: number;
  id: number;
}

export const CursorBubble: React.FC<CursorBubbleProps> = ({
  color = "#00ffff",
  minSize = 10,
  maxSize = 30,
  lifetime = 1000,
  frequency = 50,
}) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const counterRef = useRef(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTimeRef.current < frequency) return;
      lastTimeRef.current = now;

      const newBubble: Bubble = {
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * (maxSize - minSize) + minSize,
        id: counterRef.current++,
      };

      setBubbles((prev) => [...prev, newBubble]);

      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, lifetime);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [minSize, maxSize, lifetime, frequency]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          style={{
            position: "fixed",
            top: bubble.y - bubble.size / 2,
            left: bubble.x - bubble.size / 2,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            borderRadius: "50%",
            border: `2px solid ${color}`,
            pointerEvents: "none",
            zIndex: 9999,
            animation: `bubbleGrow-${bubble.id} ${lifetime}ms ease-out forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes bubbleGrow-${counterRef.current} {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};
