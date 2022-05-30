import { getPortfolios } from "../data";

export function Portfolio() {
  const portfolios = getPortfolios();

  return (
    <main className="flex">
      <h2
        className=" flex items-center justify-center h-24 self-center w-40 -rotate-90
      text-7.5xl whitespace-nowrap text-white"
      >
        portfolio
      </h2>
      <span className="absolute w-96 h-2 border border-lincoliRed bg-lincoliRed rotate-90 rounded top-[25rem] -left-[3.5rem]"></span>

      <div className="ml-7">
        <p className="text-white text-3xl mb-20">
          Some projects I worked on, let me know what you think!
          <br />
          Send me an{" "}
          <a
            href="mailto:nicolas.pereira.sampaio16@gmail.com"
            className="text-lincoliRed underline"
          >
            Email
          </a>{" "}
          or get in touch on{" "}
          <a
            href="https://github.com/NicolasSampaio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lincoliRed underline"
          >
            GitHub
          </a>{" "}
          (:
        </p>

        <div className="flex flex-wrap gap-24 overflow-auto scrollbar-thin scrollbar-thumb-lincoliRed scrollbar-track-white">
          {portfolios.map((portfolio) => (
            <div className="flex flex-col gap-5 max-w-xs">
              <img
                src={portfolio.img}
                alt=""
                className="max-w-xs max-h-64 rounded-2xl"
              />
              <h2 className="text-white text-2xl text-center font-medium">
                {portfolio.title}
              </h2>
              <div className="max-h-[90px] overflow-auto scrollbar-thin scrollbar-thumb-lincoliRed scrollbar-track-white pr-7">
                <p className="text-white text-sm">{portfolio.description}</p>
              </div>

              {/* <span className="border border-lincoliRed bg-lincoliRed rounded w-full h-1"></span> */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
