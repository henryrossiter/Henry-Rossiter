// TODO Add a couple lines about each project
const data = [
  {
    title: 'Crisislogger',
    subtitle: 'A project to improve understanding of the Coronavirus Pandemic',
    link: 'https://github.com/ChildMindInstitute/crisislogger',
    image: '/images/projects/crisislogger.png',
    date: '2020',
    desc: 'I worked with the MATTER Lab to improve understanding of the Coronavirus Pandemic. '
      + 'Crisislogger is a website where users securely record and share stories, '
      + 'thoughts, and feeling related to the Coronavirus Pandemic. Shared recordings are '
      + 'transcribed and can be uploaded to a public or private database.',
  }, {
    title: 'Supersonic Fluid Flow Simulation',
    subtitle: 'Investigating and Visualizing a Mach 3 Flow using CFD',
    link: 'https://medium.com/@henry.rossiter/simulating-a-supersonic-flow-over-a-step-with-cfd-269512d907a1',
    image: '/images/projects/cfd.gif',
    date: '2020',
    desc: 'I simulated a Mach 3 fluid flow over a forward facing step using computational  '
      + 'fluid dynamics (CFD). I developed a scalable mesh and nondimensionalized the flow\'s '
      + 'parameters to investigate the formation of shock waves. I used OpenFOAM , an '
      + 'open source CFD engine, and compared the numerical accuracy of multiple integration schemes.',
  }, {
    title: 'ESPORTS Probability Modeling',
    subtitle: 'Building probability models to maximize CS:GO betting profitability',
    link: 'https://medium.com/analytics-vidhya/scraping-analyzing-cs-go-game-score-data-from-esea-997a875ca90f',
    image: '/images/projects/probabilityDistribution.jpg',
    date: '2020',
    desc: 'I scraped CAPTCHA protected CS:GO tournament results data from a prominent esports league.  '
      + 'I investigated the dataset to gain insight into the probability distributions of certain '
      + 'match outcomes. Using the distributions, I am able to place prop bets with positive expected returns.',
  }, {
    title: 'MindLogger',
    subtitle: 'Open-source Data Collection Platform',
    link: 'https://mindlogger.org/',
    image: '/images/projects/mindlogger.png',
    date: '2019 - 2020',
    desc: 'I worked with the MATTER Lab to develop MindLogger, a software system '
      + 'used by researchers and clinitians around the world. I contributed '
      + 'to the MindLogger mobile app (React Native), website (Vue), and server (Python).',
  }, {
    title: 'Option Price Scraping and Estimation',
    subtitle: 'Investigating Financial Option Pricing',
    link: 'https://medium.com/@henry.rossiter/option-pricing-black-scholes-vs-robinhood-da3eacb8383c',
    image: '/images/projects/optionPricing.png',
    date: '2019',
    desc: 'I created a python program to scrape option bid & ask pricing from Robinhood. '
      + 'The program calculated the contract\'s theoretical value using a Black Scholes model. '
      + 'Using the theoretical price and the scraped bid-ask spread, I was able to detect'
      + '\'mispriced\' contracts.',
  }, {
    title: 'Protocol Builder',
    subtitle: 'A Vue App to Create Uniform Survey Schemas',
    link: 'https://github.com/henryrossiter/Protocol-Builder',
    image: '/images/projects/protocolBuilder.png',
    date: '2019',
    desc: 'A Vue component that can be used to interactively develop ReproSchema-compliant JSONLD files.'
     + 'The component has been used by researchers around the world and is available on NPM. ',
  },
];

export default data;
