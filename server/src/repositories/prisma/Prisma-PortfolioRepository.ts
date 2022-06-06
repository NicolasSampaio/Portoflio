import { prisma } from "../../prisma";
import {
  PortfolioCreate,
  PortfolioRead,
  PortfolioRepository,
} from "../PortfolioRepository";

export class PrismaPortfolioRepository implements PortfolioRepository {
  async create(data: PortfolioCreate) {
    await prisma.portfolio.create({ data });
  }

  async createMany(data: PortfolioCreate[]) {
    await prisma.portfolio.createMany({ data });
  }

  async findMany(): Promise<PortfolioRead[]> {
    const portfolios = await prisma.portfolio.findMany();

    const portofoliosMap: PortfolioRead[] = portfolios.map((portfolio) => {
      return <PortfolioRead>{
        id: portfolio.id,
        title: portfolio.title,
        link: portfolio.link,
        imgLink: portfolio.imgLink,
        description: portfolio.description,
        githubLink: portfolio.githubLink,
      };
    });

    return portofoliosMap;
  }
}
