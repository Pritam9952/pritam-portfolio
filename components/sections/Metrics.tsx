"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    number: 50,
    suffix: "+",
    title: "Projects Built",
  },
  {
    number: 150,
    suffix: "K+",
    title: "Records Analyzed",
  },
  {
    number: 10,
    suffix: "+",
    title: "Dashboards",
  },
  {
    number: 5,
    suffix: "+",
    title: "Technologies",
  },
];

export default function Metrics() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 text-center hover:-translate-y-2 transition duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 relative z-10">
                <CountUp
                  end={item.number}
                  duration={3}
                />
                {item.suffix}
              </h2>

              <p className="mt-3 text-zinc-400 relative z-10">
                {item.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}