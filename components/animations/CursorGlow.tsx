"use client";

import React, { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"
      style={{
        left: position.x - 80,
        top: position.y - 80,
      }}
    />
  );
};

export default CursorGlow;