"use client";

import { useEffect, useState } from "react";

export interface CursorRippleProps {
  color?: string;
  size?: number;
  duration?: number;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const CursorRipple: React.FC<CursorRippleProps> = ({
  color = "#ff00ff",
  size = 100,
  duration = 800,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  let counter = 0;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        x: e.clientX,
        y: e.clientY,
        id: counter++,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, duration);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [duration]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          style={{
            position: "fixed",
            top: ripple.y,
            left: ripple.x,
            width: `${size}px`,
            height: `${size}px`,
            border: `2px solid ${color}`,
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 9999,
            transform: "translate(-50%, -50%) scale(0)",
            animation: `rippleExpand ${duration}ms ease-out forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes rippleExpand {
          to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};
