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
    'An educational video game build to allow elementary-school kids to exercise on basic arithmetics computations.\nI worked as the main programmer for the project. The game features a basic post-processing effect for Sobel filtering, also done by me (not active on every device because of framerate issues).\n\n<a class="btn btn-primary" href="http://mathdungeon.napsygames.com" target="_blank">Discover more here</a>',
    ['Screenshot_1b_16.9_small.png', 'Screenshot_3_16.9b_small.png'],
    null,
    'Videogames'
  ),
  new PortfolioElement(
    'moonbeam',
    'MoonBeam Game Engine', [
      'C++',
      'OpenGL 4.3',
      '3D',
      'GLFW',
      'GLM',
      'Linux'
    ],
    // tslint:disable-next-line:max-line-length
    'A work-in-progess game and rendering engine.\n\nBuilt on OpenGL 4.3, GLFW and GLM.\n\nIt implements an Entity-Component-System paradigm and custom memory allocation.\n\n<a class="btn btn-primary" href="https://github.com/LucaRickler/opengl-game-engine" target="_blank">GitHub Repository</a>',
    [],
    null,
    'Personal Projects'
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
    'A 2D platformer framework, built with SFML and C++ 11.\n\nIt implements a Unity3D-like entity-component-system and a grid-based platformer framework.\n\n<a class="btn btn-primary" href="https://github.com/LucaRickler/sfml-2d-platformer" target="_blank">GitHub Repository</a>',
    ['sfml-2d-p-screenshot.png'],
    null,
    'Personal Projects'
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
    'https://moonlitchameleon.itch.io/space-inc',
    'Personal Projects'
  ),
  new PortfolioElement(
    'home-sweet-tomb',
    'Home Sweet Tomb - Global Game Jam 2019', [
      'Unity',
      'C#',
      'Windows'
    ],
    // tslint:disable-next-line:max-line-length
    'An unnamed figure roams about an empty house, searching for something unknown, lost in the memories of a time forgotten.\n\n"Home Sweet Tomb" is a third-person exploration game where your character has to solve puzzles to overcome obstacles and unravel the link between him and this mysterious place.',
    [],
    'https://moonlitchameleon.itch.io/home-sweet-tomb',
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
    'https://moonlitchameleon.itch.io/martianwave',
    'Game Jams'
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
    'https://moonlitchameleon.itch.io/polarity',
    'Game Jams'
  ),
  new PortfolioElement(
    'tans',
    'Numeric Analysis and Simulation Technology Exam Project', [
      'C++',
      'Root'
    ],
    // tslint:disable-next-line:max-line-length
    'Simulation of a simple <a href="https://en.wikipedia.org/wiki/Particle_shower" target="_blank">particle shower</a> event.\n\nThe project is built using the <a href="https://root.cern.ch/" target="_blank">Root Data Analysis Framework</a>, by <a href="https://cern.ch/" target="_blank">CERN</a> (required for running the project).\n\nSource code can be found <a href="https://github.com/LucaRickler/TANS" target="_blank">here</a>, while <a href="./assets/relazione_tans.pdf" target="_blank">this</a> is the project report (italian only).',
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
    'A multi-agent-based simulation framework, built in C++ (std 2011) and pthread.\n\nSource code can be found <a href="https://github.com/LucaRickler/PDS---Progetto-d-esame" target="_blank">here</a>, while <a href="./assets/relazione_pds.pdf" target="_blank">this</a> is the project report (italian only).',
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
    'A multi-agent-based simulation for the modellization of the rationality of people’s decisions in a peer to peer Environment.\n\nBuilt in Java using the multi-agent library <a href="http://jade.tilab.com/" target="_blank">Jade</a>.\n\nSource code can be found <a href="https://github.com/LucaRickler/M.A.S.-Lab" target="_blank">here</a>, while <a href="./assets/relazione_mas.pdf" target="_blank">this</a> is the project report (english only).',
    [],
    null,
    'Exam Projects'
  ),
];

