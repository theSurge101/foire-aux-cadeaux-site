import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Award, Handshake, Trophy, TrendingUp, Mail } from 'lucide-react';
import useSEO from '../Hooks/useSEO';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface Partner {
  id: number;
  name: string;
  logo: string;
  category: 'platinum' | 'gold' | 'silver' | 'media';
  website?: string;
}

interface Testimonial {
  id: number;
  company: string;
  logo: string;
  quote: string;
  author: string;
  position: string;
}

const Partners: React.FC = () => {
  useSEO({
    title: "Nos Partenaires et Sponsors - La Foire Aux Cadeaux 2025",
    description: "Découvrez les marques et institutions qui soutiennent La Foire Aux Cadeaux. Opportunités de partenariat et sponsoring disponibles.",
    url: "https://foireauxcadeaux.anaisconcept.biz/partenaires",
    image: "https://foireauxcadeaux.tg/og-partners.jpg",
    keywords: "partenaires foire lomé, sponsors événement togo, partenariat salon"
  });

  // Partner logos - Replace with actual HubSpot CDN URLs
  const partners: Partner[] = [
    // Platinum Partners
    { id: 1, name: "Ecobank Togo", logo: "https://via.placeholder.com/200x80/f5f5f5/333333?text=Ecobank", category: "platinum", website: "#" },
    { id: 2, name: "Togocom", logo: "https://via.placeholder.com/200x80/f5f5f5/333333?text=Togocom", category: "platinum", website: "#" },
    
    // Gold Partners
    { id: 3, name: "Moov Africa", logo: "https://via.placeholder.com/180x70/f5f5f5/666666?text=Moov", category: "gold", website: "#" },
    { id: 4, name: "BTCI", logo: "https://via.placeholder.com/180x70/f5f5f5/666666?text=BTCI", category: "gold", website: "#" },
    { id: 5, name: "Orabank", logo: "https://via.placeholder.com/180x70/f5f5f5/666666?text=Orabank", category: "gold", website: "#" },
    
    // Silver Partners
    { id: 6, name: "CIM Togo", logo: "https://via.placeholder.com/160x60/f5f5f5/999999?text=CIM", category: "silver", website: "#" },
    { id: 7, name: "TDE", logo: "https://via.placeholder.com/160x60/f5f5f5/999999?text=TDE", category: "silver", website: "#" },
    { id: 8, name: "Total Energies", logo: "https://via.placeholder.com/160x60/f5f5f5/999999?text=Total", category: "silver", website: "#" },
    { id: 9, name: "Jumia", logo: "https://via.placeholder.com/160x60/f5f5f5/999999?text=Jumia", category: "silver", website: "#" },
    
    // Media Partners
    { id: 10, name: "Radio Lomé", logo: "https://via.placeholder.com/150x50/f5f5f5/cccccc?text=Radio+Lomé", category: "media", website: "#" },
    { id: 11, name: "TV7", logo: "https://via.placeholder.com/150x50/f5f5f5/cccccc?text=TV7", category: "media", website: "#" },
    { id: 12, name: "Le Togolais", logo: "https://via.placeholder.com/150x50/f5f5f5/cccccc?text=Le+Togolais", category: "media", website: "#" }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      company: "Ecobank Togo",
      logo: "https://via.placeholder.com/100x40/f5f5f5/333333?text=Ecobank",
      quote: "Un partenariat stratégique qui nous permet de soutenir l'entrepreneuriat local et de renforcer notre engagement envers les PME togolaises.",
      author: "Kofi Mensah",
      position: "Directeur Marketing"
    },
    {
      id: 2,
      company: "Togocom",
      logo: "https://via.placeholder.com/100x40/f5f5f5/333333?text=Togocom",
      quote: "La Foire Aux Cadeaux est un événement incontournable qui reflète parfaitement les valeurs d'innovation et de connexion que nous portons.",
      author: "Amina Diallo",
      position: "Responsable Communication"
    },
    {
      id: 3,
      company: "Moov Africa",
      logo: "https://via.placeholder.com/100x40/f5f5f5/666666?text=Moov",
      quote: "Être partenaire de cet événement nous permet de nous rapprocher de nos clients et de soutenir l'économie créative togolaise.",
      author: "Jean-Pierre Akoda",
      position: "Directeur Commercial"
    }
  ];

  const partnersByCategory = {
    platinum: partners.filter(p => p.category === 'platinum'),
    gold: partners.filter(p => p.category === 'gold'),
    silver: partners.filter(p => p.category === 'silver'),
    media: partners.filter(p => p.category === 'media')
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nos Partenaires & Sponsors
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Découvrez les entreprises et institutions qui font de La Foire Aux Cadeaux 
            un événement exceptionnel et qui soutiennent l'entrepreneuriat togolais.
          </p>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Pourquoi devenir partenaire ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <TrendingUp className="text-gray-700" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Visibilité</h3>
              <p className="text-gray-600">+3,000 visiteurs et couverture médiatique nationale</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Handshake className="text-gray-700" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Networking</h3>
              <p className="text-gray-600">Accès VIP aux décideurs et entrepreneurs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Award className="text-gray-700" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Image de marque</h3>
              <p className="text-gray-600">Association avec un événement premium</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Trophy className="text-gray-700" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Impact social</h3>
              <p className="text-gray-600">Soutien à l'entrepreneuriat local</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platinum Partners */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full mb-4">
              <Trophy size={20} />
              <span className="font-semibold">Partenaires Platinum</span>
            </div>
            <p className="text-gray-600">Nos partenaires stratégiques majeurs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnersByCategory.platinum.map((partner) => (
              <a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-12 shadow-sm hover:shadow-lg transition-all flex items-center justify-center group"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full h-auto transition-transform group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Partners */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded-full mb-4">
              <Award size={20} />
              <span className="font-semibold">Partenaires Gold</span>
            </div>
            <p className="text-gray-600">Nos partenaires premium</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnersByCategory.gold.map((partner) => (
              <a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all flex items-center justify-center group border border-gray-100"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full h-auto transition-transform group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Silver Partners Carousel */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-full mb-4">
              <Handshake size={20} />
              <span className="font-semibold">Partenaires Silver & Média</span>
            </div>
            <p className="text-gray-600">Merci à tous nos partenaires</p>
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 }
            }}
            className="partners-carousel"
          >
            {[...partnersByCategory.silver, ...partnersByCategory.media].map((partner) => (
              <SwiperSlide key={partner.id}>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all flex items-center justify-center h-32 group"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full h-auto transition-transform group-hover:scale-105"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Partner Testimonials Carousel */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-gray-300">
              Découvrez ce que nos partenaires disent de leur expérience
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev'
            }}
            className="partner-testimonials"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white/5 rounded-2xl p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.logo} 
                      alt={testimonial.company}
                      className="h-10"
                    />
                  </div>
                  <p className="text-xl text-gray-200 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.position}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button className="testimonial-prev w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                ←
              </button>
              <button className="testimonial-next w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                →
              </button>
            </div>
          </Swiper>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Intéressé par un partenariat ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez les marques leaders qui soutiennent La Foire Aux Cadeaux et 
              bénéficiez d'une visibilité exceptionnelle auprès d'une audience qualifiée.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-2xl text-gray-900 mb-2">Platinum</h3>
                <p className="text-gray-600 mb-4">Partenaire principal</p>
                <p className="text-3xl font-bold text-gray-900 mb-4">Sur devis</p>
                <ul className="text-sm text-gray-600 text-left space-y-2">
                  <li>✓ Logo sur tous les supports</li>
                  <li>✓ Stand premium offert</li>
                  <li>✓ Campagne dédiée</li>
                  <li>✓ Naming rights disponible</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-900">
                <div className="bg-gray-900 text-white text-sm px-3 py-1 rounded-full inline-block mb-2">
                  Populaire
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">Gold</h3>
                <p className="text-gray-600 mb-4">Partenaire majeur</p>
                <p className="text-3xl font-bold text-gray-900 mb-4">XM FCFA</p>
                <ul className="text-sm text-gray-600 text-left space-y-2">
                  <li>✓ Logo premium</li>
                  <li>✓ Stand offert</li>
                  <li>✓ Visibilité médias</li>
                  <li>✓ Accès VIP</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-2xl text-gray-900 mb-2">Silver</h3>
                <p className="text-gray-600 mb-4">Partenaire officiel</p>
                <p className="text-3xl font-bold text-gray-900 mb-4">XM FCFA</p>
                <ul className="text-sm text-gray-600 text-left space-y-2">
                  <li>✓ Logo sur supports</li>
                  <li>✓ Mentions réseaux</li>
                  <li>✓ Badge exposant</li>
                  <li>✓ Communication digitale</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:infos@anaisconcept.biz"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center"
              >
                <Mail size={20} />
                Demander un dossier
              </a>
              <a
                href="https://wa.me/22890123456?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20les%20opportunités%20de%20partenariat"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Contacter via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;