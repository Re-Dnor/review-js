export default function Illustration() {
  return (
    <div aria-hidden>
      <svg
        viewBox="0 0 560 360"
        width="100%" // тянется по ширине контейнера
        style={{ display: "block" }} // высота посчитается из viewBox/аспекта
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5ae0b0" />
            <stop offset="100%" stopColor="#39c99a" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="560" height="360" fill="#0b1118" />
        <g opacity="0.15">
          {Array.from({ length: 10 }).map((_, i) => (
            <circle
              key={i}
              cx={40 + i * 52}
              cy={80 + (i % 2) * 22}
              r={16 + (i % 3) * 6}
              fill="url(#g1)"
            />
          ))}
        </g>
        <g>
          <rect
            x="48"
            y="72"
            rx="12"
            ry="12"
            width="280"
            height="200"
            fill="#0e1620"
            stroke="#1e2a37"
          />
          <rect x="68" y="104" width="240" height="14" rx="7" fill="#1f3240" />
          <rect x="68" y="130" width="200" height="14" rx="7" fill="#1f3240" />
          <rect x="68" y="176" width="140" height="14" rx="7" fill="#1f3240" />
          <rect x="68" y="202" width="170" height="14" rx="7" fill="#1f3240" />
          <rect
            x="360"
            y="120"
            rx="12"
            ry="12"
            width="150"
            height="110"
            fill="#0e1620"
            stroke="#1e2a37"
          />
          <rect x="378" y="144" width="114" height="14" rx="7" fill="#1f3240" />
          <rect x="378" y="170" width="92" height="14" rx="7" fill="#1f3240" />
        </g>
      </svg>
    </div>
  );
}
