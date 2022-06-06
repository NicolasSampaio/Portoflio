export interface PortfolioCreate {
  title: string;
  portfolioLink: string;
  imgLink: string;
  description: string;
  githubLink: string;
}

export interface PortfolioFind {
  title: string;
  portfolioLink: string;
  imgLink: string;
  description: string;
  githubLink: string;
}

export interface PortfolioRepository {
  create: (data: PortfolioCreate) => Promise<void>;
  createMany: (data: PortfolioCreate[]) => Promise<void>;
  findMany: () => Promise<PortfolioFind[]>;
}
