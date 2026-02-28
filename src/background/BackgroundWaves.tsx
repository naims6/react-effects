import { useEffect, useRef } from "react";

export interface BackgroundWavesProps {
  waveColor?: string;
  waveOpacity?: number;
  waveCount?: number;
  speed?: number;
  zIndex?: number;
  className?: string;
}

export const BackgroundWaves: React.FC<BackgroundWavesProps> = ({
  waveColor = "#667eea",
  waveOpacity = 0.3,
  waveCount = 3,
  speed = 5,
  zIndex = -1,
  className = "",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const keyframeName = `waveAnimation-${Math.random().toString(36).substr(2, 9)}`;

    const style = document.createElement("style");
    style.textContent = `
      @keyframes ${keyframeName} {
        0% { transform: translateX(0) translateZ(0) scaleY(1); }
        50% { transform: translateX(-25%) translateZ(0) scaleY(0.55); }
        100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
      }
    `;
    document.head.appendChild(style);
    styleRef.current = style;

    if (divRef.current) {
      const waves = divRef.current.querySelectorAll(".wave");
      waves.forEach((wave, index) => {
        (wave as HTMLElement).style.animation =
          `${keyframeName} ${speed + index * 2}s linear infinite`;
      });
    }

    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
      }
    };
  }, [speed]);

  if (typeof window === "undefined") return null;

  return (
    <div
      ref={divRef}
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex,
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: waveCount }).map((_, i) => (
        <div
          key={i}
          className="wave"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "200%",
            height: "100%",
            background: waveColor,
            opacity: waveOpacity / (i + 1),
            borderRadius: "43%",
          }}
        />
      ))}
    </div>
  );
};
