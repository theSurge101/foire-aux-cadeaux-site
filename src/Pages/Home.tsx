import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Gift, Heart, ShoppingBag, Mic, Star, ChevronRight, Download, Zap, Shield, Trophy, MessageCircle } from 'lucide-react';
import type { Testimonial, NewsletterForm } from '../types';
import useSEO from '../Hooks/useSEO';



const Home: React.FC = () => {
   useSEO({
    title: "La Foire Aux Cadeaux 2025 - L'expérience shopping incontournable à Lomé",
    description: "Découvrez La Foire Aux Cadeaux 2025 du 19-21 Décembre à l'hôtel Sarakawa de Lomé. Plus de 100 exposants, artisans locaux, cadeaux uniques et expériences familiales.",
    image: "https://anaisconcept.biz/wp-content/uploads/2025/10/DSC_0174-scaled.jpg",
    url: "https://foireauxcadeaux.anaisconcept.biz",
    keywords: "foire aux cadeaux, salon lomé, shopping togo, exposition lomé, artisans togo"
  });

  const [brochureReady] = useState<boolean>(false);
  const [guideReady] = useState<boolean>(false);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [activeGalleryImage, setActiveGalleryImage] = useState<number>(0);
  const [newsletterForm, setNewsletterForm] = useState<NewsletterForm>({
    email: '',
    whatsapp: false
  });


  const testimonials: Testimonial[] = [
    { 
      name: "Marie Kouassi", 
      role: "Exposante - Bijoux artisanaux", 
      content: "Une expérience incroyable ! J'ai vendu plus en 3 jours qu'en un mois normal.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9d80e9a?w=80&h=80&fit=crop&crop=face"
    },
    { 
      name: "Jean-Baptiste Agbo", 
      role: "Visiteur fidèle", 
      content: "Chaque année, je trouve des cadeaux uniques. C'est devenu notre sortie familiale préférée !",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    { 
      name: "Fatima Al-Hassan", 
      role: "Directrice Marketing", 
      content: "Excellent retour sur investissement pour notre marque. Le public est très engagé.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const galleryImages: string[] = [
    "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_BOOTHSPOT_PUBLIC_BUFFET_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
      "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_BOOTHSPOT_PUBLIC_AUTHENTIC_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
      "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_BOOTHSPOT_PUBLIC_AFRICADOU_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
      "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_CROWD_PRESS_DANCE_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
      "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_CROWD_PRESS_KidsGames_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
      "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_BOOTHSPOT_PUBLIC_DJONOUVI_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
      "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_PORTRAIT_EXHIBITOR_EXHIBITOR_FRUTIFRESH_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
      "https://anaisconcept.biz/wp-content/uploads/2025/10/DSC_0174-scaled.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGalleryImage((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const handleNewsletterSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!newsletterForm.email.trim()) {
      alert('Veuillez entrer votre adresse email.');
      return;
    }
    alert(`Inscription confirmée ! ${newsletterForm.whatsapp ? 'Vous recevrez aussi nos actus sur WhatsApp.' : ''}`);
    setNewsletterForm({ email: '', whatsapp: false });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pb-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                La Foire Aux<br/>
                <span className="text-gray-600">Cadeaux</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
                Le rendez-vous incontournable du shopping et des découvertes à Lomé
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Calendar size={18} />
                  <span className="font-medium">19-21 Décembre 2025</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <MapPin size={18} />
                  <span className="font-medium">Hôtel Sarakawa, Lomé</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {brochureReady ? (
                  <a
                    href="/brochure-foire-aux-cadeaux-2025.pdf"
                    download
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
                  >
                    <Download size={20} />
                    Télécharger le programme
                  </a>
                ) : (
                  <button 
                    disabled
                    className="bg-gray-400 text-gray-600 px-8 py-4 rounded-lg text-lg font-semibold cursor-not-allowed flex items-center gap-2 opacity-60 relative group"
                    title="Programme bientôt disponible"
                  >
                    <Download size={20} />
                    Télécharger le programme
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Bientôt disponible
                    </span>
                  </button>
                )}
                <button 
                  onClick={() => scrollToSection('exhibitor')}
                  className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2"
                >
                  Devenir exposant
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={galleryImages[activeGalleryImage]} 
                  alt="La Foire Aux Cadeaux"
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-gray-900">+3K</div>
                <div className="text-sm text-gray-600">Visiteurs attendus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is La Foire Aux Cadeaux */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Qu'est-ce que La Foire Aux Cadeaux ?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Le plus grand rassemblement de créateurs, artisans et marques lifestyle au Togo. 
            Trois jours de découvertes, de shopping et de moments partagés en famille dans une 
            ambiance festive et conviviale.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <ShoppingBag className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Shopping</h3>
              <p className="text-gray-600 text-sm">Découvrez les dernières tendances</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <Gift className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Découvertes</h3>
              <p className="text-gray-600 text-sm">Trouvez des créations uniques</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <Heart className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Famille</h3>
              <p className="text-gray-600 text-sm">Une sortie pour tous les âges</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <Users className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Networking</h3>
              <p className="text-gray-600 text-sm">Rencontrez la communauté</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit */}
<section className="py-16 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Pourquoi visiter la foire ?
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
        <div className="aspect-square mb-4 rounded-xl overflow-hidden">
          <img 
            src={galleryImages[0]} 
            alt="Marques locales et artisans togolais"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Marques locales</h3>
        <p className="text-gray-600 text-sm">Découvrez le savoir-faire togolais et soutenez les créateurs locaux</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
        <div className="aspect-square mb-4 rounded-xl overflow-hidden">
          <img 
            src={galleryImages[4]} 
            alt="Sortie familiale et activités enfants"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Sortie familiale</h3>
        <p className="text-gray-600 text-sm">Des activités pour petits et grands dans une ambiance festive</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
        <div className="aspect-square mb-4 rounded-xl overflow-hidden">
          <img 
            src={galleryImages[5]} 
            alt="Cadeaux exclusifs et produits uniques"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Cadeaux exclusifs</h3>
        <p className="text-gray-600 text-sm">Trouvez des idées cadeaux originales qu'on ne trouve nulle part ailleurs</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
        <div className="aspect-square mb-4 rounded-xl overflow-hidden">
          <img 
            src={galleryImages[3]} 
            alt="Expériences live et spectacles"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Expériences live</h3>
        <p className="text-gray-600 text-sm">Assistez à des démonstrations, ateliers et spectacles</p>
      </div>
    </div>
  </div>
</section>

      {/* Become an Exhibitor */}
      <section id="exhibitor" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Devenez exposant
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Rejoignez plus de 150 exposants et bénéficiez d'une visibilité exceptionnelle 
            auprès de notre audience qualifiée.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">+3,000</div>
                <p className="text-gray-600">Visiteurs ciblés</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">3 jours</div>
                <p className="text-gray-600">De visibilité maximale</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                <p className="text-gray-600">Stands sélectionnés</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {guideReady ? (
                <a
                  href="/guide-exposant-2025.pdf"
                  download
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center"
                >
                  <Download size={18} />
                  Guide exposant
                </a>
              ) : (
                <button 
                  disabled
                  className="bg-gray-400 text-gray-600 px-8 py-4 rounded-lg font-semibold cursor-not-allowed flex items-center gap-2 justify-center opacity-60 relative group"
                  title="Guide bientôt disponible"
                >
                  <Download size={18} />
                  Guide exposant
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Bientôt disponible
                  </span>
                </button>
              )}
              <div className="flex flex-col sm:flex-row gap-2">
                <a 
                  href="https://forms.hubspot.com/12345678/abcd-efgh-ijkl-mnop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-6 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center"
                >
                  Inscription en ligne
                  <ChevronRight size={18} />
                </a>
                <a 
                  href="https://wa.me/22890123148?text=Bonjour,%20je%20souhaite%20devenir%20exposant%20à%20la%20Foire%20Aux%20Cadeaux%202025.%20Pouvez-vous%20m'envoyer%20le%20formulaire%20?"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Pass Teaser */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pass Premium
          </h2>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Vivez une expérience VIP exclusive avec des privilèges uniques.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Fast Track</h3>
              <p className="text-gray-400 text-sm">Accès prioritaire sans file d'attente</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Accès privé</h3>
              <p className="text-gray-400 text-sm">Zone VIP et avant-premières exclusives</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <Trophy className="text-white" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Conciergerie</h3>
              <p className="text-gray-400 text-sm">Service personnalisé et cadeaux VIP</p>
            </div>
          </div>

          <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all">
            Découvrir le Pass Premium
          </button>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              L'ambiance de nos précédentes éditions
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={image} 
                  alt={`Foire aux cadeaux ${index + 1}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ils témoignent
            </h2>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[activeTestimonial].avatar} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</p>
                  <p className="text-gray-600 text-sm">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic">"{testimonials[activeTestimonial].content}"</p>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}


      {/* Practical Info */}
      <section id="info" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Informations pratiques
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Lieu</h3>
              <p className="text-gray-600 text-sm">Hôtel Sarakawa de Lomé<br/>Boulevard du Mono<br/>Lomé, Togo</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Calendar className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Dates</h3>
              <p className="text-gray-600 text-sm">Vendredi 19 Décembre<br/>Samedi 20 Décembre<br/>Dimanche 21 Décembre 2025</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Clock className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Horaires</h3>
              <p className="text-gray-600 text-sm">Ven-Dim: 09h-21h</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <MessageCircle className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Contact</h3>
              <p className="text-gray-600 text-sm">WhatsApp<br/>+228 90 12 31 48<br/>Questions rapides</p>
            </div>
          </div>

          <div className="mt-16 bg-gray-100 rounded-2xl p-4">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                 {/*  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>Carte interactive Google Maps</p>
                  </div> */}
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

      {/* Newsletter */}
      <section id="newsletter" className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Restez informés !
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Recevez toutes les actualités de la foire et les dernières nouveautés de nos exposants.
          </p>

          <div className="bg-white/5 rounded-2xl p-8">
            <div className="mb-6">
              <input
                type="email"
                value={newsletterForm.email}
                onChange={(e) => setNewsletterForm({...newsletterForm, email: e.target.value})}
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                placeholder="Votre adresse email"
              />
            </div>

            <div className="mb-8 flex items-center justify-center">
              <input
                type="checkbox"
                id="whatsapp-opt"
                checked={newsletterForm.whatsapp}
                onChange={(e) => setNewsletterForm({...newsletterForm, whatsapp: e.target.checked})}
                className="mr-3 w-4 h-4"
              />
              <label htmlFor="whatsapp-opt" className="text-gray-300 text-sm">
                Je souhaite recevoir les actus sur WhatsApp
              </label>
            </div>

            <button
              onClick={handleNewsletterSubmit}
              className="w-full bg-white text-gray-900 hover:bg-gray-100 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              S'inscrire à la newsletter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;