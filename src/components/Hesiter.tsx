import React from "react";
import { Phone, ArrowRight, Shield, CreditCard, Check } from "lucide-react";

export default function Hesiter(): JSX.Element {
    return (
        <div className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center bg-white border border-[#e2e2e2] rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
                <h3
                    className="font-['Geist',_sans-serif] text-5xl md:text-4xl tracking-[-0.02em] text-[#333333] mb-6"
                    style={{ fontWeight: 500 }}
                >
                    Vous hésitez ?
                </h3>

                <p
                    className="font-['Instrument_Sans',_sans-serif] text-xl md:text-lg text-[#6a6a6a] mb-10 leading-relaxed"
                    style={{ fontWeight: 400 }}
                >
                    On vous offre un diagnostic stratégique personnalisé pour clarifier
                    vos objectifs et identifier les leviers de croissance les plus
                    pertinents pour votre business.
                </p>

                <button
                    type="button"
                    className="group px-8 py-5 md:py-4 bg-[#f2f2f2] hover:bg-[#e2e2e2] text-[#333333] border border-[#d2d2d2] hover:border-[#2b2b2b] rounded-lg transition-all duration-200 font-['Instrument_Sans',_sans-serif] cursor-pointer mb-10 text-lg md:text-base"
                    style={{ fontWeight: 500 }}
                    aria-label="Échange avec un expert (15min)"
                >
                    <div className="flex items-center justify-center gap-3">
                        <Phone className="h-6 w-6 md:h-5 md:w-5 group-hover:rotate-12 transition-transform duration-200" />
                        <span>Échange avec un expert (15min)</span>
                        <ArrowRight className="h-6 w-6 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                </button>

                <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-[#F2F2F2] border border-[#e2e2e2] rounded-full px-6 py-3 md:py-2">
                        <div
                            className="flex items-center justify-center gap-2 font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333]"
                            style={{ fontWeight: 500 }}
                        >
                            <Shield className="h-5 w-5 md:h-4 md:w-4 text-[#71e988]" />
                            <span>Projets sélectionnés</span>
                        </div>
                    </div>

                    <div className="bg-[#F2F2F2] border border-[#e2e2e2] rounded-full px-6 py-3 md:py-2">
                        <div
                            className="flex items-center justify-center gap-2 font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333]"
                            style={{ fontWeight: 500 }}
                        >
                            <CreditCard className="h-5 w-5 md:h-4 md:w-4 text-[#707eff]" />
                            <span>Paiement sécurisé</span>
                        </div>
                    </div>

                    <div className="bg-[#F2F2F2] border border-[#e2e2e2] rounded-full px-6 py-3 md:py-2">
                        <div
                            className="flex items-center justify-center gap-2 font-['Instrument_Sans',_sans-serif] text-base md:text-sm text-[#333333]"
                            style={{ fontWeight: 500 }}
                        >
                            <Check className="h-5 w-5 md:h-4 md:w-4 text-[#ff7dcf]" />
                            <span>Accompagnement VIP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}