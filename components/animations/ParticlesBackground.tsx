"use client";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

export default function ParticlesBackground() {

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "#050816",
          },
        },

        particles: {
          number: {
            value: 50,
          },

          color: {
            value: "#22d3ee",
          },

          links: {
            enable: true,
            color: "#22d3ee",
            distance: 150,
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },
      }}
    />
  );
}