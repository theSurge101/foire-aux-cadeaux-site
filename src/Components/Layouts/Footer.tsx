import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
    const socialLinks = {
        instagram: 'https://instagram.com/yourpage',
        facebook: 'https://facebook.com/yourpage',
        whatsapp: 'https://wa.me/22890123456'
      };
  return (
    <footer className="py-12 px-4 border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              La Foire Aux Cadeaux
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Le rendez-vous shopping incontournable de Lomé. Découvrez, partagez, célébrez !
            </p>
            <div className="flex space-x-4">
               <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" size={20} />
               </a>
               <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" size={20} />
               </a>
               <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" size={20} />
               </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Navigation</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <Link to="/" className="block hover:text-gray-900 transition-colors">Accueil</Link>
              <Link to="/exposants" className="block hover:text-gray-900 transition-colors">Exposants</Link>
              <Link to="/visiteurs" className="block hover:text-gray-900 transition-colors">Visiteurs</Link>
              <Link to="/programme" className="block hover:text-gray-900 transition-colors">Programme</Link>
              <Link to="/pass-premium" className="block hover:text-gray-900 transition-colors">Pass Premium</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@foireauxcadeaux.tg</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+228 90 12 34 56</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>WhatsApp Business</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Légal</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <Link to="/mentions-legales" className="block hover:text-gray-900 transition-colors">Mentions légales</Link>
              <Link to="/confidentialite" className="block hover:text-gray-900 transition-colors">Politique de confidentialité</Link>
              <Link to="/presse" className="block hover:text-gray-900 transition-colors">Espace presse</Link>
              <Link to="/partenaires" className="block hover:text-gray-900 transition-colors">Partenaires</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 La Foire Aux Cadeaux. Tous droits réservés. • Organisé par Events Togo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;