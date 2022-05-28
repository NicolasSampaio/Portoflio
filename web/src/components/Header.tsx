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
              <button>home</button>
            </li>
            <li className="text-1.9xl text-lincoliGrey">
              <button>about me</button>
            </li>
            <li className="text-1.9xl text-lincoliGrey">
              <button>blog</button>
            </li>
            <li className="text-1.9xl text-lincoliGrey">
              <button>portfolio</button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-7 mt-8 mr-12">
        <img src={githubIcon} alt="Github Icon" />
        <img src={instagramIcon} alt="Instagram Icon" />
        <img src={linkedinIcon} alt="Linkedin Icon" />
      </div>
    </header>
  );
}
