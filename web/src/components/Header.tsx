import { Link } from "react-router-dom";
import { ContactMe } from "./Contactme";
import { isMobile } from "react-device-detect";

export function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex gap-24 sm:gap-0">
        <span className="text-5.5xl font-bold text-lincoliRed mt-8 ml-8">
          NS
        </span>

        <span className="absolute border border-lincoliRed rounded-2xl w-36 h-36 -top-5 -left-5 rotateSquare"></span>

        <nav className="sm:mt-8 sm:ml-24 mt-2">
          <ul className="flex h-full sm:gap-20 items-center">
            <li className="text-1.9xl text-lincoliGrey hover:text-lincoliRed transition duration-0 hover:duration-300">
              <Link to="/">home</Link>
            </li>
            <li className="text-1.9xl text-lincoliGrey hover:text-lincoliRed transition duration-0 hover:duration-300 text-center">
              <Link to="aboutme">about me</Link>
            </li>
            {/* <li className="text-1.9xl text-lincoliGrey">
              <a href="">
                <button>blog</button>
              </a>
            </li> */}
            <li className="text-1.9xl text-lincoliGrey hover:text-lincoliRed transition duration-0 hover:duration-300">
              <Link to="portfolio">portfolio</Link>
            </li>
          </ul>
        </nav>
      </div>

      {isMobile ? null : <ContactMe styleInfo="gap-7 mt-8 mr-12" />}
    </header>
  );
}
