import { styled } from '../../stitches.config';
import { team, TeamMemberType } from '../data/team';
import { MetaData } from '../utils/getPosts';

const Detail = styled('div', {
  color: '$text1',
});

export function Details(data: MetaData) {
  const member = team[data.author] as TeamMemberType;
  return (
    <Detail>
      {new Date(data.date).toLocaleDateString()} -{' '}
      <a href={member.github}>{member.name}</a>
    </Detail>
  );
}
