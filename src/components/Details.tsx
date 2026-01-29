import styles from './Details.module.css';
import { team, TeamMemberType } from '../data/team';
import { MetaData } from '../utils/getPosts';

export function Details(data: MetaData) {
  const member = team[data.author] as TeamMemberType;
  return (
    <div className={styles.detail}>
      {new Date(data.date).toLocaleDateString()} -{' '}
      {member?.github ? <a href={member.github}>{member.name}</a> : member.name}
    </div>
  );
}
