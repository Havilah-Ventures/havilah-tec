export function FlowMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <g
        stroke="var(--fl-gold-text)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 52V22a10 10 0 0 1 10-10h8a10 10 0 0 1 10 10" />
        <path d="M20 34h6a12 12 0 0 1 12 12" />
      </g>
      <circle cx="48" cy="24" r="4.5" fill="var(--fl-gold)" />
    </svg>
  );
}
