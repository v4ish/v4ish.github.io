import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "@tsparticles/all";

export default function App() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0a0a0f" },
          particles: {
            color: { value: ["#f472b6", "#c084fc", "#60a5fa"] },
            links: { enable: true, color: "#a78bfa", distance: 150 },
            move: { enable: true, speed: 1 },
            number: { value: 60 },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } }
          }
        }}
        className="absolute inset-0"
      />
      <div className="z-10 text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Welcome to V4ish
        </h1>
        <p className="mt-4 text-lg text-gray-300">Dark, vibrant & animated ✨</p>
      </div>
    </div>
  );
}
