import React, { useState, useMemo } from 'react';
import { Search, MapPin, Phone, Mail, ExternalLink, Instagram, Facebook, Filter, X, ChevronDown, Award, Star, Map, Grid } from 'lucide-react';
import useSEO from '../Hooks/useSEO';
import ExhibitorMap from '../Components/Sections/ExhibitorMap';

interface Exhibitor {
  id: number;
  name: string;
  category: string;
  description: string;
  products: string[];
  logo: string;
  photo: string;
  standNumber: string;
  coordinates: {
    x: number;
    y: number;
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
  };
  location: string;
  featured?: boolean;
  new?: boolean;
}

const Exhibitors: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedExhibitor, setSelectedExhibitor] = useState<Exhibitor | null>(null);

  useSEO({
    title: "Liste des Exposants - La Foire Aux Cadeaux 2025 | 150+ Marques",
    description: "Découvrez les +150 exposants présents : artisans, créateurs, marques lifestyle. Mode, décoration, bijoux, gastronomie et plus encore à Lomé.",
    url: "https://foireauxcadeaux.tg/liste-exposants",
    image: "https://foireauxcadeaux.tg/og-exhibitors-list.jpg",
    keywords: "exposants lomé, artisans togo, créateurs locaux, marques togolaises, liste exposants foire"
  });

  const categories = [
    { id: 'all', label: 'Tous les exposants', count: 152 },
    { id: 'fashion', label: 'Mode & Vêtements', count: 35 },
    { id: 'jewelry', label: 'Bijoux & Montres', count: 28 },
    { id: 'beauty', label: 'Beauté & Cosmétiques', count: 22 },
    { id: 'home', label: 'Décoration & Maison', count: 25 },
    { id: 'food', label: 'Gastronomie & Terroir', count: 18 },
    { id: 'art', label: 'Art & Artisanat', count: 15 },
    { id: 'accessories', label: 'Accessoires & Maroquinerie', count: 9 }
  ];

  // Sample exhibitors data - Replace with real data from your backend/API
  const exhibitors: Exhibitor[] = [
    {
      id: 1,
      name: "Bijoux Koffi",
      category: "jewelry",
      description: "Créations artisanales de bijoux en or, argent et pierres précieuses. Designs modernes inspirés de la tradition togolaise.",
      products: ["Colliers", "Bracelets", "Boucles d'oreilles", "Bagues"],
      logo: "https://via.placeholder.com/150/FFD700/333333?text=BK",
      photo: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      standNumber: "A12",
      coordinates: { x: 20, y: 25 },
      contact: {
        phone: "+228 90 11 22 33",
        email: "contact@bijouxkoffi.tg",
        instagram: "@bijouxkoffi",
        website: "https://bijouxkoffi.tg"
      },
      location: "Lomé, Togo",
      featured: true,
      new: false
    },
    {
      id: 2,
      name: "Les Savons d'Amina",
      category: "beauty",
      description: "Savons naturels et cosmétiques bio fabriqués à la main avec des ingrédients locaux. Respectueux de l'environnement.",
      products: ["Savons naturels", "Huiles essentielles", "Beurre de karité", "Crèmes"],
      logo: "https://via.placeholder.com/150/98D8C8/333333?text=SA",
      photo: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
      standNumber: "B08",
      coordinates: { x: 35, y: 30 },
      contact: {
        phone: "+228 91 22 33 44",
        email: "amina@savonsnaturels.tg",
        facebook: "LesSavonsDAmina"
      },
      location: "Kara, Togo",
      featured: false,
      new: true
    },
    {
      id: 3,
      name: "Akodé Déco",
      category: "home",
      description: "Décoration intérieure africaine contemporaine. Meubles, textiles et objets d'art pour sublimer votre maison.",
      products: ["Meubles", "Coussins", "Tableaux", "Lampes"],
      logo: "https://via.placeholder.com/150/F6AD55/333333?text=AD",
      photo: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop",
      standNumber: "C15",
      coordinates: { x: 60, y: 35 },
      contact: {
        phone: "+228 92 33 44 55",
        email: "info@akodedeco.tg",
        website: "https://akodedeco.tg",
        instagram: "@akodedeco"
      },
      location: "Lomé, Togo",
      featured: true,
      new: false
    },
    {
      id: 4,
      name: "Mode Afi",
      category: "fashion",
      description: "Prêt-à-porter féminin afro-chic. Collections exclusives mêlant tradition et modernité pour la femme élégante.",
      products: ["Robes", "Ensembles", "Vestes", "Pantalons"],
      logo: "https://via.placeholder.com/150/ED64A6/333333?text=MA",
      photo: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
      standNumber: "A05",
      coordinates: { x: 25, y: 55 },
      contact: {
        phone: "+228 93 44 55 66",
        email: "contact@modeafi.tg",
        instagram: "@modeafi",
        facebook: "ModeAfi"
      },
      location: "Lomé, Togo",
      featured: false,
      new: true
    },
    {
      id: 5,
      name: "Épices du Sahel",
      category: "food",
      description: "Épices, condiments et produits du terroir togolais. 100% naturels et sans conservateurs.",
      products: ["Épices", "Piments", "Sauces", "Thés"],
      logo: "https://via.placeholder.com/150/F97316/FFFFFF?text=ES",
      photo: "https://images.unsplash.com/photo-1596040033229-a0b55ee30e5d?w=400&h=300&fit=crop",
      standNumber: "D20",
      coordinates: { x: 80, y: 60 },
      contact: {
        phone: "+228 94 55 66 77",
        email: "epices@sahel.tg"
      },
      location: "Dapaong, Togo",
      featured: false,
      new: false
    },
    {
      id: 6,
      name: "Art & Traditions",
      category: "art",
      description: "Sculptures, peintures et artisanat traditionnel togolais revisité. Pièces uniques réalisées par des artisans locaux.",
      products: ["Sculptures", "Peintures", "Masques", "Poteries"],
      logo: "https://via.placeholder.com/150/8B5CF6/FFFFFF?text=AT",
      photo: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop",
      standNumber: "E10",
      coordinates: { x: 45, y: 70 },
      contact: {
        phone: "+228 95 66 77 88",
        email: "contact@arttraditions.tg",
        website: "https://arttraditions.tg"
      },
      location: "Sokodé, Togo",
      featured: true,
      new: false
    },
    {
      id: 7,
      name: "Maroquinerie Prestige",
      category: "accessories",
      description: "Sacs, ceintures et accessoires en cuir véritable. Fabrication artisanale et designs exclusifs.",
      products: ["Sacs à main", "Portefeuilles", "Ceintures", "Bagages"],
      logo: "https://via.placeholder.com/150/7C3AED/FFFFFF?text=MP",
      photo: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=300&fit=crop",
      standNumber: "B18",
      coordinates: { x: 70, y: 40 },
      contact: {
        phone: "+228 96 77 88 99",
        email: "prestige@maroquinerie.tg",
        instagram: "@maroquinerieprestige"
      },
      location: "Lomé, Togo",
      featured: false,
      new: false
    },
    {
      id: 8,
      name: "Chocolat Togolais",
      category: "food",
      description: "Chocolats artisanaux à base de cacao togolais. Pralinés, tablettes et confiseries premium.",
      products: ["Tablettes", "Pralinés", "Truffes", "Pâtes à tartiner"],
      logo: "https://via.placeholder.com/150/78350F/FFFFFF?text=CT",
      photo: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop",
      standNumber: "D12",
      coordinates: { x: 55, y: 65 },
      contact: {
        phone: "+228 97 88 99 00",
        email: "info@chocolattogo.tg",
        website: "https://chocolattogo.tg",
        facebook: "ChocolatTogolais"
      },
      location: "Kpalimé, Togo",
      featured: true,
      new: true
    }
  ];

  // Filter and search logic
  const filteredExhibitors = useMemo(() => {
    let filtered = exhibitors;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(exhibitor => exhibitor.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(exhibitor =>
        exhibitor.name.toLowerCase().includes(query) ||
        exhibitor.description.toLowerCase().includes(query) ||
        exhibitor.products.some(product => product.toLowerCase().includes(query)) ||
        exhibitor.location.toLowerCase().includes(query)
      );
    }

    // Sort: featured first, then new, then alphabetical
    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.new && !b.new) return -1;
      if (!a.new && b.new) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [exhibitors, selectedCategory, searchQuery]);

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">
            Nos Exposants 2025
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Découvrez les 150+ exposants présents : artisans, créateurs et marques lifestyle 
            qui feront de cette édition un moment unique.
          </p>

          {/* View Toggle */}
          <div className="flex justify-center gap-2 mb-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                viewMode === 'grid'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Grid size={20} />
              Vue grille
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                viewMode === 'map'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Map size={20} />
              Vue plan
            </button>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un exposant, produit ou lieu..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Categories */}
      <section className="py-8 px-4 bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden w-full bg-gray-900 text-white px-4 py-3 rounded-lg font-semibold mb-4 flex items-center justify-center gap-2"
          >
            <Filter size={20} />
            Filtrer par catégorie
            <ChevronDown className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} size={20} />
          </button>

          {/* Category Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowFilters(false);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-4 text-center text-gray-600">
            {filteredExhibitors.length} exposant{filteredExhibitors.length > 1 ? 's' : ''} 
            {selectedCategory !== 'all' && ` dans "${currentCategory?.label}"`}
            {searchQuery && ` correspondant à "${searchQuery}"`}
          </div>
        </div>
      </section>

      {/* Exhibitors Grid or Map */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {viewMode === 'map' ? (
            <ExhibitorMap
              exhibitors={filteredExhibitors}
              selectedExhibitor={selectedExhibitor}
              onExhibitorClick={(exhibitor) => 
                setSelectedExhibitor(selectedExhibitor?.id === exhibitor.id ? null : exhibitor)
              }
            />
          ) : filteredExhibitors.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExhibitors.map((exhibitor) => (
                <div
                  key={exhibitor.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
                >
                  {/* Photo */}
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={exhibitor.photo}
                      alt={exhibitor.name}
                      className="w-full h-full object-cover"
                    />
                    {exhibitor.featured && (
                      <div className="absolute top-3 left-3 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star size={12} />
                        Coup de cœur
                      </div>
                    )}
                    {exhibitor.new && (
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Nouveau 2025
                      </div>
                    )}
                    {/* Logo Overlay */}
                    <div className="absolute -bottom-6 left-4">
                      <div className="w-16 h-16 bg-white rounded-lg shadow-lg overflow-hidden border-2 border-white">
                        <img
                          src={exhibitor.logo}
                          alt={`${exhibitor.name} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-8">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exhibitor.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin size={14} />
                          <span>{exhibitor.location}</span>
                        </div>
                      </div>
                      <div className="bg-gray-100 text-gray-900 px-3 py-1 rounded-lg text-sm font-semibold">
                        Stand {exhibitor.standNumber}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {exhibitor.description}
                    </p>

                    {/* Products */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {exhibitor.products.slice(0, 3).map((product, index) => (
                          <span
                            key={index}
                            className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs"
                          >
                            {product}
                          </span>
                        ))}
                        {exhibitor.products.length > 3 && (
                          <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs">
                            +{exhibitor.products.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      {exhibitor.contact.phone && (
                        <a
                          href={`tel:${exhibitor.contact.phone}`}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                          title="Téléphone"
                        >
                          <Phone size={18} />
                        </a>
                      )}
                      {exhibitor.contact.email && (
                        <a
                          href={`mailto:${exhibitor.contact.email}`}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                          title="Email"
                        >
                          <Mail size={18} />
                        </a>
                      )}
                      {exhibitor.contact.website && (
                        <a
                          href={exhibitor.contact.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                          title="Site web"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {exhibitor.contact.instagram && (
                        <a
                          href={`https://instagram.com/${exhibitor.contact.instagram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                          title="Instagram"
                        >
                          <Instagram size={18} />
                        </a>
                      )}
                      {exhibitor.contact.facebook && (
                        <a
                          href={`https://facebook.com/${exhibitor.contact.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                          title="Facebook"
                        >
                          <Facebook size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Aucun exposant trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos filtres ou votre recherche
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Vous souhaitez exposer en 2026 ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez les meilleurs artisans et créateurs du Togo lors de la prochaine édition !
          </p>
          <a
            href="/exposants"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all inline-block"
          >
            Devenir exposant
          </a>
        </div>
      </section>
    </div>
  );
};

export default Exhibitors;