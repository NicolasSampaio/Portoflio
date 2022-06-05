import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sm:mt-8">
      <ul className="flex flex-row sm:gap-20 gap-3 mr-7 sm:mr-0 h-full items-center">
        <li className="text-xl sm:text-1.9xl text-lincoliGrey hover:text-lincoliRed transition duration-0 hover:duration-300">
          <Link to="/">home</Link>
        </li>
        <li className="text-xl sm:text-1.9xl text-lincoliGrey hover:text-lincoliRed transition duration-0 hover:duration-300 text-center">
          <Link to="aboutme">about me</Link>
        </li>
        <li className="text-xl sm:text-1.9xl text-lincoliGrey hover:text-lincoliRed transition duration-0 hover:duration-300">
          <Link to="portfolio">portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}
