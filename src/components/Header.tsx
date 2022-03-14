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
  /** URL of floating PNG  */
  floatingImage?: string;
}

const CirclesWrapper = styled('div', {
  width: '100%',
  height: '30rem',
  position: 'absolute',
  top: 0,
  overflow: 'hidden',
});

const ImageWrapper = styled('div', {
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end',
  // marginBottom: '6rem',
  marginRight: '1rem',

  img: {
    borderRadius: theme.sizes.radius,
  },
  // '@media (min-width: 600px)': {
  //   width: '22rem',
  //   height: '14rem',
  //   // marginLeft: '3rem',
  // },
  // '@media (min-width: 900px)': {
  //   height: '17rem',
  //   width: '24rem',
  // },
  // '@media (min-width: 1200px)': {
  //   left: '4rem',
  // },
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
  marginBottom: '2rem',
  overflow: 'visible',
  position: 'relative',
  color: theme.colors.headerText,
  width: '100%',
  '@media (min-width: 1100px)': {
    paddingTop: '14rem',
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
  paddingRight: '1rem',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  '@media (min-width: 600px)': {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const FloatingImg = styled('img', {
  margin: 'auto',
  marginBottom: '-25%',
  maxWidth: '100%',
  maxHeight: '19rem',
  '@media (min-width: 800px)': {
    maxHeight: '24rem',
    height: '24rem',
    marginBottom: '-21rem',
    position: 'absolute',
    right: 0,
  },
});

const HeaderText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '33rem',
});

const HeaderHeading = styled('h1', {
  fontSize: '2.5rem',
  // maxWidth: '20rem',
  color: theme.colors.headerText,
});

export function Header({
  floatingImage,
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
        {floatingImage && <FloatingImg src={floatingImage} />}
        {customImage}
      </HeaderContainer>
    </HeaderWrapper>
  );
}
