import { PortfolioRepository } from "../repositories/PortfolioRepository";

interface CreatePortoflioUseCaseRequest {
  title: string;
  portfolioLink: string;
  imgLink: string;
  description: string;
  githubLink: string;
}

export class CreatePortoflioUseCase {
  constructor(private portfolioRepository: PortfolioRepository) {}
  async execute(request: CreatePortoflioUseCaseRequest) {
    const { description, githubLink, imgLink, portfolioLink, title } = request;

    await this.portfolioRepository.create({
      title,
      description,
      githubLink,
      imgLink,
      portfolioLink,
    });
  }
}
