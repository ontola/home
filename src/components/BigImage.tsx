import { styled } from '../../stitches.config';

interface BigImageProps {
  image: string;
  alt: string;
}

const ImageWrapper = styled('img', {
  maxWidth: '98vw',
  marginLeft: 'calc(-49vw + 19rem)',
});

export function BigImage({ image, alt }: BigImageProps) {
  return (
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
  );
}
