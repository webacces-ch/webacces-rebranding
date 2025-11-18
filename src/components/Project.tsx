"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Adapte les imports d'images à ton arborescence
import brandlyftCover from "../assets/brandlyft.png";
import furbCover from "../assets/furb.png";

// --- Types ---
type ProjectCardData = {
  id: string;
  title: string;
  description: string;
  href?: string;
  image?: StaticImageData | string;
  status?: "online" | "wip";
  imageBorder?: boolean;
};

// --- Data ---
const projects: ProjectCardData[] = [
  {
    id: "brandlyft",
    title: "Brandlyft",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    href: "https://brandlyft.com",
    image: brandlyftCover,
    status: "online",
    imageBorder: false,
  },
  {
    id: "furb",
    title: "Furb.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    href: "https://www.furb.eu",
    image: furbCover,
    status: "online",
    imageBorder: true,
  },
  {
    id: "restau",
    title: "Projet de restauration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    status: "wip",
    imageBorder: true,
  },
  {
    id: "ecommerce",
    title: "Projet e-commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    status: "wip",
    imageBorder: true,
  },
  {
    id: "restau1",
    title: "Projet de restauration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    status: "wip",
    imageBorder: true,
  },
  {
    id: "ecommerce1",
    title: "Projet e-commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    status: "wip",
    imageBorder: true,
  },
];

// --- Sub-components ---

const PlaceholderIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className="h-7 w-7 text-neutral-400 dark:text-neutral-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 3h8" />
    <path d="M12 3v13" />
    <path d="M7 16h10l-1 5H8l-1-5Z" />
  </svg>
);

const ProjectCard = ({ project }: { project: ProjectCardData }) => {
  const cardFrameClasses = project.imageBorder
    ? "ring-1 ring-neutral-200 bg-white/80 dark:ring-white/15 dark:bg-white/5"
    : "ring-1 ring-transparent";

  // Contenu interne de la carte
  const CardInner = () => (
    <motion.article 
      // Animation au survol de la souris (petit lift vers le haut)
      whileHover={{ y: -5 }}
      className="group flex flex-col gap-4 cursor-pointer"
    >
      <div className={`relative aspect-[16/11] overflow-hidden rounded-[32px] ${cardFrameClasses}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-neutral-50 dark:bg-neutral-900">
            <PlaceholderIcon />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <h3 className="flex items-center gap-1 text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
          <span>{project.title}</span>
          {project.href && (
            <ArrowUpRight className="h-[15px] w-[15px] text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white" />
          )}
        </h3>

        {project.status === "wip" && (
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-medium text-neutral-600 ring-1 ring-neutral-200 dark:bg-neutral-900 dark:text-neutral-200 dark:ring-neutral-700">
            En construction
          </span>
        )}
      </div>

      <p className="max-w-xs text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {project.description}
      </p>
    </motion.article>
  );

  if (!project.href) {
    return <CardInner />;
  }

  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Ouvrir ${project.title} dans un nouvel onglet`}
      className="block"
    >
      <CardInner />
    </Link>
  );
};

// --- Main Component ---

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const initialVisibleCards = 2; // On affiche 2 cartes au début comme demandé

  // Les projets à afficher actuellement
  const visibleProjects = showAllProjects 
    ? projects 
    : projects.slice(0, initialVisibleCards);

  return (
    <section id="projects" className="mx-auto max-w-8xl px-4 pb-24 pt-48 sm:px-6 lg:px-8">
      {/* Header avec animation d'entrée */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <h2 className="text-[32px] font-semibold tracking-tight text-neutral-900 dark:text-white">
          Projets
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. 
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
        </p>
      </motion.header>

      <div className="relative">
        {/* GRID CONTAINER */}
        {/* "layout" permet d'animer la hauteur du conteneur automatiquement */}
        <motion.div
          layout
          className="grid gap-x-12 gap-y-16 p-2 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout="position" // Anime la position si la grille change
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1, // Effet cascade (stagger)
                    type: "spring",
                    damping: 20,
                    stiffness: 100
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GRADIENT FADE OVERLAY */}
        {/* Disparait doucement quand on ouvre tout */}
        <AnimatePresence>
          {!showAllProjects && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80"
              style={{ pointerEvents: "none" }} 
            />
          )}
        </AnimatePresence>
      </div>

      {/* BOUTON DÉROULER */}
      <div className="mt-10 flex justify-center relative z-10">
        <motion.button
          layout // Le bouton bouge aussi de manière fluide
          onClick={() => setShowAllProjects((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex h-12 items-center gap-2 rounded-full border border-neutral-200 bg-white pl-6 pr-4 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:hover:bg-white/5"
        >
          <span>{showAllProjects ? "Voir moins" : "Voir tous les projets"}</span>
          <motion.div
            animate={{ rotate: showAllProjects ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <ChevronDown className="h-4 w-4 text-neutral-500" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default ProjectsSection;