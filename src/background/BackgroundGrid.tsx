"use client";

import { useEffect, useRef } from "react";

export interface BackgroundGridProps {
  cellSize?: number;
  lineColor?: string;
  opacity?: number;
  zIndex?: number;
  position?: "absolute" | "fixed";
  className?: string;
}

export const BackgroundGrid: React.FC<BackgroundGridProps> = ({
  cellSize = 40,
  lineColor = "#333333",
  opacity = 0.5,
  zIndex = -1,
  position = "absolute",
  className = "",
}) => {
  if (typeof window === "undefined") return null;

  return (
    <div
      className={className}
      style={{
        position,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `
          linear-gradient(${lineColor} 1px, transparent 1px),
          linear-gradient(90deg, ${lineColor} 1px, transparent 1px)
        `,
        backgroundSize: `${cellSize}px ${cellSize}px`,
        opacity,
        zIndex,
        pointerEvents: "none",
      }}
    />
  );
};
