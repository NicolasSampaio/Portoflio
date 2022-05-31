import { getPortfolios } from "../data";

export function Portfolio() {
  const portfolios = getPortfolios();

  return (
    <main className="flex flex-1">
      <h2
        className="flex items-center justify-center h-24 self-center w-40 -rotate-90
      text-7.5xl whitespace-nowrap text-white"
      >
        portfolio
      </h2>
      <span className="absolute w-96 h-2 border border-lincoliRed bg-lincoliRed rotate-90 rounded top-[25rem] -left-[3.5rem]"></span>

      <div className="ml-7 mt-7 min-w-[75%]">
        <p className="text-white text-3xl mb-20">
          Some projects I worked on, let me know what you think!
          <br />
          Send me an{" "}
          <a
            href="mailto:nicolas.pereira.sampaio16@gmail.com"
            className="text-lincoliRed underline hover:text-white transition duration-0 hover:duration-300"
          >
            Email
          </a>{" "}
          or get in touch on{" "}
          <a
            href="https://github.com/NicolasSampaio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lincoliRed underline hover:text-white transition duration-0 hover:duration-300"
          >
            GitHub
          </a>{" "}
          (:
        </p>

        <div className="flex flex-wrap gap-24 min-w-[20rem]">
          {portfolios.map((portfolio) => (
            <div className="flex flex-col gap-5 max-w-xs">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={portfolio.link}
                className="flex flex-col gap-5 hover:animate-pulse"
              >
                <img
                  src={portfolio.img}
                  alt=""
                  className="max-w-xs max-h-64 rounded-2xl border border-white"
                />
                <h2 className="text-white text-2xl text-center font-medium">
                  {portfolio.title}
                </h2>
              </a>

              <div className="max-h-[90px] overflow-auto scrollbar-thin scrollbar-thumb-lincoliRed scrollbar-track-white pr-7">
                <p className="text-white text-sm">{portfolio.description}</p>
              </div>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={portfolio.github}
                className="text-lincoliRed italic text-sm text-center font-medium hover:text-blue-700 transition duration-0 hover:duration-300"
              >
                Github Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
