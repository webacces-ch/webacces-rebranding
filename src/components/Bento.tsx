"use client"; // Nécessaire pour Framer Motion

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, Lock, Mic, Rocket, Scan, Search, Sparkles } from "lucide-react";

// --- Imports des images (garde tes imports existants) ---
// Remplace par tes vrais chemins si nécessaire
import visaLogo from "@/assets/bento/visa.svg";
import mastercardLogo from "@/assets/bento/mastercard.svg";
import stripeLogo from "@/assets/bento/Stripe.svg";
import paypalLogo from "@/assets/bento/paypal.svg";
import gpayLogo from "@/assets/bento/gpay.svg";
import applePayLogo from "@/assets/bento/ApplePay.svg";
import avatarElouan from "@/assets/nous/elouan.png";
import avatarLeo from "@/assets/nous/leo.png";
import avatarMaxime from "@/assets/nous/maxime.png";

// Petit composant pour animer les nombres (ex: 0 -> 6392)
const Counter = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500; // Durée de l'animation en ms
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

  // Formatage simple pour ajouter l'apostrophe des milliers si besoin
  const formatted = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "’");

  return <span>{prefix}{formatted}{suffix}</span>;
};

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

const cardBase =
  "relative overflow-hidden rounded-[32px] border border-[#E4E4E7] bg-white p-8 shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition-all duration-300";

// Variantes d'animation pour l'apparition
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Délai entre chaque enfant
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

const Bento = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-32 text-neutral-900 sm:px-6 lg:px-8 bg-white">
      <header className="mx-auto max-w-2xl text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[34px] font-semibold tracking-tight text-neutral-900"
        >
          Besoin d&apos;un site ?
        </motion.h2>
      </header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 auto-rows-fr"
      >
        
        {/* 1. Conversion card */}
        <motion.article 
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          className={`${cardBase} lg:col-span-4 flex flex-col justify-between group`}
        >
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-700 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors duration-300">
              <Rocket className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <div className="mt-6 flex items-center gap-3">
                <p className="text-[42px] font-semibold tracking-tighter text-neutral-900">
                  <Counter value={6392} prefix="$" />
                </p>
                <span className="inline-flex items-center rounded-lg bg-emerald-100/80 px-2.5 py-1 text-sm font-bold text-emerald-600">
                ↗ 44,3%
                </span>
            </div>
            <p className="mt-2 text-base text-neutral-500 font-medium">Optimisation de conversion</p>
          </div>
        </motion.article>

        {/* 2. SEO card */}
        <motion.article 
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          className={`${cardBase} flex flex-col items-center justify-center text-center gap-6 lg:col-span-4 group`}
        >
          <div>
            <p className="text-4xl font-semibold tracking-tight text-neutral-900">SEO</p>
            <p className="mt-2 text-sm text-neutral-500 font-medium">
              Boost de recherche <span className="font-bold text-neutral-700">G</span>
            </p>
          </div>
          
          {/* Barre de recherche animée au survol */}
          <div className="flex w-full max-w-[280px] items-center gap-3 rounded-full border border-neutral-200 bg-white pl-4 pr-2 py-2 shadow-sm transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-md">
            <Search className="h-5 w-5 text-neutral-400 group-hover:text-blue-500 transition-colors" />
            <span className="flex-1 text-left text-sm text-neutral-300 select-none">...</span>
            <div className="flex gap-2">
                <Mic className="h-5 w-5 text-neutral-400 hover:text-neutral-600 cursor-pointer" />
                <Scan className="h-5 w-5 text-neutral-400 hover:text-neutral-600 cursor-pointer" />
            </div>
          </div>
        </motion.article>

        {/* 3. Stats card (+240%) */}
        <motion.article 
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          className={`${cardBase} lg:col-span-4 lg:row-span-2 flex flex-col`}
        >
          <div className="flex items-start justify-between mb-auto">
            <div>
              <p className="text-[56px] leading-none font-semibold tracking-tight text-neutral-900">
                 <Counter value={240} prefix="+" suffix="%" />
              </p>
              <p className="mt-4 text-sm leading-snug text-neutral-500 font-medium max-w-[180px]">
                de trafic généré en moyenne après passage chez nous
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              30 jours
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
          
          {/* Graphique Animé */}
          <div className="relative mt-10 h-40 w-full">
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
                  className="w-full rounded-t-lg bg-neutral-800 hover:bg-neutral-600 transition-colors cursor-pointer"
                />
              ))}
            </div>
          </div>
        </motion.article>

        {/* 4. Ultra Design (ANIMATED BORDER) */}
        <motion.article 
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-8 min-h-[240px] relative rounded-[32px] overflow-hidden"
        >
          {/* Le Gradient qui tourne */}
          <div className="absolute inset-[-50%] animate-border-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#E2E8F0_50%,#fad0ff_75%,#9ac2ff_100%)]" />
          
          {/* Le contenu blanc par dessus */}
          <div className="absolute inset-[2px] rounded-[30px] bg-white">
             <div className="flex h-full w-full items-center justify-center rounded-[30px]">
              <div className="flex flex-col items-center gap-3 text-center relative z-10">
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                    <Sparkles className="h-8 w-8 text-neutral-800" strokeWidth={1.5} />
                </motion.div>
                <p className="text-3xl font-semibold text-neutral-900">Ultra Design.</p>
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
          className={`${cardBase} lg:col-span-4 flex flex-col items-center justify-center text-center`}
        >
          <p className="text-[64px] leading-none font-semibold tracking-tighter text-neutral-900">3</p>
          <p className="mt-2 text-sm font-medium text-neutral-500">nouveaux amis</p>
          <div className="mt-8 flex justify-center -space-x-4">
            {avatars.map(({ src, alt }, index) => (
              <motion.div
                key={alt}
                whileHover={{ y: -5, x: index * 5, zIndex: 10 }}
                className="relative h-14 w-14 rounded-full border-4 border-white bg-neutral-100 transition-all"
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

        {/* 6. Payments card */}
        <motion.article 
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          className={`${cardBase} lg:col-span-8 flex flex-col items-center justify-center gap-8`}
        >
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-semibold text-neutral-900">Paiements Sécurisés</h3>
            <Lock className="h-6 w-6 text-neutral-400" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {paymentLogos.map(({ src, alt }, i) => (
              <motion.div 
                key={alt} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.1, filter: "grayscale(0%)" }}
                className="flex h-12 w-20 items-center justify-center grayscale transition-all duration-300"
              >
                <Image src={src} alt={alt} className="h-8 w-auto object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.article>
        
      </motion.div>
    </section>
  );
};

export default Bento;