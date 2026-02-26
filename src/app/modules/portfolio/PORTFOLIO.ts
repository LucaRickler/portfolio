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
    '<p>An educational video game build to allow elementary-school kids to exercise on basic arithmetics computations.</p><p>I worked as the main programmer for the project. The game features a basic post-processing effect for Sobel filtering, also done by me (not active on every device because of framerate issues).</p><a class="btn btn-primary" href="http://napsygames.com/mathdungeon.htm" target="_blank">Discover more here</a>',
    ['Screenshot_1b_16.9_small.png', 'Screenshot_3_16.9b_small.png'],
    null,
    'Videogames'
  ),
  new PortfolioElement(
    'dungeon-crawler',
    'Prototype Dungeon Crawler Game',
    [
      'Rust',
      'Bevy',
      '3D'
    ],
    '<p>A prototype for a dungeon crawler game. Made with <a href="https://bevy.org" target="_blank">Bevy Engine</a> in Rust</p><p>The project includes a level editor, built with EGUI.</p><a class="btn btn-primary" href="https://github.com/LucaRickler/prototype-dungeon-crawler" target="_blank">GitHub Repository</a>',
    [],
    null,
    'Personal Projects'
  ),
  new PortfolioElement(
    'cookbook',
    'Cookbook', [
    'Angular',
    'NestJS',
    'Jest',
    'Typescript',
    'Nodejs',
    'Docker',
    'Ansible',
    'Gitlab CI'
  ],
    // tslint:disable-next-line:max-line-length
    '<p>A work-in-progess cooking recipe website.</p><p>Built with Angular 13 and NestJS.</p><a class="btn btn-primary" href="https://github.com/LucaRickler/nestjs-angular-cookbook" target="_blank">GitHub Repository</a>',
    [],
    null,
    'Personal Projects'
  ),
  // new PortfolioElement(
  //   'moonbeam',
  //   'MoonBeam Game Engine', [
  //   'C++',
  //   'OpenGL 4.3',
  //   '3D',
  //   'GLFW',
  //   'GLM',
  //   'Linux'
  // ],
  //   // tslint:disable-next-line:max-line-length
  //   '<p>A work-in-progess game and rendering engine.</p><p>Built on OpenGL 4.3, GLFW and GLM.</p><p>It implements an Entity-Component-System paradigm and custom memory allocation.</p><a class="btn btn-primary" href="https://github.com/LucaRickler/opengl-game-engine" target="_blank">GitHub Repository</a>',
  //   [],
  //   null,
  //   'Personal Projects'
  // ),
  new PortfolioElement(
    'sfmlplatformer',
    'SFML 2D Platformer', [
    'C++',
    'SFML',
    '2D',
    'Linux'
  ],
    // tslint:disable-next-line:max-line-length
    '<p>A 2D platformer framework, built with SFML and C++ 11.</p><p>It implements a Unity3D-like entity-component-system and a grid-based platformer framework.<p><a class="btn btn-primary" href="https://github.com/LucaRickler/sfml-2d-platformer" target="_blank">GitHub Repository</a>',
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
    '<p>An incremental space-agency-manager game, where you build from scratch your space agency and guide it from it\'s humble beginning to the stars.</p>',
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
    '<p>An unnamed figure roams about an empty house, searching for something unknown, lost in the memories of a time forgotten.</p><p>"Home Sweet Tomb" is a third-person exploration game where your character has to solve puzzles to overcome obstacles and unravel the link between him and this mysterious place.</p>',
    [],
    'https://moonlitchameleon.itch.io/home-sweet-tomb',
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
    '<p>A 3D action game whith a sci-fi vibe.</p>',
    [],
    'https://moonlitchameleon.itch.io/polarity',
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
    '<p>A 2d side-scroller in which a martian sea creature, with a wave cannon on his back, must fight the evil aliens who are invading its planet. Its weapon is also its only way to move around the world, bouncing off the waves reflected on the environment.</p>',
    [],
    'https://moonlitchameleon.itch.io/martianwave',
    'Game Jams'
  ),
  new PortfolioElement(
    'tans',
    'Numeric Analysis and Simulation Technology Exam Project', [
    'C++',
    'Root'
  ],
    // tslint:disable-next-line:max-line-length
    '<p>Simulation of a simple <a href="https://en.wikipedia.org/wiki/Particle_shower" target="_blank">particle shower</a> event.</p><p>The project is built using the <a href="https://root.cern.ch/" target="_blank">Root Data Analysis Framework</a>, by <a href="https://cern.ch/" target="_blank">CERN</a> (required for running the project).</p><p>Source code can be found <a href="https://github.com/LucaRickler/TANS" target="_blank">here</a>, while <a href="./relazione_tans.pdf" target="_blank">this</a> is the project report (italian only).</p>',
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
    '<p>A multi-agent-based simulation framework, built in C++ (std 2011) and pthread.</p><p>Source code can be found <a href="https://github.com/LucaRickler/PDS---Progetto-d-esame" target="_blank">here</a>, while <a href="./relazione_pds.pdf" target="_blank">this</a> is the project report (italian only).</p>',
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
    '<p>A multi-agent-based simulation for the modellization of the rationality of people’s decisions in a peer to peer Environment.</p><p>Built in Java using the multi-agent library <a href="http://jade.tilab.com/" target="_blank">Jade</a>.</p><p>Source code can be found <a href="https://github.com/LucaRickler/M.A.S.-Lab" target="_blank">here</a>, while <a href="./relazione_mas.pdf" target="_blank">this</a> is the project report (english only).</p>',
    [],
    null,
    'Exam Projects'
  ),
];

