import styles from './BigImage.module.css';

interface BigVideoProps {
  video: string;
  poster?: string;
  title: string;
}

/** Muted, looping video at the same width as a BigImage */
export function BigVideo({ video, poster, title }: BigVideoProps) {
  return (
    <div className={styles.wrap}>
      <video
        className={styles.image}
        src={`/videos/${video}`}
        poster={poster && `/videos/${poster}`}
        title={title}
        aria-label={title}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        // Same sizing as a BigImage: up to 1200px wide, shrinking on small screens
        width={1200}
        style={{ height: 'auto' }}
      />
    </div>
  );
}
