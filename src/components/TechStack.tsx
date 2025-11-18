"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { AnimatedBeam } from "@/components/ui/animated-beam"; 
import { Cpu } from "lucide-react";
import { motion } from "framer-motion";

// --- DATA ---
const frameworks = [
  { name: "Vue", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Next", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "Node", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const divSourceRef = useRef<HTMLDivElement>(null); // La Source (Haut)
  const divTargetRefs = useRef<(HTMLDivElement | null)[]>([]); // Les Cibles (Bas)

  return (
    <div
      className="relative flex w-full max-w-[1200px] mx-auto items-center justify-center overflow-hidden bg-white p-16 md:p-24"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-48">
        
        {/* --- NIVEAU 1 : SOURCE (HAUT) --- */}
        <div className="flex flex-row justify-center">
          <div
            ref={divSourceRef}
            className="z-10 flex items-center gap-4 rounded-full border border-neutral-200 bg-white px-8 py-4 shadow-md"
          >
            <Cpu className="h-8 w-8 text-neutral-800" />
            <span className="text-xl font-bold text-neutral-900">
              Propulsé <span className="font-medium text-neutral-500">par</span>
            </span>
          </div>
        </div>

        {/* --- NIVEAU 2 : DESTINATIONS (BAS) --- */}
        <div className="flex flex-row justify-center flex-wrap gap-8 md:gap-16">
          {frameworks.map((fw, index) => (
            <div 
                key={fw.name} 
                className="z-10 flex flex-col items-center gap-4"
                ref={(el) => { divTargetRefs.current[index] = el; }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-[32px] border bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <Image
                  className="h-12 w-12 md:h-14 md:w-14 object-contain"
                  src={fw.logo}
                  alt={fw.name}
                  width={56}
                  height={56}
                />
              </motion.div>
              <span className="text-lg font-semibold text-neutral-600">{fw.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- LES BEAMS --- */}
      {frameworks.map((_, index) => (
        <AnimatedBeam
          key={index}
          containerRef={containerRef}
          
          // C'EST ICI QUE LA MAGIE OPÈRE :
          // On force la source à être TOUJOURS "Propulsé par" (divSourceRef)
          fromRef={divSourceRef}
          
          // On force la destination à être TOUJOURS l'icône (divTargetRefs)
          toRef={{ current: divTargetRefs.current[index] }}
          
          // true pour les 3 premiers, false pour les 2 derniers
          reverse={index < 3}

          curvature={75}
          endYOffset={-10}
          gradientStartColor="#000000" 
          gradientStopColor="#3b82f6"
          pathColor="#e5e7eb"
          pathWidth={3}

          duration={10} 
        />
      ))}
    </div>
  );
}