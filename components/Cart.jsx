'use client';

import { X, Trash2, MessageCircle } from 'lucide-react';
import { config } from '@/data/config';
import styles from './Cart.module.css';

export default function Cart({ items, isOpen, onClose, onRemove, onClear }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const orderOnWhatsApp = () => {
    const itemsList = items.map(item => 
      `• ${item.name} (${item.duration}) - ${config.currency}${item.price}`
    ).join('\n');
    
    const message = encodeURIComponent(
      `Hi! I want to order:\n\n${itemsList}\n\n*Total: ${config.currency}${total}*\n\nI have paid via Bkash.\nTransaction ID: [Your TrxID]`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.cart}>
        <div className={styles.header}>
          <h3 className={styles.title}>Your Cart ({items.length})</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p>Your cart is empty</p>
            <span>Add subscriptions to get started</span>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {items.map((item, index) => (
                <div key={index} className={styles.item}>
                  <img src={item.icon} alt={item.name} className={styles.itemIcon} />
                  <div className={styles.itemInfo}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemDuration}>{item.duration}</span>
                  </div>
                  <span className={styles.itemPrice}>{config.currency}{item.price}</span>
                  <button className={styles.removeBtn} onClick={() => onRemove(index)}>
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.total}>
                <span>Total</span>
                <span className={styles.totalPrice}>{config.currency}{total}</span>
              </div>
              
              <div className={styles.bkashInfo}>
                <img src="/icons/bkash.svg" alt="Bkash" />
                <span>Pay to: <strong>{config.bkashNumber}</strong></span>
              </div>

              <button className={styles.checkoutBtn} onClick={orderOnWhatsApp}>
                <MessageCircle size={20} />
                Order on WhatsApp
              </button>

              <button className={styles.clearBtn} onClick={onClear}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
