import Link from 'next/link';

import { styled, theme } from '../../stitches.config';

interface ToolProps {
  // ID of the tech. Should map the route of the mdx file.
  technology: string;
  big?: boolean;
}

function techToString(tech: string): string {
  return tech;
}

const ToolStyled = styled('a', {
  span: {
    color: 'black',
  },
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
  backgroundColor: 'rgba(255, 255, 255, 0.5)',

  variants: {
    big: {
      true: {
        padding: '1rem',

        span: {
          fontSize: '1rem',
          paddingTop: '.5rem',
          color: 'black',
        },
        img: {
          flex: 1,
        },
      },
    },
  },

  '&:hover': {
    background: 'white',
    borderColor: theme.colors.text1,
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
export function TechPill({ technology, big }: ToolProps) {
  const title = techToString(technology);
  return (
    <Link href={`/tech/${technology}`} passHref>
      <ToolStyled big={big}>
        <img src={`/images/tech/${technology}.svg`} alt={title} />
        <span>{title}</span>
      </ToolStyled>
    </Link>
  );
}
