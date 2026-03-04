"use client";

import { useEffect, useRef } from "react";

export interface BackgroundMeshProps {
  colors?: string[];
  speed?: number;
  complexity?: number;
  zIndex?: number;
  position?: "absolute" | "fixed";
  className?: string;
}

export const BackgroundMesh: React.FC<BackgroundMeshProps> = ({
  colors = ["#667eea", "#764ba2", "#f093fb", "#4facfe"],
  speed = 0.5,
  complexity = 3,
  zIndex = -1,
  position = "absolute",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const animate = () => {
      timeRef.current += 0.001 * speed;

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height,
      );

      colors.forEach((color, index) => {
        const offset =
          (index / (colors.length - 1) +
            Math.sin(timeRef.current + index) * 0.1) %
          1;
        gradient.addColorStop(Math.max(0, Math.min(1, offset)), color);
      });

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add mesh overlay
      ctx.globalCompositeOperation = "overlay";

      for (let i = 0; i < complexity; i++) {
        const x1 =
          (Math.sin(timeRef.current * 0.5 + i) * 0.5 + 0.5) * canvas.width;
        const y1 =
          (Math.cos(timeRef.current * 0.3 + i) * 0.5 + 0.5) * canvas.height;
        const x2 =
          (Math.sin(timeRef.current * 0.4 + i + 1) * 0.5 + 0.5) * canvas.width;
        const y2 =
          (Math.cos(timeRef.current * 0.6 + i + 1) * 0.5 + 0.5) * canvas.height;

        const meshGradient = ctx.createRadialGradient(
          x1,
          y1,
          0,
          x1,
          y1,
          canvas.width / 2,
        );
        meshGradient.addColorStop(0, colors[i % colors.length] + "40");
        meshGradient.addColorStop(1, "transparent");

        ctx.fillStyle = meshGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.globalCompositeOperation = "source-over";

      rafRef.current = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    resize();
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [colors, speed, complexity]);

  if (typeof window === "undefined") return null;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex,
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};
