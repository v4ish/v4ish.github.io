import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function App() {
  const particlesInit = useCallback(async (engine) => {
    // load full tsparticles bundle (all features)
    await loadFull(engine);
  }, []);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#0a0a0f" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 400, links: { opacity: 0.5 } },
              bubble: { distance: 400, size: 4, duration: 2, opacity: 0.8 },
              repulse: { distance: 120, duration: 0.4 },
              push: { quantity: 4 }
            }
          },
          particles: {
            color: { value: ["#f472b6", "#c084fc", "#60a5fa", "#7c3aed"] },
            links: { enable: true, color: "#a78bfa", distance: 160, opacity: 0.35, width: 1 },
            collisions: { enable: false },
            move: { enable: true, speed: 0.9, direction: "none", outModes: { default: "bounce" } },
            number: { density: { enable: true, area: 800 }, value: 70 },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } }
          },
          detectRetina: true
        }}
        className="absolute inset-0"
      />
      <div className="z-10 text-center p-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Welcome to V4ish
        </h1>
        <p className="mt-4 text-lg text-gray-300">Dark, vibrant & animated ✨</p>
      </div>
    </div>
  );
}
