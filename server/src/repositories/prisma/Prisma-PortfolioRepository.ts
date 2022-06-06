import { prisma } from "../../prisma";
import {
  PortfolioCreate,
  PortfolioFind,
  PortfolioRepository,
} from "../PortfolioRepository";

export class PrismaPortfolioRepository implements PortfolioRepository {
  async create(data: PortfolioCreate) {
    await prisma.portfolio.create({ data });
  }

  async createMany(data: PortfolioCreate[]) {
    await prisma.portfolio.createMany({ data });
  }

  async findMany(): Promise<PortfolioFind[]> {
    const portfolios = await prisma.portfolio.findMany();

    const portofoliosMap: PortfolioFind[] = portfolios.map((portfolio) => {
      return <PortfolioFind>{
        title: portfolio.title,
        portfolioLink: portfolio.portfolioLink,
        imgLink: portfolio.imgLink,
        description: portfolio.description,
        githubLink: portfolio.githubLink,
      };
    });

    return portofoliosMap;
  }
}
