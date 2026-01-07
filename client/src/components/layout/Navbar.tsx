import { Link } from "wouter";
import { Gamepad2, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1a237e]/90 backdrop-blur supports-[backdrop-filter]:bg-[#1a237e]/60">
      <div className="container flex h-16 items-center justify-between px-4 max-w-md mx-auto md:max-w-4xl lg:max-w-6xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-orange-500 shadow-lg shadow-primary/20">
              <Gamepad2 className="h-5 w-5 text-black" />
            </div>
            <span className="font-display text-xl font-bold italic tracking-wide text-white">
              Tiranga
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white gap-2">
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Log In</span>
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white gap-2 shadow-lg shadow-blue-600/20 border border-blue-400/20">
              <UserPlus className="h-4 w-4" />
              <span className="hidden sm:inline">Register</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
