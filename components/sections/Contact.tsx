"use client";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import {
  Mail,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {

  const formRef =
    useRef<HTMLFormElement>(null);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const sendEmail = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {

      await emailjs.sendForm(
        "service_r9afd1w",
        "template_zaliyme",
        formRef.current,
        "gGm4RxIPqFFkr3C6f"
      );

      setSuccess(
        "Message sent successfully 😄🔥"
      );

      formRef.current.reset();

    } catch (error) {

      console.log(error);

      setSuccess(
        "Something went wrong 😢"
      );

    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 relative"
    >

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">

        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Open to Data Analyst,
            Business Analyst,
            QA, and dashboard-based
            opportunities.
          </p>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-500/20 flex items-center justify-center">
                <Mail />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <p className="font-semibold">
                  pritamnagar1211@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-6">

              <a
                href="https://github.com/Pritam9952"
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-500"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/pritam-nagar/"
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-500"
              >
                <FaLinkedin size={24} />
              </a>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="p-8 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl"
        >

          <div className="grid gap-6">

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-cyan-500/20 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-cyan-500/20 outline-none focus:border-cyan-400"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-cyan-500/20 outline-none focus:border-cyan-400 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition duration-500"
            >

              {loading
                ? "Sending..."
                : "Send Message"}

              <Send size={20} />

            </button>

            {success && (
              <p className="text-center text-cyan-400 pt-2">
                {success}
              </p>
            )}

          </div>

        </motion.form>

      </div>

    </section>
  );
}