import { Link } from "react-router-dom";
import githubIcon from "../assets/github.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";

export function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex">
        <span className="inline-block text-5.5xl font-bold text-lincoliRed border border-lincoliRed rounded-2xl p-3 mt-8 ml-8">
          LX
        </span>

        <nav className="mt-8 ml-24">
          <ul className="flex h-full gap-20 items-center">
            <li className="text-1.9xl text-lincoliGrey">
              <Link to="/">
                <button>home</button>
              </Link>
            </li>
            <li className="text-1.9xl text-lincoliGrey">
              <Link to="aboutme">
                <button>about me</button>
              </Link>
            </li>
            {/* <li className="text-1.9xl text-lincoliGrey">
              <a href="">
                <button>blog</button>
              </a>
            </li> */}
            <li className="text-1.9xl text-lincoliGrey">
              <Link to="portfolio">
                <button>portfolio</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-7 mt-8 mr-12">
        <a
          href="https://github.com/NicolasSampaio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <img src={githubIcon} alt="Github Icon" />
          </button>
        </a>

        <a
          href="https://www.instagram.com/shizas.png/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <img src={instagramIcon} alt="Instagram Icon" />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/nicolassampaio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </button>
        </a>
      </div>
    </header>
  );
}
