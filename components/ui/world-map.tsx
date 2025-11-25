
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { DottedMap } from "./dotted-map";

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const mapWidth = 800;
  const mapHeight = 400;

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (mapWidth / 360);
    const y = ((-1 * lat) + 90) * (mapHeight / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50; // Curve upwards
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] bg-white dark:bg-black rounded-lg relative font-sans overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none">
         <DottedMap />
      </div>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${mapWidth} ${mapHeight}`}
        className="w-full h-full pointer-events-none select-none absolute inset-0"
      >
        <defs>
          <linearGradient id="world-map-path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#world-map-path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
              />
              
              {/* Start Point Animation */}
              <circle cx={startPoint.x} cy={startPoint.y} r="2" fill={lineColor}>
                 <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                 <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
              </circle>
              <circle cx={startPoint.x} cy={startPoint.y} r="2" fill={lineColor} />

              {/* End Point Animation */}
              <circle cx={endPoint.x} cy={endPoint.y} r="2" fill={lineColor}>
                 <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                 <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
              </circle>
              <circle cx={endPoint.x} cy={endPoint.y} r="2" fill={lineColor} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
