import Link from 'next/link';

import { styled, theme } from '../../stitches.config';

interface SectionHeadingProps {
  small: string;
  title: string;
  href?: string;
}

const Wrapper = styled('div', {
  marginTop: '3rem',
  a: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const Small = styled('p', {
  margin: 0,
  color: theme.colors.primary,
});

const Heading = styled('h2', {
  fontSize: '2.8rem',
  margin: 0,
});

export function SectionHeading({
  small,
  title,
  href,
}: SectionHeadingProps): JSX.Element {
  return (
    <Wrapper>
      {small && <Small>{small}</Small>}
      {href ? (
        <Link href={href} passHref>
          <a>
            <Heading>{title}</Heading>
          </a>
        </Link>
      ) : (
        <Heading>{title}</Heading>
      )}
    </Wrapper>
  );
}
