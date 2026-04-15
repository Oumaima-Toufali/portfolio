"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    metric: "<2s",
    label: "Latency in Real-time Systems",
    description: "Architected low-latency streaming pipelines for immediate data insights."
  },
  {
    metric: ">80%",
    label: "Algorithm Precision",
    description: "Achieved high accuracy in anomaly detection and predictive modeling domains."
  },
  {
    metric: "100%",
    label: "Scalable ML Pipelines",
    description: "Automated via Docker and robust CI/CD integration for continuous deployment."
  },
  {
    metric: "Multiple",
    label: "Federated Clients",
    description: "Implemented privacy-preserving federated learning across decentralized nodes."
  }
];

export default function KeyAchievements() {
  return (
    <section className="py-20 relative bg-background overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="glass rounded-3xl p-8 md:p-12 border border-primary/20 relative"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Engineering Impact</h2>
            <p className="text-muted max-w-xl mx-auto">Tangible metrics showcasing the performance and scalability of my solutions.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10 text-center">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center p-4"
              >
                <div className="text-4xl md:text-5xl font-extrabold gold-gradient-text mb-3">
                  {item.metric}
                </div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">{item.label}</h4>
                <p className="text-xs text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
