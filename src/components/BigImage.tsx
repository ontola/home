import { styled } from '../../stitches.config';

interface BigImageProps {
  image: string;
  alt: string;
}

const Wrap = styled('div', {
  margin: '3rem 0',
  width: '98vw',
  marginLeft: 'calc(-49vw + 19rem)',
});

const ImageWrapper = styled('img', {
  maxWidth: '50rem',
  display: 'block',
  margin: 'auto',
  '@media (min-width: 1200px)': {
    maxWidth: '1200px',
  },
});

export function BigImage({ image, alt }: BigImageProps) {
  return (
    <Wrap>
      <ImageWrapper
        src={`/images/${image}`}
        // objectFit="contain"
        // This is not a great solution, but I see not other option.
        // height={'100'}
        // width={'200'}
        // layout="fill"
        // loading="lazy"
        alt={alt}
      />
    </Wrap>
  );
}
