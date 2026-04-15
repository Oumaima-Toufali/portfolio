"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "AI Data Analyst Agent",
    category: "LLM / Agents",
    problem: "Traditional data analysis requires manual coding and querying, slowing down business insights.",
    solution: "Developed an autonomous AI agent capable of translating natural language into SQL/Python to analyze datasets directly.",
    impact: "Automated standard reporting processes, reducing time-to-insight for non-technical users.",
    tech: ["LangChain", "OpenAI", "Python", "Pandas"],
    github: "#",
    live: "#"
  },
  {
    title: "LabLens – Medical Data Intelligence Platform",
    category: "Healthcare ML",
    problem: "Medical lab results are often fragmented and difficult to cross-reference rapidly for diagnostics.",
    solution: "Built a centralized intelligence platform leveraging ML to aggregate, predict, and visualize patient lab trends.",
    impact: "Enhanced diagnostic speed and provided predictive alerts for abnormal biomarker trajectories.",
    tech: ["FastAPI", "React", "Scikit-Learn", "Docker"],
    github: "#"
  },
  {
    title: "Microsoft Stock Forecasting",
    category: "Time Series",
    problem: "Financial markets are highly volatile, making basic moving averages insufficient for trading strategies.",
    solution: "Implemented an advanced deep learning model using LSTMs to predict short-term stock price movements.",
    impact: "Achieved high directional accuracy on historical backtesting for MSFT stock.",
    tech: ["TensorFlow", "Keras", "Python", "yfinance"],
    github: "#"
  },
  {
    title: "ChatGPT Reviews NLP",
    category: "NLP",
    problem: "Extracting actionable product feedback from thousands of unstructured user reviews is highly inefficient.",
    solution: "Created an NLP pipeline utilizing sentiment analysis and topic modeling on ChatGPT app store reviews.",
    impact: "Identified core user friction points automatically without manual reading.",
    tech: ["Hugging Face", "NLTK", "Transformers", "Streamlit"],
    github: "#",
    live: "#"
  },
  {
    title: "Federated Learning for Kidney Failure Detection",
    category: "Privacy-Preserving AI",
    problem: "Hospitals cannot easily share patient data to train better diagnostic models due to strict privacy regulations.",
    solution: "Developed a simulated federated learning distributed system where models train locally on hospital nodes.",
    impact: "Maintained data privacy while improving the global model's accuracy in detecting early-stage kidney failure by 15%.",
    tech: ["PyTorch", "Federated Learning", "Flower", "Python"],
    github: "#"
  },
  {
    title: "Smart Public Lighting System",
    category: "IoT / AI",
    problem: "Public street lighting wastes massive amounts of energy by running at full capacity even when streets are empty.",
    solution: "Designed an AI-driven control system that adjusts lighting intensity based on real-time traffic and pedestrian detection.",
    impact: "Simulated a potential 40% reduction in energy consumption for municipal lighting grids.",
    tech: ["Computer Vision", "OpenCV", "IoT", "C++"],
    github: "#"
  },
  {
    title: "Weather Forecasting with Real-Time Streaming",
    category: "Data Engineering",
    problem: "Static daily weather models do not account for sudden micro-climate shifts.",
    solution: "Built an end-to-end data pipeline to ingest, process, and predict weather conditions using real-time sensor streams.",
    impact: "Enabled high-frequency, localized weather alerting with minimal latency.",
    tech: ["Apache Kafka", "Spark Streaming", "Python", "AWS"],
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-surface/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                 "glass p-8 rounded-3xl group transition-all duration-300 hover:border-primary/40 relative overflow-hidden flex flex-col h-full",
                 index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2" : "" 
              )}
            >
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Link href={project.github} className="text-muted hover:text-white transition-colors" aria-label="GitHub Repository">
                      <FaGithub className="w-5 h-5" />
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} className="text-muted hover:text-white transition-colors" aria-label="Live Demo">
                      <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-1 relative z-10 text-sm md:text-base">
                <div>
                  <span className="text-white font-medium block mb-1">Problem:</span>
                  <p className="text-muted">{project.problem}</p>
                </div>
                <div>
                  <span className="text-white font-medium block mb-1">Solution:</span>
                  <p className="text-muted">{project.solution}</p>
                </div>
                <div>
                  <span className="text-primary font-medium block mb-1 flex items-center gap-2">Impact:</span>
                  <p className="text-white/90">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted-foreground whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
