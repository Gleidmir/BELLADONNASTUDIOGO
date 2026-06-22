import { Sparkles } from "lucide-react";

export function BarberGoLogo({ className = "w-12 h-12", animate = true }: { className?: string; animate?: boolean }) {
  return (
    <div className={`relative flex items-center justify-center ${animate ? "animate-pulse" : ""} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(219,112,147,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Elegant rose-gold/dark pink gradient background */}
          <linearGradient id="premiumWine" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e030b" />
            <stop offset="100%" stopColor="#2e0816" />
          </linearGradient>

          {/* Premium gold metallic gradient */}
          <linearGradient id="goldMetallic" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#FF8F00" />
          </linearGradient>

          {/* Rose Gold gradient for outer ring */}
          <linearGradient id="roseGoldMetallic" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF0F5" />
            <stop offset="50%" stopColor="#FFB6C1" />
            <stop offset="100%" stopColor="#DB7093" />
          </linearGradient>

          {/* Drop shadow filter */}
          <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.7" />
          </filter>

          {/* Clipping path */}
          <clipPath id="circleClip">
            <circle cx="50" cy="50" r="46" />
          </clipPath>
        </defs>

        {/* Circular Background */}
        <g clipPath="url(#circleClip)">
          <rect x="0" y="0" width="100" height="100" fill="url(#premiumWine)" />
          {/* Subtle radial glow inside */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(219,112,147,0.05)" strokeWidth="1" />
        </g>

        {/* Elegant Rose-Gold Metallic Border */}
        <circle cx="50" cy="50" r="46.5" fill="none" stroke="url(#roseGoldMetallic)" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="#000000" strokeWidth="0.5" opacity="0.2" />

        {/* Elegant Minimalist Female Profile & Hair (Line Art) */}
        <g filter="url(#shadowFilter)" transform="translate(50, 46)">
          {/* Face Profile (Facing Left) */}
          <path
            d="M 2 -18 
               C -5 -18, -10 -14, -11 -8 
               C -11.5 -6, -13 -5, -16 -4 
               C -17.5 -3.5, -17.5 -2.5, -16 -2 
               C -14 -1.3, -12 -1.5, -10.5 -2"
            stroke="url(#goldMetallic)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M -10.5 -2 
               C -12 -1, -13 0, -13 1.5 
               C -13 2.5, -11.5 2.5, -10.5 2 
               C -11.5 3, -12 4.5, -11 5.5 
               C -10 6.5, -8 6.5, -6.5 6 
               C -5.5 5.7, -4 7, -3 9 
               C -2 11, 0 15, 4 17"
            stroke="url(#goldMetallic)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Closed Eyelash / Eye */}
          <path
            d="M -6.5 -7.5 C -5 -9, -3.5 -9, -2 -7.5"
            stroke="url(#goldMetallic)"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Elegant Eyebrow */}
          <path
            d="M -8.5 -10.5 C -6.5 -12, -4.5 -12, -2.5 -10.5"
            stroke="url(#goldMetallic)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Flowing Hair Strand 1 (Swooping around back of head) */}
          <path
            d="M 2 -18 
               C 14 -18, 20 -9, 18 3 
               C 16 15, 6 22, -3 23"
            stroke="url(#goldMetallic)"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Flowing Hair Strand 2 (Elegant top sweep) */}
          <path
            d="M 9 -15 
               C 20 -10, 20 6, 10 16 
               C 0 26, -7 25, -9 16"
            stroke="url(#goldMetallic)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Flowing Hair Strand 3 (Delicate neck curl) */}
          <path
            d="M 13 1 
               C 18 8, 12 18, 3 19 
               C -4 20, -7 14, -5 8"
            stroke="url(#goldMetallic)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Sparkles (Beauty & Cleanliness) */}
          {/* Sparkle 1 */}
          <path 
            d="M 14 -10 L 15.2 -8 L 17.2 -7.2 L 15.2 -6.4 L 14 -4.4 L 12.8 -6.4 L 10.8 -7.2 L 12.8 -8 Z" 
            fill="url(#goldMetallic)" 
          />
          {/* Sparkle 2 */}
          <path 
            d="M -14 8 L -13.2 9.3 L -11.9 9.8 L -13.2 10.3 L -14 11.6 L -14.8 10.3 L -16.1 9.8 L -14.8 9.3 Z" 
            fill="url(#goldMetallic)" 
            transform="scale(0.8) translate(-6, 2)"
          />
          {/* Sparkle 3 */}
          <path 
            d="M 16 10 L 16.8 11.3 L 18.1 11.8 L 16.8 12.3 L 16 13.6 L 15.2 12.3 L 13.9 11.8 L 15.2 11.3 Z" 
            fill="url(#goldMetallic)" 
            transform="scale(0.8) translate(3, 4)"
          />
        </g>

        {/* Gold logo text */}
        <g filter="url(#shadowFilter)">
          <text
            x="50"
            y="85"
            textAnchor="middle"
            fill="url(#goldMetallic)"
            fontSize="8"
            fontWeight="900"
            fontFamily="'Outfit', 'Inter', sans-serif"
            letterSpacing="1.5"
          >
            BELLA DONNA
          </text>
        </g>
      </svg>
    </div>
  );
}

export const BellaDonnaLogo = BarberGoLogo;
