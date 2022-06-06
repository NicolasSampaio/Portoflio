import { PortfolioRepository } from "../repositories/PortfolioRepository";
import { CreatePortoflioUseCaseRequest } from "./CreatePortfolio-UseCase";

export class CreatePortofliosUseCase {
  constructor(private portfolioRepository: PortfolioRepository) {}

  async execute(request: CreatePortoflioUseCaseRequest[]) {
    await this.portfolioRepository.createMany(request);
  }
}
