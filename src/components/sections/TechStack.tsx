"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

const techCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "Java", "C"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
  },
  {
    title: "LLMs & GenAI",
    skills: ["LangChain", "OpenAI API", "Hugging Face", "Transformers"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Jenkins", "Git", "CI/CD"],
  },
  {
    title: "Web & BI",
    skills: ["FastAPI", "React", "Next.js", "Power BI", "Tableau"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative bg-surface/30 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-muted max-w-2xl mx-auto">Tools and technologies I use to build scalable, intelligent systems.</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techCategories.map((category, idx) => (
            <motion.div 
              key={category.title} 
              variants={itemVariants}
              className="glass p-6 rounded-2xl relative overflow-hidden group"
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
              
              <h3 className="text-lg font-semibold text-foreground mb-4 relative z-10 border-b border-white/10 pb-2 inline-block">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map(skill => (
                  <Badge key={skill} variant="outline" className="group-hover:border-primary/40 transition-colors bg-white/5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
