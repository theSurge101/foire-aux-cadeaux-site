import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const openWhatsApp = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    window.open(
      'https://wa.me/22890123148?text=Bonjour, j\'aimerais avoir plus d\'informations sur la Foire Aux Cadeaux',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-105"
      aria-label="Contact WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;