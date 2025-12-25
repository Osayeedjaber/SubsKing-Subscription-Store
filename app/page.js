'use client';

import { useState } from 'react';
import { products, getProductsByCategory } from '@/data/config';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCarousel from '@/components/ProductCarousel';
import QuickBuyModal from '@/components/QuickBuyModal';
import Cart from '@/components/Cart';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 200);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const aiProducts = getProductsByCategory('ai');
  const streamingProducts = getProductsByCategory('streaming');

  return (
    <>
      <Header 
        cartCount={cartItems.length} 
        onCartClick={() => setCartOpen(true)} 
      />

      <main className="main">
        <Hero onProductClick={openModal} />

        <StatsSection />

        <div id="products">
          <ProductCarousel 
            title="AI Tools" 
            products={aiProducts}
            onProductClick={openModal}
          />
        </div>

        <ProductCarousel 
          title="Streaming Platforms" 
          products={streamingProducts}
          onProductClick={openModal}
        />

        <ProductCarousel 
          title="All Subscriptions" 
          products={products}
          onProductClick={openModal}
        />

        <TestimonialsSection />

        <AboutSection />

        <FAQSection />

        <ContactSection />
      </main>

      <Footer />

      <QuickBuyModal 
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={closeModal}
        onAddToCart={addToCart}
      />

      <Cart 
        items={cartItems}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onClear={clearCart}
      />
    </>
  );
}
