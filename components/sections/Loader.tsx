"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050816]"
        >

          {/* Glow */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

          <div className="relative z-10 text-center">

            {/* Main Logo */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="text-6xl md:text-8xl font-extrabold"
            >
              Pritam
              <span className="text-cyan-400">.</span>
            </motion.h1>

            {/* Typing */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
              }}
              className="mt-6 text-cyan-400 tracking-[0.3em] uppercase text-sm"
            >
              Initializing Analytics Engine...
            </motion.p>

            {/* Loading Bar */}
            <div className="mt-10 w-72 h-2 rounded-full bg-white/10 overflow-hidden mx-auto">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                }}
                className="h-full bg-cyan-400 rounded-full"
              />

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}