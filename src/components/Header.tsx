import { styled } from '@stitches/react';
import Image from 'next/image';

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

const ImageWrapper = styled('div', {
  width: '40vw',
  height: '40vw',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: -1,
});

const HeaderWrapper = styled('div', {
  minHeight: '10rem',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: '5rem',
  marginBottom: '5rem',
});

const HeaderChildren = styled('div', {
  maxWidth: '20rem',
  display: 'flex',
});

const HeaderHeading = styled('h1', {
  fontSize: '2.5rem',
  maxWidth: '20rem',
});

export function Header({ children, title }: HeaderProps): JSX.Element {
  return (
    <HeaderWrapper>
      <HeaderHeading>{title}</HeaderHeading>
      <ImageWrapper>
        <Image
          src="/assets/images/circles.svg"
          alt="circles"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </ImageWrapper>
      {children && <HeaderChildren>{children}</HeaderChildren>}
    </HeaderWrapper>
  );
}
