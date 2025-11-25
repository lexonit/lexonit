
import React from "react";

export const DottedMap = () => {
  return (
    <div className="w-full h-full relative">
      <img
        src="https://assets.aceternity.com/demos/world-map-dots-white.svg" 
        className="w-full h-full object-contain pointer-events-none select-none opacity-50 dark:opacity-40 invert dark:invert-0"
        alt="World Map"
        draggable={false}
      />
    </div>
  );
};
