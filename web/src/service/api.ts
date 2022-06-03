export interface PortfolioInterface {
  title: string;
  link: string;
  img: string;
  description: string;
  github: string;
}

const portfolio: PortfolioInterface[] = [
  {
    title: "This website you're looking right now",
    link: "https://www.google.com.br/",
    img: "https://github.com/NicolasSampaio/Portoflio/blob/master/web/src/assets/this.PNG?raw=true",
    description: "My portfolio. Made with react and tailwind.",
    github: "https://github.com/NicolasSampaio/Portoflio",
  },
  {
    title: "Origamid Portfolio",
    link: "https://nicolassampaio.github.io/Origamid-PortfolioTemplate/",
    img: "https://github.com/NicolasSampaio/Portoflio/blob/master/web/src/assets/origamid%20port.PNG?raw=true",
    description: "Just a simple static webpage",
    github: "https://github.com/NicolasSampaio/Origamid-PortfolioTemplate",
  },
  {
    title: "FrontEndMentor-QR-Code-Component",
    link: "https://nicolassampaio.github.io/FrontEndMentor-QR-Code-Component/",
    img: "https://github.com/NicolasSampaio/Portoflio/blob/master/web/src/assets/frontend.PNG?raw=true",
    description:
      "First challenge from FrontEndMentor, I pretend to do a lot more",
    github:
      "https://github.com/NicolasSampaio/FrontEndMentor-QR-Code-Component",
  },
  {
    title: "NLW Together",
    link: "https://letmeask-8a45d.web.app/",
    img: "https://github.com/NicolasSampaio/Portoflio/blob/master/web/src/assets/nlw.PNG?raw=true",
    description:
      "A simple website where you can enter a specific room and make a question. The hoster can choose wich question he will read",
    github: "https://github.com/NicolasSampaio/NLW-Together-ReactJS",
  },
  {
    title: "NLW Return",
    link: "https://nicolassampaioreturn.vercel.app/",
    img: "https://github.com/NicolasSampaio/Portoflio/blob/master/web/src/assets/nlwReturn.PNG?raw=true",
    description:
      "A chat for your webpage where the users can report bugs with a screenshot",
    github: "https://github.com/NicolasSampaio/NLW-Return",
  },
];

export function getPortfolios(): PortfolioInterface[] {
  return portfolio;
}
