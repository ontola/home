import { styled } from '@stitches/react';
import Image from 'next/image';

interface HeaderProps {
  title: string;
  /** Path of the image. Must be in `public/assets/images/${name}` */
  image?: string;
  children?: React.ReactNode;
}

const CirclesWrapper = styled('div', {
  width: '40vw',
  height: '40vw',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: -1,
});

const ImageWrapper = styled('div', {
  width: '30vw',
  height: '20vw',
  position: 'absolute',
  borderRadius: '10px',
  background: '$bg2',
  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden',
  top: '10rem',
  right: '7rem',
  zIndex: -1,
  transform: 'perspective(50em) rotateX(10deg) rotateY(15deg) rotateZ(-5deg)',
});

const HeaderWrapper = styled('div', {
  minHeight: '10rem',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: '7rem',
  marginBottom: '7rem',
});

const HeaderChildren = styled('div', {
  maxWidth: '20rem',
  display: 'flex',
});

const HeaderHeading = styled('h1', {
  fontSize: '2.5rem',
  maxWidth: '20rem',
});

export function Header({ children, title, image }: HeaderProps): JSX.Element {
  return (
    <HeaderWrapper>
      <HeaderHeading>{title}</HeaderHeading>
      <CirclesWrapper>
        <Image
          src="/assets/images/circles.svg"
          alt="circles"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </CirclesWrapper>
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
    </HeaderWrapper>
  );
}
