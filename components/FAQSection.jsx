'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQSection.module.css';

const faqs = [
  {
    question: 'How do I place an order?',
    answer: 'Simply select your desired subscription, choose a plan duration, pay via Bkash to our number, and send your transaction ID on WhatsApp. You will receive your account details within minutes.'
  },
  {
    question: 'Are these accounts genuine?',
    answer: 'Yes, all our accounts are 100% genuine and premium. We source them directly from official channels to ensure quality and reliability.'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Most orders are delivered within 5-30 minutes after payment confirmation. During peak hours, it may take up to 1 hour.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We currently accept Bkash payments. Simply send the amount to our Bkash number and share the transaction ID with us on WhatsApp.'
  },
  {
    question: 'What if my subscription stops working?',
    answer: 'Contact us immediately via WhatsApp. We offer replacements or refunds for any issues within the subscription period. Your satisfaction is guaranteed.'
  },
  {
    question: 'Can I share my account?',
    answer: 'Account sharing policies depend on the specific subscription. Netflix allows multiple profiles, while services like ChatGPT are for single-user use. Please check before sharing.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <p className={styles.subtitle}>Got questions? We have answers.</p>
        
        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown size={20} className={styles.icon} />
              </button>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

