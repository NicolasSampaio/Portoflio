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
    description: "",
    github: "https://github.com/NicolasSampaio/Portoflio",
  },
  {
    title: "Origamid Portfolio",
    link: "https://nicolassampaio.github.io/Origamid-PortfolioTemplate/",
    img: origamidImg,
    description: "",
    github: "https://github.com/NicolasSampaio/Origamid-PortfolioTemplate",
  },
  {
    title: "FrontEndMentor-QR-Code-Component",
    link: "https://nicolassampaio.github.io/FrontEndMentor-QR-Code-Component/",
    img: frontendMentorImg,
    description: "",
    github:
      "https://github.com/NicolasSampaio/FrontEndMentor-QR-Code-Component",
  },
  {
    title: "NLW Together",
    link: "https://letmeask-8a45d.web.app/",
    img: nlwTogetherImg,
    description: "",
    github: "https://github.com/NicolasSampaio/NLW-Together-ReactJS",
  },
  {
    title: "NLW Return",
    link: "https://nlw-return-rosy-one.vercel.app/",
    img: nlwReturnImg,
    description: "",
    github: "https://github.com/NicolasSampaio/NLW-Return",
  },
  // {
  //   title: "Teste5",
  //   link: "https://www.google.com.br/",
  //   img: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // },
  // {
  //   title: "Teste6",
  //   link: "https://www.google.com.br/",
  //   img: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // },
  // {
  //   title: "teste7",
  //   link: "https://www.google.com.br/",
  //   img: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // },
  // {
  //   title: "teste8",
  //   link: "https://www.google.com.br/",
  //   img: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // },
  // {
  //   title: "teste9",
  //   link: "https://www.google.com.br/",
  //   img: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // },
];

export function getPortfolios() {
  return portfolio;
}
