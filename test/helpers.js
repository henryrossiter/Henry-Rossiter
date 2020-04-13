const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Henry Rossiter',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Henry Rossiter',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Henry Rossiter',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Henry Rossiter',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Henry Rossiter',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
