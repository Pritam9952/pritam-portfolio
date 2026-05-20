"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    title: "Quality Assurance & Data Analytics Trainee",
    company: "Eicher TMTL",
    year: "May 2024 - Jun 2024",
    description:
      "Analyzed manufacturing defect data, built KPI dashboards, and supported quality assurance reporting using Excel, Power BI, and Power Query.",
    icon: <Briefcase size={28} />,
  },

  {
    title: "B.Tech Mechanical Engineering",
    company: "MANIT Bhopal",
    year: "2022 - 2026",
    description:
      "Focused on Data Analytics, Business Intelligence, Machine Learning, and frontend technologies alongside core engineering.",
    icon: <GraduationCap size={28} />,
  },

  {
    title: "Higher Secondary Education (Class XII)",
    company: "Govt. Model HS School, Khujner",
    year: "2021",
    description:
      "Completed Higher Secondary Education with 86% and developed a strong analytical and technical foundation.",
    icon: <GraduationCap size={28} />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Journey
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold">
            Experience &
            <span className="text-cyan-400"> Education</span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto">
            My journey across analytics, quality assurance,
            engineering, and business intelligence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="absolute left-6 top-0 w-[2px] h-full bg-cyan-500/20"></div>

          <div className="space-y-16">

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="relative flex gap-8"
              >

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-black shadow-lg shadow-cyan-500/30">
                  {item.icon}
                </div>

                {/* Card */}
                <div className="flex-1 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 transition duration-500">

                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">

                    <div>
                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-cyan-400 mt-1">
                        {item.company}
                      </p>
                    </div>

                    <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm">
                      {item.year}
                    </span>

                  </div>

                  <p className="text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
