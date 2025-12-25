'use client';

import { config } from '@/data/config';
import styles from './StatsSection.module.css';

export default function StatsSection() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {config.stats.map((stat, index) => (
          <div key={index} className={styles.stat}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

