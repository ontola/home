import { styled } from '@stitches/react';
import Image from 'next/image';

import { team, TeamMemberType } from '../data/team';

interface TeamMemberProps {
  member: string;
}

const ProfileImg = styled('div', {
  width: '10rem',
  height: '10rem',
  borderRadius: '100%',
  overflow: 'hidden',
});

const ProfileWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  textAlign: 'center',

  strong: {
    paddingTop: '0.5rem',
  },
});

export function TeamMember(props: TeamMemberProps) {
  const member = team[props.member] as TeamMemberType;

  if (member.ex) {
    return null;
  }

  return (
    <ProfileWrapper>
      <ProfileImg>
        <Image
          src={`/images/team/${props.member}.jpg`}
          alt={member.name}
          objectFit="cover"
          height={200}
          width={200}
        />
      </ProfileImg>
      <strong>{member.name}</strong>
      <span>{member.title}</span>
    </ProfileWrapper>
  );
}
