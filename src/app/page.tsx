'use client';

import AnimatedHeader from "@/components/AnimatedHeader";
import Loader from "@/components/Loader";
import { PricingSection } from "@/components/PricingSection";
import ProjectCard from "@/components/Project"; // Note: Le composant s'appelle ProjectsSection dans le fichier, mais l'import est ok
import Bento from "@/components/Bento";
import useAppReady from "@/hooks/useAppReady";
import imgArriere from "@/assets/logo-arriere.svg"; // Attention: extension .svg dans tes autres fichiers, .png ici. Vérifie tes assets.
import imgImage from "@/assets/rania.png";
import imgImage1 from "@/assets/lionel.png";
import imgImage2 from "@/assets/dario.png";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import Hesiter from "@/components/Hesiter";
import TechStack from "@/components/TechStack";

export default function HomePage() {
  // Vérifie bien les extensions (.png vs .svg) selon tes fichiers réels
  const preloadTargets = [imgArriere, imgImage, imgImage1, imgImage2].map((asset) =>
    typeof asset === "string" ? asset : "src" in asset ? asset.src : ""
  );

  const ready = useAppReady(preloadTargets, 1200);

  return (
    <div className="min-h-screen bg-background relative">
      {!ready && <Loader />}
      
      {ready && (
        <main className="flex flex-col gap-0"> {/* Ajout de flex-col pour assurer l'empilement propre */}
          
          {/* 1. ACCROCHE & PREUVE SOCIALE */}
          <AnimatedHeader />
          
          {/* 2. PROPOSITION DE VALEUR & RÉSULTATS (Le "Pourquoi") */}
          {/* Le Bento explique pourquoi il faut un site et les résultats attendus (Traffic, Conversion) */}
          <Bento />
          
          {/* 3. PREUVE VISUELLE (Le Portfolio) */}
          {/* Maintenant qu'on a expliqué la valeur, on montre les réalisations */}
          <ProjectCard />
          
          {/* 4. CRÉDIBILITÉ TECHNIQUE */}
          {/* On rassure sur la techno utilisée (Vitesse, Modernité) */}
         {/*  <TechStack /> */}

          {/* 5. AUTORITÉ & EXPERTISE */}
          {/* On montre qu'on connait notre métier (Design, Storytelling) avant de vendre */}
          <InsightsSection />
          
          {/* 6. L'OFFRE (Pricing) */}
          {/* Le client est chaud, on présente les tarifs */}
          <PricingSection />
          
          {/* 7. FILET DE SÉCURITÉ (Traitement des objections) */}
          {/* Juste après le prix : "Vous hésitez ?" pour récupérer ceux qui trouvent ça cher */}
          <Hesiter />
          
          {/* 8. ACTION FINALE */}
          <ContactSection />
          
        </main>
      )}
    </div>
  );
}