'use client';

import { useState } from 'react';
import { X, MessageCircle, Copy, Check, ShoppingCart } from 'lucide-react';
import { config } from '@/data/config';
import styles from './QuickBuyModal.module.css';

export default function QuickBuyModal({ product, isOpen, onClose, onAddToCart }) {
  const [selectedTier, setSelectedTier] = useState(0);
  const [copied, setCopied] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const tier = product.tiers[selectedTier];
  
  const copyBkash = async () => {
    try {
      await navigator.clipboard.writeText(config.bkashNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy');
    }
  };

  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      name: product.name,
      icon: product.icon,
      duration: tier.duration,
      price: tier.price
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I want to buy *${product.name}* (${tier.duration}) - ${config.currency}${tier.price}\n\nI have paid via Bkash.\nTransaction ID: [Your TrxID]`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  const calculateSavings = (index) => {
    if (index === 0) return null;
    const monthlyPrice = product.tiers[0].price;
    const months = index === 1 ? 3 : index === 2 ? 6 : 12;
    const expectedPrice = monthlyPrice * months;
    const actualPrice = product.tiers[index].price;
    const savings = Math.round((1 - actualPrice / expectedPrice) * 100);
    return savings > 0 ? savings : null;
  };

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <div className="modal-header">
          <div 
            className="modal-icon"
            style={{ background: `${product.color}20` }}
          >
            <img src={product.icon} alt={product.name} />
          </div>
          <div>
            <h3 className="modal-title">{product.name}</h3>
            <p style={{ fontSize: '13px', color: '#888' }}>
              Select your plan
            </p>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="tier-list">
          {product.tiers.map((t, index) => {
            const savings = calculateSavings(index);
            return (
              <button
                key={index}
                className={`tier-option ${selectedTier === index ? 'selected' : ''}`}
                onClick={() => setSelectedTier(index)}
              >
                <span className="tier-duration">{t.duration}</span>
                <span className="tier-price">
                  {config.currency}{t.price}
                  {savings && <span className={styles.savings}> (Save {savings}%)</span>}
                </span>
              </button>
            );
          })}
        </div>

        <div className="payment-section">
          <p className="payment-title">Pay via Bkash to:</p>
          <div className="bkash-display">
            <img src="/icons/bkash.svg" alt="Bkash" />
            <span>{config.bkashNumber}</span>
            <button 
              className={styles.copyBtn}
              onClick={copyBkash}
              title="Copy number"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.addToCartBtn} onClick={handleAddToCart}>
            {added ? (
              <><Check size={18} /> Added!</>
            ) : (
              <><ShoppingCart size={18} /> Add to Cart</>
            )}
          </button>
          <button className="whatsapp-btn" onClick={openWhatsApp}>
            <MessageCircle size={20} />
            Buy Now
          </button>
        </div>

        <p className={styles.note}>
          After payment, send your Transaction ID on WhatsApp to receive your account instantly.
        </p>
      </div>
    </div>
  );
}
