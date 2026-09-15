"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "O322 — AI-Powered Technology Due Diligence Platform",
    category: "LLM / Enterprise AI",
    problem: "Assessing enterprise software infrastructure during due diligence requires manual code audits and slow architectural reviews.",
    solution: "Architected autonomous LLM agents to analyze repositories, detect technical debt, evaluate system design, and auto-generate executive tech assessment reports.",
    impact: "Automated core technical due diligence pipelines, reducing repository evaluation time while ensuring comprehensive architectural insights.",
    tech: ["LLM Agents", "Python", "LangChain", "OpenAI", "FastAPI"],
    github: ""
  },
  {
    title: "Weather Forecaster — Real-Time ML Streaming Platform",
    category: "Data Engineering & ML",
    problem: "Static daily weather forecasting models cannot adapt to sudden micro-climate shifts in high-frequency sensor streams.",
    solution: "Engineered an end-to-end real-time data streaming pipeline featuring Avro schema validation, Parquet storage, feature engineering, and ML model serving.",
    impact: "Enabled high-frequency micro-climate prediction with sub-2s processing latency using Random Forest, XGBoost, and LSTM models.",
    tech: ["Apache Kafka", "Python", "Avro", "Parquet", "PyArrow", "XGBoost", "LSTM"],
    github: "https://github.com/Oumaima-Toufali/Weather-Forecasting-with-Real-Time-Streaming"
  },
  {
    title: "LabLens – Medical Data Intelligence Platform",
    category: "Healthcare ML",
    problem: "Medical laboratory results are fragmented across clinical systems, impeding rapid diagnostic decision-making.",
    solution: "Built a centralized healthcare intelligence platform using predictive machine learning to aggregate and visualize patient biomarker trajectories.",
    impact: "Enhanced diagnostic speed and provided early automated alerts for critical abnormal biomarker trends.",
    tech: ["FastAPI", "React", "Scikit-Learn", "Docker", "Python"],
    github: "https://github.com/Oumaima-Toufali/LabLens"
  },
  {
    title: "Federated Learning for Kidney Failure Detection",
    category: "Privacy-Preserving AI",
    problem: "Hospitals cannot centralize sensitive patient data for ML training due to strict HIPAA/GDPR health privacy regulations.",
    solution: "Developed a distributed federated learning system using Flower where models train locally on decentralized clinical nodes.",
    impact: "Preserved full patient data privacy while boosting the global diagnostic model's accuracy in detecting early-stage kidney failure by 15%.",
    tech: ["PyTorch", "Federated Learning", "Flower", "Python"],
    github: "https://github.com/Oumaima-Toufali/Federated-Learning-Kidney-Diagnosis"
  },
  {
    title: "AI Data Analyst Agent",
    category: "LLM / Autonomous Agents",
    problem: "Traditional analytics require continuous manual SQL querying and data wrangling, creating bottlenecks for decision-makers.",
    solution: "Developed an autonomous AI agent capable of translating complex natural language prompts into executable SQL and Python pandas code.",
    impact: "Automated recurring data reporting, enabling non-technical stakeholders to extract direct insights instantly.",
    tech: ["LangChain", "OpenAI", "Python", "Pandas"],
    github: "https://github.com/Oumaima-Toufali/AI-Data-Analyst-Agent"
  },
  {
    title: "Microsoft Stock Price Forecasting",
    category: "Time Series & Deep Learning",
    problem: "Financial asset markets display heavy noise and volatility, rendering traditional moving averages ineffective for trend forecasting.",
    solution: "Implemented deep learning LSTM architectures alongside ARIMA models to model temporal dependencies in MSFT stock pricing.",
    impact: "Achieved high directional precision on historical backtesting datasets for financial price movement prediction.",
    tech: ["TensorFlow", "Keras", "Python", "yfinance", "ARIMA"],
    github: "https://github.com/Oumaima-Toufali/msft_forecasting_Arima-DL_models"
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
                 index === 0 || index === 1 ? "md:col-span-2 lg:col-span-2" : "" 
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
                    {project.github ? (
                      <Link 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-2"
                      >
                        {project.title}
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-white transition-colors p-1"
                      aria-label={`GitHub Repository for ${project.title}`}
                    >
                      <FaGithub className="w-5 h-5" />
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
