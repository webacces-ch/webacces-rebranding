import svgPaths from "./svg-0ds4a4ttic";

function Frame() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Frame">
          <path
            d={svgPaths.p2551e980}
            fill="var(--fill-0, #FF7DCF)"
            id="Vector"
            stroke="var(--stroke-0, #FF7DCF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
          <path
            d={svgPaths.p2f54f280}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.05614"
          />
        </g>
      </svg>
    </div>
  );
}

export default function VoirToutLesAvis() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl size-full"
      data-name="Voir tout les avis"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center overflow-clip px-[22px] py-3.5 relative size-full">
          <div className="font-['Instrument_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-center text-neutral-800 text-nowrap tracking-[-0.3px]">
            <p className="adjustLetterSpacing block leading-none whitespace-pre">{`Accélérer ma croissance `}</p>
          </div>
          <Frame />
        </div>
      </div>
      <div className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}