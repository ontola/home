import { styled } from '@stitches/react';
import Image from 'next/image';

interface HeaderProps {
  title: string;
  /** Path of the image. Must be in `public/assets/images/${name}` */
  image?: string;
  children?: React.ReactNode;
}

const CirclesWrapper = styled('div', {
  width: '100%',
  height: '30rem',
  position: 'absolute',
  zIndex: -1,
  overflow: 'visible',
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
  '@media (min-width: 600px)': {
    right: '-4rem',
    position: 'absolute',
  },
});

const HeaderWrapper = styled('div', {
  margin: '0 auto',
  marginTop: '-3rem',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'start',
  flexDirection: 'column',
  paddingTop: '7rem',
  paddingBottom: '7rem',
  overflow: 'hidden',
  position: 'relative',
  zIndex: -1,
  width: '100%',
});

const HeaderChildren = styled('div', {
  maxWidth: '20rem',
});

const HeaderContainer = styled('div', {
  width: '100%',
  maxWidth: '$container',
  position: 'relative',
  margin: '0 auto',
  paddingLeft: '1rem',
});

const HeaderHeading = styled('h1', {
  fontSize: '2.5rem',
  maxWidth: '20rem',
});

const Circles = styled('img', {
  height: '20rem',
  position: 'absolute',
  top: '-5rem',
  left: '9rem',
  '@media (min-width: 600px)': {
    right: '-5rem',
    height: '28rem',
    left: 'auto',
  },
  '@media (min-width: 1100px)': {
    left: 'auto',
    right: '0%',
    height: '28rem',
  },
  '@media (min-width: 1300px)': {
    left: 'auto',
    right: '10%',
    height: '30rem',
  },
  '-webkit-transform': 'translate3d(0, 0, 0)',
});

export function Header({ children, title, image }: HeaderProps): JSX.Element {
  return (
    <HeaderWrapper>
      <CirclesWrapper>
        <Circles src="/assets/images/circles.svg" />
      </CirclesWrapper>
      <HeaderContainer>
        <HeaderHeading>{title}</HeaderHeading>
        {children && <HeaderChildren>{children}</HeaderChildren>}
        {image && (
          <ImageWrapper>
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={`/assets/images/${image}`}
              alt=""
            />
          </ImageWrapper>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
}
