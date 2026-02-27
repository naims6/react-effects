export interface BackgroundGridProps {
  cellSize?: number;
  lineColor?: string;
  opacity?: number;
}

export const BackgroundGrid: React.FC<BackgroundGridProps> = ({
  cellSize = 40,
  lineColor = "#333333",
  opacity = 0.5,
}) => {
  if (typeof window === "undefined") return null;

  return (
    <div
      style={{
        position: "fixed",
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
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
};
