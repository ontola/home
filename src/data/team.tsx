export interface TeamMemberType {
  name: string;
  /** Github URL */
  github: string;
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
    github: 'https://github.com/joepio',
    title: 'CTO',
  },
  michiel: {
    name: 'Michiel van den Ingh',
    github: 'https://github.com/joepio',
    title: 'COO',
  },
  arthur: {
    name: 'Arthur Dingemans',
    github: 'https://github.com/joepio',
    title: 'Full-stack developer',
  },
  polle: {
    name: 'Polle Pas',
    github: 'https://github.com/joepio',
    title: 'Front-end developer',
  },
  job: {
    name: 'Job Eijdems',
    github: 'https://github.com/joepio',
    title: 'Front-end developer',
  },
  jurrian: {
    name: 'Jurrian Tromp',
    github: 'https://github.com/jurrian',
    title: 'Open data developer',
    ex: true,
  },
};
