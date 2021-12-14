import { styled, theme } from '../../stitches.config';

interface SectionHeadingProps {
  small: string;
  title: string;
}

const Wrapper = styled('div', {
  // marginTop: '3rem',
});

const Small = styled('p', {
  margin: 0,
  color: theme.colors.primary,
});

const Heading = styled('h2', {
  margin: 0,
});

export function SectionHeading({
  small,
  title,
}: SectionHeadingProps): JSX.Element {
  return (
    <Wrapper>
      {small && <Small>{small}</Small>}
      <Heading>{title}</Heading>
    </Wrapper>
  );
}
