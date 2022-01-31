export interface TeamMemberType {
  name: string;
  /** Github URL */
  github: string;
  title: string;
}

export const team: { [key: string]: TeamMemberType } = {
  joep: {
    name: 'Joep Meindertma',
    github: 'https://github.com/joepio',
    title: 'CEO',
  },
  polle: {
    name: 'Polle Pas',
    github: 'https://github.com/joepio',
    title: 'Front-end developer',
  },
  arthur: {
    name: 'Arthur Dingemans',
    github: 'https://github.com/joepio',
    title: 'Full-stack developer',
  },
  michiel: {
    name: 'Michiel van den Ingh',
    github: 'https://github.com/joepio',
    title: 'COO',
  },
  thom: {
    name: 'Thom van Kalkeren',
    github: 'https://github.com/joepio',
    title: 'CTO',
  },
  job: {
    name: 'Job Eijdems',
    github: 'https://github.com/joepio',
    title: 'Front-end developer',
  },
};
