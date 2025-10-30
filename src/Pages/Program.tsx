import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Music, Palette, Utensils, Trophy, Heart, Baby, ShoppingBag, Download, Bell, Star, Sparkles, ChevronRight, Filter } from 'lucide-react';
import useSEO from '../Hooks/useSEO';

interface Activity {
  time: string;
  title: string;
  description: string;
  location: string;
  category: 'show' | 'workshop' | 'demo' | 'contest' | 'networking' | 'kids' | 'food' | 'vip';
  icon: React.ComponentType<{ size?: number; className?: string }>;
  isFeatured?: boolean;
}

interface DaySchedule {
  date: string;
  day: string;
  fullDate: string;
  activities: Activity[];
}

const Program: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useSEO({
    title: "Programme Complet - La Foire Aux Cadeaux 2025 | 15-17 Mars",
    description: "Découvrez le programme détaillé des 3 jours : défilés de mode, concerts, ateliers DIY, démonstrations culinaires, animations enfants et bien plus encore !",
    url: "https://foireauxcadeaux.tg/programme",
    image: "https://foireauxcadeaux.tg/og-program.jpg",
    keywords: "programme foire cadeaux, animations lomé, ateliers togo, spectacles événement, défilés mode lomé"
  });

  const categories = [
    { id: 'all', label: 'Tout voir', icon: Star, color: 'gray' },
    { id: 'show', label: 'Spectacles', icon: Music, color: 'purple' },
    { id: 'workshop', label: 'Ateliers', icon: Palette, color: 'blue' },
    { id: 'demo', label: 'Démonstrations', icon: Sparkles, color: 'pink' },
    { id: 'contest', label: 'Concours', icon: Trophy, color: 'yellow' },
    { id: 'kids', label: 'Enfants', icon: Baby, color: 'green' },
    { id: 'food', label: 'Gastronomie', icon: Utensils, color: 'orange' },
    { id: 'vip', label: 'VIP', icon: Star, color: 'red' }
  ];

  const schedule: DaySchedule[] = [
    {
      date: '15 Mars',
      day: 'Vendredi',
      fullDate: 'Vendredi 15 Mars 2025',
      activities: [
        {
          time: '09:30',
          title: 'Accueil Pass Premium',
          description: 'Ouverture anticipée réservée aux détenteurs du Pass Premium avec petit-déjeuner de bienvenue',
          location: 'Entrée VIP',
          category: 'vip',
          icon: Star
        },
        {
          time: '10:00',
          title: 'Cérémonie d\'Ouverture Officielle',
          description: 'Discours des autorités, ruban inaugural et ouverture au grand public. Présence des médias nationaux.',
          location: 'Scène Principale',
          category: 'show',
          icon: Users,
          isFeatured: true
        },
        {
          time: '11:00',
          title: 'Défilé de Mode "Créateurs Togolais"',
          description: 'Découvrez les créations des meilleurs designers togolais : prêt-à-porter, robes de soirée, et fusion tradition-modernité',
          location: 'Scène Principale',
          category: 'show',
          icon: Music,
          isFeatured: true
        },
        {
          time: '12:30',
          title: 'Atelier DIY : Créez vos Bijoux',
          description: 'Apprenez à fabriquer vos propres bracelets et colliers avec nos artisans. Matériel fourni. Places limitées (20 personnes)',
          location: 'Espace Ateliers',
          category: 'workshop',
          icon: Palette
        },
        {
          time: '14:00',
          title: 'Démonstration Culinaire Live',
          description: 'Chef Kofi prépare des recettes fusion : cuisine togolaise revisitée. Dégustation gratuite pour les 50 premiers.',
          location: 'Food Court',
          category: 'demo',
          icon: Utensils,
          isFeatured: true
        },
        {
          time: '15:00',
          title: 'Atelier Enfants : Peinture sur Tissu',
          description: 'Les enfants (5-12 ans) créent leur propre t-shirt personnalisé. Gratuit avec supervision. Inscription sur place.',
          location: 'Espace Famille',
          category: 'kids',
          icon: Baby
        },
        {
          time: '16:00',
          title: 'Concours de Stylisme Amateur',
          description: 'Inscriptions ouvertes ! Présentez votre look le plus original. Prix : 100,000 FCFA + shooting photo professionnel',
          location: 'Scène Principale',
          category: 'contest',
          icon: Trophy
        },
        {
          time: '17:00',
          title: 'Concert Live : Artiste Surprise',
          description: 'Performance live d\'un artiste togolais reconnu. Ambiance garantie pour lancer le weekend !',
          location: 'Scène Principale',
          category: 'show',
          icon: Music,
          isFeatured: true
        },
        {
          time: '18:00',
          title: 'Cocktail VIP & Networking',
          description: 'Réservé aux Pass Premium : rencontre avec exposants, influenceurs et entrepreneurs. Champagne et canapés offerts.',
          location: 'Salon VIP',
          category: 'vip',
          icon: Star
        },
        {
          time: '19:00',
          title: 'Démonstration Beauté : Maquillage de Soirée',
          description: 'Make-up artist professionnelle dévoile ses techniques. Conseils personnalisés et mini relooking gratuit.',
          location: 'Stand Beauté',
          category: 'demo',
          icon: Sparkles
        }
      ]
    },
    {
      date: '16 Mars',
      day: 'Samedi',
      fullDate: 'Samedi 16 Mars 2025',
      activities: [
        {
          time: '10:00',
          title: 'Ouverture & Animations de Rue',
          description: 'Échassiers, musiciens et danseurs pour une entrée en fanfare ! Ambiance festive dès l\'ouverture.',
          location: 'Entrée Principale',
          category: 'show',
          icon: Music
        },
        {
          time: '11:00',
          title: 'Concert Live : Groupe Afrobeat',
          description: 'Concert énergique avec le meilleur groupe afrobeat du moment. Préparez-vous à danser !',
          location: 'Scène Principale',
          category: 'show',
          icon: Music,
          isFeatured: true
        },
        {
          time: '12:00',
          title: 'Atelier DIY : Fabrication de Savons Naturels',
          description: 'Créez vos propres savons artisanaux avec des ingrédients 100% naturels. Repartez avec vos créations !',
          location: 'Espace Ateliers',
          category: 'workshop',
          icon: Palette
        },
        {
          time: '13:00',
          title: 'Concours Photo Instagram',
          description: 'Postez votre plus belle photo de la foire avec #FoireCadeaux2025. À gagner : Pass VIP 2026 + panier cadeau 200,000 FCFA',
          location: 'Tout le salon',
          category: 'contest',
          icon: Trophy
        },
        {
          time: '14:00',
          title: 'Démonstration Coiffure Afro',
          description: 'Tresses, vanilles, locks : découvrez les techniques et tendances coiffure afro avec des professionnelles.',
          location: 'Stand Beauté',
          category: 'demo',
          icon: Sparkles,
          isFeatured: true
        },
        {
          time: '14:30',
          title: 'Spectacle pour Enfants : Conte Musical',
          description: 'Conte traditionnel togolais mis en musique et en scène. Magique pour les 3-10 ans. Durée : 45 minutes.',
          location: 'Espace Famille',
          category: 'kids',
          icon: Baby,
          isFeatured: true
        },
        {
          time: '15:30',
          title: 'Atelier Dégustation : Chocolats & Cafés d\'Afrique',
          description: 'Découverte guidée des meilleurs chocolats et cafés africains. Notes de dégustation offertes. Limité à 30 personnes.',
          location: 'Food Court',
          category: 'food',
          icon: Utensils
        },
        {
          time: '16:00',
          title: 'Grand Défilé Famille & Enfants',
          description: 'Défilé de mode parent-enfant avec les collections des créateurs. Inscriptions enfants sur place (gratuit).',
          location: 'Scène Principale',
          category: 'show',
          icon: Heart,
          isFeatured: true
        },
        {
          time: '17:00',
          title: 'Atelier DIY : Customisation de Sacs',
          description: 'Personnalisez votre tote bag avec peinture textile, strass et patchs. Matériel fourni, amenez votre créativité !',
          location: 'Espace Ateliers',
          category: 'workshop',
          icon: Palette
        },
        {
          time: '18:00',
          title: 'Grande Tombola - Tirage 1',
          description: 'Premier tirage avec de superbes lots : smartphones, bons d\'achat, produits exposants. Tickets en vente toute la journée.',
          location: 'Scène Principale',
          category: 'contest',
          icon: Trophy,
          isFeatured: true
        },
        {
          time: '19:00',
          title: 'DJ Set & Fin de Soirée',
          description: 'Ambiance club avec DJ résident. Dernière heure de shopping en musique avant fermeture !',
          location: 'Scène Principale',
          category: 'show',
          icon: Music
        }
      ]
    },
    {
      date: '17 Mars',
      day: 'Dimanche',
      fullDate: 'Dimanche 17 Mars 2025',
      activities: [
        {
          time: '10:00',
          title: 'Brunch Familial',
          description: 'Commencez la journée avec un brunch au Food Court. Menu spécial famille à prix doux. Jus frais et viennoiseries.',
          location: 'Food Court',
          category: 'food',
          icon: Utensils
        },
        {
          time: '11:00',
          title: 'Spectacle Magie & Marionnettes',
          description: 'Spectacle interactif pour toute la famille. Le magicien Kokou émerveille petits et grands. Durée : 1h.',
          location: 'Espace Famille',
          category: 'kids',
          icon: Baby,
          isFeatured: true
        },
        {
          time: '12:00',
          title: 'Atelier DIY : Création de Bougie Parfumée',
          description: 'Fabriquez votre bougie artisanale avec parfums et colorants naturels. Parfait cadeau à offrir !',
          location: 'Espace Ateliers',
          category: 'workshop',
          icon: Palette
        },
        {
          time: '13:00',
          title: 'Démonstration Artisanat Traditionnel',
          description: 'Poterie, tissage, sculpture : maîtres artisans montrent les techniques ancestrales togolaises. Questions-réponses.',
          location: 'Zone Artisanat',
          category: 'demo',
          icon: Sparkles,
          isFeatured: true
        },
        {
          time: '14:00',
          title: 'Concours du Meilleur Exposant (Vote Public)',
          description: 'Votez pour votre stand préféré ! Catégories : Meilleur produit, Stand le plus créatif, Meilleur accueil.',
          location: 'Tout le salon',
          category: 'contest',
          icon: Trophy
        },
        {
          time: '14:30',
          title: 'Atelier Cuisine : Pâtisserie pour Enfants',
          description: 'Les enfants préparent leurs propres cupcakes avec décoration. Tablier fourni. Dégustation sur place !',
          location: 'Food Court',
          category: 'kids',
          icon: Utensils
        },
        {
          time: '15:00',
          title: 'Grand Défilé de Clôture',
          description: 'Défilé final rassemblant tous les créateurs de mode présents. Apothéose fashion de ces 3 jours !',
          location: 'Scène Principale',
          category: 'show',
          icon: Music,
          isFeatured: true
        },
        {
          time: '16:00',
          title: 'Session VIP : Meet & Greet Créateurs',
          description: 'Rencontrez en privé vos créateurs préférés. Photos, dédicaces et discussions. Réservé Pass Premium.',
          location: 'Salon VIP',
          category: 'vip',
          icon: Star
        },
        {
          time: '17:00',
          title: 'Grande Tombola - Tirage Final',
          description: 'Tirage du GRAND LOT : Voyage pour 2 personnes + bons d\'achat 500,000 FCFA. Présence obligatoire pour gagner !',
          location: 'Scène Principale',
          category: 'contest',
          icon: Trophy,
          isFeatured: true
        },
        {
          time: '17:30',
          title: 'Cérémonie de Clôture & Remerciements',
          description: 'Discours de clôture, annonce des gagnants des concours, et rendez-vous pour l\'édition 2026 !',
          location: 'Scène Principale',
          category: 'show',
          icon: Users
        }
      ]
    }
  ];

  const highlights = [
    {
      icon: Music,
      title: '15+ Spectacles Live',
      description: 'Concerts, défilés et performances'
    },
    {
      icon: Palette,
      title: '10 Ateliers DIY',
      description: 'Créez, apprenez et repartez avec vos œuvres'
    },
    {
      icon: Baby,
      title: 'Animations Enfants',
      description: 'Spectacles, ateliers et jeux gratuits'
    },
    {
      icon: Trophy,
      title: 'Concours & Tombola',
      description: '+500,000 FCFA de lots à gagner'
    }
  ];

  const filteredActivities = schedule[selectedDay].activities.filter(activity => 
    selectedCategory === 'all' || activity.category === selectedCategory
  );

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      show: 'bg-purple-100 text-purple-700 border-purple-200',
      workshop: 'bg-blue-100 text-blue-700 border-blue-200',
      demo: 'bg-pink-100 text-pink-700 border-pink-200',
      contest: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      networking: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      kids: 'bg-green-100 text-green-700 border-green-200',
      food: 'bg-orange-100 text-orange-700 border-orange-200',
      vip: 'bg-red-100 text-red-700 border-red-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      show: 'Spectacle',
      workshop: 'Atelier',
      demo: 'Démonstration',
      contest: 'Concours',
      networking: 'Networking',
      kids: 'Enfants',
      food: 'Gastronomie',
      vip: 'VIP'
    };
    return labels[category] || category;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full mb-6">
            <Calendar size={18} />
            <span className="text-sm font-semibold">15-17 Mars 2025 • 3 Jours d'Animations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Programme complet
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Découvrez tous les spectacles, ateliers, démonstrations et animations 
            qui vous attendent pendant ces 3 jours exceptionnels.
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center mx-auto">
            <Download size={20} />
            Télécharger le programme PDF
          </button>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <highlight.icon className="text-gray-700" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Programme détaillé
          </h2>

          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {schedule.map((day, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedDay(index);
                  setSelectedCategory('all');
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedDay === index
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="text-sm opacity-75">{day.date}</div>
                <div className="text-lg">{day.day}</div>
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="bg-white rounded-xl p-4 mb-8 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Filter size={18} className="text-gray-600" />
              <span className="font-semibold text-gray-900">Filtrer par catégorie :</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon size={16} />
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Activities List */}
          <div className="space-y-4">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all ${
                    activity.isFeatured ? 'border-2 border-gray-900' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Time */}
                    <div className="flex-shrink-0">
                      <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-center min-w-[80px]">
                        <Clock size={16} className="mx-auto mb-1" />
                        <div className="font-bold">{activity.time}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start gap-2 mb-3">
                        <h3 className="font-bold text-xl text-gray-900 flex-1">
                          {activity.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(activity.category)}`}>
                          {getCategoryLabel(activity.category)}
                        </span>
                        {activity.isFeatured && (
                          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-200 flex items-center gap-1">
                            <Star size={12} />
                            À ne pas manquer
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-3">{activity.description}</p>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={14} />
                        <span>{activity.location}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="hidden lg:flex items-center justify-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <activity.icon className="text-gray-700" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl p-12 text-center">
                <p className="text-gray-500">Aucune activité dans cette catégorie pour ce jour.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <Bell size={24} className="flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Informations importantes</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Les horaires sont donnés à titre indicatif et peuvent être légèrement modifiés</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Certains ateliers ont des places limitées - inscription sur place 30 min avant</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Les activités "VIP" sont réservées aux détenteurs du Pass Premium</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Les activités enfants sont gratuites mais soumises à la capacité d'accueil</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Pour la tombola, les tickets sont en vente auprès des exposants (1000 FCFA)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Suivez-nous sur Instagram/Facebook pour les annonces de dernière minute</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Prêt pour 3 jours inoubliables ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Notez les activités qui vous intéressent et préparez votre visite !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center">
              <Download size={20} />
              Télécharger le programme
            </button>
            <button className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center">
              <Bell size={20} />
              Recevoir les rappels
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;