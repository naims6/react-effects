import { useEffect, useRef } from "react";

export interface BackgroundRippleProps {
  color?: string;
  rippleCount?: number;
  duration?: number;
  zIndex?: number;
  className?: string;
}

export const BackgroundRipple: React.FC<BackgroundRippleProps> = ({
  color = "#667eea",
  rippleCount = 3,
  duration = 4,
  zIndex = -1,
  className = "",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const keyframeName = `rippleAnimation-${Math.random().toString(36).substr(2, 9)}`;

    const style = document.createElement("style");
    style.textContent = `
      @keyframes ${keyframeName} {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    styleRef.current = style;

    if (divRef.current) {
      const ripples = divRef.current.querySelectorAll(".ripple");
      ripples.forEach((ripple, index) => {
        (ripple as HTMLElement).style.animation =
          `${keyframeName} ${duration}s ease-out infinite`;
        (ripple as HTMLElement).style.animationDelay =
          `${(index * duration) / rippleCount}s`;
      });
    }

    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
      }
    };
  }, [duration, rippleCount]);

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
      {Array.from({ length: rippleCount }).map((_, i) => (
        <div
          key={i}
          className="ripple"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            border: `2px solid ${color}`,
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
};
