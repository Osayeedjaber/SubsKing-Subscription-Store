'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Bot, Tv } from 'lucide-react';
import ProductCard from './ProductCard';
import styles from './ProductCarousel.module.css';

const icons = {
  'AI Tools': Bot,
  'Streaming Platforms': Tv,
  'All Subscriptions': null,
};

export default function ProductCarousel({ title, products, onProductClick, icon }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Use card width + gap for accurate scrolling
      const cardWidth = window.innerWidth <= 768 ? 260 : 300;
      const gap = window.innerWidth <= 768 ? 14 : 16;
      const scrollAmount = cardWidth + gap;
      
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const IconComponent = icons[title];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {IconComponent && <IconComponent size={24} className={styles.titleIcon} />}
          {title}
        </h2>
        <div className={styles.controls}>
          <button 
            className={styles.scrollBtn} 
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className={styles.scrollBtn} 
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className={styles.carousel} ref={scrollRef}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </section>
  );
}
