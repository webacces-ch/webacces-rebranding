"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, Lock, Mic, Rocket, Scan, Search, Sparkles } from "lucide-react";

// --- Imports des images ---
import visaLogo from "@/assets/bento/visa.svg";
import mastercardLogo from "@/assets/bento/mastercard.svg";
import stripeLogo from "@/assets/bento/Stripe.svg";
import paypalLogo from "@/assets/bento/paypal.svg";
import gpayLogo from "@/assets/bento/gpay.svg";
import applePayLogo from "@/assets/bento/ApplePay.svg";
import avatarElouan from "@/assets/nous/elouan.png";
import avatarLeo from "@/assets/nous/leo.png";
import avatarMaxime from "@/assets/nous/maxime.png";

// --- Composants utilitaires ---

const Counter = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  const formatted = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "’");
  return <span>{prefix}{formatted}{suffix}</span>;
};

// --- Données ---

const paymentLogos = [
  { src: visaLogo, alt: "Visa" },
  { src: mastercardLogo, alt: "Mastercard" },
  { src: stripeLogo, alt: "Stripe" },
  { src: paypalLogo, alt: "PayPal" },
  { src: gpayLogo, alt: "Google Pay" },
  { src: applePayLogo, alt: "Apple Pay" },
];

const avatars = [
  { src: avatarElouan, alt: "Elouan" },
  { src: avatarLeo, alt: "Léo" },
  { src: avatarMaxime, alt: "Maxime" },
];

const chartValues = [35, 55, 75, 95];

// Styles de base ajustés pour le responsive (p-6 mobile, p-8 desktop)
const cardBase =
  "relative overflow-hidden rounded-2xl md:rounded-[32px] border border-neutral-200 bg-white p-6 md:p-8 shadow-sm transition-all duration-300";

// --- Animations ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

const Bento = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <header className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-[34px] font-semibold tracking-tight text-neutral-900"
        >
          Besoin d&apos;un site ?
        </motion.h2>
      </header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        // RESPONSIVE GRID: 
        // 1 col (mobile) -> 2 cols (tablette) -> 12 cols (desktop)
        className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-12 auto-rows-fr"
      >
        
        {/* 1. Conversion card */}
        <motion.article 
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          className={`${cardBase} lg:col-span-4 flex flex-col justify-between group min-h-[200px]`}
        >
          <div>
            <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-700 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors duration-300">
              <Rocket className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
            </div>
            <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <p className="text-3xl md:text-[42px] font-semibold tracking-tighter text-neutral-900">
                  <Counter value={6392} prefix="$" />
                </p>
                <span className="inline-flex items-center rounded-lg bg-emerald-100/80 px-2.5 py-1 text-xs md:text-sm font-bold text-emerald-600">
                ↗ 44,3%
                </span>
            </div>
            <p className="mt-2 text-sm md:text-base text-neutral-500 font-medium">Optimisation de conversion</p>
          </div>
        </motion.article>

        {/* 2. SEO card */}
        <motion.article 
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          className={`${cardBase} flex flex-col items-center justify-center text-center gap-6 lg:col-span-4 group min-h-[200px]`}
        >
          <div>
            <p className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">SEO</p>
            <p className="mt-2 text-sm text-neutral-500 font-medium">
              Boost de recherche <span className="font-bold text-neutral-700">G</span>
            </p>
          </div>
          
          <div className="flex w-full max-w-[280px] items-center gap-3 rounded-full border border-neutral-200 bg-white pl-4 pr-2 py-2 shadow-sm transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-md">
            <Search className="h-4 w-4 md:h-5 md:w-5 text-neutral-400 group-hover:text-blue-500 transition-colors" />
            <span className="flex-1 text-left text-xs md:text-sm text-neutral-300 select-none">...</span>
            <div className="flex gap-2">
                <Mic className="h-4 w-4 md:h-5 md:w-5 text-neutral-400 hover:text-neutral-600 cursor-pointer" />
                <Scan className="h-4 w-4 md:h-5 md:w-5 text-neutral-400 hover:text-neutral-600 cursor-pointer" />
            </div>
          </div>
        </motion.article>

        {/* 3. Stats card (+240%) 
            NOTE: Sur tablette (md), elle prend toute la largeur (col-span-2) pour laisser le graphique respirer
            Sur desktop (lg), elle redevient verticale (col-span-4, row-span-2)
        */}
        <motion.article 
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          className={`${cardBase} md:col-span-2 lg:col-span-4 lg:row-span-2 flex flex-col`}
        >
          <div className="flex items-start justify-between mb-6 md:mb-auto">
            <div>
              {/* Typographie fluide pour éviter la rupture */}
              <p className="text-5xl lg:text-[56px] leading-none font-semibold tracking-tight text-neutral-900">
                 <Counter value={240} prefix="+" suffix="%" />
              </p>
              <p className="mt-4 text-sm leading-snug text-neutral-500 font-medium max-w-[200px]">
                de trafic généré en moyenne après passage chez nous
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              30 jours
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>
          
          {/* Graphique */}
          <div className="relative mt-auto pt-8 h-40 w-full">
            <div className="absolute inset-0 flex flex-col justify-between">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-full border-t border-dashed border-neutral-200" />
              ))}
            </div>
            <div className="relative flex h-full items-end justify-between px-2 gap-4">
              {chartValues.map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className="w-full rounded-t md:rounded-t-lg bg-neutral-800 hover:bg-neutral-600 transition-colors cursor-pointer"
                />
              ))}
            </div>
          </div>
        </motion.article>

        {/* 4. Ultra Design (ANIMATED BORDER) 
            Sur tablette: prend toute la largeur
        */}
        <motion.article 
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 lg:col-span-8 min-h-[240px] relative rounded-2xl md:rounded-[32px] overflow-hidden shadow-sm"
        >
          {/* Gradient tournant (Framer Motion au lieu de CSS custom) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute inset-[-50%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#E2E8F0_50%,#fad0ff_75%,#9ac2ff_100%)]" 
          />
          
          {/* Contenu blanc */}
          <div className="absolute inset-[2px] rounded-[14px] md:rounded-[30px] bg-white">
             <div className="flex h-full w-full items-center justify-center rounded-[14px] md:rounded-[30px]">
              <div className="flex flex-col items-center gap-3 text-center relative z-10 px-4">
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                    <Sparkles className="h-8 w-8 text-neutral-800" strokeWidth={1.5} />
                </motion.div>
                <p className="text-2xl md:text-3xl font-semibold text-neutral-900">Ultra Design.</p>
                <p className="text-sm text-neutral-500 font-medium">
                    Des interfaces haut de gamme
                </p>
              </div>
            </div>
          </div>
        </motion.article>

        {/* 5. Friends card */}
        <motion.article 
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          className={`${cardBase} flex flex-col items-center justify-center text-center min-h-[200px] lg:col-span-4`}
        >
          <p className="text-5xl md:text-[64px] leading-none font-semibold tracking-tighter text-neutral-900">3</p>
          <p className="mt-2 text-sm font-medium text-neutral-500">nouveaux amis</p>
          <div className="mt-6 md:mt-8 flex justify-center -space-x-4">
            {avatars.map(({ src, alt }, index) => (
              <motion.div
                key={alt}
                whileHover={{ y: -5, x: index * 5, zIndex: 10 }}
                className="relative h-12 w-12 md:h-14 md:w-14 rounded-full border-4 border-white bg-neutral-100 transition-all"
              >
                <Image 
                    src={src} 
                    alt={alt} 
                    fill
                    className="rounded-full object-cover" 
                />
              </motion.div>
            ))}
          </div>
        </motion.article>

        {/* 6. Payments card 
            Tablette: reprend sa place de 1 colonne (partagée avec Friends) si désiré, ou full width.
            Ici: sur desktop lg:col-span-8. Sur mobile/tablette, elle prend le flux naturel.
        */}
        <motion.article 
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          className={`${cardBase} md:col-span-2 lg:col-span-8 flex flex-col items-center justify-center gap-6 md:gap-8 min-h-[200px]`}
        >
          <div className="flex items-center gap-3">
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">Paiements Sécurisés</h3>
            <Lock className="h-5 w-5 md:h-6 md:w-6 text-neutral-400" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {paymentLogos.map(({ src, alt }, i) => (
              <motion.div 
                key={alt} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.1, filter: "grayscale(0%)" }}
                className="flex h-10 w-16 md:h-12 md:w-20 items-center justify-center grayscale transition-all duration-300"
              >
                <Image src={src} alt={alt} className="h-6 md:h-8 w-auto object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.article>
        
      </motion.div>
    </section>
  );
};

export default Bento;