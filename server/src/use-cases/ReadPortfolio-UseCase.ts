import { PortfolioRepository } from "../repositories/PortfolioRepository";

export class ReadPortfolioUseCase {
  constructor(private portfolioRepository: PortfolioRepository) {}

  async execute() {
    return await this.portfolioRepository.findMany();
  }
}
