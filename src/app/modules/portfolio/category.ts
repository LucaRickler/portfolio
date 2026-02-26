import { PortfolioElement } from "./portfolio.element";

export class Category {
  constructor(
    public name: string,
    public elements: PortfolioElement[]
  ) { }
}