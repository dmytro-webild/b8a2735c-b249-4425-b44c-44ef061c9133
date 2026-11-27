export default function CompanyLogo({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {/* Outer Shield/Hexagon frame */}
      <path
        d="M12 2.5L20.5 7.40673V16.5933L12 21.5L3.5 16.5933V7.40673L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Inner aperture iris blades */}
      <path
        d="M12 6.5L16.33 9V14L12 16.5L7.67 14V9L12 6.5Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Core lens focal point */}
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      {/* Tactical crosshair notches */}
      <path d="M12 2.5V5.5M12 18.5V21.5M3.5 7.4L6.1 8.9M17.9 15.1L20.5 16.6M20.5 7.4L17.9 8.9M6.1 15.1L3.5 16.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
