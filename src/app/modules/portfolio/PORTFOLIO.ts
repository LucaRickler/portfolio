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
  new PortfolioElement(
    'martianwaves',
    'Martian Waves - Global Game Jam 2017', [
      'Unity',
      'C#',
      'WebGL'
    ],
    // tslint:disable-next-line:max-line-length
    'A 2d side-scroller in which a martian sea creature, with a wave cannon on his back, must fight the evil aliens who are invading its planet. Its weapon is also its only way to move around the world, bouncing off the waves reflected on the environment.',
    [],
    'https://itch.io/embed/113644?border_width=5&amp;bg_color=adadad&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=333333',
    'Game Jams'
  ),
  new PortfolioElement(
    'sfmlplatformer',
    'SFML 2D Platformer', [
      'C++',
      'SFML',
      '2D',
      'Linux'
    ],
    // tslint:disable-next-line:max-line-length
    'A 2D platformer framework, built with SFML and C++ 11.\n\nIt implements an entity-component-system and a grid-based platformer framework.\n\nSource code can be found [here](https://github.com/LucaRickler/sfml-2d-platformer).',
    ['sfml-2d-p-screenshot.png'],
    'https://itch.io/embed/113644?border_width=5&amp;bg_color=adadad&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=333333',
    'Random Prototypes'
  ),
  new PortfolioElement(
    'spaceinc',
    'Space Inc.', [
      'Unity',
      'C#',
      'WebGL'
    ],
    // tslint:disable-next-line:max-line-length
    'An incremental space-agency-manager game, where you build from scratch your space agency and guide it from it\'s humble beginning to the stars.',
    [],
    'https://itch.io/embed/59689?border_width=5',
    'Random Prototypes'
  ),
  new PortfolioElement(
    'tans',
    'Numeric Analysis and Simulation Technology Exam Project', [
      'C++',
      'Root'
    ],
    // tslint:disable-next-line:max-line-length
    'Simulation of a simple [particle shower](https://en.wikipedia.org/wiki/Particle_shower) event.\n\nThe project is built using the [Root Data Analysis Framework](https://root.cern.ch/), by [CERN](https://cern.ch/) (required for running the project).\n\nSource code can be found [here](https://github.com/LucaRickler/TANS), while [this](assets/Relazione tans.pdf) is the project report (italian only).',
    [],
    null,
    'Exam Projects'
  ),
  new PortfolioElement(
    'psd',
    'Parallel and Distributed Systems Exam Project', [
      'C++ 11',
      'Multi-Agent System',
      'pthread'
    ],
    // tslint:disable-next-line:max-line-length
    'A multi-agent-based simulation framework, built in C++ (std 2011) and pthread.\n\nSource code can be found [here](https://github.com/LucaRickler/PDS---Progetto-d-esame), while [this](assets/relazione pds.pdf) is the project report (italian only).',
    [],
    null,
    'Exam Projects'
  ),
  new PortfolioElement(
    'mas',
    'Multi-Agent Systems Exam Project', [
      'Java',
      'Multi-Agent System',
      'Jade'
    ],
    // tslint:disable-next-line:max-line-length
    'A multi-agent-based simulation for the modellization of the rationality of people’s decisions in a peer to peer Environment.\n\nBuilt in Java using the multi-agent library [Jade](http://jade.tilab.com/), by [CERN](https://cern.ch/) (required for running the project).\n\nSource code can be found [here](https://github.com/LucaRickler/M.A.S.-Lab), while [this](assets/relazione mas.pdf) is the project report (english only).',
    [],
    null,
    'Exam Projects'
  ),
];

