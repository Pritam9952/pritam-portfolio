"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Amazon Sales Data Warehouse",
    description:
      "Built a PostgreSQL-powered data warehouse with Power BI dashboards for revenue trends, customer insights, and regional analysis.",
    tech: ["SQL", "PostgreSQL", "Power BI", "ETL"],
    image:
      "https://github.com/Pritam9952/Major_data_analysis_projects/blob/main/Amazon_Sales_Raw_Data_Analysis/Power%20BI/Amazon%20Sales%20Performance%20Dashboard.png?raw=true",
  },

  {
    title: "Eicher Defect Analysis Dashboard",
    description:
      "Designed KPI dashboards for defect tracking and root-cause analysis in manufacturing quality assurance systems.",
    tech: ["Excel", "Power Query", "Power BI"],
    image:
      "https://github.com/Pritam9952/Data-Analysis-Project-Excel/raw/main/Eicher_Tmtl_Traniee/images/thumbanil_eicher.png",
    github: "https://github.com/Pritam9952",
  },

  {
    title: "Uber Ride Analytics",
    description:
      "Analyzed ride demand patterns, cancellations, and revenue trends using business intelligence dashboards.",
    tech: ["Python", "Power BI", "SQL"],
    image:
      "https://github.com/Pritam9952/Major_data_analysis_projects/raw/main/Uber%20Rides%20Analysis%20Project/dashboard.png",
    github: "https://github.com/Pritam9952",
  },

  {
    title: "Customer Churn Analysis",
    description:
      "Built predictive analytics workflows to identify churn behavior and retention opportunities.",
    tech: ["Python", "Machine Learning", "EDA"],
    image:
      "https://github.com/Pritam9952/Major_data_analysis_projects/raw/main/netflix_user_retention_analysis/dashboard/netflix_dashboard.png",
    github: "https://github.com/Pritam9952",
  },

  {
    title: "BlinkIT Grocery Dashboard",
    description:
      "Performed business analysis on grocery sales and outlet performance using SQL and Power BI.",
    tech: ["SQL", "Python", "Power BI"],
    image:
      "https://github.com/Pritam9952/Major_data_analysis_projects/raw/main/Blinkit/PowerBi_dashboard/dashboard.png",
    github: "https://github.com/Pritam9952",
  },

  {
    title: "Skin Cancer Classification",
    description:
      "Machine learning application for skin cancer prediction using feature engineering and Streamlit deployment.",
    tech: ["Python", "ML", "Streamlit"],
    image:
      "https://github.com/Pritam9952/ML-Computer-Vision-Projects/raw/main/Skin-Cancer-Classification-App/project_screenshot/home_screen.png",
    github: "https://github.com/Pritam9952",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
    >
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Featured Work
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold">
            Major
            <span className="text-cyan-400"> Projects</span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto">
            End-to-end analytics, business intelligence, machine learning,
            and dashboard projects focused on solving real-world business problems.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:-translate-y-4 transition duration-500"
            >

              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-500/20 hover:bg-cyan-500/10 transition"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <button
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
                  >
                    <ExternalLink size={18} />
                    Live
                  </button>

                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}