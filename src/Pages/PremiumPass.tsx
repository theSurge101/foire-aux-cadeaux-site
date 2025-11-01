import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Gift, Crown, Camera, Coffee, Car, Users, Sparkles, Calendar, Clock, MapPin, ChevronRight, X, CreditCard, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../Hooks/useSEO';

interface Benefit {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  value?: string;
}

interface Comparison {
  feature: string;
  standard: boolean | string;
  premium: boolean | string;
}

interface Testimonial {
  name: string;
  title: string;
  image: string;
  quote: string;
  year: string;
}

const PremiumPass: React.FC = () => {
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);

  useSEO({
    title: "Pass Premium VIP - La Foire Aux Cadeaux 2025 | Expérience Exclusive",
    description: "Profitez d'une expérience VIP unique : accès prioritaire, salon privé, cocktail exclusif, cadeaux premium et bien plus. Places limitées.",
    url: "https://foireauxcadeaux.anaisconcept.biz/pass-premium",
    image: "https://foireauxcadeaux.anaisconcept.biz/og-premium.jpg",
    keywords: "pass vip lomé, accès premium foire, expérience exclusive togo, salon vip lomé"
  });

  const mainBenefits: Benefit[] = [
    {
      icon: Zap,
      title: 'Fast Track',
      description: 'Entrée prioritaire sans file d\'attente. Accédez au salon 30 minutes avant le grand public.',
      value: 'Gain de temps'
    },
    {
      icon: Crown,
      title: 'Salon VIP Privé',
      description: 'Accès exclusif au salon climatisé avec sièges confortables, WiFi premium et rafraîchissements.',
      value: 'Confort'
    },
    {
      icon: Coffee,
      title: 'Petit-Déjeuner & Cocktail',
      description: 'Petit-déjeuner d\'accueil vendredi + cocktail networking avec exposants le vendredi soir.',
      value: '2 événements'
    },
    {
      icon: Gift,
      title: 'Goodie Bag Premium',
      description: 'Sac cadeau exclusif rempli de produits offerts par nos exposants (valeur 50,000+ FCFA).',
      value: '50K+ FCFA'
    },
    {
      icon: Users,
      title: 'Meet & Greet Créateurs',
      description: 'Session privée dimanche avec vos créateurs préférés : photos, dédicaces, discussions.',
      value: 'Exclusif'
    },
    {
      icon: Camera,
      title: 'Shooting Photo Pro',
      description: 'Séance photo professionnelle de 15 min + 5 photos retouchées envoyées par email.',
      value: 'Photos HD'
    },
    {
      icon: Car,
      title: 'Parking Réservé',
      description: 'Place de parking privée sécurisée à proximité immédiate de l\'entrée VIP.',
      value: 'Premium'
    },
    {
      icon: Sparkles,
      title: 'Réductions Exposants',
      description: 'Carte cadeau de 10.000 FCFA valable chez +50 exposants participants pendant les 3 jours.',
      value: 'Économies'
    },
    {
      icon: Shield,
      title: 'Service Conciergerie',
      description: 'Équipe dédiée pour répondre à vos besoins : réservations, informations, assistance.',
      value: '3 jours'
    }
  ];

  const comparison: Comparison[] = [
    { feature: 'Accès à la foire', standard: true, premium: true },
    { feature: 'Entrée prioritaire (Fast Track)', standard: false, premium: true },
    { feature: 'Accès salon VIP climatisé', standard: false, premium: true },
    { feature: 'Petit-déjeuner d\'accueil', standard: false, premium: true },
    { feature: 'Cocktail networking vendredi', standard: false, premium: true },
    { feature: 'Goodie bag premium (50K+ FCFA)', standard: false, premium: true },
    { feature: 'Meet & Greet créateurs privé', standard: false, premium: true },
    { feature: 'Shooting photo professionnel', standard: false, premium: true },
    { feature: 'Parking réservé', standard: 'Parking public', premium: 'Place réservée' },
    { feature: 'Carte cadeau exposants', standard: false, premium: '10.000 FCFA chez +50 stands' },
    { feature: 'Service conciergerie', standard: false, premium: 'Équipe dédiée' },
    { feature: 'Accès zones enfants', standard: true, premium: true },
    { feature: 'File d\'attente ateliers', standard: 'Standard', premium: 'Prioritaire' },
    { feature: 'WiFi', standard: 'Public', premium: 'Premium dédié' }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Amina Traoré',
      title: 'Entrepreneure',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9d80e9a?w=100&h=100&fit=crop',
      quote: 'Le Pass Premium a transformé mon expérience ! L\'accès prioritaire m\'a fait gagner tellement de temps, et le networking au cocktail m\'a permis de créer des partenariats précieux.',
      year: '2024'
    },
    {
      name: 'Kofi Mensah',
      title: 'Directeur Commercial',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      quote: 'Le salon VIP est un vrai plus-value. Pouvoir se reposer dans un espace calme entre deux visites, c\'est génial. Les réductions m\'ont fait économiser plus que le prix du pass !',
      year: '2024'
    },
    {
      name: 'Yasmine Diabaté',
      title: 'Influenceuse Lifestyle',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      quote: 'Le shooting photo pro était incroyable ! Des photos parfaites pour mon Instagram. Et le goodie bag valait largement le prix du pass. Je recommande à 100% !',
      year: '2024'
    }
  ];

  const faqs = [
    {
      question: 'Combien coûte le Pass Premium ?',
      answer: 'Le Pass Premium est à 25,000 FCFA pour les 3 jours (Early Bird : 20,000 FCFA jusqu\'au 30 novembre). Il donne accès à tous les avantages VIP listés ci-dessus. Places limitées à 200 passes.'
    },
    {
      question: 'Le Pass Premium est-il valable pour les 3 jours ?',
      answer: 'Oui ! Votre Pass Premium vous donne accès à tous les avantages pendant les 3 jours de la foire (19, 20 et 21 décembre 2025). Vous pouvez entrer et sortir librement avec votre Pass Premium.'
    },
    {
      question: 'Puis-je acheter plusieurs Pass Premium ?',
      answer: 'Absolument ! Si vous venez en famille ou entre amis, vous pouvez acheter autant de passes que nécessaire. Chaque personne aura son propre pass et ses propres avantages.'
    },
    {
      question: 'Comment recevoir mon Pass Premium ?',
      answer: 'Après paiement, vous recevrez par livreur une carte. À l\'entrée, présentez votre pass et récupérez votre goodie bag.'
    },
    {
      question: 'Les enfants ont-ils besoin d\'un Pass Premium ?',
      answer: 'Les enfants de moins de 12 ans accompagnés d\'un adulte avec Pass Premium bénéficient des avantages gratuitement (sauf shooting photo et cocktail vendredi).'
    },
    {
      question: 'Puis-je me faire rembourser ?',
      answer: 'Remboursement intégral jusqu\'au 28 Novembre 2025. Après cette date, le Pass est non remboursable mais transférable à une autre personne (nous contacter).'
    },
    {
      question: 'Y a-t-il vraiment que 200 passes disponibles ?',
      answer: 'Oui, pour garantir une expérience VIP de qualité, nous limitons volontairement le nombre de Pass Premium à 200. En 2024, ils étaient tous vendus 3 semaines avant l\'événement !'
    }
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Star size={18} className="text-yellow-400" />
            <span className="text-sm font-semibold">Places Limitées • Seulement 200 Passes</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Pass Premium VIP
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Vivez La Foire Aux Cadeaux comme un VIP : accès prioritaire, 
            expériences exclusives et avantages premium pendant 3 jours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-yellow-400 mb-1">25,000 FCFA</div>
              <div className="text-sm text-gray-300">Prix normal</div>
            </div>
            <div className="bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl border-2 border-yellow-400">
              <div className="text-sm font-semibold mb-1">EARLY BIRD</div>
              <div className="text-4xl font-bold mb-1">20,000 FCFA</div>
              <div className="text-sm">Jusqu'au 30 novembre</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowPaymentModal(true)}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Star size={20} />
              Acheter mon Pass Premium
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              En savoir plus
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            ⚡ Seulement <strong className="text-white">47 passes restants</strong> sur 200
          </p>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Tous vos avantages Premium
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            9 avantages exclusifs pour une expérience VIP inoubliable
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  {benefit.value && (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {benefit.value}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Une valeur exceptionnelle
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-bold text-lg mb-4 text-gray-900">Ce que vous recevez :</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Goodie bag produits (50,000 FCFA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Petit-déjeuner + cocktail (15,000 FCFA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Shooting photo pro (20,000 FCFA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Carte cadeau exposants (10,000+ FCFA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Expériences VIP exclusives (inestimable)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 flex flex-col justify-center">
                <div className="text-sm mb-2 opacity-75">Valeur totale</div>
                <div className="text-5xl font-bold mb-2">95,000+</div>
                <div className="text-2xl mb-4">FCFA</div>
                <div className="border-t border-white/20 pt-4">
                  <div className="text-sm mb-1">Votre prix Early Bird</div>
                  <div className="text-3xl font-bold text-yellow-400">20,000 FCFA</div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-2xl font-bold text-gray-900">
            = <span className="text-green-600">75,000 FCFA d'économies</span> garanties !
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Standard vs Premium
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-900 text-white p-4">
              <div className="col-span-1"></div>
              <div className="text-center font-semibold">Standard (Gratuit)</div>
              <div className="text-center font-semibold">Premium (20K FCFA)</div>
            </div>

            {comparison.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 items-center ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="font-medium text-gray-900">{item.feature}</div>
                <div className="text-center">
                  {typeof item.standard === 'boolean' ? (
                    item.standard ? (
                      <Check className="text-green-600 mx-auto" size={20} />
                    ) : (
                      <X className="text-gray-300 mx-auto" size={20} />
                    )
                  ) : (
                    <span className="text-sm text-gray-600">{item.standard}</span>
                  )}
                </div>
                <div className="text-center">
                  {typeof item.premium === 'boolean' ? (
                    item.premium ? (
                      <Check className="text-green-600 mx-auto" size={20} />
                    ) : (
                      <X className="text-gray-300 mx-auto" size={20} />
                    )
                  ) : (
                    <span className="text-sm font-semibold text-gray-900">{item.premium}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Ils ont adoré leur expérience VIP
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Star size={14} className="text-yellow-500 fill-current" />
                  <span>Pass Premium {testimonial.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronRight
                    className={`transform transition-transform flex-shrink-0 ${
                      openFAQ === index ? 'rotate-90' : ''
                    }`}
                    size={20}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt pour l'expérience VIP ?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Rejoignez les 200 privilégiés qui vivront la foire autrement
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <div className="text-sm text-gray-300 mb-2">Offre Early Bird expire le</div>
            <div className="text-4xl font-bold text-yellow-400">30 Novembre</div>
            <div className="text-4xl font-bold text-yellow-400">
              <button
              onClick={() => setShowPaymentModal(true)}
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-12 py-5 rounded-lg text-xl font-bold transition-all transform hover:scale-105"
              >
              Acheter maintenant à 20,000 FCFA
              </button>
            </div>
          </div>


          <p className="text-sm text-gray-400 mt-6">
            Paiement sécurisé • Mobile Money & Carte bancaire acceptés
          </p>
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Pass Premium VIP
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">20,000 FCFA</div>
              <p className="text-sm text-gray-600">Offre Early Bird</p>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                <Smartphone size={20} />
                Payer avec Mobile Money
              </button>
              <button className="w-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                <CreditCard size={20} />
                Payer par Carte Bancaire
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              En continuant, vous acceptez nos conditions générales de vente
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumPass;