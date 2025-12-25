'use client';

import { config } from '@/data/config';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, onClick }) {
  const tier = product.tiers[0];
  
  return (
    <div 
      className={styles.card}
      onClick={onClick}
      style={{ '--product-color': product.color }}
    >
      {product.badge && (
        <span className={styles.badge}>{product.badge}</span>
      )}
      
      <div className={styles.imageWrapper}>
        <img 
          src={product.icon} 
          alt={product.name}
          className={styles.icon}
        />
      </div>
      
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.description}>{product.description}</p>
      
      <div className={styles.priceSection}>
        <div className={styles.priceBlock}>
          <span className={styles.from}>From</span>
          <div className={styles.priceValue}>
            <span className={styles.price}>{config.currency}{tier.price}</span>
            <span className={styles.period}>/mo</span>
          </div>
          {tier.originalPrice && (
            <span className={styles.originalPrice}>
              {config.currency}{tier.originalPrice}
            </span>
          )}
        </div>
        <div className={styles.ctaWrapper}>
          <span className={styles.cta}>Buy Now</span>
        </div>
      </div>
    </div>
  );
}
