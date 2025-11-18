"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- IMPORT ASSETS (Simulés pour l'exemple, remplace par tes vrais imports) ---
// Tu peux utiliser des placeholders si tu n'as pas les images
import avatar1 from "@/assets/nous/elouan.png"; // Exemple
import avatar2 from "@/assets/nous/leo.png";
import avatar3 from "@/assets/nous/maxime.png";
// Pour les images de fond abstraites, tu peux en trouver sur Unsplash
// ou utiliser des div de couleur si tu n'as pas d'images.

// --- DATA (JSON) ---
// C'est ici que tu modifies le contenu facilement.
const insightsData = [
  {
    id: 1,
    category: "Design",
    title: "Tendances Actuelles en Design",
    date: "Aug. 17",
    excerpt:
      "L'importance de la recherche utilisateur permet de créer des produits qui répondent réellement aux besoins et aux attentes des consommateurs.",
    author: {
      name: "Antoine Mercier",
      avatar: avatar1, // Remplace par l'URL ou l'import de l'avatar
    },
    // Mettre une URL d'image ou un import local. 
    // Si null, on affiche le style "texte noir sur fond blanc" (carte 2)
    coverImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
    style: "image-overlay", // 'image-overlay' ou 'minimal'
  },
  {
    id: 2,
    category: "Animation",
    title: "L'impact de l'Animation Subtile",
    date: "Aug. 17",
    excerpt:
      "L'intégration de micro-interactions aide à guider l'utilisateur à travers des tâches complexes, facilitant ainsi l'apprentissage et la navigation.",
    author: {
      name: "Julien Renault",
      avatar: avatar2,
    },
    coverImage: null, // Pas d'image de fond ici, style minimaliste
    style: "minimal",
  },
  {
    id: 3,
    category: "Storytelling",
    title: "L'Art de la Narration Visuelle",
    date: "Aug. 17",
    excerpt:
      "L'utilisation de la typographie dynamique permet de renforcer l'identité de la marque tout en optimisant la lisibilité sur différents appareils.",
    author: {
      name: "Marc Dupont",
      avatar: avatar3,
    },
    coverImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    style: "image-overlay",
  },
  {
    id: 4,
    category: "UX/UI",
    title: "La Simplicité de l'Efficacité",
    date: "Aug. 17",
    excerpt:
      "Le design adaptatif est crucial pour garantir que les interfaces soient fonctionnelles et esthétiques sur tous les types d'écrans.",
    author: {
      name: "Elodie Martin",
      avatar: avatar1,
    },
    coverImage: null, // Style texte
    style: "minimal", // Pourrait être 'typography' comme sur ton image (texte en fond)
  },
];

// --- COMPONENTS ---

const InsightCard = ({ data, index }: { data: typeof insightsData[0]; index: number }) => {
  const isImageOverlay = data.style === "image-overlay";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[32px] bg-white border border-neutral-200 shadow-sm transition-shadow duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
    >
      {/* HEADER DE LA CARTE (Image ou Minimal) */}
      <div className={`relative h-64 w-full overflow-hidden ${!isImageOverlay ? "bg-neutral-50 p-8" : ""}`}>
        
        {/* Option 1: Image avec Overlay (Cartes 1 et 3) */}
        {isImageOverlay && data.coverImage && (
          <>
            <Image
              src={data.coverImage}
              alt={data.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient overlay pour lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-6 w-full text-white">
              <h3 className="text-2xl font-semibold leading-tight tracking-tight mb-1">
                {data.title}
              </h3>
            </div>
             <span className="absolute bottom-6 right-6 text-xs font-medium text-white/80">
                {data.date}
            </span>
          </>
        )}

        {/* Option 2: Minimal / Pattern (Carte 2 et 4) */}
        {!isImageOverlay && (
          <div className="flex h-full flex-col justify-between relative">
             {/* Petit pattern de fond décoratif optionnel */}
             <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative z-10">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-neutral-900">
                {data.title}
                </h3>
            </div>
            <span className="self-end text-xs font-medium text-neutral-400 relative z-10">
                {data.date}
            </span>
          </div>
        )}
      </div>

      {/* CORPS DE LA CARTE */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 pt-6">
        <p className="text-sm leading-relaxed text-neutral-500 font-medium">
          {data.excerpt}
        </p>

        <div className="mt-8 flex items-center justify-between border-t border-neutral-100 pt-6">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-neutral-200">
              <Image
                src={data.author.avatar}
                alt={data.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-semibold text-neutral-900">
              {data.author.name}
            </span>
          </div>
          
          {/* Petite flèche qui apparait au hover pour l'affordance */}
          <div className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
             <ArrowRight className="h-4 w-4 text-neutral-400" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const InsightsSection = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl"
          >
            Insights Design
          </motion.h2>
        </div>

        {/* GRILLE RESPONSIVE */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
          {insightsData.map((insight, index) => (
            <InsightCard key={insight.id} data={insight} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;