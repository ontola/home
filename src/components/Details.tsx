import { styled } from '../../stitches.config';
import { team, TeamMember } from '../data/team';
import { MetaData } from '../utils/getPosts';

const Detail = styled('div', {
  color: '$text1',
});

export function Details(data: MetaData) {
  const member = team[data.author] as TeamMember;
  return (
    <Detail>
      {new Date(data.date).toLocaleDateString()} -{' '}
      <a href={member.github}>{member.name}</a>
    </Detail>
  );
}
