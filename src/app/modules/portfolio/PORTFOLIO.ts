import { PortfolioElement } from './portfolio.element';

export const ELEMENTS: PortfolioElement[] = [
  new PortfolioElement(
    'MathDungeon', [
      'Unity',
      'C#',
      'Android',
      'iOS',
      'Windows',
      'Mac',
      'Linux'
    ],
    // tslint:disable-next-line:max-line-length
    '<p>An educational video game build to allow elementary-school kids to exercise on basic arithmetics computations.</p><p>I worked as the main programmer for the project. The game features a basic post-processing effect for Sobel filtering, also done by me (not active on every device because of framerate issues).</p><p>Link: <a href="http://mathdungeon.napsygames.com" target="_blank">mathdungeon.napsygames.com</a></p>',
    ['Screenshot_5_16.9.png', 'Screenshot_3_16.9b_small.png'],
    'Videogames'
  ),
  new PortfolioElement('', [], '', [], '')
];

