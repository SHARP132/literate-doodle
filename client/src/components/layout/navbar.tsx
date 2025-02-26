import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SiRocket, SiTelegram } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-xl">
            <SiRocket className="w-6 h-6 text-primary" />
            ROCKCOIN
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#musicians" className="hover:text-primary transition-colors">For Musicians</a>
          <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <a 
            href="https://t.me/rockcoin123" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary/90 transition-colors"
          >
            <SiTelegram className="w-5 h-5 text-primary-foreground" />
          </a>
        </div>
      </div>
    </nav>
  );
}