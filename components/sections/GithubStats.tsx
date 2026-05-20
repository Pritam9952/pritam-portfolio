"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function GithubStats() {
  return (
    <section id="github" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

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
            Open Source
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold">
            GitHub
            <span className="text-cyan-400"> Activity</span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto">
            Consistent contributions across analytics, machine learning,
            business intelligence, and frontend development projects.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-black flex items-center justify-center">
                <FaGithub size={32} />
              </div>

              <div>
                <h3 className="text-3xl font-bold">Pritam9952</h3>

                <p className="text-cyan-400">Data Analyst & Developer</p>
              </div>
            </div>

            {/* GitHub Stats */}
            <div className="space-y-6">
              <img
                src="https://github-readme-stats-sigma-five.vercel.app/api?username=Pritam9952&show_icons=true&theme=tokyonight"
                alt="GitHub Stats"
                className="w-full rounded-2xl"
              />

              <img
                src="https://streak-stats.demolab.com?user=Pritam9952&theme=dark"
                alt="GitHub Streak"
                className="w-full rounded-2xl"
              />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8"
          >
            <h3 className="text-3xl font-bold mb-8">Contribution Graph</h3>

            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=Pritam9952&bg_color=050816&color=22d3ee&line=22d3ee&point=ffffff&area=true&hide_border=true"
              alt="Contribution Graph"
              className="w-full rounded-2xl"
            />

            {/* Button */}
            <div className="mt-10 flex justify-center">
              <a
                href="https://github.com/Pritam9952"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-500"
              >
                Visit GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
