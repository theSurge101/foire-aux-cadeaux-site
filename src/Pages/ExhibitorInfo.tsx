import React from 'react';
import { Download, CheckCircle, Users, TrendingUp, Award, ChevronRight, MessageCircle, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../Hooks/useSEO';

// Constants
const CONTACT_PHONE = '22890123148';
const FORM_URL = 'https://forms.hubspot.com/12345678/exposant-form';
const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE}?text=Bonjour,%20je%20souhaite%20des%20infos%20sur%20les%20stands%20exposants`;

// Types
interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Package {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

const ExhibitorInfo: React.FC = () => {
      useSEO({
        title:"Devenez Exposant - La Foire Aux Cadeaux 2025 | Lomé",
        description:"Exposez votre marque devant 3,000 visiteurs ciblés. Stands premium, visibilité maximale et opportunités de networking. Réservez votre emplacement maintenant.",
        url:"https://foireauxcadeaux.anaisconcept.biz/exposants",
        image:"https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_BOOTHSPOT_PUBLIC_AUTHENTIC_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
        keywords:"exposant lomé, stand foire togo, salon exposition lomé, visibilité marque togo"
      });
  const benefits: Benefit[] = [
    { icon: Users, title: 'Audience qualifiée', description: '+3,000 visiteurs ciblés sur 3 jours' },
    { icon: TrendingUp, title: 'Visibilité maximale', description: 'Communication avant, pendant et après l\'événement' },
    { icon: Award, title: 'Stand premium', description: 'Emplacements stratégiques et design soigné' }
  ];

  const packages: Package[] = [
    {
      name: 'Stand Standard',
      price: 'X00,000 FCFA',
      features: ['Stand 3x3m équipé', 'Table + 2 chaises', 'Electricité', 'Badge exposant x2', 'Présence sur catalogue'],
      popular: false
    },
    {
      name: 'Stand Premium',
      price: 'XX0,000 FCFA',
      features: ['Stand 4x4m équipé', 'Mobilier personnalisé', 'Electricité', 'Badge exposant x4', 'Logo sur communication', 'Présence VIP'],
      popular: true
    },
    {
      name: 'Stand VIP',
      price: 'Sur devis',
      features: ['Stand sur mesure', 'Design personnalisé', 'Service traiteur', 'Badge illimité', 'Campagne dédiée', 'Espace privé'],
      popular: false
    }
  ];

  const processSteps: ProcessStep[] = [
    { step: '1', title: 'Remplissez le formulaire', desc: 'En ligne ou via WhatsApp' },
    { step: '2', title: 'Validation de votre dossier', desc: 'Réponse sous 48h' },
    { step: '3', title: 'Paiement et réservation', desc: 'Sécurisez votre emplacement' },
    { step: '4', title: 'Formation Obligatoire le 15 Nov.', desc: 'Découvrez comment réussir sa foire' },
    { step: '5', title: 'Installation le 18 Déc.', desc: 'Notre équipe vous accompagne' }
  ];

  const handlePackageSelect = (pkgName: string): void => {
    // Handle package selection
    console.log(`Selected package: ${pkgName}`);
  };

  const downloadBrochure = (): void => {
    // Handle brochure download
    console.log('Download brochure');
  };

  return (
    <>
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Devenez exposant
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Profitez de la plus grande vitrine lifestyle du Togo pour développer 
              votre notoriété et booster vos ventes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center"
              >
                Inscription en ligne
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center"
              >
                <MessageCircle size={20} />
                Contacter via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Pourquoi participer ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <benefit.icon className="text-gray-700" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Nos formules
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 ${
                    pkg.popular ? 'border-2 border-gray-900 shadow-xl scale-105' : 'border border-gray-200'
                  } transition-all hover:shadow-lg`}
                >
                  {pkg.popular && (
                    <div className="bg-gray-900 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                      Plus populaire
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-6 text-gray-900">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => handlePackageSelect(pkg.name)}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-all"
                  >
                    Choisir cette formule
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Comment participer ?
            </h2>
            <div className="space-y-6">
              {processSteps.map((item) => (
                <div key={`step-${item.step}`} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à rejoindre l'aventure ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Les places sont limitées. Réservez votre stand dès maintenant !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={downloadBrochure}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center"
              >
                <Download size={20} />
                Télécharger la brochure
              </button>
              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center"
              >
                Nous contacter
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExhibitorInfo;