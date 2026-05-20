"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_40%)]"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Data Analyst Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Pritam <br />
            <span className="text-cyan-400">Nagar</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-zinc-300 h-20">
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "Business Intelligence Developer",
                2000,
                "Power BI Specialist",
                2000,
                "Frontend Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-zinc-400 max-w-xl leading-relaxed">
            Transforming raw data into business insights using SQL, Python,
            Power BI, and analytics-driven solutions.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="https://github.com/Pritam9952"
              target="_blank"
              className="px-6 py-3 border border-cyan-400/40 rounded-xl hover:bg-cyan-400/10 transition"
            >
              GitHub
            </a>
          </div>

          <div className="flex gap-5 mt-8 text-2xl">
            <a
              href="https://github.com/Pritam9952"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/pritam-nagar/"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-72 h-72 bg-cyan-500/30 blur-[120px] rounded-full"></div>

          <div className="relative w-[350px] h-[450px] rounded-[2rem] border border-cyan-500/20 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">
            <img
              src="/profile.png"
              alt="Pritam Nagar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
