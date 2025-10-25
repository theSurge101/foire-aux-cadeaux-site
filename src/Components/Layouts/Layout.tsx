import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../Common/WhatsAppButton';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;