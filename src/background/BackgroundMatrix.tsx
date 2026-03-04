"use client";

import { useEffect, useRef } from "react";

export interface BackgroundMatrixProps {
  color?: string;
  fontSize?: number;
  speed?: number;
  density?: number;
  zIndex?: number;
  position?: "absolute" | "fixed";
  className?: string;
}

export const BackgroundMatrix: React.FC<BackgroundMatrixProps> = ({
  color = "#00ff00",
  fontSize = 16,
  speed = 50,
  density = 0.95,
  zIndex = -1,
  position = "absolute",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
    let columns: number[] = [];
    let drops: number[] = [];

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      columns = Array(Math.floor(canvas.width / fontSize)).fill(0);
      drops = columns.map(() => Math.random() * -100);
    };

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > density) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const animate = () => {
      draw();
      rafRef.current = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    resize();
    const interval = setInterval(draw, speed);

    return () => {
      resizeObserver.disconnect();
      clearInterval(interval);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [color, fontSize, speed, density]);

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
        backgroundColor: "#000",
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
