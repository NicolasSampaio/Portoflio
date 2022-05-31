import { useState } from "react";
import { Link } from "react-router-dom";

interface MyRecentWorkButtonProps {
  styleInfo?: string;
}

export function MyRecentWorkButton({ styleInfo }: MyRecentWorkButtonProps) {
  return (
    <Link to="/portfolio">
      <button
        className={`relative border rounded-xl border-white py-7 px-16 text-2.1xl text-white hover:animate-pulse
        after:absolute after:content-[url('./assets/ArrowRight.svg')] after:h-12 after:w-20 after:top-5 after:-right-12 ${styleInfo}`}
      >
        My Recent Work
      </button>
    </Link>
  );
}
