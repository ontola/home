export interface TeamMemberType {
  name: string;
  /** Github URL */
  github?: string;
  title: string;
  /** If the team member is no longer with the team */
  ex?: boolean;
}

export const team: { [key: string]: TeamMemberType } = {
  joep: {
    name: 'Joep Meindertma',
    github: 'https://github.com/joepio',
    title: 'CEO',
  },
  thom: {
    name: 'Thom van Kalkeren',
    github: 'https://github.com/rescribet',
    title: 'CTO',
    ex: true,
  },
  michiel: {
    name: 'Michiel van den Ingh',
    title: 'COO',
  },
  arthur: {
    name: 'Arthur Dingemans',
    github: 'https://github.com/awdingemans',
    title: 'Full-stack developer',
    ex: true,
  },
  polle: {
    name: 'Polle Pas',
    github: 'https://github.com/polleps',
    title: 'Front-end developer',
  },
  marcel: {
    name: 'Marcel Jongsma',
    title: 'Account manager',
    ex: true,
  },
  job: {
    name: 'Job Eijdems',
    title: 'Front-end developer',
    ex: true,
  },
  jurrian: {
    name: 'Jurrian Tromp',
    github: 'https://github.com/jurrian',
    title: 'Open data developer',
    ex: true,
  },
};
