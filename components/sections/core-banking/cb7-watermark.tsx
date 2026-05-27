export function Cb7Watermark() {
  return (
    <svg
      className="cb7-watermark"
      viewBox="0 0 1200 620"
      preserveAspectRatio="xMinYMid meet"
      aria-hidden
    >
      <defs>
        <linearGradient id="cb7-stroke-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00b4fd" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#00b4fd" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#003ace" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#003ace" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="500"
        fill="none"
        stroke="url(#cb7-stroke-gradient)"
        strokeWidth={1}
        opacity={0.3}
        style={{
          fontFamily: "var(--font-archivo), Archivo, sans-serif",
          fontSize: "572px",
          fontWeight: 500,
          letterSpacing: "-0.01em",
        }}
      >
        CB7
      </text>
    </svg>
  );
}
