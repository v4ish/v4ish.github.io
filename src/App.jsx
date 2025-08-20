import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";

export default function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return <div>Loading...</div>;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "#0d47a1"
        },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff" },
          move: { enable: true },
          number: { value: 80 },
          size: { value: 3 }
        }
      }}
    />
  );
}
