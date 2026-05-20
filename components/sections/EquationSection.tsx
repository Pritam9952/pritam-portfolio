"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  LineChart,
  TrendingUp,
} from "lucide-react";

export default function EquationSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[150px] rounded-full"></div>

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
            Analytics Intelligence
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Transforming
            <span className="text-cyan-400"> Data </span>
            into Decisions
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto">
            Combining data analysis, business intelligence, and
            visualization techniques to uncover insights and support
            data-driven business strategies.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Equation Card */}
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8">

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>

              <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs mb-4 relative z-10">
                KPI Formula
              </p>

              <h3 className="text-4xl md:text-5xl font-extrabold relative z-10">
                ROI =
              </h3>

              <div className="mt-6 text-2xl md:text-3xl font-bold text-cyan-400 relative z-10">
                (Revenue - Cost) / Cost × 100
              </div>

              <p className="mt-6 text-zinc-400 relative z-10">
                Business intelligence metrics used to evaluate profitability,
                performance, and strategic growth opportunities.
              </p>
            </div>

            {/* SQL Card */}
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-black/40 backdrop-blur-xl p-8">

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>

              <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs mb-4 relative z-10">
                SQL Analytics
              </p>

              <pre className="text-sm md:text-base text-cyan-300 overflow-x-auto relative z-10">
{`SELECT region,
SUM(revenue) AS total_sales
FROM sales_data
GROUP BY region
ORDER BY total_sales DESC;`}
              </pre>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {/* Card 1 */}
            <div className="group rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-3 transition duration-500">
              <BarChart3 className="text-cyan-400 mb-6" size={40} />

              <h3 className="text-2xl font-bold mb-4">
                Dashboard Reporting
              </h3>

              <p className="text-zinc-400">
                Interactive KPI dashboards using Power BI and analytics tools.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-3 transition duration-500">
              <Database className="text-cyan-400 mb-6" size={40} />

              <h3 className="text-2xl font-bold mb-4">
                Data Warehousing
              </h3>

              <p className="text-zinc-400">
                ETL pipelines and structured business intelligence systems.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-3 transition duration-500">
              <TrendingUp className="text-cyan-400 mb-6" size={40} />

              <h3 className="text-2xl font-bold mb-4">
                Trend Analysis
              </h3>

              <p className="text-zinc-400">
                Identifying patterns and business opportunities from datasets.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-3 transition duration-500">
              <LineChart className="text-cyan-400 mb-6" size={40} />

              <h3 className="text-2xl font-bold mb-4">
                Predictive Insights
              </h3>

              <p className="text-zinc-400">
                Leveraging machine learning and forecasting models.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}