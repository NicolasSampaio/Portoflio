import githubIcon from "../assets/github.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";

interface ContactMeProps {
  styleInfo?: string;
  styleImgInfo?: string;
}

export function ContactMe({ styleInfo, styleImgInfo }: ContactMeProps) {
  return (
    <div className={`flex items-center ${styleInfo}`}>
      <a
        href="https://github.com/NicolasSampaio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <img
            src={githubIcon}
            alt="Github Icon"
            className={`${styleImgInfo}`}
          />
        </button>
      </a>
      <a
        href="https://www.instagram.com/shizas.png/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <img
            src={instagramIcon}
            alt="Instagram Icon"
            className={`${styleImgInfo}`}
          />
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/nicolassampaio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <img
            src={linkedinIcon}
            alt="Linkedin Icon"
            className={`${styleImgInfo}`}
          />
        </button>
      </a>
    </div>
  );
}
