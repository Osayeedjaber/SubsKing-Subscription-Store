'use client';

import { Shield, Zap, Clock, CreditCard } from 'lucide-react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Instant Delivery',
      description: 'Get your subscription credentials within minutes after payment confirmation.'
    },
    {
      icon: <Shield size={24} />,
      title: '100% Genuine',
      description: 'All accounts are premium and verified. We guarantee authenticity.'
    },
    {
      icon: <Clock size={24} />,
      title: '24/7 Support',
      description: 'Our team is always available to help you with any issues or questions.'
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Easy Payment',
      description: 'Pay conveniently via Bkash. Simple, fast, and secure transactions.'
    }
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.description}>
          We are Bangladesh's trusted source for premium digital subscriptions. 
          From streaming services like Netflix and Prime Video to AI tools like ChatGPT and Gemini, 
          we provide genuine accounts at the most affordable prices.
        </p>
        
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

