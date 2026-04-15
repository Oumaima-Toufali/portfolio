import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background relative overflow-hidden py-12 text-center text-sm text-muted">
      <div className="container mx-auto max-w-4xl px-6 relative z-10 flex flex-col items-center justify-center">
        
        <blockquote className="italic mb-8 text-foreground/80 max-w-2xl text-center text-lg md:text-xl font-light">
          "Transforming data into intelligence, algorithms into solutions, and ideas into impact."
        </blockquote>

        <div className="flex space-x-6 mb-8">
          <Link href="https://github.com/Oumaima-Toufali" target="_blank" className="p-2 rounded-full hover:bg-white/5 hover:text-primary transition-colors">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com/in/oumaima-toufali" target="_blank" className="p-2 rounded-full hover:bg-white/5 hover:text-primary transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link href="mailto:toufalioumaima@gmail.com" className="p-2 rounded-full hover:bg-white/5 hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        <p>© {currentYear} Oumaima Toufali. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50">Designed & Built for the Future.</p>
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 blur-[100px] -z-0 pointer-events-none rounded-full" />
    </footer>
  );
}
