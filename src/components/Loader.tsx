"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import imgArriere from "../assets/logo-arriere.svg"; // Ton logo

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  // Gestion de la taille de l'écran pour la courbe SVG
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Logique du compteur (plus rapide vers la fin pour l'effet psychologique)
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Petit temps d'arrêt à 100%
          return 100;
        }
        // Accélération exponentielle simulée
        const increment = Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // --- COURBES SVG POUR L'EFFET LIQUIDE ---
  // Courbe initiale (plate)
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;
  
  // Courbe finale (incurvée vers le haut comme un sourire avant de disparaitre)
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height - 300} 0 ${dimension.height}  L0 0`;

  // Animation du rideau blanc
  const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any, delay: 0.2 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <>
          <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white shadow-2xl" 
            // shadow-2xl est crucial ici : il permet de voir le loader glisser sur le fond blanc du site
          >
            {/* Contenu Central */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -100, transition: { duration: 0.3 } }}
                className="relative flex flex-col items-center z-10"
            >
                {/* LOGO : Effet de mise au point (Blur -> Net) + Rebond léger */}
                <motion.div
                    initial={{ filter: "blur(15px)", scale: 0.9, opacity: 0 }}
                    animate={{ 
                        filter: "blur(0px)", 
                        scale: 1, 
                        opacity: 1,
                        transition: { duration: 1, ease: "circOut" }
                    }}
                    className="relative h-32 w-32 sm:h-40 sm:w-40 mb-6"
                >
                    <Image
                        src={imgArriere}
                        alt="Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* Compteur Typographique Élégant */}
                <div className="flex flex-col items-center overflow-hidden">
                   <motion.p 
                      className="text-6xl sm:text-8xl font-light tracking-tighter text-neutral-900"
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                   >
                      {counter}%
                   </motion.p>
                   <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 mt-2">
                      Chargement de l'expérience
                   </p>
                </div>
            </motion.div>

            {/* SVG : C'est lui qui crée la courbe liquide en bas lors de la remontée */}
            {dimension.width > 0 && (
                <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none z-0 fill-white">
                    <motion.path
                        initial={{ d: initialPath }}
                        exit={{ 
                            d: targetPath, 
                            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any, delay: 0.2 } 
                        }}
                    />
                </svg>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}