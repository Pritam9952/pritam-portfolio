"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const minorProjects = [
  {
    title: "Netflix Data Analysis",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "IPL Analytics",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "Road Accident Dashboard",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "Covid-19 Analysis",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "HR Analytics Dashboard",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "FIFA Data Analysis",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "Smartphone Sales Dashboard",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "Zomato Business Analysis",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "Airbnb Revenue Analysis",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "Loan Prediction System",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "Retail Sales Dashboard",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "Customer Segmentation",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "Stock Market Analysis",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "Sales Forecasting",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "Inventory Dashboard",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
  {
    title: "Power BI KPI Dashboard",
    link: "https://github.com/Pritam9952/Data_Analysis-Python-Projects",
  },
];

export default function MinorProjects() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Additional Work
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold">
            Minor
            <span className="text-cyan-400"> Projects</span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto">
            A collection of analytics, dashboarding, visualization,
            and machine learning projects across multiple domains.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

          {minorProjects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 transition duration-500 cursor-pointer"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>

              <div className="relative z-10 flex items-start justify-between gap-4">

                <h3 className="font-semibold text-lg leading-snug">
                  {project.title}
                </h3>

                <ArrowUpRight
                  className="text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  size={20}
                />

              </div>
            </motion.a>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">

          <a
            href="https://github.com/Pritam9952/Data_Analysis-Python-Projects"
            target="_blank"
            className="px-8 py-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 hover:bg-cyan-500 hover:text-black transition duration-500 font-semibold"
          >
            View More Projects on GitHub
          </a>

        </div>
      </div>
    </section>
  );
}