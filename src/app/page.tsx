'use client';

import AnimatedHeader from "@/components/AnimatedHeader";
import Loader from "@/components/Loader";
import { PricingSection } from "@/components/PricingSection";
import ProjectCard from "@/components/Project";
import Bento from "@/components/Bento";
import useAppReady from "@/hooks/useAppReady";
import imgArriere from "@/assets/logo-arriere.png";
import imgImage from "@/assets/rania.png";
import imgImage1 from "@/assets/lionel.png";
import imgImage2 from "@/assets/dario.png";

export default function HomePage() {
  const preloadTargets = [imgArriere, imgImage, imgImage1, imgImage2].map((asset) =>
    typeof asset === "string" ? asset : "src" in asset ? asset.src : ""
  );

  const ready = useAppReady(preloadTargets, 1200);

  return (
    <div className="min-h-screen bg-background relative">
      {!ready && <Loader />}
      {ready && (
        <>
          <AnimatedHeader />
          
          <ProjectCard />
          <PricingSection />
          <Bento />
          
        </>
      )}
    </div>
  );
}
