"use client";

import { useEffect, useRef } from "react";

export interface CursorFollowerProps {
  dotColor?: string;
  circleColor?: string;
  dotSize?: number;
  circleSize?: number;
  circleDelay?: number;
}

export const CursorFollower: React.FC<CursorFollowerProps> = ({
  dotColor = "#ffffff",
  circleColor = "#ffffff",
  dotSize = 6,
  circleSize = 40,
  circleDelay = 0.08,
}) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    dotX: 0,
    dotY: 0,
    circleX: 0,
    circleY: 0,
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

      // Circle follows with delay
      pos.circleX += (pos.targetX - pos.circleX) * circleDelay;
      pos.circleY += (pos.targetY - pos.circleY) * circleDelay;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.dotX - dotSize / 2}px, ${
          pos.dotY - dotSize / 2
        }px)`;
      }

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${
          pos.circleX - circleSize / 2
        }px, ${pos.circleY - circleSize / 2}px)`;
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
  }, [dotSize, circleSize, circleDelay]);

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
          backgroundColor: dotColor,
          pointerEvents: "none",
          zIndex: 10000,
          willChange: "transform",
        }}
      />
      <div
        ref={circleRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          borderRadius: "50%",
          border: `1px solid ${circleColor}`,
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
};
