import { PortfolioElement } from './portfolio.element';

export const ELEMENTS: PortfolioElement[] = [
  new PortfolioElement(
    'mathdungeon',
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
    'An educational video game build to allow elementary-school kids to exercise on basic arithmetics computations.\nI worked as the main programmer for the project. The game features a basic post-processing effect for Sobel filtering, also done by me (not active on every device because of framerate issues).\n\nLink: [mathdungeon.napsygames.com](http://mathdungeon.napsygames.com)',
    ['Screenshot_5_16.9.png', 'Screenshot_3_16.9b_small.png'],
    null,
    'Videogames'
  ),
  new PortfolioElement(
    'polarity',
    'Polarity - Global Game Jam 2018', [
      'Unity',
      'C#',
      'Windows',
      'Mac',
      'Linux'
    ],
    // tslint:disable-next-line:max-line-length
    'A 3D action game whith a sci-fi vibe.',
    [],
    'https://itch.io/embed/219217?border_width=5&amp;bg_color=303030&amp;fg_color=FFE762&amp;link_color=ff0000&amp;border_color=FFE762',
    'Game Jams'
  ),
  // new PortfolioElement('1', '', [], '', [], '')
];

