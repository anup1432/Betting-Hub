import { motion } from "framer-motion";
import { Download, Gamepad2, Send, Trophy, Coins, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { GameCard } from "@/components/ui/game-card";

export default function Home() {
  const { toast } = useToast();

  const handleComingSoon = () => {
    toast({
      title: "Coming Soon",
      description: "This feature is currently under development.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a237e] via-[#0d47a1] to-[#002171]">
      <Navbar />
      
      <main className="container px-4 pb-20 pt-8 mx-auto max-w-md md:max-w-4xl lg:max-w-6xl">
        {/* Hero Section */}
        <section className="relative text-center mb-12">
          {/* Decorative glows */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-orange-500 shadow-2xl shadow-primary/30 rotate-3 hover:rotate-6 transition-transform duration-300"
          >
            <Gamepad2 className="h-12 w-12 text-black" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-2 text-4xl md:text-5xl font-black text-white drop-shadow-lg font-display tracking-tight"
          >
            TIRANGA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">GAMES</span>
          </motion.h1>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-full py-2 px-6 inline-block mb-8"
          >
            <p className="text-primary font-bold text-sm md:text-base animate-pulse">
              ⚡ Register & Get Rs.500 Bonus After 1st Recharge
            </p>
          </motion.div>

          {/* Action Buttons Stack */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col gap-4 max-w-xs mx-auto"
          >
            <Link href="/register">
              <Button 
                size="lg" 
                className="w-full h-14 text-lg font-bold bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-200 shine-effect shadow-xl"
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Register Now
              </Button>
            </Link>

            <Button 
              onClick={handleComingSoon}
              size="lg" 
              className="w-full h-14 text-lg font-bold bg-[#00c853] hover:bg-[#00c853]/90 text-white hover:scale-105 transition-all duration-200 shadow-xl shadow-green-900/20"
            >
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>

            <Button 
              onClick={handleComingSoon}
              size="lg" 
              className="w-full h-14 text-lg font-bold bg-[#29b6f6] hover:bg-[#29b6f6]/90 text-white hover:scale-105 transition-all duration-200 shadow-xl shadow-blue-900/20"
            >
              <Send className="mr-2 h-5 w-5" />
              Predictions
            </Button>
          </motion.div>
        </section>

        {/* Features / Games Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-white">Popular Games</h2>
            <Link href="#" className="text-xs text-primary hover:underline">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <GameCard 
              title="Win Go" 
              icon={<Trophy className="h-6 w-6" />}
              color="bg-red-500"
              onClick={handleComingSoon}
            />
            <GameCard 
              title="Aviator" 
              icon={<Zap className="h-6 w-6" />}
              color="bg-purple-500"
              onClick={handleComingSoon}
            />
            <GameCard 
              title="Rummy" 
              icon={<Coins className="h-6 w-6" />}
              color="bg-amber-500"
              onClick={handleComingSoon}
            />
          </div>
        </section>

        {/* Footer Text */}
        <footer className="text-center space-y-4 border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
            Welcome to the Tiranga Games. The only trusted platform to play games like Win Go, Aviator, Rummy, and much more. Fair play, instant withdrawals, and 24/7 support.
          </p>
          <div className="flex justify-center gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Support</Link>
          </div>
          <p className="text-white/20 text-xs">© 2024 Tiranga Games. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
