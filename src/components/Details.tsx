import styles from './Details.module.css';
import { team, TeamMemberType } from '../data/team';
import { MetaData } from '../utils/getPosts';

export function Details({
  data,
  withoutLinks,
}: {
  data: MetaData;
  withoutLinks?: boolean;
}) {
  const member = team[data.author] as TeamMemberType;
  const Author =
    member?.github && !withoutLinks ? (
      <a href={member.github}>{member.name}</a>
    ) : (
      member.name
    );

  return (
    <div className={styles.detail}>
      {new Date(data.date).toLocaleDateString()} - {Author}
    </div>
  );
}
