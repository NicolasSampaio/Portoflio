export interface PortfolioCreate {
  title: string;
  link: string;
  imgLink: string;
  description: string;
  githubLink: string;
}

export interface PortfolioRead {
  id: number;
  title: string;
  link: string;
  imgLink: string;
  description: string;
  githubLink: string;
}

export interface PortfolioRepository {
  create: (data: PortfolioCreate) => Promise<void>;
  createMany: (data: PortfolioCreate[]) => Promise<void>;
  findMany: () => Promise<PortfolioRead[]>;
}
