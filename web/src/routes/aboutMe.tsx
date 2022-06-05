import { isMobile } from "react-device-detect";

import { MyRecentWorkButton } from "../components/MyRecentWorkButton/index";
import { ContactMe } from "../components/ContactMe/index";
import { SidebarPageName } from "../components/SidebarPageName";

export function AboutMe() {
  return (
    <main className="flex flex-1 mt-8">
      {isMobile ? null : <SidebarPageName pagename="about me" />}

      <div className="flex flex-col sm:items-start items-center max-w-3xl ml-7 mr-7 sm:ml-24 mt-9 sm:mt-0">
        <img
          src="https://github.com/NicolasSampaio/Portoflio/blob/master/web/src/assets/perfil.png?raw=true"
          alt="Foto de Perfil"
          className="w-40 h-40 sm:w-72 sm:h-72 mb-6 sm:mb-6 self-center"
        />
        <p className="text-1xl text-white leading-9">
          Be better than yesterday.
          <br /> Majoring in Information Systems. I love the feeling of learning
          something new, and especially of sharing.
          <br /> I like to see a macro process and be able to see the difference
          I made there, and to see a micro process and seek more and more
          improvements.
          <br /> Softskills enthusiast.
        </p>
        <h3 className="text-2xl leading-10 text-lincoliRed">
          I have experience with
        </h3>
        <p className="text-1xl leading-9 text-white">
          <strong>Backend</strong>: .NET, PostgreSQL, SQL Server, MySQL
          <br />
          <strong>Frontend</strong>: Html, Css, Javascript, Typescript, Vite,
          Tailwind, React, Angular
        </p>
        {isMobile ? (
          <ContactMe styleInfo="mt-2 mb-2 gap-14 self-center" />
        ) : null}
        <MyRecentWorkButton styleInfo="mt-2" />
      </div>

      {isMobile ? null : (
        <div className="flex flex-col grow justify-center content-center ml-24 mr-40">
          <h3 className="text-center text-3xl leading-10 text-white">
            Get in Touch
          </h3>
          <span className="w-[11rem] self-center mt-1 mb-8 border border-white"></span>

          <ContactMe styleInfo="justify-between" styleImgInfo="w-20 h-20" />
        </div>
      )}
    </main>
  );
}
