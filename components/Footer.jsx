'use client';

import { MessageCircle, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { config, products } from '@/data/config';
import styles from './Footer.module.css';

export default function Footer() {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi! I have a question.');
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <h3 className={styles.logo}>{config.siteName}</h3>
            <p className={styles.tagline}>{config.tagline}</p>
            
            {/* Social Links */}
            <div className={styles.socials}>
              {config.social.facebook && (
                <a 
                  href={config.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              )}
              {config.social.instagram && (
                <a 
                  href={config.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
              {config.social.telegram && (
                <a 
                  href={config.social.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Telegram"
                >
                  <Send size={20} />
                </a>
              )}
            </div>
            
            <div className={styles.bkashBox}>
              <img src="/icons/bkash.svg" alt="Bkash" className={styles.bkashIcon} />
              <div>
                <span className={styles.bkashLabel}>Pay via Bkash</span>
                <span className={styles.bkashNumber}>{config.bkashNumber}</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Products</h4>
            <ul className={styles.list}>
              {products.map((product) => (
                <li key={product.id}>
                  <a href="#products">{product.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.list}>
              {config.navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              {config.footerLinks.map((link, index) => (
                <li key={`footer-${index}`}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <MessageCircle size={16} />
                <span>+{config.whatsappNumber}</span>
              </li>
              <li>
                <Mail size={16} />
                <span>{config.email}</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>{config.location}</span>
              </li>
            </ul>
            <button className={styles.whatsappBtn} onClick={openWhatsApp}>
              <MessageCircle size={18} />
              Chat on WhatsApp
            </button>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2024 {config.siteName}. All rights reserved.</p>
          <div className={styles.badges}>
            <span>Secure Payments</span>
            <span>Instant Delivery</span>
            <span>100% Genuine</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
