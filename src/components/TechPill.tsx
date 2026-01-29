import clsx from 'clsx';
import Link from 'next/link';

import styles from './TechPill.module.css';

interface ToolProps {
  // ID of the tech. Should map the route of the mdx file.
  technology: string;
  big?: boolean;
}

function techToString(tech: string): string {
  return tech;
}

/** Small preview of a technology. Shows icon and name. */
export function TechPill({ technology, big }: ToolProps) {
  const title = techToString(technology);
  return (
    <Link href={`/tech/${technology}`} className={clsx(styles.tool, big && styles.big)}>

      <img src={`/images/tech/${technology}.svg`} alt={title} />
      <span>{title}</span>

    </Link>
  );
}
