"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const roles = ["Data Scientist", "AI Engineer", "Machine Learning Specialist"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.1, 0.2, 0.1]
           }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8 justify-between max-w-6xl">
        {/* Text Content - Left Column */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-surface/50 border border-white/10 text-primary text-sm font-medium mb-8 glass">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
              Open to full-time opportunities
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Hi, I'm <span className="text-white">Oumaima Toufali</span>
          </motion.h1>

          <div className="h-[40px] md:h-[60px] mb-8 overflow-hidden relative w-full flex justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute text-2xl md:text-4xl font-semibold gold-gradient-text"
              >
                {roles[currentRole]}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed"
          >
            Building production-ready AI systems and scalable data pipelines. Specializing in LLMs, NLP, and Cloud Architecture.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start"
          >
            <Link 
              href="#projects" 
              className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary h-12 px-8 w-full sm:w-auto",
                "bg-gradient-to-r from-yellow-600 to-[#D4AF37] text-background hover:opacity-90 shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1"
              )}
            >
              View Impactful Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              href="#contact"
              className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary h-12 px-8 w-full sm:w-auto",
                "glass text-foreground hover:bg-white/10"
              )}
            >
              Contact Me <Mail className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Profile Image - Right Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        >
          {/* Glowing Border / Backdrop */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-transparent blur-2xl animate-pulse" />
          <div className="absolute inset-0 rounded-full border-[1px] border-primary/30 p-2">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 bg-surface flex items-center justify-center glass">
               <Image src="/profile.jpg" alt="Oumaima Toufali" fill className="object-cover" sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px" />
            </div>
          </div>
          
          {/* Subtle floating badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-6 glass px-4 py-2 rounded-full border border-white/10"
          >
            <span className="text-xs font-medium text-white">AI/ML</span>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-12 -right-8 glass px-4 py-2 rounded-full border border-white/10"
          >
            <span className="text-xs font-medium text-primary">Scalable AI</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
