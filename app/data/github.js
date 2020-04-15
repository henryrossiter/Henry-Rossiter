import dayjs from 'dayjs';

/* Keys returned by the github api. The other keys in the array below
 * are mostly jokes. These are the keys the github api query searches for.
 */
export const githubKeys = [
  'stargazers_count',
  'watchers_count',
  'forks',
  'open_issues_count',
  'subscribers_count',
  'pushed_at',
];

// TODO To be provided by an API
const data = [
  {
    label: 'Number of linter warnings',
    // TODO ammend this with a pre-commit hook
    // `npm run lint | grep problems | tail -1 | awk '{print $2}'`
    value: '0',
  }, {
    label: 'Last updated at',
    key: 'pushed_at',
    value: dayjs().format('MMMM D, YYYY'),
  },
  {
    label: 'Lines of Javascript powering this website',
    value: '2721',
  },
  {
    label: 'Current hosting service',
    value: 'Google Cloud Platform',
  },
];

export default data;
