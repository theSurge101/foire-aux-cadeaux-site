import React, { useState } from 'react';
import { Download, FileText, Image as ImageIcon, Video, Users, Calendar, Award, TrendingUp, Mail, Phone, ExternalLink, CheckCircle, AlertCircle, User, Building } from 'lucide-react';
import useSEO from '../Hooks/useSEO';

// Types
interface PressRelease {
  date: string;
  title: string;
  excerpt: string;
  link: string;
  category: 'announcement' | 'partnership' | 'results';
}

interface MediaAsset {
  type: 'logo' | 'photo' | 'video';
  title: string;
  description: string;
  format: string;
  size: string;
  downloadLink: string;
  previewUrl?: string;
}

interface KeyFact {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  number: string;
  label: string;
  detail?: string;
}

interface MediaContact {
  name: string;
  role: string;
  email: string;
  phone: string;
  photo: string;
}

interface AccreditationForm {
  name: string;
  media: string;
  email: string;
  phone: string;
  role: string;
  coverage: string;
}

// Constants
const KEY_FACTS: KeyFact[] = [
  {
    icon: Users,
    number: '+10,000',
    label: 'Visiteurs attendus',
    detail: 'Sur 3 jours'
  },
  {
    icon: TrendingUp,
    number: '150+',
    label: 'Exposants',
    detail: 'Artisans & marques'
  },
  {
    icon: Calendar,
    number: '3 jours',
    label: '15-17 Mars 2025',
    detail: 'Palais des Congrès'
  },
  {
    icon: Award,
    number: '4ème',
    label: 'Édition',
    detail: 'Depuis 2022'
  }
];

const PRESS_RELEASES: PressRelease[] = [
  {
    date: '15 Janvier 2025',
    title: 'Lancement de la 4ème édition de La Foire Aux Cadeaux',
    excerpt: 'La Foire Aux Cadeaux revient du 15 au 17 mars 2025 avec plus de 150 exposants et de nombreuses nouveautés.',
    link: '/press/communique-lancement-2025.pdf',
    category: 'announcement'
  },
  {
    date: '10 Janvier 2025',
    title: 'Partenariat stratégique avec Ecobank Togo',
    excerpt: 'Ecobank devient partenaire Platinum de l\'édition 2025, renforçant son engagement envers l\'entrepreneuriat local.',
    link: '/press/communique-partenariat-ecobank.pdf',
    category: 'partnership'
  },
  {
    date: '20 Décembre 2024',
    title: 'Bilan 2024 : Un succès retentissant avec +12,000 visiteurs',
    excerpt: 'L\'édition 2024 a dépassé toutes les attentes avec une hausse de 20% de la fréquentation.',
    link: '/press/bilan-2024.pdf',
    category: 'results'
  }
];

const MEDIA_ASSETS: MediaAsset[] = [
  {
    type: 'logo',
    title: 'Logo Principal',
    description: 'Logo officiel La Foire Aux Cadeaux en noir',
    format: 'PNG, SVG',
    size: '2 MB',
    downloadLink: '/press/logo-principal.zip',
    previewUrl: 'https://via.placeholder.com/300x150/111827/FFFFFF?text=Logo+Foire'
  },
  {
    type: 'logo',
    title: 'Logo Blanc',
    description: 'Logo pour fonds sombres',
    format: 'PNG, SVG',
    size: '2 MB',
    downloadLink: '/press/logo-blanc.zip',
    previewUrl: 'https://via.placeholder.com/300x150/FFFFFF/111827?text=Logo+Blanc'
  },
  {
    type: 'photo',
    title: 'Photos Édition 2024',
    description: 'Album de 50 photos HD : foule, exposants, stands, ambiance',
    format: 'JPG HD',
    size: '250 MB',
    downloadLink: '/press/photos-2024.zip',
    previewUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=150&fit=crop'
  }
];

const MEDIA_CONTACTS: MediaContact[] = [
  {
    name: 'Amina Koffi',
    role: 'Responsable Communication',
    email: 'presse@foireauxcadeaux.tg',
    phone: '+228 90 12 34 56',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b9d80e9a?w=100&h=100&fit=crop'
  },
  {
    name: 'Jean-Marc Agbo',
    role: 'Relations Médias',
    email: 'media@foireauxcadeaux.tg',
    phone: '+228 91 23 45 67',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  }
];

const CATEGORY_BADGES = {
  announcement: { label: 'Annonce', color: 'bg-blue-100 text-blue-700' },
  partnership: { label: 'Partenariat', color: 'bg-green-100 text-green-700' },
  results: { label: 'Résultats', color: 'bg-purple-100 text-purple-700' }
} as const;

const ASSET_ICONS = {
  logo: ImageIcon,
  photo: ImageIcon,
  video: Video,
  default: FileText
} as const;

// Components
const KeyFactsSection: React.FC = () => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Chiffres clés 2025
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KEY_FACTS.map((fact, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
              <fact.icon className="text-white" size={24} />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{fact.number}</div>
            <div className="font-semibold text-gray-900 mb-1">{fact.label}</div>
            {fact.detail && <div className="text-sm text-gray-600">{fact.detail}</div>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PressReleasesSection: React.FC = () => (
  <section className="py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-gray-900">Communiqués de presse</h2>
      <div className="space-y-6">
        {PRESS_RELEASES.map((release, index) => {
          const badge = CATEGORY_BADGES[release.category];
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-gray-500">{release.date}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h3>
                  <p className="text-gray-600">{release.excerpt}</p>
                </div>
                <a
                  href={release.link}
                  download
                  className="flex-shrink-0 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2"
                >
                  <Download size={18} />
                  Télécharger
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const MediaAssetsSection: React.FC = () => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Ressources médias</h2>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Logos, photos haute définition et vidéos libres de droits pour usage éditorial.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MEDIA_ASSETS.map((asset, index) => {
          const Icon = ASSET_ICONS[asset.type] || ASSET_ICONS.default;
          return (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              {asset.previewUrl && (
                <div className="aspect-video bg-gray-200">
                  <img 
                    src={asset.previewUrl} 
                    alt={asset.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-gray-700" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{asset.title}</h3>
                    <p className="text-sm text-gray-600">{asset.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{asset.format}</span>
                  <span>{asset.size}</span>
                </div>
                <a
                  href={asset.downloadLink}
                  download
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Télécharger
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-yellow-600 flex-shrink-0" size={20} />
          <div>
            <p className="font-semibold text-yellow-900 mb-1">Conditions d'utilisation</p>
            <p className="text-sm text-yellow-800">
              Ces ressources sont destinées à un usage éditorial uniquement. 
              Merci de créditer "La Foire Aux Cadeaux" pour toute utilisation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MediaContactsSection: React.FC = () => (
  <section className="py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Contacts presse</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {MEDIA_CONTACTS.map((contact, index) => (
          <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <img src={contact.photo} alt={contact.name} className="w-20 h-20 rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{contact.name}</h3>
                <p className="text-gray-600">{contact.role}</p>
              </div>
            </div>
            <div className="space-y-3">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                <Mail size={18} />
                <span>{contact.email}</span>
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                <Phone size={18} />
                <span>{contact.phone}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AccreditationSection: React.FC = () => {
  const [form, setForm] = useState<AccreditationForm>({
    name: '',
    media: '',
    email: '',
    phone: '',
    role: 'journalist',
    coverage: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setForm({ name: '', media: '', email: '', phone: '', role: 'journalist', coverage: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const updateField = (field: keyof AccreditationForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="accreditation" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Demande d'accréditation presse</h2>
          <p className="text-gray-600">Réservée aux journalistes et professionnels des médias.</p>
        </div>

        {isSubmitted && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold text-green-900">Demande envoyée avec succès !</p>
              <p className="text-sm text-green-700">Nous traiterons votre demande sous 48h.</p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="Nom complet"
                required
                icon={User}
                value={form.name}
                onChange={(value) => updateField('name', value)}
                placeholder="Votre nom"
                type="text"
              />
              <FormField
                label="Média / Organisation"
                required
                icon={Building}
                value={form.media}
                onChange={(value) => updateField('media', value)}
                placeholder="Nom du média"
                type="text"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="Email professionnel"
                required
                icon={Mail}
                value={form.email}
                onChange={(value) => updateField('email', value)}
                placeholder="email@media.com"
                type="email"
              />
              <FormField
                label="Téléphone"
                required
                icon={Phone}
                value={form.phone}
                onChange={(value) => updateField('phone', value)}
                placeholder="+228 90 12 34 56"
                type="tel"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-900">Fonction *</label>
              <select
                value={form.role}
                onChange={(e) => updateField('role', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none"
                required
              >
                <option value="journalist">Journaliste</option>
                <option value="photographer">Photographe</option>
                <option value="videographer">Vidéaste</option>
                <option value="editor">Rédacteur en chef</option>
                <option value="blogger">Blogueur/Influenceur</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-900">Type de couverture envisagée *</label>
              <textarea
                value={form.coverage}
                onChange={(e) => updateField('coverage', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none resize-none"
                placeholder="Ex: Article sur l'économie créative togolaise..."
                required
              />
            </div>

            <SubmitButton isSubmitting={isSubmitting} />
          </form>
        </div>
      </div>
    </section>
  );
};

const FormField: React.FC<{
  label: string;
  required?: boolean;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type: string;
}> = ({ label, required, icon: Icon, value, onChange, placeholder, type }) => (
  <div>
    <label className="block text-sm font-semibold mb-2 text-gray-900">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none"
        placeholder={placeholder}
        required={required}
      />
    </div>
  </div>
);

const SubmitButton: React.FC<{ isSubmitting: boolean }> = ({ isSubmitting }) => (
  <>
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
        isSubmitting
          ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
          : 'bg-gray-900 hover:bg-gray-800 text-white'
      }`}
    >
      {isSubmitting ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Envoi en cours...
        </>
      ) : (
        <>
          <Mail size={20} />
          Envoyer la demande
        </>
      )}
    </button>
    <p className="text-xs text-gray-500 text-center">
      L'accréditation presse donne accès à la foire, à la zone presse et aux conférences.
    </p>
  </>
);

// Main Component
const Press: React.FC = () => {
  useSEO({
    title: "Espace Presse - La Foire Aux Cadeaux 2025 | Dossier de Presse & Médias",
    description: "Dossier de presse, communiqués, photos HD, vidéos et demandes d'accréditation.",
    url: "https://foireauxcadeaux.tg/presse",
    image: "https://foireauxcadeaux.tg/og-press.jpg",
    keywords: "dossier presse lomé, communiqué foire cadeaux, accréditation média togo"
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <FileText size={18} />
            <span className="text-sm font-semibold">Espace Presse & Médias</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ressources Presse</h1>
          
          <p className="text-xl text-gray-200 leading-relaxed mb-8">
            Dossier de presse, communiqués, photos HD, vidéos et accréditations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/press/dossier-presse-2025.pdf"
              download
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center"
            >
              <Download size={20} />
              Télécharger le dossier complet
            </a>
            <a
              href="#accreditation"
              className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Demander une accréditation
            </a>
          </div>
        </div>
      </section>

      <KeyFactsSection />
      <PressReleasesSection />
      <MediaAssetsSection />
      <MediaContactsSection />
      <AccreditationSection />
    </div>
  );
};

export default Press;
