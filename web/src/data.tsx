import frontendMentorImg from "./assets/frontend.png";
import nlwTogetherImg from "./assets/nlw.png";
import origamidImg from "./assets/origamid port.png";
import thisImg from "./assets/this.png";
import nlwReturnImg from "./assets/nlwReturn.png";

const portfolio = [
  {
    title: "This website you're looking right now",
    link: "https://www.google.com.br/",
    img: thisImg,
    description: "My portfolio. Made with react and tailwind.",
    github: "https://github.com/NicolasSampaio/Portoflio",
  },
  {
    title: "Origamid Portfolio",
    link: "https://nicolassampaio.github.io/Origamid-PortfolioTemplate/",
    img: origamidImg,
    description: "Just a simple static webpage",
    github: "https://github.com/NicolasSampaio/Origamid-PortfolioTemplate",
  },
  {
    title: "FrontEndMentor-QR-Code-Component",
    link: "https://nicolassampaio.github.io/FrontEndMentor-QR-Code-Component/",
    img: frontendMentorImg,
    description:
      "First challenge from FrontEndMentor, I pretend to do a lot more",
    github:
      "https://github.com/NicolasSampaio/FrontEndMentor-QR-Code-Component",
  },
  {
    title: "NLW Together",
    link: "https://letmeask-8a45d.web.app/",
    img: nlwTogetherImg,
    description:
      "A simple website where you can enter a specific room and make a question. The hoster can choose wich question he will read",
    github: "https://github.com/NicolasSampaio/NLW-Together-ReactJS",
  },
  {
    title: "NLW Return",
    link: "https://nlw-return-rosy-one.vercel.app/",
    img: nlwReturnImg,
    description:
      "A chat for your webpage where the users can report bugs with a screenshot",
    github: "https://github.com/NicolasSampaio/NLW-Return",
  },
];

export interface PortfolioInterface {
  title: string;
  link: string;
  img: string;
  description: string;
  github: string;
}

export function getPortfolios(): PortfolioInterface[] {
  return portfolio;
}
