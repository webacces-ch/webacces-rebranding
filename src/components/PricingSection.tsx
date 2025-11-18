import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import {
  Check,
  X,
  Clock,
  Shield,
  ArrowRight,
  Phone,
  Eye,
  Users,
  Target,
  Zap,
  Send,
  CreditCard,
  Filter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { CheckmarkIcon } from "./CheckmarkIcon";

export function PricingSection() {
  const [openPlan, setOpenPlan] = useState<string | null>(null);
  // Nouvel état pour gérer le flou progressif du tableau comparatif
  const [isComparisonExpanded, setIsComparisonExpanded] = useState(false);

  const plans = [
    {
      name: "WebAcces Signature",
      displayName: "WebAcces Signature",
      price: "4 000",
      currency: "CHF",
      description:
        "lancez votre business en 15 jours, prêt à convertir",
      features: [
        "Landing page sur-mesure, responsive et pensée pour votre audience",
        "Design aligné à votre branding (logo, palette, ton)",
        "Animation légère pour une expérience fluide",
        "Intégration contact / newsletter / prise de rendez-vous",
        "2 révisions",
        "Délais : 15-20 jours",
      ],
      cta: "Affirmer ma présence",
      popular: false,
      tier: "signature",
    },
    {
      name: "WebAcces Pro",
      displayName: "WebAcces Pro",
      price: "7 000",
      currency: "CHF",
      description:
        "faites passer votre marque à la vitesse supérieure, avec un site qui vend et marque les esprits",
      features: [
        "Site 5-7 pages (accueil, à propos, service / produit, blog, contact…)",
        "Identité graphique poussée, design sur-mesure",
        "Micro-interactions et animations pour sublimer l'expérience",
        "Optimisation SEO (structure, performance)",
        "Intégration e-commerce ou prise de rendez-vous",
        "3 révisions",
        "Délais : 30-45 jours",
      ],
      cta: "Rejoindre l'élite",
      popular: true,
      tier: "pro",
    },
    {
      name: "WebAcces Prestige",
      displayName: "WebAcces Prestige",
      price: "12 000",
      currency: "CHF",
      description:
        "Une relation privilégiée où nous devenons une extension de votre équipe, avec un engagement mutuel sur vos objectifs de croissance.",
      features: [
        "Design totalement sur-mesure, animations avancées, storytelling visuel",
        "Pages illimitées dans un périmètre défini",
        "CRO (optimisation conversion) + SEO avancé",
        "Intégration complète (e-commerce, CRM, outils tiers…)",
        "Suivi et accompagnement 3 mois",
        "Conception UX/UI premium avec tests utilisateur",
        "Formation équipe interne à la gestion du site",
        "Stratégie de contenu et copywriting professionnel",
        "Analytics avancés et reporting mensuel",
        "Maintenance et sécurité renforcée 6 mois",
        "Support prioritaire 24/7",
        "Migration et sauvegarde automatique",
        "5 révisions",
        "Délais : 45-60 jours",
      ],
      cta: "Candidater",
      popular: false,
      tier: "prestige",
    },
  ];

  // DONNÉES RÉORGANISÉES : Tri "Waterfall" (Signature -> Pro -> Prestige)
  const comparisonFeatures = [
    {
      category: "Design & Développement",
      features: [
        // Niveau 1 : Inclus partout (Signature)
        {
          name: "Landing page sur-mesure",
          signature: true,
          pro: true,
          prestige: true,
        },
        {
          name: "Design aligné au branding",
          signature: true,
          pro: true,
          prestige: true,
        },
        {
          name: "Animations légères",
          signature: true,
          pro: true, // Pro inclut mieux, mais inclut "au moins" ça techniquement
          prestige: true,
        },
        // Niveau 2 : Ajout Pro
        {
          name: "Site multi-pages (5-7 pages)",
          signature: false,
          pro: true,
          prestige: true,
        },
        {
          name: "Identité graphique poussée",
          signature: false,
          pro: true,
          prestige: true,
        },
        {
          name: "Micro-interactions",
          signature: false,
          pro: true,
          prestige: true,
        },
        // Niveau 3 : Exclusif Prestige
        {
          name: "Pages illimitées",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Design totalement sur-mesure",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Animations avancées",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Storytelling visuel",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Conception UX/UI premium",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Tests utilisateur",
          signature: false,
          pro: false,
          prestige: true,
        },
      ],
    },
    {
      category: "Optimisation & Performance",
      features: [
        // Niveau 2 : Ajout Pro
        {
          name: "Optimisation SEO structure",
          signature: false,
          pro: true,
          prestige: true,
        },
        {
          name: "Optimisation performance",
          signature: false,
          pro: true,
          prestige: true,
        },
        // Niveau 3 : Exclusif Prestige
        {
          name: "SEO avancé",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Optimisation conversion (CRO)",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Analytics avancés",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Reporting mensuel",
          signature: false,
          pro: false,
          prestige: true,
        },
      ],
    },
    {
      category: "Intégrations",
      features: [
        // Niveau 1 : Inclus partout
        {
          name: "Contact / Newsletter",
          signature: true,
          pro: true,
          prestige: true,
        },
        {
          name: "Prise de rendez-vous",
          signature: true,
          pro: true,
          prestige: true,
        },
        // Niveau 2 : Ajout Pro
        {
          name: "E-commerce",
          signature: false,
          pro: true,
          prestige: true,
        },
        // Niveau 3 : Exclusif Prestige
        {
          name: "Intégration CRM",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Outils tiers",
          signature: false,
          pro: false,
          prestige: true,
        },
      ],
    },
    {
      category: "Service & Support",
      features: [
        // Variables (Textes)
        {
          name: "Révisions incluses",
          signature: "2",
          pro: "3",
          prestige: "∞",
        },
        {
          name: "Délais de livraison",
          signature: "15-20 jours",
          pro: "30-45 jours",
          prestige: "sur mesure",
        },
        // Niveau 3 : Exclusif Prestige (Le gros du service est ici)
        {
          name: "Accompagnement 3 mois",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Formation équipe",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Support prioritaire 24/7",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Maintenance 6 mois",
          signature: false,
          pro: false,
          prestige: true,
        },
        {
          name: "Stratégie de contenu",
          signature: false,
          pro: false,
          prestige: true,
        },
      ],
    },
  ];

  const renderPrestigeCard = (plan: any) => {
    return (
      <div className="relative bg-[#ffffff] border border-[#d2d2d2] hover:border-[#2b2b2b] rounded-lg p-6 md:p-8 transition-all duration-200 overflow-hidden">
        {/* Effet de flou en arrière-plan */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Rideau flou principal */}
          <div
            className="absolute top-0 left-1/4 w-3/4 h-full bg-gradient-to-r from-transparent via-black/[0.06] to-transparent transform -skew-x-12 blur-3xl"
            style={{
              filter: "blur(50px)",
              opacity: 0.3,
            }}
          />

          {/* Forme alongée diagonale */}
          <div
            className="absolute top-1/4 -left-1/4 w-full h-1/2 bg-gradient-to-br from-black/[0.04] via-black/[0.08] to-transparent transform rotate-12 blur-2xl"
            style={{
              filter: "blur(35px)",
              opacity: 0.4,
            }}
          />

          {/* Accent subtil en bas */}
          <div
            className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tl from-black/[0.03] to-transparent blur-xl"
            style={{
              filter: "blur(25px)",
              opacity: 0.2,
            }}
          />

          {/* Forme circulaire pour plus de texture */}
          <div
            className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-gradient-radial from-black/[0.05] via-black/[0.02] to-transparent blur-2xl rounded-full"
            style={{
              filter: "blur(40px)",
              opacity: 0.3,
            }}
          />
        </div>

        {/* Contenu de la carte */}
        <div className="relative z-10">
          <div className="text-center mb-6 md:mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-5 w-5 md:h-5 md:w-5 text-[#333333]" />
              <h3
                className="font-['Instrument_Sans',_sans-serif] text-2xl md:text-xl text-[#333333]"
                style={{ fontWeight: 500 }}
              >
                {plan.displayName}
              </h3>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="font-['Geist',_sans-serif] text-6xl md:text-5xl text-[#333333] tracking-[-0.02em]"
                  style={{ fontWeight: 500 }}
                >
                  {plan.price.replace(" ", "\u00A0")}
                </span>
                <span
                  className="font-['Instrument_Sans',_sans-serif] text-2xl md:text-xl text-[#6a6a6a]"
                  style={{ fontWeight: 400 }}
                >
                  {plan.currency}
                </span>
              </div>
              <p
                className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#6a6a6a] mt-2"
                style={{ fontWeight: 400 }}
              >
                Investissement initial
              </p>
            </div>

            <p
              className="font-['Instrument_Sans',_sans-serif] text-lg md:text-base text-[#6a6a6a] leading-relaxed mb-6"
              style={{ fontWeight: 400 }}
            >
              {plan.description}
            </p>
          </div>

          <div className="space-y-6 mb-6 md:mb-8">
            {/* Vision partagée */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#fff0f8] rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-[#FF7DCF]" />
              </div>
              <div>
                <h4
                  className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333] mb-2"
                  style={{ fontWeight: 500 }}
                >
                  Vision partagée
                </h4>
                <p
                  className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#6a6a6a] leading-relaxed"
                  style={{ fontWeight: 400 }}
                >
                  Nous alignons nos objectifs aux vôtres et
                  co-créons une stratégie digitale sur-mesure
                  qui évolue avec votre croissance.
                </p>
              </div>
            </div>

            {/* Accompagnement dédié */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#f0f8ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-[#707eff]" />
              </div>
              <div>
                <h4
                  className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333] mb-2"
                  style={{ fontWeight: 500 }}
                >
                  Équipe dédiée
                </h4>
                <p
                  className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#6a6a6a] leading-relaxed"
                  style={{ fontWeight: 400 }}
                >
                  Une équipe d'experts devient votre extension
                  digitale : designer, développeur, stratège et
                  gestionnaire de projet dédiés.
                </p>
              </div>
            </div>

            {/* Évolution continue */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#f0fff4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-[#71e988]" />
              </div>
              <div>
                <h4
                  className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333] mb-2"
                  style={{ fontWeight: 500 }}
                >
                  Évolution continue
                </h4>
                <p
                  className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#6a6a6a] leading-relaxed"
                  style={{ fontWeight: 400 }}
                >
                  Votre site évolue avec votre business.
                  Optimisations, nouvelles fonctionnalités et
                  ajustements stratégiques inclus.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#e2e2e2] pt-6 mb-6 md:mb-8">
            <h4
              className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333] mb-4"
              style={{ fontWeight: 500 }}
            >
              Votre engagement : être prêt à grandir ensemble
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-[#71e988] mt-0.5 flex-shrink-0" />
                <span
                  className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#6a6a6a] leading-relaxed"
                  style={{ fontWeight: 400 }}
                >
                  Partager votre vision et vos objectifs
                  business
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-[#71e988] mt-0.5 flex-shrink-0" />
                <span
                  className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#6a6a6a] leading-relaxed"
                  style={{ fontWeight: 400 }}
                >
                  Collaborer étroitement avec notre équipe
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-[#71e988] mt-0.5 flex-shrink-0" />
                <span
                  className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#6a6a6a] leading-relaxed"
                  style={{ fontWeight: 400 }}
                >
                  Avoir l'ambition de dominer votre marché
                </span>
              </div>
            </div>
          </div>

          <button
            className="group w-full px-6 py-4 md:py-3 rounded-lg transition-all duration-200 font-['Instrument_Sans',_sans-serif] bg-[#f2f2f2] hover:bg-[#e2e2e2] text-[#333333] border border-[#d2d2d2] cursor-pointer text-lg md:text-base"
            style={{ fontWeight: 500 }}
          >
            <div className="flex items-center justify-center gap-2">
              <span>{plan.cta}</span>
              <Send className="h-5 w-5 md:h-4 md:w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-200" />
            </div>
          </button>

          <div className="mt-6 text-center">
            <p
              className="font-['Instrument_Sans',_sans-serif] text-sm md:text-xs text-[#6a6a6a]"
              style={{ fontWeight: 400 }}
            >
              Processus de sélection mutuel - Nombre de
              partenariat limité
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Fonction pour obtenir la valeur d'une fonctionnalité pour un plan spécifique
  const getFeatureValue = (feature: any, planType: 'signature' | 'pro' | 'prestige') => {
    return feature[planType];
  };

  // Rendu du tableau mobile avec dropdowns
  const renderMobileComparison = () => {
    const planTypes: Array<{key: 'signature' | 'pro' | 'prestige', name: string, popular?: boolean, price: string}> = [
      { key: 'signature', name: 'Signature', price: '4 000 CHF' },
      { key: 'pro', name: 'Pro', popular: true, price: '7 000 CHF' },
      { key: 'prestige', name: 'Prestige', price: '12 000 CHF' }
    ];

    return (
      <div className="block md:hidden space-y-4">
        {planTypes.map((planType) => (
          <Collapsible
            key={planType.key}
            open={openPlan === planType.key}
            onOpenChange={(isOpen) => setOpenPlan(isOpen ? planType.key : null)}
          >
            <div className={`bg-[#ffffff] border rounded-lg transition-all duration-300 ${
              planType.key === 'pro' ? 'border-[#0f0f0f]' : 'border-[#e2e2e2]'
            } ${openPlan === planType.key ? 'shadow-md' : ''}`}>
              
              {/* En-tête cliquable du plan */}
              <CollapsibleTrigger className="w-full">
                <div className="p-5 flex items-center justify-between hover:bg-black/[0.02] transition-colors duration-300 rounded-t-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-left">
                      <h3
                        className="font-['Instrument_Sans',_sans-serif] text-lg text-[#333333] mb-1"
                        style={{ fontWeight: 500 }}
                      >
                        WebAcces {planType.name}
                      </h3>
                      <p
                        className="font-['Geist',_sans-serif] text-base text-[#6a6a6a]"
                        style={{ fontWeight: 400 }}
                      >
                        {planType.price}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span
                      className="font-['Instrument_Sans',_sans-serif] text-sm text-[#6a6a6a]"
                      style={{ fontWeight: 400 }}
                    >
                      {openPlan === planType.key ? 'Masquer' : 'Voir détails'}
                    </span>
                    {openPlan === planType.key ? (
                      <ChevronUp className="h-5 w-5 text-[#6a6a6a] transition-transform duration-300 ease-out" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#6a6a6a] transition-transform duration-300 ease-out" />
                    )}
                  </div>
                </div>
              </CollapsibleTrigger>

              {/* Contenu du dropdown */}
              <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1">
                <div className="px-5 pb-5 border-t border-[#e2e2e2]/50">
                  <div className="pt-4 space-y-6">
                    {comparisonFeatures.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <h4
                          className="font-['Instrument_Sans',_sans-serif] text-base text-[#333333] mb-3 pb-2 border-b border-[#e2e2e2]/50"
                          style={{ fontWeight: 500 }}
                        >
                          {category.category}
                        </h4>
                        <div className="space-y-3">
                          {category.features.map((feature, featureIndex) => {
                            const value = getFeatureValue(feature, planType.key);
                            
                            return (
                              <div key={featureIndex} className="flex items-start justify-between gap-3 py-1">
                                <span
                                  className="font-['Instrument_Sans',_sans-serif] text-sm text-[#333333] leading-relaxed flex-1"
                                  style={{ fontWeight: 400 }}
                                >
                                  {feature.name}
                                </span>
                                <div className="flex-shrink-0">
                                  {typeof value === 'boolean' ? (
                                    value ? (
                                      <Check className="h-4 w-4 text-[#71e988]" />
                                    ) : (
                                      <X className="h-4 w-4 text-[#d2d2d2]" />
                                    )
                                  ) : (
                                    <span
                                      className="font-['Geist_Mono',_monospace] text-xs px-2 py-1 rounded text-[#6a6a6a] bg-[#f2f2f2]"
                                      style={{ fontWeight: 400 }}
                                    >
                                      {value}
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        ))}
      </div>
    );
  };

  return (
    <div className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <h1
          className="font-['Geist',_sans-serif] text-6xl md:text-5xl tracking-[-0.02em] text-[#333333] mb-6"
          style={{ fontWeight: 500 }}
        >
          Choisissez la différence.
        </h1>

        <p
          className="font-['Instrument_Sans',_sans-serif] text-xl md:text-lg text-[#6a6a6a] max-w-3xl mx-auto leading-relaxed text-justify"
          style={{ fontWeight: 400 }}
        >
          Chaque site est conçu à partir d'un diagnostic
          approfondi de votre marque, de vos objectifs et de
          votre audience. Les entreprises ambitieuses
          choisissent WebAcces pour passer un cap : un site qui
          inspire confiance, marque les esprits et accélère la
          croissance. Rejoignez-les et affirmez votre
          différence.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12 items-start">
        {plans.map((plan, index) => (
          <div key={index}>
            {plan.tier === "prestige" ? (
              renderPrestigeCard(plan)
            ) : (
              <div
                className={`relative bg-[#ffffff] border rounded-lg p-6 md:p-8 transition-all duration-200 ${
                  plan.popular
                    ? "border-[#0f0f0f] hover:border-[#000000] shadow-md"
                    : "border-[#d2d2d2] hover:border-[#2b2b2b]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[rgba(15,15,15,1)] text-white px-4 py-1 rounded-xl text-[15px]">
                      <span
                        className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm"
                        style={{ fontWeight: 500 }}
                      >
                        Popular
                      </span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 md:mb-8">
                  <h3
                    className="font-['Instrument_Sans',_sans-serif] text-2xl md:text-xl text-[#333333] mb-4"
                    style={{ fontWeight: 500 }}
                  >
                    {plan.displayName}
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span
                        className="font-['Geist',_sans-serif] text-6xl md:text-5xl text-[#333333] tracking-[-0.02em]"
                        style={{ fontWeight: 500 }}
                      >
                        {plan.price.replace(" ", "\u00A0")}
                      </span>
                      <span
                        className="font-['Instrument_Sans',_sans-serif] text-2xl md:text-xl text-[#6a6a6a]"
                        style={{ fontWeight: 400 }}
                      >
                        {plan.currency}
                      </span>
                    </div>
                  </div>

                  <p
                    className="font-['Instrument_Sans',_sans-serif] text-lg md:text-base text-[#6a6a6a] leading-relaxed"
                    style={{ fontWeight: 400 }}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-6 md:mb-8">
                  {plan.features.map(
                    (feature: string, featureIndex: number) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <Check className="h-5 w-5 text-[#71e988] mt-0.5 flex-shrink-0" />
                        <span
                          className="font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333] leading-relaxed"
                          style={{ fontWeight: 400 }}
                        >
                          {feature}
                        </span>
                      </div>
                    ),
                  )}
                </div>

                {plan.popular ? (
                  <button
                    className="group w-full px-6 py-4 md:py-3 rounded-lg transition-all duration-200 font-['Instrument_Sans',_sans-serif] bg-[#f2f2f2] hover:bg-[#e2e2e2] text-[#333333] border border-[#d2d2d2] cursor-pointer text-lg md:text-base"
                    style={{ fontWeight: 500 }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>{plan.cta}</span>
                      <div className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-200">
                        <CheckmarkIcon
                          fillColor="#0096FF"
                          strokeColor="white"
                          className="size-6 md:size-5"
                        />
                      </div>
                    </div>
                  </button>
                ) : (
                  <button
                    className="group w-full px-6 py-4 md:py-3 rounded-lg transition-all duration-200 font-['Instrument_Sans',_sans-serif] bg-[#f2f2f2] hover:bg-[#e2e2e2] text-[#333333] border border-[#d2d2d2] cursor-pointer text-lg md:text-base"
                    style={{ fontWeight: 500 }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>{plan.cta}</span>
                      <ArrowRight className="h-5 w-5 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Message rassurant sur le paiement avec shimmer gris */}
      <div className="text-center mb-20 md:mb-24">
        <p
          className="font-['Instrument_Sans',_sans-serif] text-lg md:text-base leading-relaxed shimmer-text"
          style={{ fontWeight: 400 }}
        >
          Vous ne payez qu'une fois séduit par nos designs et
          propositions créatives.
        </p>
      </div>

      {/* Comparison Section */}
      <div className="mb-16 md:mb-20">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-['Geist',_sans-serif] text-5xl md:text-4xl tracking-[-0.02em] text-[#333333] mb-4"
            style={{ fontWeight: 500 }}
          >
            Comparer les plans
          </h2>
          <p
            className="font-['Instrument_Sans',_sans-serif] text-xl md:text-lg text-[#6a6a6a] mb-6"
            style={{ fontWeight: 400 }}
          >
            Tableau détaillé des fonctionnalités incluses dans
            chaque offre
          </p>
        </div>

        {/* CONTENEUR DU TABLEAU DESKTOP AVEC LE FLOU PROGRESSIF 
           On utilise "relative" et "max-h" variable selon l'état
        */}
        <div className="hidden md:block relative bg-[#ffffff]">
          
          <div 
            className={`overflow-hidden transition-all duration-700 ease-in-out rounded-lg ${
              isComparisonExpanded ? "max-h-[3000px]" : "max-h-[600px]"
            }`}
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[#ffffff] border-b border-[#e2e2e2]">
                  <th
                    className="text-left py-4 px-4 md:px-6 font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333] border-r border-[#e2e2e2]"
                    style={{ fontWeight: 500 }}
                  >
                    Fonctionnalités
                  </th>
                  <th
                    className="text-center py-4 px-3 md:px-4 font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333] border-r border-[#e2e2e2]"
                    style={{ fontWeight: 500 }}
                  >
                    Signature
                  </th>
                  <th
                    className="text-center py-4 px-3 md:px-4 font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333] border-r border-[#e2e2e2] bg-[#fff8fc]"
                    style={{ fontWeight: 500 }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="bg-[#FF7DCF] text-white px-2 py-1 rounded text-xs">
                        Popular
                      </div>
                      <span>Pro</span>
                    </div>
                  </th>
                  <th
                    className="text-center py-4 px-3 md:px-4 font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333]"
                    style={{ fontWeight: 500 }}
                  >
                    Prestige
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map(
                  (category, categoryIndex) => (
                    <React.Fragment
                      key={`category-group-${categoryIndex}`}
                    >
                      <tr className="bg-[#f2f2f2]">
                        <td
                          colSpan={4}
                          className="py-3 px-4 md:px-6 font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333] border-b border-[#e2e2e2]"
                          style={{ fontWeight: 500 }}
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map(
                        (feature, featureIndex) => {
                          const isEven = featureIndex % 2 === 0;
                          return (
                            <tr
                              key={`${categoryIndex}-${featureIndex}`}
                              className={`${
                                isEven
                                  ? "bg-[#ffffff]"
                                  : "bg-[#fafafa]"
                              } hover:bg-[#fff8fc] transition-colors duration-200 border-b border-[#e2e2e2]`}
                            >
                              <td
                                className="py-4 px-4 md:px-6 font-['Geist_Mono',_monospace] text-base md:text-sm text-[#333333] border-r border-[#e2e2e2]"
                                style={{ fontWeight: 400 }}
                              >
                                {feature.name}
                              </td>
                              <td className="text-center py-4 px-3 md:px-4 border-r border-[#e2e2e2]">
                                {typeof feature.signature ===
                                "boolean" ? (
                                  feature.signature ? (
                                    <Check className="h-5 w-5 md:h-4 md:w-4 text-[#71e988] mx-auto" />
                                  ) : (
                                    <X className="h-5 w-5 md:h-4 md:w-4 text-[#d2d2d2] mx-auto" />
                                  )
                                ) : (
                                  <span
                                    className="font-['Geist_Mono',_monospace] text-base md:text-sm text-[#6a6a6a] bg-[#f2f2f2] px-2 py-1 rounded"
                                    style={{ fontWeight: 400 }}
                                  >
                                    {feature.signature}
                                  </span>
                                )}
                              </td>
                              <td className="text-center py-4 px-3 md:px-4 border-r border-[#e2e2e2] bg-[#fff8fc]">
                                {typeof feature.pro ===
                                "boolean" ? (
                                  feature.pro ? (
                                    <Check className="h-5 w-5 md:h-4 md:w-4 text-[#71e988] mx-auto" />
                                  ) : (
                                    <X className="h-5 w-5 md:h-4 md:w-4 text-[#d2d2d2] mx-auto" />
                                  )
                                ) : (
                                  <span
                                    className="font-['Geist_Mono',_monospace] text-base md:text-sm text-[#FF7DCF] bg-[#fff0f8] px-2 py-1 rounded"
                                    style={{ fontWeight: 400 }}
                                  >
                                    {feature.pro}
                                  </span>
                                )}
                              </td>
                              <td className="text-center py-4 px-3 md:px-4">
                                {typeof feature.prestige ===
                                "boolean" ? (
                                  feature.prestige ? (
                                    <Check className="h-5 w-5 md:h-4 md:w-4 text-[#71e988] mx-auto" />
                                  ) : (
                                    <X className="h-5 w-5 md:h-4 md:w-4 text-[#d2d2d2] mx-auto" />
                                  )
                                ) : (
                                  <span
                                    className="font-['Geist_Mono',_monospace] text-base md:text-sm text-[#6a6a6a] bg-[#f2f2f2] px-2 py-1 rounded"
                                    style={{ fontWeight: 400 }}
                                  >
                                    {feature.prestige}
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        },
                      )}
                    </React.Fragment>
                  ),
                )}
              </tbody>
            </table>
          </div>

          {/* LE DÉGRADÉ BLANC QUI CRÉE LE FLOU (VISIBLE SI FERMÉ) */}
          {!isComparisonExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10" />
          )}

          {/* LE BOUTON POUR DÉROULER (Positionné par dessus le dégradé) */}
          <div className={`absolute bottom-8 left-0 right-0 flex justify-center z-20 ${isComparisonExpanded ? 'relative mt-8 bottom-0' : ''}`}>
             <button
              onClick={() => setIsComparisonExpanded(!isComparisonExpanded)}
              className="bg-white border border-[#d2d2d2] hover:border-[#333] text-[#333] px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 font-['Instrument_Sans',_sans-serif] font-medium text-sm"
             >
               {isComparisonExpanded ? (
                 <>
                   Réduire le tableau <ChevronUp className="h-4 w-4" />
                 </>
               ) : (
                 <>
                   Voir toutes les fonctionnalités <ChevronDown className="h-4 w-4" />
                 </>
               )}
             </button>
          </div>

        </div>

        {/* Version Mobile - Dropdowns intelligents */}
        {renderMobileComparison()}
      </div>


    </div>
  );
}