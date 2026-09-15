"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-xl font-bold tracking-tighter">
              <span className="text-foreground">Oumaima</span>
              <span className="gold-gradient-text">.dev</span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.ul 
              className="flex items-center space-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {navLinks.map((link, i) => (
                <motion.li key={link.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5, duration: 0.3 }}
               className="flex items-center space-x-4 ml-4 pl-4 border-l border-white/10"
            >
              <Link href="https://github.com/Oumaima-Toufali" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-muted hover:text-foreground transition-colors">
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com/in/oumaima-toufali" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-muted hover:text-foreground transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle navigation menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
        style={{
          scaleX,
          boxShadow: "0 0 6px 1px rgba(212, 175, 55, 0.6)",
        }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/5 absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted hover:text-primary py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-white/5">
                <Link href="https://github.com/Oumaima-Toufali" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-muted hover:text-foreground">
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link href="https://linkedin.com/in/oumaima-toufali" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-muted hover:text-foreground">
                  <FaLinkedin className="w-5 h-5" />
                </Link>
                <Link href="mailto:toufalioumaima@gmail.com" aria-label="Email Contact" className="text-muted hover:text-foreground">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
