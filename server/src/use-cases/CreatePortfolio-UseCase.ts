import { PortfolioRepository } from "../repositories/PortfolioRepository";

export interface CreatePortoflioUseCaseRequest {
  title: string;
  link: string;
  imgLink: string;
  description: string;
  githubLink: string;
}

export class CreatePortoflioUseCase {
  constructor(private portfolioRepository: PortfolioRepository) {}
  async execute(request: CreatePortoflioUseCaseRequest) {
    const { description, githubLink, imgLink, link, title } = request;

    await this.portfolioRepository.create({
      title,
      description,
      githubLink,
      imgLink,
      link,
    });
  }
}
