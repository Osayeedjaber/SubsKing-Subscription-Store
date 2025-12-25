'use client';

import { Star } from 'lucide-react';
import { config } from '@/data/config';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Our Customers Say</h2>
        <p className={styles.subtitle}>Trusted by thousands of happy customers across Bangladesh</p>
        
        <div className={styles.grid}>
          {config.testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <p className={styles.text}>"{testimonial.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <span className={styles.name}>{testimonial.name}</span>
                  <span className={styles.location}>{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

