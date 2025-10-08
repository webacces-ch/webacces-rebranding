import svgPaths from "../imports/svg-0ds4a4ttic";

interface CheckmarkIconProps {
  className?: string;
  fillColor?: string;
  strokeColor?: string;
}

export function CheckmarkIcon({ 
  className = "size-5", 
  fillColor = "#FF7DCF", 
  strokeColor = "white" 
}: CheckmarkIconProps) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d={svgPaths.p2551e980}
            fill={fillColor}
            stroke={fillColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.833333"
          />
          <path
            d={svgPaths.p2f54f280}
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.05614"
          />
        </g>
      </svg>
    </div>
  );
}