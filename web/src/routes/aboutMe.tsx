import { MyRecentWorkButton } from "../components/MyRecentWorkButton";
import { ContactMe } from "../components/Contactme";
import { isMobile } from "react-device-detect";

export function AboutMe() {
  return (
    <main className="flex flex-1 ">
      {isMobile ? null : (
        <>
          <h2
            className="flex items-center justify-center h-24 self-center w-40 -rotate-90
      text-7.5xl whitespace-nowrap text-white"
          >
            about me
          </h2>

          <span className="absolute w-96 h-2 border border-lincoliRed bg-lincoliRed rotate-90 rounded top-[25rem] -left-[3.5rem]"></span>
        </>
      )}

      <div className="flex flex-col max-w-3xl ml-7 mr-7 sm:ml-24 mt-9 sm:mt-0">
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
        {isMobile ? <ContactMe styleInfo="gap-14 self-center" /> : null}
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
