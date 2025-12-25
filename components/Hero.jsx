'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products, config } from '@/data/config';
import styles from './Hero.module.css';

export default function Hero({ onProductClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, config.hero.rotateSpeed);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goTo = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goNext = () => goTo((currentIndex + 1) % products.length);
  const goPrev = () => goTo((currentIndex - 1 + products.length) % products.length);

  const current = products[currentIndex];
  const tier = current.tiers[0];

  return (
    <section className={styles.hero}>
      <div 
        className={styles.heroBackground}
        style={{ '--product-color': current.color }}
      >
        <div className={styles.gradientOverlay} />
        <div className={styles.colorGlow} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.slideContent} key={current.id}>
          <div className={styles.productBadge}>
            {current.badge || config.hero.badge}
          </div>
          
          <div className={styles.productIcon}>
            <img src={current.icon} alt={current.name} />
          </div>
          
          <h1 className={styles.productName}>{current.name}</h1>
          <p className={styles.productDescription}>{current.description}</p>
          
          <div className={styles.priceTag}>
            <span className={styles.priceFrom}>From</span>
            <span className={styles.price}>{config.currency}{tier.price}</span>
            <span className={styles.pricePeriod}>/month</span>
            {tier.originalPrice && (
              <span className={styles.originalPrice}>{config.currency}{tier.originalPrice}</span>
            )}
          </div>
          
          <button 
            className={styles.buyButton}
            onClick={() => onProductClick(current)}
            style={{ background: current.color }}
          >
            Get Started
          </button>
        </div>

        <button className={`${styles.navArrow} ${styles.navLeft}`} onClick={goPrev}>
          <ChevronLeft size={28} />
        </button>
        <button className={`${styles.navArrow} ${styles.navRight}`} onClick={goNext}>
          <ChevronRight size={28} />
        </button>

        <div className={styles.dotsContainer}>
          {products.map((product, index) => (
            <button
              key={product.id}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              onClick={() => goTo(index)}
              style={{ '--dot-color': product.color }}
            >
              <img src={product.icon} alt={product.name} className={styles.dotIcon} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
