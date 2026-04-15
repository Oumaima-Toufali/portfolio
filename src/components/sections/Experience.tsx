"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "AI Engineer Intern",
    company: "Nexaya",
    date: "Recent",
    icon: <Briefcase className="w-5 h-5 text-primary" />,
    description: [
      "Building an AI-powered Technology Assessment Platform.",
      "Developing LLM-based agents to analyze repositories and architectures.",
      "Designing pipelines for code analysis and AI-driven evaluation.",
      "Working on scalable architecture and real-world AI systems."
    ]
  },
  {
    title: "Data Science Intern",
    company: "Faculty of Sciences",
    date: "Previous",
    icon: <GraduationCap className="w-5 h-5 text-primary" />,
    description: [
      "Applied machine learning and advanced data analysis techniques.",
      "Worked on real datasets to create predictive modeling solutions.",
      "Built a strong foundation in core data science methodologies."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Trajectory
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical gold line */}
          <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:left-1/2 md:-ml-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 -ml-[19px] mt-1 bg-surface border border-primary/30 w-[38px] h-[38px] rounded-full flex items-center justify-center z-10 glass">
                  {exp.icon}
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"
                }`}>
                  <div className="glass p-6 rounded-2xl hover:border-primary/30 transition-colors duration-300 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <div className={`flex items-center gap-2 mb-4 text-muted text-sm ${
                      index % 2 === 0 ? "" : "md:justify-end"
                    }`}>
                      <span className="text-white/80 font-medium">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.date}</span>
                    </div>

                    <ul className={`space-y-2 text-muted/90 text-sm ${
                      index % 2 === 0 ? "text-left" : "text-left md:text-right"
                    }`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className={`flex items-start gap-2 ${
                           index % 2 === 0 ? "" : "md:flex-row-reverse"
                        }`}>
                          <span className="text-primary mt-1 text-[10px]">❖</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
