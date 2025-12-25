'use client';

import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { config } from '@/data/config';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi! I have a question about your subscriptions.');
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.subtitle}>Have questions? We're here to help!</p>
        
        <div className={styles.grid}>
          <div className={styles.card} onClick={openWhatsApp}>
            <div className={styles.iconWrapper} style={{ background: 'rgba(37, 211, 102, 0.1)' }}>
              <MessageCircle size={24} color="#25D366" />
            </div>
            <h3 className={styles.cardTitle}>WhatsApp</h3>
            <p className={styles.cardText}>+{config.whatsappNumber}</p>
            <span className={styles.cardAction}>Message us</span>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconWrapper} style={{ background: 'rgba(226, 19, 110, 0.1)' }}>
              <Phone size={24} color="#e2136e" />
            </div>
            <h3 className={styles.cardTitle}>Bkash</h3>
            <p className={styles.cardText}>{config.bkashNumber}</p>
            <span className={styles.cardAction}>Payment number</span>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconWrapper} style={{ background: 'rgba(66, 133, 244, 0.1)' }}>
              <Mail size={24} color="#4285F4" />
            </div>
            <h3 className={styles.cardTitle}>Email</h3>
            <p className={styles.cardText}>{config.email}</p>
            <span className={styles.cardAction}>Send email</span>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconWrapper} style={{ background: 'rgba(255, 107, 53, 0.1)' }}>
              <MapPin size={24} color="#FF6B35" />
            </div>
            <h3 className={styles.cardTitle}>Location</h3>
            <p className={styles.cardText}>{config.location}</p>
            <span className={styles.cardAction}>Serving nationwide</span>
          </div>
        </div>

        {/* Social Links */}
        <div className={styles.socialSection}>
          <p className={styles.socialLabel}>Follow us on social media</p>
          <div className={styles.socials}>
            {config.social.facebook && (
              <a 
                href={config.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <Facebook size={22} />
                <span>Facebook</span>
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
                <Instagram size={22} />
                <span>Instagram</span>
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
                <Send size={22} />
                <span>Telegram</span>
              </a>
            )}
          </div>
        </div>

        <button className={styles.whatsappBtn} onClick={openWhatsApp}>
          <MessageCircle size={22} />
          Chat with us on WhatsApp
        </button>
      </div>
    </section>
  );
}
