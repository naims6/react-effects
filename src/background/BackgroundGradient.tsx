"use client";

import { useEffect, useRef } from "react";

export interface BackgroundGradientProps {
  colors?: string[];
  speed?: number;
  angle?: number;
  zIndex?: number;
  position?: "absolute" | "fixed";
  className?: string;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  colors = ["#667eea", "#764ba2", "#f093fb"],
  speed = 10,
  angle = -45,
  zIndex = -1,
  position = "absolute",
  className = "",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const keyframeName = `gradientAnimation-${Math.random().toString(36).substr(2, 9)}`;

    const style = document.createElement("style");
    style.textContent = `
      @keyframes ${keyframeName} {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    styleRef.current = style;

    if (divRef.current) {
      divRef.current.style.animation = `${keyframeName} ${speed}s ease infinite`;
    }

    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
      }
    };
  }, [colors, speed]);

  if (typeof window === "undefined") return null;

  const gradientColors = colors.join(", ");

  return (
    <div
      ref={divRef}
      className={className}
      style={{
        position,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `linear-gradient(${angle}deg, ${gradientColors})`,
        backgroundSize: "400% 400%",
        zIndex,
        pointerEvents: "none",
      }}
    />
  );
};
