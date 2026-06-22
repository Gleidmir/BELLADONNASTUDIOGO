import { Sparkles } from "lucide-react";

export function BarberGoLogo({ className = "w-12 h-12", animate = true }: { className?: string; animate?: boolean }) {
  return (
    <div className={`relative flex items-center justify-center ${animate ? "animate-pulse" : ""} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Pure luxury black background gradient */}
          <linearGradient id="luxuryBlack" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#121214" />
            <stop offset="100%" stopColor="#08080a" />
          </linearGradient>

          {/* Premium gold metallic gradient */}
          <linearGradient id="goldMetallic" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="30%" stopColor="#FFD54F" />
            <stop offset="70%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#FF8F00" />
          </linearGradient>

          {/* Drop shadow filter */}
          <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.8" />
          </filter>

          {/* Clipping path */}
          <clipPath id="circleClip">
            <circle cx="50" cy="50" r="46" />
          </clipPath>
        </defs>

        {/* Circular Background */}
        <g clipPath="url(#circleClip)">
          <rect x="0" y="0" width="100" height="100" fill="url(#luxuryBlack)" />
          {/* Subtle design element */}
          <circle cx="50" cy="50" r="43" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        </g>

        {/* Outer Gold Border */}
        <circle cx="50" cy="50" r="46.5" fill="none" stroke="url(#goldMetallic)" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="#000000" strokeWidth="0.5" opacity="0.3" />

        {/* Center Emblem (Gold Circle and Flame/Hair Wave) */}
        <g filter="url(#shadowFilter)">
          {/* Thin gold circle */}
          <circle cx="50" cy="38" r="18" fill="none" stroke="url(#goldMetallic)" strokeWidth="1.5" opacity="0.8" />
          
          {/* Stylized hair strands / flame-like emblem */}
          {/* Main strand */}
          <path
            d="M 50 20 
               C 55 20, 60 26, 59 36 
               C 58 45, 49 51, 41 53 
               C 38 54, 39 52, 41 50 
               C 47 46, 53 41, 54 34 
               C 55 26, 53 22, 50 20 Z"
            fill="url(#goldMetallic)"
          />
          {/* Second strand */}
          <path
            d="M 46 24 
               C 51 24, 55 29, 54 37 
               C 53 44, 46 49, 39 51 
               C 37 52, 38 50, 39 48 
               C 44 44, 49 40, 50 34 
               C 51 27, 49 24, 46 24 Z"
            fill="url(#goldMetallic)"
          />
          {/* Third strand */}
          <path
            d="M 54 18 
               C 58 18, 63 24, 62 33 
               C 61 41, 53 46, 45 49 
               C 43 50, 43 48, 45 46 
               C 51 43, 56 38, 57 32 
               C 58 26, 56 20, 54 18 Z"
            fill="url(#goldMetallic)"
          />
        </g>

        {/* Text BellaDonna Studio GO below */}
        <g filter="url(#shadowFilter)">
          <text
            x="50"
            y="74"
            textAnchor="middle"
            fill="url(#goldMetallic)"
            fontSize="9.5"
            fontWeight="900"
            fontFamily="'Outfit', 'Inter', sans-serif"
            letterSpacing="2"
          >
            BELLA DONNA
          </text>
          <text
            x="50"
            y="85"
            textAnchor="middle"
            fill="url(#goldMetallic)"
            fontSize="5.5"
            fontWeight="700"
            fontFamily="'Outfit', 'Inter', sans-serif"
            letterSpacing="3"
            opacity="0.9"
          >
            STUDIO GO
          </text>
        </g>
      </svg>
    </div>
  );
}

export const BellaDonnaLogo = BarberGoLogo;
