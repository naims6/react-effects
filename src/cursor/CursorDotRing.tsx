"use client";

import { useEffect, useRef } from "react";

export interface CursorDotRingProps {
  dotSize?: number;
  ringSize?: number;
  color?: string;
}

export const CursorDotRing: React.FC<CursorDotRingProps> = ({
  dotSize = 8,
  ringSize = 32,
  color = "#ffffff",
}) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    dotX: 0,
    dotY: 0,
    ringX: 0,
    ringY: 0,
    targetX: 0,
    targetY: 0,
  });
  const rafRef = useRef<number>();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current.targetX = e.clientX;
      positionRef.current.targetY = e.clientY;
    };

    const animate = () => {
      const pos = positionRef.current;

      // Dot follows immediately
      pos.dotX = pos.targetX;
      pos.dotY = pos.targetY;

      // Ring lags behind
      pos.ringX += (pos.targetX - pos.ringX) * 0.1;
      pos.ringY += (pos.targetY - pos.ringY) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.dotX - dotSize / 2}px, ${
          pos.dotY - dotSize / 2
        }px)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.ringX - ringSize / 2}px, ${
          pos.ringY - ringSize / 2
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
  }, [dotSize, ringSize]);

  if (typeof window === "undefined") return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          borderRadius: "50%",
          backgroundColor: color,
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          borderRadius: "50%",
          border: `2px solid ${color}`,
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
        }}
      />
    </>
  );
};
