import Link from 'next/link';
import Image from 'next/image';

import styles from './TeamMember.module.css';
import { team, TeamMemberType } from '../data/team';

interface TeamMemberProps {
  member: string;
}

export function TeamMember(props: TeamMemberProps) {
  const member = team[props.member] as TeamMemberType;

  if (member.ex) {
    return null;
  }

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.profileImg}>
        <Image
          src={`/images/team/${props.member}.jpg`}
          alt={member.name}
          width={200}
          height={200}
          style={{
            objectFit: "cover"
          }}
        />
      </div>
      <strong>{member.name}</strong>
      <span>{member.title}</span>
    </div>
  );
}
