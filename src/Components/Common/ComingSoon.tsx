// Components/Common/ComingSoon.tsx
import React from 'react';
import { Calendar, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComingSoonProps {
  pageName: string;
  expectedDate?: string;
  additionalInfo?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ 
  pageName, 
//   expectedDate = "Décembre 2026",
  additionalInfo = "Le programme détaillé des animations sera bientôt disponible."
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="text-white" size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {pageName} à venir
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {additionalInfo}
          </p>
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex items-center justify-center gap-2 text-gray-700 mb-3">
              <Clock size={20} />
              <span className="font-semibold">Date de l'événement</span>
            </div>
            <p className="text-gray-600">18-20 Décembre 2026</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Retour à l'accueil
          </Link>
          <Link
            to="/contact"
            className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center"
          >
            <Mail size={18} />
            Être alerté
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Suivez-nous sur les réseaux sociaux pour être informé de la mise en ligne du programme.</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;