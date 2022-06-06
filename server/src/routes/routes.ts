import express, { Request, Response } from "express";
import { PrismaPortfolioRepository } from "../repositories/prisma/Prisma-PortfolioRepository";
import {
  CreatePortoflioUseCase,
  CreatePortoflioUseCaseRequest,
} from "../use-cases/CreatePortfolio-UseCase";
import { ReadPortfolioUseCase } from "../use-cases/ReadPortfolio-UseCase";

export const routes = express.Router();

routes.get("/portfolios", async (req: Request, res: Response) => {
  const prismaPortfolioRepository = new PrismaPortfolioRepository();

  const createPortoflioUseCase = new ReadPortfolioUseCase(
    prismaPortfolioRepository
  );

  const portfolios = await createPortoflioUseCase.execute();

  return res.status(201).send(portfolios);
});

routes.post("/portfolios", async (req: Request, res: Response) => {
  const { title, description, link, img, github } = req.body;

  const prismaPortfolioRepository = new PrismaPortfolioRepository();

  const createPortoflioUseCase = new CreatePortoflioUseCase(
    prismaPortfolioRepository
  );

  const reqMap: CreatePortoflioUseCaseRequest = {
    description,
    githubLink: github,
    imgLink: img,
    link: link,
    title,
  };
  await createPortoflioUseCase.execute(reqMap);

  return res.status(201).send();
});

routes.post("/portfoliosMany", async (req: Request, res: Response) => {
  // const prismaPortfolioRepository = new PrismaPortfolioRepository();

  // const createPortofliosUseCase = new CreatePortofliosUseCase(
  //   prismaPortfolioRepository
  // );

  // const reqMap: CreatePortoflioUseCaseRequest[] = req.body.map(
  //   (portfolio: {
  //     description: any;
  //     github: any;
  //     img: any;
  //     link: any;
  //     title: any;
  //   }) => {
  //     return <CreatePortoflioUseCaseRequest>{
  //       description: portfolio.description,
  //       githubLink: portfolio.github,
  //       imgLink: portfolio.img,
  //       link: portfolio.link,
  //       title: portfolio.title,
  //     };
  //   }
  // );
  // await createPortofliosUseCase.execute(reqMap);

  return res.status(201).send();
});
