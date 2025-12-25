'use client';

import { ShoppingCart } from 'lucide-react';
import { config } from '@/data/config';
import styles from './Header.module.css';

export default function Header({ cartCount, onCartClick }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>{config.siteName}</a>
        
        <div className={styles.links}>
          {config.navLinks.map((link, index) => (
            <a key={index} href={link.href}>{link.label}</a>
          ))}
        </div>

        <button className={styles.cartBtn} onClick={onCartClick}>
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
        </button>
      </nav>
    </header>
  );
}
