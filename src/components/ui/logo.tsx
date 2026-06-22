export function BarberGoLogo({ className = "w-12 h-12", animate = true }: { className?: string; animate?: boolean }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-full border border-amber-500/30 bg-zinc-950 shadow-md ${animate ? "animate-pulse" : ""} ${className}`}>
      <img
        src="/logo.jpg"
        alt="BellaDonna Studio GO"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export const BellaDonnaLogo = BarberGoLogo;

