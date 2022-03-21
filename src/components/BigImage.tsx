import { styled, theme } from '../../stitches.config';

interface BigImageProps {
  image: string;
  alt: string;
}

const Wrap = styled('div', {
  width: '98vw',
  margin: '0',
  maxWidth: theme.sizes.container,
  // width: '100%',
  '@media (min-width: 1200px)': {
    margin: '3rem 0',
    // marginLeft: 'calc(-49vw + 19rem)',
    marginLeft: '-50%',
  },
});

const ImageWrapper = styled('img', {
  maxWidth: '100%',
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
