// pages/ExhibitorDetailPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, ExternalLink, Instagram, Facebook, Star } from 'lucide-react';
import useSEO from '../Hooks/useSEO';
import { exhibitorsData } from '../Data/ExhibitorData';

const ExhibitorDetailPage: React.FC = () => {
  const { exhibitorSlug } = useParams<{ exhibitorSlug: string }>();
  const exhibitor = exhibitorsData.find(e => e.slug === exhibitorSlug);
  if (!exhibitor) {
    return <div>Exposant non trouvé</div>;
  }

  useSEO({
    title: `${exhibitor.name} - Stand ${exhibitor.standNumber} | La Foire Aux Cadeaux 2025`,
    description: exhibitor.description,
    image: exhibitor.photo,
    url: `https://foireauxcadeaux.anaisconcept.biz/exposants/${exhibitor.slug}`,
    keywords: `${exhibitor.name}, ${exhibitor.category}, ${exhibitor.location}, ${exhibitor.products.join(', ')}`
  });

  return (
    <div className="pt-20">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link 
            to="/liste-exposants" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={20} />
            Retour à la liste des exposants
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Logo & Basic Info */}
            <div className="flex-shrink-0">
              <img 
                src={exhibitor.logo} 
                alt={exhibitor.name}
                className="w-32 h-32 rounded-lg object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{exhibitor.name}</h1>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-semibold">
                      Stand {exhibitor.standNumber}
                    </div>
                    {exhibitor.featured && (
                      <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star size={14} />
                        Coup de cœur
                      </div>
                    )}
                    {exhibitor.new && (
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Nouveau 2025
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin size={18} />
                <span>{exhibitor.location}</span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {exhibitor.description}
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4">
                {exhibitor.contact.phone && (
                  <a href={`tel:${exhibitor.contact.phone}`} className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <Phone size={18} />
                    <span>{exhibitor.contact.phone}</span>
                  </a>
                )}
                {exhibitor.contact.email && (
                  <a href={`mailto:${exhibitor.contact.email}`} className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <Mail size={18} />
                    <span>{exhibitor.contact.email}</span>
                  </a>
                )}
                {exhibitor.contact.website && (
                  <a href={exhibitor.contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <ExternalLink size={18} />
                    <span>Site web</span>
                  </a>
                )}
                {exhibitor.contact.instagram && (
                  <a href={`https://instagram.com/${exhibitor.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <Instagram size={18} />
                    <span>{exhibitor.contact.instagram}</span>
                  </a>
                )}
                {exhibitor.contact.facebook && (
                  <a href={`https://facebook.com/${exhibitor.contact.facebook}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <Facebook size={18} />
                    <span>Facebook</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Produits & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exhibitor.products.map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{product}</h3>
                <p className="text-gray-600 text-sm">Produit disponible sur le stand</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitorDetailPage;