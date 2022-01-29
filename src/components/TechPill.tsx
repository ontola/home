import Link from 'next/link';

import { styled, theme } from '../../stitches.config';

interface ToolProps {
  // ID of the tech. Should map the route of the mdx file.
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
  border: '1px solid',
  borderColor: theme.colors.bg2,
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
    borderColor: theme.colors.text1,
    background: theme.colors.bg0,
  },
  '&:active': {
    borderColor: theme.colors.text,
  },
  img: {
    justifySelf: 'center',
    height: '1.5rem',
    display: 'block',
  },
});

/** Small preview of a technology. Shows icon and name. */
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
