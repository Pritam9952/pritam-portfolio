"use client";

import { useState } from "react";

import {
  Bot,
  Send,
  X,
} from "lucide-react";

export default function AIChatbot() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I'm Pritam's AI Assistant. Ask me about skills, projects, experience, or certifications.",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    let botReply =
      "I'm still learning 😄";

    const lower = input.toLowerCase();

    if (
      lower.includes("skills")
    ) {
      botReply =
        "Pritam works with SQL, Power BI, Python, Excel, Machine Learning, React, and Business Intelligence.";
    }

    else if (
      lower.includes("projects")
    ) {
      botReply =
        "Pritam has built analytics dashboards, ML projects, customer churn analysis, Amazon sales analysis, and Eicher defect analysis systems.";
    }

    else if (
      lower.includes("experience")
    ) {
      botReply =
        "Pritam completed industrial training at Eicher TMTL focused on production analytics and defect analysis.";
    }

    else if (
      lower.includes("contact")
    ) {
      botReply =
        "You can contact Pritam through the contact section, LinkedIn, or GitHub.";
    }

    else if (
      lower.includes("certification")
    ) {
      botReply =
        "Pritam holds Google Data Analytics certifications, R Programming certification, and multiple analytics credentials.";
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        role: "bot",
        text: botReply,
      },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 z-[9999] w-16 h-16 rounded-2xl bg-cyan-400 text-black flex items-center justify-center shadow-2xl hover:scale-110 transition duration-500"
      >

        {open ? (
          <X size={28} />
        ) : (
          <Bot size={28} />
        )}

      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-44 right-6 z-[9999] w-[350px] h-[500px] rounded-3xl border border-cyan-500/20 bg-[#050816]/95 backdrop-blur-2xl overflow-hidden transition-all duration-500 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >

        {/* Header */}
        <div className="p-5 border-b border-cyan-500/10 flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-cyan-400 text-black flex items-center justify-center">
            <Bot size={24} />
          </div>

          <div>
            <h3 className="font-bold">
              AI Assistant
            </h3>

            <p className="text-xs text-cyan-400">
              Online
            </p>
          </div>

        </div>

        {/* Messages */}
        <div className="p-5 space-y-4 h-[340px] overflow-y-auto">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                msg.role === "user"
                  ? "ml-auto bg-cyan-400 text-black"
                  : "bg-white/10 text-white"
              }`}
            >
              {msg.text}
            </div>

          ))}

        </div>

        {/* Input */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-cyan-500/10 bg-[#050816]">

          <div className="flex items-center gap-3">

            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              type="text"
              placeholder="Ask something..."
              className="flex-1 rounded-2xl bg-white/10 border border-cyan-500/20 px-4 py-3 outline-none text-sm"
            />

            <button
              onClick={handleSend}
              className="w-12 h-12 rounded-2xl bg-cyan-400 text-black flex items-center justify-center"
            >
              <Send size={20} />
            </button>

          </div>

        </div>

      </div>
    </>
  );
}