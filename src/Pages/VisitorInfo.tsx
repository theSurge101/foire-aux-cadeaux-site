import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, Car, Bus, Utensils, Baby, Wifi, Camera, Shield, Gift, ShoppingBag, Heart, Users, Music, ChevronRight, Download, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../Hooks/useSEO';

interface InfoCard {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  details?: string[];
}

interface ScheduleDay {
  date: string;
  day: string;
  hours: string;
  highlights: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

const VisitorInfo: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useSEO({
    title: "Informations Visiteurs - La Foire Aux Cadeaux 2025 | Lomé",
    description: "Tout ce qu'il faut savoir pour visiter la foire : horaires, tarifs, accès, programme. Planifiez votre visite au plus grand salon lifestyle du Togo.",
    url: "https://foireauxcadeaux.anaisconcept.biz/visiteurs",
    image: "https://foireauxcadeaux.anaisconcept.biz/og-visitors.jpg",
    keywords: "visiter foire lomé, horaires foire cadeaux, tarifs entrée lomé, programme événement togo"
  });

  const practicalInfo: InfoCard[] = [
    {
      icon: Calendar,
      title: 'Dates',
      description: 'Ven 19 - Dim 21 Déc. 2025',
      details: ['3 jours de shopping', 'Plus de 150 exposants', 'Animations tous les jours']
    },
    {
      icon: Clock,
      title: 'Horaires',
      description: 'Ven-Dim: 09h-21h',
      details: ['Ouverture VIP: 8h30', 'Happy Hours: 18h-20h', 'Fermeture dimanche: 21h']
    },
    {
      icon: MapPin,
      title: 'Lieu',
      description: 'Hôtel Sarakawa, Lomé',
      details: ['Boulevard du Mono', 'Dans les Châpiteaux', 'Accès Sécurisé']
    },
    {
      icon: Ticket,
      title: 'Entrée',
      description: 'Ticket à 1 000 FCFA',
      details: ['Pas de réservation', 'Tickets sur site', 'Pass Premium disponible']
    }
  ];

  const services: InfoCard[] = [
    {
      icon: Car,
      title: 'Parking',
      description: 'Parking gratuit et sécurisé pour les véhicules'
    },
    {
      icon: Utensils,
      title: 'Restauration',
      description: 'Food court avec cuisine locale et internationale'
    },
    {
      icon: Baby,
      title: 'Espace famille',
      description: 'Zone enfants avec animations et baby corner'
    },
    {
      icon: Wifi,
      title: 'WiFi gratuit',
      description: 'Connexion haut débit dans tout le salon'
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Équipe de sécurité et mesures sanitaires renforcées'
    },
    {
      icon: Camera,
      title: 'Photos',
      description: 'Photobooth gratuit et photographe officiel'
    }
  ];

  const schedule: ScheduleDay[] = [
    {
      date: '19 Décembre',
      day: 'Vendredi',
      hours: '09h00 - 21h00',
      highlights: [
        '10h00 - Cérémonie d\'ouverture officielle',
        '11h00 - Défilé de mode "Créateurs togolais"',
        '14h00 - Atelier DIY: Créez vos bijoux',
        '16h00 - Démonstration culinaire live',
        '18h00 - Cocktail VIP & Networking'
      ]
    },
    {
      date: '20 Décembre',
      day: 'Samedi',
      hours: '09h00 - 21h00',
      highlights: [
        '10h00 - Ouverture grand public',
        '11h00 - Concert live: Artistes locaux',
        '14h00 - Démo beauté & maquillage',
        '16h00 - Défilé enfants & famille',
        '18h00 - Tombola avec lots à gagner'
      ]
    },
    {
      date: '21 Décembre',
      day: 'Dimanche',
      hours: '09h00 - 21h00',
      highlights: [
        '10h00 - Brunch familial',
        '11h00 - Spectacle pour enfants',
        '13h00 - Démo artisanat traditionnel',
        '15h00 - Défilé de clôture',
        '17h00 - Annonce des gagnants tombola',
        '18h00 - Fermeture'
      ]
    }
  ];

  const categories: InfoCard[] = [
    {
      icon: ShoppingBag,
      title: 'Mode & Accessoires',
      description: 'Vêtements, chaussures, sacs, ceintures'
    },
    {
      icon: Gift,
      title: 'Bijoux & Montres',
      description: 'Créations artisanales et marques de luxe'
    },
    {
      icon: Heart,
      title: 'Beauté & Bien-être',
      description: 'Cosmétiques, parfums, soins naturels'
    },
    {
      icon: Users,
      title: 'Décoration & Maison',
      description: 'Déco, mobilier, artisanat, textiles'
    },
    {
      icon: Utensils,
      title: 'Gastronomie',
      description: 'Produits du terroir, épices, chocolats'
    },
    {
      icon: Music,
      title: 'Art & Culture',
      description: 'Peintures, sculptures, livres, musique'
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'L\'entrée est-elle gratuite ?',
      answer: 'Non ! L\'accès à la foire est à 1 000 FCFA pour tous les visiteurs. Vous pouvez venir et partir quand vous voulez pendant les horaires d\'ouverture. Le Pass Premium (accès VIP avec avantages) est à 10 000 FCFA.'
    },
    {
      question: 'Peut-on venir avec des enfants ?',
      answer: 'Absolument ! La foire est family-friendly. Nous avons un espace enfants avec animations gratuites, un baby corner pour les tout-petits, et des spectacles adaptés. Les poussettes sont autorisées.'
    },
    {
      question: 'Y a-t-il des distributeurs de billets sur place ?',
      answer: 'Oui, plusieurs DAB sont disponibles dans le hall principal de l\'hôtel. Cependant, tous nos exposants acceptent le mobile money (Flooz, TMoney) et la carte bancaire. Nous recommandons d\'avoir un peu de cash.'
    },
    {
      question: 'Puis-je prendre des photos/vidéos ?',
      answer: 'Oui pour un usage personnel ! Photos et vidéos autorisées partout dans la foire. Par contre, certains exposants peuvent interdire la photo de leurs produits. Usage commercial interdit sans autorisation.'
    },
    {
      question: 'Comment venir en transport en commun ?',
      answer: 'Bus: Lignes X, 12, 18 (arrêt Sarakawa). Taxi: Dites "Tentes de l\'Hôtel Sarakawa". Taxi/Zémidjan: Demander accès au parking chapiteaux.'
    },
    {
      question: 'Peut-on manger sur place ?',
      answer: 'Oui ! Food court avec plusieurs stands : cuisine togolaise, fast-food, grillades, jus frais, pâtisseries. Prix de 1000 à 5000 FCFA. Tables et chaises disponibles. Vous pouvez aussi apporter votre propre nourriture.'
    },
    {
      question: 'Y a-t-il des toilettes ?',
      answer: 'Oui, des sanitaires modernes et propres sont disponibles à plusieurs endroits.'
    },
    {
      question: 'Puis-je payer par mobile money ?',
      answer: 'Oui ! La grande majorité des exposants acceptent Flooz et TMoney. Les cartes bancaires sont également largement acceptées.'
    }
  ];

  const tips = [
    ' Portez des chaussures confortables, vous allez beaucoup marcher !',
    ' Hydratez-vous régulièrement',
    ' Téléchargez le plan du salon sur notre site pour vous repérer',
    ' Venez avec un grand sac réutilisable pour vos achats',
    ' Arrivez tôt le samedi et dimanche pour éviter la foule de l\'après-midi',
    ' Prévoyez du cash ET mobile money, certains artisans n\'ont que ça',
    ' N\'oubliez pas votre téléphone pour les photos au photobooth !',
    ' Faites une liste des cadeaux à trouver pour ne rien oublier'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full mb-6">
            <Users size={18} />
            <span className="text-sm font-semibold">Entrée 1 000 FCFA • 19-21 Décembre 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Préparez votre visite
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Toutes les informations pratiques pour profiter pleinement de votre expérience 
            à La Foire Aux Cadeaux. Horaires, accès, services, programme...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center">
              <Download size={20} />
              Télécharger le plan
            </button>
            <Link
              to="/pass-premium"
              className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Découvrir le Pass Premium
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practicalInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <info.icon className="text-gray-700" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-3">{info.description}</p>
                {info.details && (
                  <ul className="text-sm text-gray-600 space-y-1">
                    {info.details.map((detail, idx) => (
                      <li key={idx}>• {detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Qu'allez-vous trouver ?
          </h2>
          <p className="text-center text-gray-600 mb-12">Plus de 150 exposants dans 6 univers</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <category.icon className="text-gray-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Programme des 3 jours
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {schedule.map((day, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100">
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">{day.date}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{day.day}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <Clock size={16} />
                    <span className="text-sm">{day.hours}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {day.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-2 text-sm">
                      <ChevronRight className="text-gray-400 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Services sur place
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="text-gray-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos conseils pour une visite réussie
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 flex items-start gap-3">
                <span className="text-2xl">{tip.split(' ')[0]}</span>
                <p className="text-gray-300 text-sm">{tip.substring(tip.indexOf(' ') + 1)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access/Map */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Comment venir ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Car className="text-gray-700" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">En voiture</h3>
              <p className="text-gray-600 text-sm">Parking gratuit. GPS: Hôtel Sarakawa de Lomé</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Bus className="text-gray-700" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">En bus</h3>
              <p className="text-gray-600 text-sm">Lignes 5, 12, 18 - Arrêt "Palais des Congrès"</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin className="text-gray-700" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Taxi/Zémidjan</h3>
              <p className="text-gray-600 text-sm">Dites "Hôtel Sarakawa"</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4">
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.950894850715!2d1.2655943!3d6.1373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c43781dcfb%3A0x573d2529a58fa70c!2zSMO0dGVsIFNBUkFLQVdBIExvbcOp!5e0!3m2!1sfr!2stg!4v1754682566205!5m2!1sfr!2stg" 
                    width="100%" height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
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
                    className={`transform transition-transform flex-shrink-0 ${openFAQ === index ? 'rotate-90' : ''}`}
                    size={20}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Encore des questions ?
            </h2>
            <p className="text-gray-600 mb-8">
              Notre équipe est là pour vous aider !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/22890123148?text=Bonjour,%20j'ai%20une%20question%20sur%20ma%20visite"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <Link
                to="/contact"
                className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Formulaire de contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitorInfo;
