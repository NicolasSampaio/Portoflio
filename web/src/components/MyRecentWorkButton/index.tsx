import { Link } from "react-router-dom";

interface MyRecentWorkButtonProps {
  styleInfo?: string;
}

export function MyRecentWorkButton({ styleInfo }: MyRecentWorkButtonProps) {
  return (
    <Link to="/portfolio">
      <button
        className={`relative border rounded-xl border-white py-7 px-16 text-2.1xl text-white hover:animate-pulse
        sm:after:absolute sm:after:content-[url('./assets/ArrowRight.svg')] sm:after:h-12 sm:after:w-20 sm:after:top-5 sm:after:-right-12 ${styleInfo}`}
      >
        My Recent Work
      </button>
    </Link>
  );
}
