"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Analytics",
    items: ["Python", "Pandas", "NumPy", "EDA"],
  },
  {
    category: "Business Intelligence",
    items: ["Power BI", "Excel", "Dashboarding", "KPI Tracking"],
  },
  {
    category: "Database",
    items: ["SQL", "PostgreSQL", "ETL", "Data Warehousing"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind", "TypeScript"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "Streamlit", "Model Training"],
  },
  {
    category: "Quality Analysis",
    items: ["Root Cause Analysis", "Defect Tracking", "Reporting"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Technical Expertise
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold">
            Skills &
            <span className="text-cyan-400"> Technologies</span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            Combining analytics, business intelligence, machine learning,
            and frontend technologies to build impactful digital solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-3 transition duration-500"
            >
              
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>

              <h3 className="text-2xl font-bold mb-6 relative z-10">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3 relative z-10">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm hover:bg-cyan-500 hover:text-black transition duration-300"
                  >
                    {item}
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