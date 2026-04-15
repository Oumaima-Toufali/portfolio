"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 overflow-hidden">
      {/* Background glow specific to contact section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 select-none">
              Let's build something <br/>
              <span className="gold-gradient-text">exceptional.</span>
            </h2>
            <p className="text-lg text-muted mb-10 leading-relaxed max-w-md">
              I am currently open to full-time AI/Data Science opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <Link 
                href="mailto:toufalioumaima@gmail.com"
                className="flex items-center gap-4 text-muted hover:text-white group transition-colors"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all">
                  <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                </div>
                <span className="font-medium text-lg tracking-wide">toufalioumaima@gmail.com</span>
              </Link>
              
              <Link 
                href="https://linkedin.com/in/oumaima-toufali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted hover:text-white group transition-colors"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all">
                  <FaLinkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                </div>
                <span className="font-medium text-lg tracking-wide">linkedin.com/in/oumaima-toufali</span>
              </Link>

              <Link 
                href="https://github.com/Oumaima-Toufali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted hover:text-white group transition-colors"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all">
                  <FaGithub className="w-5 h-5 group-hover:text-primary transition-colors" />
                </div>
                <span className="font-medium text-lg tracking-wide">github.com/Oumaima-Toufali</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="glass p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground ml-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="John Doe"
                  className="bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                />
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="john@company.com"
                  className="bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                />
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="How can we work together?"
                  className="bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                />
              </div>

              <button 
                type="button"
                className="relative z-10 mt-2 bg-primary text-background font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                onClick={() => alert("Form functionality will require a backend setup (like Resend or Formspree). Connect via email for now!")}
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
