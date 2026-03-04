"use client";

import { useEffect, useRef } from "react";

export interface CursorGlowProps {
  color?: string;
  size?: number;
  smoothness?: number;
  container?: HTMLElement | null;
  className?: string;
}

export const CursorGlow: React.FC<CursorGlowProps> = ({
  color = "#00ffff",
  size = 20,
  smoothness = 0.15,
  container = null,
  className = "",
}) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const target = container || window;
    const isWindow = target === window;

    const handleMouseMove = (e: MouseEvent) => {
      if (isWindow) {
        positionRef.current.targetX = e.clientX;
        positionRef.current.targetY = e.clientY;
      } else {
        const rect = (target as HTMLElement).getBoundingClientRect();
        positionRef.current.targetX = e.clientX - rect.left;
        positionRef.current.targetY = e.clientY - rect.top;
      }
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

    target.addEventListener("mousemove", handleMouseMove as EventListener);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      target.removeEventListener("mousemove", handleMouseMove as EventListener);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [size, smoothness, container]);

  if (typeof window === "undefined") return null;

  return (
    <div
      ref={glowRef}
      className={className}
      style={{
        position: container ? "absolute" : "fixed",
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
