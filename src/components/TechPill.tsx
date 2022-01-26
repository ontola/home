import Link from 'next/link';

import { styled, theme } from '../../stitches.config';

interface ToolProps {
  technology: string;
}

function techToString(tech: string): string {
  if (tech === 'rails') {
    return 'Ruby on Rails';
  }
  return tech;
}

const ToolStyled = styled('a', {
  color: theme.colors.text,
  fontSize: theme.fontSizes.small,
  // border: '1px solid',
  // borderColor: theme.colors.text1,
  borderRadius: theme.sizes.radius,
  padding: '.5rem .8rem',
  marginRight: '.5rem',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  // capitalize the first letter
  textTransform: 'capitalize',

  '&:hover': {
    color: theme.colors.text,
    // border: '1px solid',
    background: theme.colors.bg0,
    // borderColor: theme.colors.text1,
  },
  img: {
    justifySelf: 'center',
    height: '1.5rem',
    display: 'block',
  },
});

export function TechPill({ technology }: ToolProps) {
  const title = techToString(technology);
  return (
    <Link href={`/tech/${technology}`} passHref>
      <ToolStyled>
        <img src={`/images/tech/${technology}.svg`} alt={title} />
        {title}
      </ToolStyled>
    </Link>
  );
}
