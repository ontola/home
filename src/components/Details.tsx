import { styled, theme } from '../../stitches.config';
import { team, TeamMemberType } from '../data/team';
import { MetaData } from '../utils/getPosts';

const Detail = styled('div', {
  color: theme.colors.text1,
  a: {
    textDecoration: 'none',
  },
});

export function Details(data: MetaData) {
  const member = team[data.author] as TeamMemberType;
  return (
    <Detail>
      {new Date(data.date).toLocaleDateString()} -{' '}
      {member?.github ? <a href={member.github}>{member.name}</a> : member.name}
    </Detail>
  );
}
