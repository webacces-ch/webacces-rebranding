import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import svgPaths from "../imports/svg-ti869rgl6z";
// Real asset imports replacing previous data URI placeholders.
import imgArriere from "../assets/logo-arriere.svg";
import imgImage from "../assets/rania.png";
import imgImage1 from "../assets/lionel.png";
import imgImage2 from "../assets/dario.png";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const container = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.064568892121315)+(var(--transform-inner-height)*0.9979132413864136)))] items-center justify-center ml-0 mt-0 relative w-[calc(1px*((var(--transform-inner-height)*0.064568892121315)+(var(--transform-inner-width)*0.9979132413864136)))]"
        style={{ "--transform-inner-width": "33.875", "--transform-inner-height": "33.8125" } as React.CSSProperties}
      >
        <div className="flex-none">
          <div className="h-[33.813px] relative w-[33.888px]" data-name="arrière">
            <div className="absolute inset-[-1.67%]">
              <Image
                alt="Fond du logo Webacces"
                className="block max-w-none size-full"
                src={imgArriere}
                sizes="36px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
{/*        <div className="[grid-area:1_/_1] h-[33.813px] ml-[1.129px] mt-[1.059px] relative w-[33.888px]" data-name="logo">
        <div className="absolute inset-[-1.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
            <g id="logo">
              <g filter="url(#filter0_i_1_80)">
                <path d={svgPaths.pb20900} fill="var(--fill-0, white)" />
              </g>
              <path d={svgPaths.p20d40bf0} stroke="var(--stroke-0, #404040)" strokeWidth="0.564791" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="34.9424" id="filter0_i_1_80" width="35.017" x="0.435209" y="0.435209">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1.19603" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.25 0 0 0 0 0.25 0 0 0 0 0.25 0 0 0 0.15 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_80" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>  */}
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[5.424px] items-center relative shrink-0">
      <Group6 />
    </div>
  );
}

function Cta() {
  return (
    <div className="relative rounded-[7.981px] shrink-0" data-name="CTA">
      <motion.div
        className="box-border content-stretch flex gap-[9.977px] items-center justify-center overflow-clip px-[21.948px] py-[13.967px] relative rounded-[inherit] cursor-pointer"
        initial={{ backgroundColor: "transparent" }}
        whileHover={{ backgroundColor: "#f7f7f7" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-['Instrument_Sans:Regular',_sans-serif] font-normal leading-[0.86] relative shrink-0 text-[#333333] text-[15.962px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Concept !
        </p>
      </motion.div>
      <div aria-hidden="true" className="absolute border-[#dedede] border-[0.998px] border-solid inset-0 pointer-events-none rounded-[7.981px]" />
    </div>
  );
}

function Frame220() {
  return (
    <div className="content-stretch flex gap-[26.937px] items-center relative shrink-0">
      <motion.p
        className="font-['Instrument_Sans:Regular',_sans-serif] font-normal leading-[0.86] relative shrink-0 text-[#333333] text-[16px] text-center text-nowrap whitespace-pre rounded-[7.981px] px-[21.948px] py-[13.967px] cursor-pointer"
        style={{ fontVariationSettings: "'wdth' 100" }}
        initial={{ backgroundColor: "transparent" }}
        whileHover={{ backgroundColor: "#f7f7f7" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        Concept
      </motion.p>
      <Cta />
    </div>
  );
}

function Navbar() {
  return (
    <motion.div
      className="box-border content-stretch flex h-[79.813px] items-center justify-between px-[39.906px] py-0 relative shrink-0 w-full max-w-[1440px]"
      data-name="NAVBAR"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Frame8 />
      <Frame220 />
    </motion.div>
  );
}

function Frame61() {
  return (
    <motion.div
      className="bg-[#f7f7f7] box-border content-stretch flex gap-[7px] items-center justify-center leading-[1.1] overflow-clip px-[16px] py-[8px] relative rounded-[29px] shrink-0 text-[12px] text-nowrap whitespace-pre"
      variants={fadeInUp}
    >
      <p className="font-medium relative shrink-0 text-black" style={{ fontFamily: "Instrument Sans, system-ui, sans-serif", fontWeight: 500, fontVariationSettings: "'wdth' 100" }}>
        👋
      </p>
      <p className="font-normal relative shrink-0 text-[rgba(0,0,0,0.85)] text-[14px]" style={{ fontFamily: "Instrument Sans, system-ui, sans-serif", fontVariationSettings: "'wdth' 100" }}>
        Bienvenue chez Webacces !
      </p>
    </motion.div>
  );
}

function TitleContainer() {
  return (
    <motion.div
      className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0 text-center w-[778px]"
      data-name="Title-container"
      variants={container}
      initial="initial"
      animate="animate"
    >
      <Frame61 />
      <motion.p
        className="leading-[0.95] min-w-full relative shrink-0 text-[82px] text-[rgba(0,0,0,0.85)] tracking-[-3px] w-[min-content]"
        style={{ fontFamily: "'Geist Variable', Instrument Sans, system-ui, sans-serif", fontWeight: 300 }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Rejoignez les marques qui comptent
      </motion.p>
    </motion.div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[3.617px] items-start relative shrink-0">
      <div className="h-[12.659px] relative shrink-0 w-[16.509px]" data-name="quote">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 13">
          <path d={svgPaths.p3c501d00} fill="var(--fill-0, #D2D2D2)" id="â" />
        </svg>
      </div>
  <p className="font-normal leading-[normal] relative shrink-0 text-[16.276px] text-[rgba(0,0,0,0.85)] w-[317.64px]" style={{ fontFamily: "Instrument Sans, system-ui, sans-serif", fontVariationSettings: "'wdth' 100" }}>
        <span>{`Equipe jeune, réactive et force de proposition. Mon site a gagné en `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-offset:18%] decoration-[#ffadf1] decoration-wavy underline">visibilité</span>
        <span>{` en quelques semaines. Merci !`}</span>
      </p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[5.259px] items-center relative shrink-0">
      <div className="relative rounded-[12.623px] shrink-0 size-[25.245px]" data-name="image">
        <Image
          alt="Portrait de Rania B."
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[12.623px]"
          src={imgImage}
          fill
          sizes="25px"
          placeholder="blur"
        />
      </div>
  <div className="font-medium leading-[normal] relative shrink-0 text-[#333333] text-[0px] text-nowrap whitespace-pre" style={{ fontFamily: "Instrument Sans, system-ui, sans-serif", fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Rania B.</p>
        <p className="text-[#c2c2c2] text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Chef de projet d&apos;une agence de voyage en ligne
        </p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip p-[20px] relative rounded-[12px]">
      <Frame66 />
      <Frame65 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[3.617px] items-start relative shrink-0">
      <div className="h-[12.659px] relative shrink-0 w-[16.509px]" data-name="quote">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 13">
          <path d={svgPaths.p3c501d00} fill="var(--fill-0, #D2D2D2)" id="â" />
        </svg>
      </div>
  <p className="font-normal leading-[normal] relative shrink-0 text-[16.276px] text-[rgba(0,0,0,0.85)] w-[317.64px]" style={{ fontFamily: "Instrument Sans, system-ui, sans-serif", fontVariationSettings: "'wdth' 100" }}>
        <span>{`L'équipe a bien saisi notre `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-offset:18%] decoration-[#4285f4] decoration-wavy underline">vision</span>
        <span>{` et nos besoins, puis y a parfaitement répondu. Nous sommes très contents.`}</span>
      </p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[5.259px] items-center relative shrink-0">
      <div className="relative rounded-[12.623px] shrink-0 size-[25.245px]" data-name="image">
        <Image
          alt="Portrait de Lionel G."
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[12.623px]"
          src={imgImage1}
          fill
          sizes="25px"
          placeholder="blur"
        />
      </div>
  <div className="font-medium leading-[normal] relative shrink-0 text-[#333333] text-[0px] w-[211.137px]" style={{ fontFamily: "Instrument Sans, system-ui, sans-serif", fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Lionel G.</p>
        <p className="text-[#c2c2c2] text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Co-fondateur d&apos;une startup en e-commerce
        </p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip p-[20px] relative rounded-[12px]">
      <Frame67 />
      <Frame68 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[3.617px] items-start relative shrink-0">
      <div className="h-[12.659px] relative shrink-0 w-[16.509px]" data-name="quote">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 13">
          <path d={svgPaths.p3c501d00} fill="var(--fill-0, #D2D2D2)" id="â" />
        </svg>
      </div>
  <p className="font-normal leading-[normal] relative shrink-0 text-[16.276px] text-[rgba(0,0,0,0.85)] w-[312.105px]" style={{ fontFamily: "Instrument Sans, system-ui, sans-serif", fontVariationSettings: "'wdth' 100" }}>
        <span>{`Satisfait de la collaboration. Le site a été livré `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-offset:18%] decoration-[#71e988] decoration-wavy underline" style={{ fontVariationSettings: "'wdth' 100" }}>
          rapidement
        </span>
        <span>{` et correspond exactement à ce que nous voulions. Merci à toute l'équipe !`}</span>
      </p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[5.259px] items-center relative shrink-0">
      <div className="relative rounded-[12.623px] shrink-0 size-[25.245px]" data-name="image 1">
        <Image
          alt="Portrait de Dario S."
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[12.623px]"
          src={imgImage2}
          fill
          sizes="25px"
          placeholder="blur"
        />
      </div>
  <div className="font-semibold leading-[normal] relative shrink-0 text-[#333333] text-[0px] w-[152px]" style={{ fontFamily: "Instrument Sans, system-ui, sans-serif", fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          Dario S.
        </p>
        <p className="text-[#c2c2c2] text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Restaurateur indépendant
        </p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip p-[20px] relative rounded-[12px] shadow-[0px_8px_12px_0px_rgba(0,0,0,0.12)]">
      <Frame70 />
      <Frame71 />
    </div>
  );
}

function Group1() {
  return (
    <motion.div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[71px] place-items-start relative"
      variants={container}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.08308272063732147)+(var(--transform-inner-height)*0.9965426325798035)))] items-center justify-center ml-0 mt-0 relative w-[calc(1px*((var(--transform-inner-height)*0.08308272063732147)+(var(--transform-inner-width)*0.9965426325798035)))]"
        style={{ "--transform-inner-width": "357.625", "--transform-inner-height": "147.5" } as React.CSSProperties}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex-none rotate-[355.234deg]">
          <Frame64 />
        </div>
      </motion.div>
      <motion.div
        className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.16591818630695343)+(var(--transform-inner-height)*0.9861395359039307)))] items-center justify-center ml-[669px] mt-[0.36px] relative w-[calc(1px*((var(--transform-inner-height)*0.16591818630695343)+(var(--transform-inner-width)*0.9861395359039307)))]"
        style={{ "--transform-inner-width": "357.625", "--transform-inner-height": "147.5" } as React.CSSProperties}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex-none rotate-[9.551deg]">
          <Frame69 />
        </div>
      </motion.div>
      <motion.div
        className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.028286730870604515)+(var(--transform-inner-height)*0.999599814414978)))] items-center justify-center ml-[335.07px] mt-[3.36px] relative w-[calc(1px*((var(--transform-inner-height)*0.028286730870604515)+(var(--transform-inner-width)*0.999599814414978)))]"
        style={{ "--transform-inner-width": "352.09375", "--transform-inner-height": "166.171875" } as React.CSSProperties}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex-none rotate-[358.379deg]">
          <Frame72 />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Reviews() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Reviews">
      <Group1 />
      <div className="[grid-area:1_/_1] h-[56.188px] ml-[519px] mt-0 relative w-[5.777px]">
        <div className="absolute bottom-[-0.89%] left-[-8.65%] right-[-27.95%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 57">
            <path d={svgPaths.p18b76c00} fill="var(--stroke-0, #333333)" id="Vector 2989" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame222() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-0 py-[60px] relative shrink-0">
      <TitleContainer />
      <Reviews />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2551e980} fill="var(--fill-0, #32ABF2)" id="Vector" stroke="var(--stroke-0, #32ABF2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p2f54f280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.05614" />
        </g>
      </svg>
    </div>
  );
}

function VoirToutLesAvis() {
  return (
    <motion.div
      className="relative rounded-[12px] shrink-0 w-[158.598px] cursor-pointer"
      data-name="Voir tout les avis"
      initial={{ opacity: 0, y: 20, backgroundColor: "#ffffff" }}
      animate={{ opacity: 1, y: 0, backgroundColor: "#ffffff" }}
      whileHover={{ backgroundColor: "#f7f7f7" }}
      transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[22px] py-[14px] relative rounded-[inherit] w-[158.598px]">
        <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[16px] text-nowrap tracking-[-0.38px]" style={{ fontFamily: "Instrument Sans, system-ui, sans-serif", fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre">Tous les avis</p>
        </div>
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedede] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </motion.div>
  );
}

export default function AnimatedHeader() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-center relative size-full overflow-x-hidden" data-name="HEADER">
      <div className="relative w-full max-w-[1440px] flex flex-col items-center gap-[10px] overflow-hidden">
        <Navbar />
        <Frame222 />
        <VoirToutLesAvis />
        <motion.div
          className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.1671648919582367)+(var(--transform-inner-height)*0.9859289526939392)))] items-center justify-center right-[calc(50%-520px)] top-[366px] w-[calc(1px*((var(--transform-inner-height)*0.1671648919582367)+(var(--transform-inner-width)*0.9859289526939392)))]"
          style={{ "--transform-inner-width": "60", "--transform-inner-height": "60" } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
        className="flex-none rotate-[9.623deg]"
        animate={{ 
          rotate: [9.623, 9.623 + 5, 9.623],
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
          >
        <div className="relative size-[60px]">
          <div className="absolute inset-[2.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
          <path d={svgPaths.p2cf2c440} fill="var(--fill-0, #FFADF1)" id="Star 3" />
            </svg>
          </div>
        </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.2131211906671524)+(var(--transform-inner-height)*0.9770257472991943)))] items-center justify-center left-[calc(50%-661px)] top-[246px] w-[calc(1px*((var(--transform-inner-height)*0.2131211906671524)+(var(--transform-inner-width)*0.9770257472991943)))]"
          style={{ "--transform-inner-width": "76", "--transform-inner-height": "76" } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
        className="flex-none rotate-[347.695deg]"
        animate={{ 
          rotate: [347.695, 347.695 - 5, 347.695],
          y: [0, 5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
          >
        <div className="relative size-[76px]">
          <div className="absolute inset-[1.626%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
          <path d={svgPaths.p7aa3300} fill="var(--fill-0, #71E988)" id="Star 2" />
            </svg>
          </div>
        </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.24323363602161407)+(var(--transform-inner-height)*0.9699677228927612)))] items-center justify-center right-[calc(50%-693px)] top-[80.17px] w-[calc(1px*((var(--transform-inner-height)*0.24323363602161407)+(var(--transform-inner-width)*0.9699677228927612)))]"
          style={{ "--transform-inner-width": "81", "--transform-inner-height": "81" } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
        className="flex-none rotate-[14.077deg]"
        animate={{ 
          rotate: [14.077, 14.077 + 5, 14.077],
          y: [0, -8, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
          >
        <div className="relative size-[81px]">
          <div className="absolute inset-[2.85%_9%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 77">
          <path d={svgPaths.p32457900} fill="var(--fill-0, #6461FC)" id="Star 1" />
            </svg>
          </div>
        </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
