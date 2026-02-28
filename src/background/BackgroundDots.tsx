export interface BackgroundDotsProps {
  dotSize?: number;
  dotColor?: string;
  gap?: number;
  opacity?: number;
  zIndex?: number;
  position?: "absolute" | "fixed";
  className?: string;
}

export const BackgroundDots: React.FC<BackgroundDotsProps> = ({
  dotSize = 2,
  dotColor = "#888888",
  gap = 30,
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
        backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${gap}px ${gap}px`,
        opacity,
        zIndex,
        pointerEvents: "none",
      }}
    />
  );
};
