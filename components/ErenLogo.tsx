import { BRAND } from '@/lib/brand';

interface ErenLogoProps {
  className?: string;
  height?: number;
}

export default function ErenLogo({ className, height = 44 }: ErenLogoProps) {
  const W = 240;
  const H = 64;
  const w = Math.round((height * W) / H);

  return (
    <svg
      width={w}
      height={height}
      viewBox={`0 0 ${W} ${H}`}
      fill="none"
      aria-label={BRAND.primaryName}
      role="img"
      className={className}
    >
      {/* EREN — primary text, warm off-white */}
      <text
        x="4"
        y="44"
        fontFamily="'Saira Condensed', 'Arial Narrow', sans-serif"
        fontSize="42"
        fontWeight="800"
        fill="#D6D0C4"
        letterSpacing="-0.5"
      >
        EREN
      </text>

      {/* Swoosh — muted copper, flat, no gradient */}
      <path
        d="M3,48 C70,45 140,35 174,21 C195,14 207,9 212,8 C215,8 215,16 212,21 C206,24 188,30 165,37 C116,48 48,54 3,52Z"
        fill="#A68A64"
      />

      {/* SERVİS — secondary text, muted warm gray */}
      <text
        x="88"
        y="62"
        fontFamily="'Saira', Arial, sans-serif"
        fontSize="11"
        fontWeight="600"
        fill="#8A8376"
        letterSpacing="3"
      >
        SERVİS
      </text>
    </svg>
  );
}
