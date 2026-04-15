"use client";

import { motion } from "framer-motion";
import { Database, Cloud, Brain, Cpu } from "lucide-react";
import { Card } from "../ui/card";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-muted mb-6 leading-relaxed">
              I am an engineering student specializing in <strong className="text-foreground">Data Science & Cloud Computing</strong>. 
              My passion lies in bridging the gap between theoretical data models and production-ready applications.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              With a strong foundation in <strong className="text-foreground">Machine Learning, Deep Learning, and LLMs</strong>, I architect scalable AI systems that solve real-world problems. Whether it's crafting intelligent agents, optimizing data pipelines, or orchestrating deployments via MLOps, I focus on delivering end-to-end intelligent solutions.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Brain, title: "AI & ML", desc: "Predictive modeling & DL" },
              { icon: Cpu, title: "LLM Agents", desc: "LangChain & GenAI" },
              { icon: Cloud, title: "Cloud Systems", desc: "AWS & Distributed systems" },
              { icon: Database, title: "Data Pipelines", desc: "ETL & Streaming architectures" }
            ].map((item, i) => (
              <Card key={i} className="p-4 bg-surface/20 hover:bg-surface/40 transition-colors border-white/5 hover:border-primary/30">
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted">{item.desc}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
