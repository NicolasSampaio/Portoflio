import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { api } from "../service/api";
import { PortfolioModel } from "../models/portfolioModel";
import { SidebarPageName } from "../components/SidebarPageName";

export function Portfolio() {
  const [portfolios, setPortfolios] = useState<PortfolioModel[]>([]);

  useEffect(() => {
    api.get("/portfolios").then((response: any) => {
      setPortfolios(response.data);
    });
  }, []);

  return (
    <main className="flex flex-1 mt-8">
      {isMobile ? null : <SidebarPageName pagename="portfolio" />}

      <div className="ml-7 mr-7 sm:mt-7 mt-4 min-w-[75%]">
        <p className="text-white text-3xl sm:mb-20 mb-10">
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

        <div className="flex flex-wrap sm:gap-16 min-w-[20rem]">
          {portfolios.length > 0 ? (
            <>
              {portfolios.map((portfolio) => (
                <div
                  key={portfolio.id}
                  className="flex flex-col sm:gap-5 mb-16 sm:mb-0 sm:max-w-xs"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={portfolio.portfolio}
                    className="flex flex-col sm:gap-5 mb-5 sm:mb-0 hover:animate-pulse"
                  >
                    <img
                      src={portfolio.imgLink}
                      alt=""
                      className="max-w-xs max-h-64 rounded-2xl border border-white self-center"
                    />
                    <h2 className="text-white text-2xl text-center font-medium">
                      {portfolio.title}
                    </h2>
                  </a>

                  <div className="max-h-[90px] overflow-auto scrollbar-thin scrollbar-thumb-lincoliRed scrollbar-track-white">
                    <p className="text-white text-sm text-center">
                      {portfolio.description}
                    </p>
                  </div>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={portfolio.githubLink}
                    className="text-lincoliRed italic text-sm text-center font-medium hover:text-blue-700 transition duration-0 hover:duration-300 mt-5 sm:mt-0"
                  >
                    Github Repository
                  </a>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
}
