import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle, Mail, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../Hooks/useSEO';

const Privacy: React.FC = () => {
  useSEO({
    title: "Politique de Confidentialité - La Foire Aux Cadeaux",
    description: "Protection des données personnelles et politique de confidentialité de La Foire Aux Cadeaux. Vos droits et nos engagements.",
    url: "https://foireauxcadeaux.tg/confidentialite"
  });

  const lastUpdate = "15 janvier 2025";

  const dataTypes = [
    {
      category: "Données d'identité",
      examples: "Nom, prénom, date de naissance",
      purpose: "Identification et communication"
    },
    {
      category: "Données de contact",
      examples: "Email, téléphone, adresse postale",
      purpose: "Communication et livraison"
    },
    {
      category: "Données de connexion",
      examples: "Adresse IP, cookies, logs",
      purpose: "Sécurité et amélioration du site"
    },
    {
      category: "Données professionnelles",
      examples: "Société, fonction (exposants)",
      purpose: "Gestion des exposants et partenaires"
    }
  ];

  const rights = [
    {
      icon: Eye,
      title: "Droit d'accès",
      description: "Obtenir une copie de vos données personnelles que nous détenons"
    },
    {
      icon: UserCheck,
      title: "Droit de rectification",
      description: "Corriger ou mettre à jour vos données inexactes ou incomplètes"
    },
    {
      icon: AlertCircle,
      title: "Droit à l'effacement",
      description: "Demander la suppression de vos données personnelles"
    },
    {
      icon: Lock,
      title: "Droit d'opposition",
      description: "Vous opposer au traitement de vos données pour des raisons légitimes"
    },
    {
      icon: Database,
      title: "Droit à la portabilité",
      description: "Recevoir vos données dans un format structuré et lisible"
    },
    {
      icon: Shield,
      title: "Droit de limitation",
      description: "Demander la limitation du traitement de vos données"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">
              Politique de Confidentialité
            </h1>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed mb-4">
            Votre vie privée est importante pour nous. Cette politique explique comment nous collectons, 
            utilisons et protégeons vos données personnelles.
          </p>
          <p className="text-sm text-gray-400">
            <Calendar size={14} className="inline mr-2" />
            Dernière mise à jour : {lastUpdate}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-12">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Events Togo SARL, organisateur de La Foire Aux Cadeaux, s'engage à protéger la confidentialité 
                  et la sécurité de vos données personnelles. Cette politique de confidentialité décrit comment 
                  nous collectons, utilisons, stockons et partageons vos informations personnelles lorsque vous 
                  utilisez notre site web ou participez à notre événement.
                </p>
                <p>
                  Nous nous conformons à la législation togolaise en matière de protection des données, notamment 
                  la loi n° 2019-014 du 29 octobre 2019 relative à la protection des données à caractère personnel, 
                  ainsi qu'aux meilleures pratiques internationales en la matière.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
                  <p className="text-sm text-blue-900">
                    <strong>Important :</strong> En utilisant notre site web ou en participant à notre événement, 
                    vous acceptez les termes de cette politique de confidentialité. Si vous n'acceptez pas ces 
                    termes, veuillez ne pas utiliser nos services.
                  </p>
                </div>
              </div>
            </div>

            {/* 1. Responsable du traitement */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Responsable du traitement des données</h2>
              <div className="text-gray-700 space-y-4">
                <p>Le responsable du traitement de vos données personnelles est :</p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-4">Events Togo SARL</p>
                  <div className="space-y-2 text-sm">
                    <p>Quartier Nyékonakpoè, Avenue de la Libération</p>
                    <p>Lomé, Togo</p>
                    <p className="mt-3"><strong>Email :</strong> <a href="mailto:privacy@foireauxcadeaux.tg" className="text-gray-900 hover:underline">privacy@foireauxcadeaux.tg</a></p>
                    <p><strong>Téléphone :</strong> <a href="tel:+22890123456" className="text-gray-900 hover:underline">+228 90 12 34 56</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Données collectées */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Données personnelles collectées</h2>
              <div className="text-gray-700 space-y-4">
                <p>Nous collectons différents types de données personnelles selon votre interaction avec nos services :</p>
                
                <div className="space-y-4">
                  {dataTypes.map((data, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{data.category}</h3>
                      <p className="text-sm text-gray-600 mb-2"><strong>Exemples :</strong> {data.examples}</p>
                      <p className="text-sm text-gray-600"><strong>Finalité :</strong> {data.purpose}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-yellow-900">
                    <strong>Note :</strong> Nous ne collectons que les données strictement nécessaires à la 
                    fourniture de nos services. Vous n'êtes jamais obligé de fournir des données qui ne sont 
                    pas essentielles.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Finalités du traitement */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Finalités du traitement</h2>
              <div className="text-gray-700 space-y-4">
                <p>Nous utilisons vos données personnelles pour les finalités suivantes :</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span><strong>Gestion des inscriptions :</strong> Traiter vos demandes d'inscription en tant que visiteur, exposant ou partenaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span><strong>Communication :</strong> Vous envoyer des informations sur l'événement, les nouveautés et les offres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span><strong>Amélioration des services :</strong> Analyser l'utilisation du site pour améliorer l'expérience utilisateur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span><strong>Sécurité :</strong> Prévenir la fraude et assurer la sécurité de nos systèmes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span><strong>Obligations légales :</strong> Respecter nos obligations légales et réglementaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span><strong>Marketing :</strong> Avec votre consentement, vous envoyer des communications marketing personnalisées</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Base légale */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Base légale du traitement</h2>
              <div className="text-gray-700 space-y-4">
                <p>Nous traitons vos données personnelles sur les bases légales suivantes :</p>
                <ul className="space-y-3 ml-6 list-disc">
                  <li><strong>Exécution d'un contrat :</strong> Pour gérer votre inscription et votre participation à l'événement</li>
                  <li><strong>Consentement :</strong> Pour l'envoi de communications marketing (vous pouvez retirer votre consentement à tout moment)</li>
                  <li><strong>Intérêt légitime :</strong> Pour améliorer nos services et assurer la sécurité de nos systèmes</li>
                  <li><strong>Obligation légale :</strong> Pour respecter nos obligations légales (comptabilité, fiscalité, etc.)</li>
                </ul>
              </div>
            </div>

            {/* 5. Partage des données */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Partage et transfert des données</h2>
              <div className="text-gray-700 space-y-4">
                <p>Nous ne vendons jamais vos données personnelles à des tiers. Nous pouvons partager vos données avec :</p>
                <ul className="space-y-3 ml-6 list-disc">
                  <li><strong>Prestataires de services :</strong> Hébergement web, email marketing, paiement en ligne (sous contrat strict de confidentialité)</li>
                  <li><strong>Partenaires :</strong> Uniquement avec votre consentement explicite et pour des finalités spécifiques</li>
                  <li><strong>Autorités :</strong> Si la loi l'exige ou pour protéger nos droits légaux</li>
                </ul>
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong>Transferts internationaux :</strong> Certains de nos prestataires (hébergement, analytics) 
                    peuvent être situés hors du Togo. Nous nous assurons que ces transferts respectent les normes 
                    de protection des données et que vos informations bénéficient d'un niveau de protection adéquat.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Conservation des données */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Durée de conservation</h2>
              <div className="text-gray-700 space-y-4">
                <p>Nous conservons vos données personnelles uniquement pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong>Données de contact (newsletter) :</strong> Jusqu'à votre désinscription ou 3 ans d'inactivité</li>
                  <li><strong>Données d'inscription événement :</strong> 3 ans après l'événement</li>
                  <li><strong>Données exposants :</strong> Durée du contrat + 5 ans (obligations légales)</li>
                  <li><strong>Cookies analytiques :</strong> 13 mois maximum</li>
                  <li><strong>Logs de connexion :</strong> 12 mois</li>
                </ul>
                <p>
                  À l'expiration de ces délais, vos données sont supprimées ou anonymisées de manière irréversible.
                </p>
              </div>
            </div>

            {/* 7. Vos droits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Vos droits</h2>
              <div className="text-gray-700 space-y-6">
                <p>Conformément à la législation, vous disposez des droits suivants concernant vos données personnelles :</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {rights.map((right, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-2">
                        <right.icon className="text-gray-700 flex-shrink-0" size={20} />
                        <h3 className="font-semibold text-gray-900">{right.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 ml-8">{right.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-3">Comment exercer vos droits ?</h3>
                  <p className="text-sm text-blue-900 mb-3">
                    Pour exercer l'un de ces droits, contactez-nous :
                  </p>
                  <div className="space-y-2 text-sm text-blue-900">
                    <p><strong>Email :</strong> <a href="mailto:privacy@foireauxcadeaux.tg" className="underline">privacy@foireauxcadeaux.tg</a></p>
                    <p><strong>Courrier :</strong> Events Togo SARL - DPO, Quartier Nyékonakpoè, Lomé, Togo</p>
                  </div>
                  <p className="text-sm text-blue-900 mt-3">
                    Nous répondons à toute demande dans un délai de 30 jours. Une pièce d'identité peut être 
                    demandée pour vérifier votre identité.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Sécurité */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Lock className="text-gray-700" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">8. Sécurité des données</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                  vos données personnelles contre la destruction, la perte, l'altération, la divulgation non 
                  autorisée ou l'accès accidentel ou illicite :
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Chiffrement des données sensibles (SSL/TLS)</li>
                  <li>Accès restreint aux données sur base du besoin d'en connaître</li>
                  <li>Audits de sécurité réguliers</li>
                  <li>Formation du personnel à la protection des données</li>
                  <li>Sauvegardes régulières et plan de reprise d'activité</li>
                  <li>Authentification forte pour les accès administratifs</li>
                </ul>
                <p>
                  Malgré ces mesures, aucun système n'est totalement sécurisé. Si vous avez des raisons de croire 
                  que vos données ont été compromises, contactez-nous immédiatement.
                </p>
              </div>
            </div>

            {/* 9. Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Cookies et technologies similaires</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Notre site utilise des cookies et technologies similaires pour améliorer votre expérience. 
                  Vous pouvez gérer vos préférences via le bandeau cookies lors de votre première visite ou 
                  dans les paramètres de votre navigateur.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies essentiels</h4>
                    <p className="text-sm">Nécessaires au fonctionnement du site. Ne peuvent être désactivés.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies analytiques</h4>
                    <p className="text-sm">Nous aident à comprendre comment vous utilisez le site (Google Analytics).</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies marketing</h4>
                    <p className="text-sm">Permettent de vous proposer des publicités personnalisées (Facebook Pixel, Google Ads).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Mineurs */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Protection des mineurs</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Nos services ne sont pas destinés aux personnes de moins de 18 ans. Nous ne collectons pas 
                  sciemment de données personnelles auprès de mineurs sans le consentement parental.
                </p>
                <p>
                  Si vous êtes parent et découvrez que votre enfant nous a fourni des données personnelles sans 
                  votre consentement, contactez-nous immédiatement pour que nous puissions supprimer ces informations.
                </p>
              </div>
            </div>

            {/* 11. Modifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Modifications de cette politique</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Nous pouvons modifier cette politique de confidentialité à tout moment pour refléter les 
                  changements dans nos pratiques ou pour des raisons légales. La version mise à jour sera publiée 
                  sur cette page avec la date de dernière modification.
                </p>
                <p>
                  Les modifications importantes seront communiquées par email aux utilisateurs enregistrés ou via 
                  une notification sur notre site. Nous vous encourageons à consulter régulièrement cette page.
                </p>
              </div>
            </div>

            {/* 12. Contact */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Mail className="text-gray-700" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">12. Nous contacter</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos 
                  données personnelles, contactez notre Délégué à la Protection des Données (DPO) :
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-900">Délégué à la Protection des Données</p>
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-gray-600" />
                      <a href="mailto:privacy@foireauxcadeaux.tg" className="text-gray-900 hover:underline">
                        privacy@foireauxcadeaux.tg
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lock size={18} className="text-gray-600 mt-1" />
                      <div>
                        <p>Events Togo SARL - DPO</p>
                        <p className="text-sm">Quartier Nyékonakpoè</p>
                        <p className="text-sm">Avenue de la Libération</p>
                        <p className="text-sm">Lomé, Togo</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm">
                  Si vous estimez que vos droits n'ont pas été respectés, vous avez également le droit d'introduire 
                  une réclamation auprès de l'Autorité de Protection des Données Personnelles (APDP) du Togo.
                </p>
              </div>
            </div>

          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/mentions-legales"
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Mentions légales
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

export default Privacy;
