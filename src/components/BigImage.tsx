import styles from './BigImage.module.css';

interface BigImageProps {
  image: string;
  alt: string;
}

export function BigImage({ image, alt }: BigImageProps) {
  return (
    <div className={styles.wrap}>
      <img
        className={styles.image}
        src={`/images/${image}`}
        // objectFit="contain"
        // This is not a great solution, but I see not other option.
        // height={'100'}
        // width={'200'}
        // layout="fill"
        // loading="lazy"
        alt={alt}
      />
    </div>
  );
}
