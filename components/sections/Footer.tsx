"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/10 py-12">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left */}
          <div>

            <h2 className="text-3xl font-extrabold">
              Pritam
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-3 text-zinc-400 max-w-md">
              Transforming raw data into actionable business insights
              through analytics, business intelligence, and modern technologies.
            </p>

          </div>

          {/* Center */}
          <div className="flex items-center gap-6">

            <a
              href="https://github.com/Pritam9952"
              target="_blank"
              className="w-14 h-14 rounded-2xl border border-cyan-500/20 bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-500"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/pritam-nagar/"
              target="_blank"
              className="w-14 h-14 rounded-2xl border border-cyan-500/20 bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-500"
            >
              <FaLinkedin size={24} />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cyan-500/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500 text-sm">
            © 2026 Pritam Nagar. All rights reserved.
          </p>

          <p className="text-cyan-400 text-sm">
            Built with Next.js • Tailwind • Framer Motion
          </p>

        </div>

      </div>
    </footer>
  );
}