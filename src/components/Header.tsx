import { styled } from '@stitches/react';
import Image from 'next/image';

import { theme } from '../../stitches.config';
import { Circles } from './Circles';

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
  top: 0,
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
  marginBottom: '4rem',
  '@media (min-width: 600px)': {
    width: '20rem',
    right: '-4rem',
    position: 'absolute',
  },
  '@media (min-width: 900px)': {
    right: '-10rem',
    height: '16rem',
    width: '25rem',
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
  overflow: 'hidden',
  position: 'relative',
  color: theme.colors.headerText,
  width: '100%',
  '@media (min-width: 1100px)': {
    paddingTop: '14rem',
    paddingBottom: '7rem',
  },
});

const HeaderChildren = styled('div', {
  maxWidth: '20rem',
  // textShadow: `0 0 20px ${theme.colors.bg0}`,
  '*': {
    color: theme.colors.headerText,
  },
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
  color: theme.colors.headerText,
});

export function Header({ children, title, image }: HeaderProps): JSX.Element {
  return (
    <HeaderWrapper>
      <CirclesWrapper>
        {/* <Circles src="/assets/images/circles.svg" /> */}
        <Circles />
      </CirclesWrapper>
      <HeaderContainer>
        <HeaderHeading>{title}</HeaderHeading>
        {children && <HeaderChildren>{children}</HeaderChildren>}
        {image && (
          <ImageWrapper>
            <Image
              width={400}
              height={300}
              // layout="responsive"
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
