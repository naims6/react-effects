"use client";

import { useEffect, useRef } from "react";

export interface BackgroundStarsProps {
  starCount?: number;
  starColor?: string;
  twinkleSpeed?: number;
  minSize?: number;
  maxSize?: number;
  zIndex?: number;
  position?: "absolute" | "fixed";
  className?: string;
}

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleDirection: number;
}

export const BackgroundStars: React.FC<BackgroundStarsProps> = ({
  starCount = 100,
  starColor = "#ffffff",
  twinkleSpeed = 0.02,
  minSize = 1,
  maxSize = 3,
  zIndex = -1,
  position = "absolute",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Star[]>([]);
  const rafRef = useRef<number>();

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
      initStars();
    };

    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * (maxSize - minSize) + minSize,
          opacity: Math.random(),
          twinkleSpeed: Math.random() * twinkleSpeed + twinkleSpeed / 2,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        star.opacity += star.twinkleSpeed * star.twinkleDirection;

        if (star.opacity <= 0 || star.opacity >= 1) {
          star.twinkleDirection *= -1;
        }

        ctx.fillStyle = starColor;
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
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
  }, [starCount, starColor, twinkleSpeed, minSize, maxSize]);

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
