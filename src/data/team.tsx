export interface TeamMember {
  name: string;
  /** Github URL */
  github: string;
}

export const team: { [key: string]: TeamMember } = {
  joep: {
    name: 'Joep Meindertma',
    github: 'https://github.com/joepio',
  },
};
