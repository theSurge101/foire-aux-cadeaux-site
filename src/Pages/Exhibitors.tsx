// pages/Exhibitors.tsx
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Filter, X, ChevronDown, Star, Map, Grid, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../Hooks/useSEO';
import ExhibitorMap from '../Components/Sections/ExhibitorMap';
import { exhibitorsData } from '../Data/ExhibitorData';
import { useExhibitorPagination } from '../Hooks/useExhibitorPagination';

const Exhibitors: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedExhibitor, setSelectedExhibitor] = useState<any>(null);

  useSEO({
    title: "Liste des Exposants - La Foire Aux Cadeaux 2026 | 150+ Marques",
    description: "Découvrez les +150 exposants présents : artisans, créateurs, marques lifestyle. Mode, décoration, bijoux, gastronomie et plus encore à Lomé.",
    url: "https://foireauxcadeaux.anaisconcept.biz/liste-exposants",
    image: "https://anaisconcept.biz/wp-content/uploads/2025/12/Femi-1920x1080px-Horizontal.jpg",
    keywords: "exposants lomé, artisans togo, créateurs locaux, marques togolaises, liste exposants foire"
  });

  // Categories with dynamic counts
  const categories = useMemo(() => [
    { id: 'all', label: 'Tous les exposants', count: exhibitorsData.length },
    { id: 'fashion', label: 'Mode & Vêtements', count: exhibitorsData.filter(e => e.category === 'fashion').length },
    { id: 'jewelry', label: 'Bijoux & Montres', count: exhibitorsData.filter(e => e.category === 'jewelry').length },
    { id: 'beauty', label: 'Beauté & Cosmétiques', count: exhibitorsData.filter(e => e.category === 'beauty').length },
    { id: 'home', label: 'Décoration & Maison', count: exhibitorsData.filter(e => e.category === 'home').length },
    { id: 'food', label: 'Gastronomie & Terroir', count: exhibitorsData.filter(e => e.category === 'food').length },
    { id: 'art', label: 'Art & Artisanat', count: exhibitorsData.filter(e => e.category === 'art').length },
    { id: 'accessories', label: 'Accessoires & Maroquinerie', count: exhibitorsData.filter(e => e.category === 'accessories').length },
    { id: 'services', label: 'Services', count: exhibitorsData.filter(e => e.category === 'services').length },
    { id: 'health', label: 'Santé & Bien-être', count: exhibitorsData.filter(e => e.category === 'health').length },
    { id: 'entertainment', label: 'Divertissement', count: exhibitorsData.filter(e => e.category === 'entertainment').length }
  ], []);

  // Filter logic
  const filteredExhibitors = useMemo(() => {
    let filtered = exhibitorsData;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(exhibitor => exhibitor.category === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(exhibitor =>
        exhibitor.name.toLowerCase().includes(query) ||
        exhibitor.description.toLowerCase().includes(query) ||
        exhibitor.products.some(product => product.toLowerCase().includes(query)) ||
        exhibitor.location.toLowerCase().includes(query)
      );
    }

    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.new && !b.new) return -1;
      if (!a.new && b.new) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [selectedCategory, searchQuery]);

  // Use pagination hook
  const {
    paginatedExhibitors,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage,
    startIndex,
    endIndex,
    totalItems
  } = useExhibitorPagination(filteredExhibitors, 12);

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">
            Découvrez les exposants présents
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Découvrez les {exhibitorsData.length}+ exposants présents : artisans, créateurs et marques lifestyle 
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
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Effacer la recherche"
                  title="Effacer la recherche"
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
            Affichage {startIndex}-{endIndex} sur {totalItems} exposant{totalItems > 1 ? 's' : ''}
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
              onExhibitorClick={setSelectedExhibitor}
            />
          ) : paginatedExhibitors.length > 0 ? (
            <>
              {/* GRID OF EXHIBITORS */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedExhibitors.map((exhibitor) => (
                  <Link 
                    key={exhibitor.id} 
                    to={`/exposants/${exhibitor.slug}`}
                    className="block"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 cursor-pointer">
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
                            Nouveau 2026
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
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-8">
                  <div className="text-sm text-gray-600">
                    Page {currentPage} sur {totalPages} • {totalItems} résultat{totalItems > 1 ? 's' : ''}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevPage}
                      disabled={!hasPrevPage}
                      aria-label="Page précédente"
                      title="Page précédente"
                      className={`p-2 rounded-lg border ${
                        hasPrevPage
                          ? 'border-gray-300 hover:bg-gray-50 text-gray-700'
                          : 'border-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <ChevronLeft size={20} aria-hidden="true" />
                    </button>

                    <div className="flex gap-1">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }

                        return (
                          <button
                            key={pageNum}
                            type="button"
                            onClick={() => goToPage(pageNum)}
                            className={`w-10 h-10 rounded-lg font-medium ${
                              currentPage === pageNum
                                ? 'bg-gray-900 text-white'
                                : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      onClick={nextPage}
                      disabled={!hasNextPage}
                      aria-label="Page suivante"
                      title="Page suivante"
                      className={`p-2 rounded-lg border ${
                        hasNextPage
                          ? 'border-gray-300 hover:bg-gray-50 text-gray-700'
                          : 'border-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <ChevronRight size={20} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </>
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
    </div>
  );
};

export default Exhibitors;