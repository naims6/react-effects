import { useEffect, useRef } from "react";

export interface BackgroundHexagonsProps {
  hexColor?: string;
  hexSize?: number;
  gap?: number;
  opacity?: number;
  animationSpeed?: number;
  zIndex?: number;
  className?: string;
}

interface Hexagon {
  x: number;
  y: number;
  opacity: number;
  delay: number;
}

export const BackgroundHexagons: React.FC<BackgroundHexagonsProps> = ({
  hexColor = "#667eea",
  hexSize = 50,
  gap = 10,
  opacity = 0.3,
  animationSpeed = 3,
  zIndex = -1,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hexagonsRef = useRef<Hexagon[]>([]);
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
      initHexagons();
    };

    const initHexagons = () => {
      hexagonsRef.current = [];
      const cols = Math.ceil(canvas.width / (hexSize + gap));
      const rows = Math.ceil(canvas.height / (hexSize + gap));

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * (hexSize + gap) + (row % 2) * ((hexSize + gap) / 2);
          const y = row * (hexSize * 0.866 + gap);
          hexagonsRef.current.push({
            x,
            y,
            opacity: Math.random(),
            delay: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const drawHexagon = (x: number, y: number, size: number, alpha: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(hx, hy);
        } else {
          ctx.lineTo(hx, hy);
        }
      }
      ctx.closePath();
      ctx.strokeStyle = hexColor;
      ctx.globalAlpha = alpha * opacity;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const animate = () => {
      timeRef.current += 0.01 * animationSpeed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      hexagonsRef.current.forEach((hex) => {
        const pulseOpacity = (Math.sin(timeRef.current + hex.delay) + 1) / 2;
        drawHexagon(hex.x, hex.y, hexSize / 2, pulseOpacity);
      });

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
  }, [hexColor, hexSize, gap, opacity, animationSpeed]);

  if (typeof window === "undefined") return null;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "absolute",
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
