"use client";

import { useEffect, useRef } from "react";

export interface CursorMagneticProps {
  size?: number;
  color?: string;
  strength?: number;
}

export const CursorMagnetic: React.FC<CursorMagneticProps> = ({
  size = 40,
  color = "#ff6b6b",
  strength = 0.3,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current.targetX = e.clientX;
      positionRef.current.targetY = e.clientY;

      // Check for magnetic elements
      const magneticElements = document.querySelectorAll("[data-magnetic]");
      let isMagnetic = false;

      magneticElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

        if (distance < 100) {
          isMagnetic = true;
          positionRef.current.targetX = centerX;
          positionRef.current.targetY = centerY;
        }
      });
    };

    const animate = () => {
      const pos = positionRef.current;
      pos.x += (pos.targetX - pos.x) * strength;
      pos.y += (pos.targetY - pos.y) * strength;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.x - size / 2}px, ${
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
  }, [size, strength]);

  if (typeof window === "undefined") return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: color,
        opacity: 0.6,
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
        mixBlendMode: "difference",
      }}
    />
  );
};
