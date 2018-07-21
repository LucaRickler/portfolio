export class PortfolioElement {
  constructor (
    public id: string,
    public title: string,
    public pills: string[],
    public text: string,
    public images: string[],
    public category: string
  ) { }
}
