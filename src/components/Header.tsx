import Image from 'next/image';

import { styled, theme } from '../../stitches.config';
import { Circles } from './Circles';

interface HeaderProps {
  title: string;
  /** Path of the image. Must be in `public/images/${name}` */
  image?: string;
  children?: React.ReactNode;
  /** React element that appears after the text. */
  customImage?: React.ReactNode;
}

const CirclesWrapper = styled('div', {
  width: '100%',
  height: '30rem',
  position: 'absolute',
  top: 0,
  overflow: 'hidden',
});

const ImageWrapper = styled('div', {
  width: '20rem',
  height: '12rem',
  borderRadius: '10px',
  background: '$bg2',
  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden',
  top: '0',
  zIndex: 1,
  transform: 'perspective(50em) rotateX(10deg) rotateY(15deg) rotateZ(-5deg)',
  position: 'relative',
  maxWidth: '90vw',
  marginTop: '1rem',
  marginBottom: '6rem',
  '@media (min-width: 600px)': {
    width: '22rem',
    height: '14rem',
    marginLeft: '3rem',
  },
  '@media (min-width: 900px)': {
    height: '17rem',
    width: '25rem',
  },
  '@media (min-width: 1200px)': {
    left: '4rem',
    transform:
      'perspective(70rem) rotateX(10deg) rotateY(15deg) rotateZ(-5deg) scale(1.3)',
  },
});

const HeaderWrapper = styled('div', {
  background: theme.colors.headerBg,
  margin: '0 auto',
  marginTop: '-3rem',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'start',
  flexDirection: 'column',
  paddingTop: '10rem',
  paddingBottom: '5rem',
  marginBottom: '5rem',
  overflow: 'visible',
  position: 'relative',
  color: theme.colors.headerText,
  width: '100%',
  '@media (min-width: 1100px)': {
    paddingTop: '14rem',
    paddingBottom: '7rem',
  },
});

const HeaderChildren = styled('div', {
  '@media (min-width: 600px)': {
    maxWidth: '20rem',
  },
  // textShadow: `0 0 20px ${theme.colors.bg0}`,
  '*': {
    color: theme.colors.headerText,
  },
});

const HeaderContainer = styled('div', {
  width: '100%',
  maxWidth: '$containerBig',
  position: 'relative',
  margin: '0 auto',
  paddingLeft: '1rem',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  '@media (min-width: 600px)': {
    flexDirection: 'row',
  },
});

const HeaderText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '20rem',
});

const HeaderHeading = styled('h1', {
  fontSize: '2.5rem',
  maxWidth: '20rem',
  color: theme.colors.headerText,
});

export function Header({
  customImage,
  children,
  title,
  image,
}: HeaderProps): JSX.Element {
  return (
    <HeaderWrapper>
      <CirclesWrapper>
        {/* <Circles src="/images/circles.svg" /> */}
        <Circles />
      </CirclesWrapper>
      <HeaderContainer>
        <HeaderText>
          <HeaderHeading>{title}</HeaderHeading>
          {children && <HeaderChildren>{children}</HeaderChildren>}
        </HeaderText>
        {image && (
          <ImageWrapper>
            <Image
              width={400}
              height={300}
              // layout="responsive"
              objectFit="cover"
              objectPosition="center"
              src={`/images/${image}`}
              alt=""
            />
          </ImageWrapper>
        )}
        {customImage}
      </HeaderContainer>
    </HeaderWrapper>
  );
}
