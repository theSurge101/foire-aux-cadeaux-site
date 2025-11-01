import React from 'react';
import { Building, User, Globe, Mail, Phone, Shield, FileText, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../Hooks/useSEO';

const Legal: React.FC = () => {
  useSEO({
    title: "Mentions Légales - La Foire Aux Cadeaux",
    description: "Informations légales, conditions générales d'utilisation et informations sur l'organisateur de La Foire Aux Cadeaux.",
    url: "https://foireauxcadeaux.tg/mentions-legales"
  });

  const lastUpdate = "15 janvier 2025";

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-gray-700" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Mentions Légales
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Informations légales relatives au site web et à l'événement La Foire Aux Cadeaux
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <Calendar size={14} className="inline mr-2" />
            Dernière mise à jour : {lastUpdate}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-12">
            
            {/* 1. Éditeur du site */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building className="text-gray-700" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">1. Éditeur du site</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-4">Events Togo SARL</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Forme juridique :</strong> Société à Responsabilité Limitée (SARL)</p>
                    <p><strong>Capital social :</strong> 5,000,000 FCFA</p>
                    <p><strong>RCCM :</strong> TG-LFW-2022-B-12345</p>
                    <p><strong>IFU :</strong> 0123456789012</p>
                    <p><strong>Siège social :</strong> Quartier Nyékonakpoè, Avenue de la Libération, Lomé, Togo</p>
                    <p><strong>Email :</strong> <a href="mailto:info@foireauxcadeaux.tg" className="text-gray-900 hover:underline">info@foireauxcadeaux.tg</a></p>
                    <p><strong>Téléphone :</strong> <a href="tel:+22890123456" className="text-gray-900 hover:underline">+228 90 12 34 56</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Directeur de publication */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <User className="text-gray-700" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">2. Directeur de publication</h2>
              </div>
              <div className="text-gray-700">
                <p>Le directeur de la publication du site web foireauxcadeaux.tg est :</p>
                <div className="bg-gray-50 rounded-lg p-6 mt-4">
                  <p className="font-semibold text-gray-900">Monsieur Kofi MENSAH</p>
                  <p className="text-sm mt-2">Gérant de Events Togo SARL</p>
                </div>
              </div>
            </div>

            {/* 3. Hébergement */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-gray-700" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">3. Hébergement du site</h2>
              </div>
              <div className="text-gray-700">
                <p className="mb-4">Le site web foireauxcadeaux.tg est hébergé par :</p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-2">Vercel Inc.</p>
                  <div className="space-y-1 text-sm">
                    <p>440 N Barranca Ave #4133</p>
                    <p>Covina, CA 91723, États-Unis</p>
                    <p className="mt-2"><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">vercel.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Propriété intellectuelle */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-gray-700" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">4. Propriété intellectuelle</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>
                  L'ensemble du contenu présent sur le site foireauxcadeaux.tg (textes, images, graphismes, logo, 
                  vidéos, architecture, icônes, sons, logiciels, etc.) est la propriété exclusive de Events Togo SARL, 
                  à l'exception des contenus fournis par les exposants et partenaires.
                </p>
                <p>
                  Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces 
                  différents éléments est strictement interdite sans l'accord exprès par écrit de Events Togo SARL.
                </p>
                <p>
                  La marque "La Foire Aux Cadeaux", son logo et tous les éléments graphiques associés sont des 
                  marques déposées. Toute utilisation non autorisée constitue une contrefaçon passible de sanctions 
                  civiles et pénales.
                </p>
              </div>
            </div>

            {/* 5. Protection des données */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-gray-700" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">5. Protection des données personnelles</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>
                  Events Togo SARL accorde une grande importance à la protection des données personnelles de ses 
                  utilisateurs. Les informations collectées via le site sont traitées conformément à la législation 
                  togolaise en vigueur, notamment la loi n° 2019-014 du 29 octobre 2019 relative à la protection 
                  des données à caractère personnel.
                </p>
                <p>
                  Pour plus d'informations sur la collecte et le traitement de vos données personnelles, 
                  veuillez consulter notre{' '}
                  <Link to="/confidentialite" className="text-gray-900 font-semibold hover:underline">
                    Politique de Confidentialité
                  </Link>.
                </p>
              </div>
            </div>

            {/* 6. Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Utilisation des cookies</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Le site foireauxcadeaux.tg utilise des cookies pour améliorer l'expérience utilisateur, 
                  réaliser des statistiques de visite et proposer des contenus adaptés.
                </p>
                <p>
                  Lors de votre première visite, un bandeau d'information apparaît vous permettant d'accepter 
                  ou de refuser les cookies non essentiels. Vous pouvez à tout moment modifier vos préférences 
                  via les paramètres de votre navigateur.
                </p>
                <p className="font-semibold">Types de cookies utilisés :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site (session, sécurité)</li>
                  <li><strong>Cookies analytiques :</strong> Mesure d'audience (Google Analytics)</li>
                  <li><strong>Cookies marketing :</strong> Suivi des conversions publicitaires (Facebook Pixel, Google Ads)</li>
                </ul>
              </div>
            </div>

            {/* 7. Responsabilité */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Limitation de responsabilité</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Events Togo SARL met tout en œuvre pour offrir aux utilisateurs des informations fiables et 
                  vérifiées. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité 
                  des informations disponibles sur le site.
                </p>
                <p>
                  Events Togo SARL ne saurait être tenu responsable des erreurs, omissions, interruptions ou 
                  retards dans la mise à jour des informations, ni des dommages directs ou indirects résultant 
                  de l'utilisation du site.
                </p>
                <p>
                  Les liens hypertextes présents sur le site peuvent renvoyer vers des sites tiers. Events Togo SARL 
                  n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </div>
            </div>

            {/* 8. Droit applicable */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Droit applicable et juridiction</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Les présentes mentions légales sont régies par le droit togolais. Tout litige relatif à 
                  l'utilisation du site foireauxcadeaux.tg sera soumis à la compétence exclusive des tribunaux 
                  de Lomé, Togo.
                </p>
              </div>
            </div>

            {/* 9. Modifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Modifications des mentions légales</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Events Togo SARL se réserve le droit de modifier les présentes mentions légales à tout moment. 
                  Les modifications entrent en vigueur dès leur publication sur le site. Il est conseillé de 
                  consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
                </p>
              </div>
            </div>

            {/* 10. Contact */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Mail className="text-gray-700" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">10. Nous contacter</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>
                  Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter :
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-gray-600" />
                      <a href="mailto:info@foireauxcadeaux.tg" className="text-gray-900 hover:underline">
                        info@foireauxcadeaux.tg
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-gray-600" />
                      <a href="tel:+22890123456" className="text-gray-900 hover:underline">
                        +228 90 12 34 56
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building size={18} className="text-gray-600 mt-1" />
                      <div>
                        <p>Events Togo SARL</p>
                        <p className="text-sm">Quartier Nyékonakpoè</p>
                        <p className="text-sm">Avenue de la Libération</p>
                        <p className="text-sm">Lomé, Togo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/confidentialite"
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Politique de confidentialité
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;