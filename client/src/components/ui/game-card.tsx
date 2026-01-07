import { ArrowRight } from "lucide-react";

interface GameCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

export function GameCard({ title, icon, color, onClick }: GameCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/5 p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl"
    >
      <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300`} />
      
      <div className="relative z-10 flex items-start justify-between">
        <div className={`rounded-xl p-3 ${color} bg-opacity-20 text-white`}>
          {icon}
        </div>
        <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-xs text-white/50 mt-1">Play & Win Instant Cash</p>
      </div>
    </div>
  );
}
