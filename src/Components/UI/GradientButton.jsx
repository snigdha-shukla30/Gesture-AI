

import React from "react";

export default function GradientButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full max-w-[194px] h-[49px] rounded-[10px] text-white font-semibold 
        transition-all duration-300 block mx-auto 
        bg-gradient-to-b from-[#9EDAFF] to-[#2A6B93] 
         hover:from-[#4F9BC9] hover:to-[#1A3C54] 
         
        ${className}`}
    >
      {children}
    </button>
  );
}
