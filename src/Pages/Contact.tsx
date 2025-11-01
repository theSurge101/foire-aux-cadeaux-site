import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle, Instagram, Facebook, Linkedin, User, FileText, AlertCircle } from 'lucide-react';
import useSEO from '../Hooks/useSEO';
import { Link } from 'react-router-dom';

interface ContactMethod {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  value: string;
  link: string;
  description: string;
  available?: string;
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  category: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useSEO({
    title: "Nous Contacter - La Foire Aux Cadeaux 2025 | Lomé",
    description: "Une question sur la foire ? Contactez-nous par email, téléphone, WhatsApp ou via notre formulaire. Notre équipe répond sous 24h.",
    url: "https://foireauxcadeaux.anaisconcept.biz/contact",
    image: "https://oireauxcadeaux.anaisconcept.biz/og-contact.jpg",
    keywords: "contact foire lomé, téléphone événement togo, email foire cadeaux, whatsapp foire"
  });

  const contactMethods: ContactMethod[] = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+228 90 12 31 48',
      link: 'https://wa.me/22890123148',
      description: 'Réponse rapide 7j/7',
      available: '8h-20h tous les jours'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+228 90 12 31 48',
      link: 'tel:+22890123148',
      description: 'Appelez-nous directement',
      available: 'Lun-Sam: 9h-18h'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'infos@anaisconcept.biz',
      link: 'mailto:infos@anaisconcept.biz',
      description: 'Réponse sous 24h',
      available: 'Toujours disponible'
    },
    {
      icon: MapPin,
      title: 'Bureaux',
      value: '58, Avenue Kléber Dadjo, Quartier des Étoiles Wétrivi Kondji, Lomé',
      link: '#map',
      description: 'Visitez nos bureaux',
      available: 'Lun-Ven: 9h-17h'
    }
  ];

  const categories = [
    { value: 'general', label: 'Question générale' },
    { value: 'exhibitor', label: 'Devenir exposant' },
    { value: 'visitor', label: 'Information visiteur' },
    { value: 'premium', label: 'Pass Premium' },
    { value: 'partnership', label: 'Partenariat/Sponsoring' },
    { value: 'press', label: 'Demande presse' },
    { value: 'other', label: 'Autre' }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@foireauxcadeaux',
      link: 'https://www.instagram.com/anaisconcept/',
      color: 'hover:bg-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'La Foire Aux Cadeaux - FAC ',
      link: 'https://facebook.com/foireauxcadeaux',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: '@Foire Aux Cadeaux de Lomé',
      link: 'https://www.linkedin.com/showcase/foire-aux-cadeaux-de-lom%C3%A9/',
      color: 'hover:bg-gray-800'
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    // Phone validation (Togo format)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^(\+228)?[0-9]{8}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Numéro invalide (format: +228 XX XX XX XX)';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Le sujet doit contenir au moins 5 caractères';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Le message doit contenir au moins 20 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - Replace with actual HubSpot/backend integration
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would send to HubSpot or your backend
      console.log('Form submitted:', formData);

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        category: 'general'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une question ? <br />Un besoin d'information ? <br />Notre équipe est là pour vous aider. <br />
            Nous répondons sous 24h maximum.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Plusieurs moyens de nous joindre
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-gray-900 group-hover:bg-gray-800 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <method.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{method.title}</h3>
                <p className="text-gray-900 font-medium mb-2">{method.value}</p>
                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                {method.available && (
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={12} />
                    <span>{method.available}</span>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-green-900">Message envoyé avec succès !</p>
                    <p className="text-sm text-green-700">Nous vous répondrons sous 24h.</p>
                  </div>
                </div>
              )}

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                          errors.name 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-300 focus:border-gray-900'
                        }`}
                        placeholder="Votre nom"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                          errors.email 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-300 focus:border-gray-900'
                        }`}
                        placeholder="votre@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-900">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                          errors.phone 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-300 focus:border-gray-900'
                        }`}
                        placeholder="+228 90 12 31 48"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-semibold mb-2 text-gray-900">
                      Catégorie de votre demande
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none transition-colors"
                    >
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-900">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                          errors.subject 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-300 focus:border-gray-900'
                        }`}
                        placeholder="Objet de votre message"
                      />
                    </div>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:border-gray-900'
                      }`}
                      placeholder="Décrivez votre demande en détail..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.message}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      {formData.message.length} / 1000 caractères
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
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
                        <Send size={20} />
                        Envoyer le message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Horaires de bureau
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Lundi - Vendredi</span>
                    <span className="text-gray-600">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Samedi</span>
                    <span className="text-gray-600">9h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Dimanche</span>
                    <span className="text-red-600 font-semibold">Fermé</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note :</strong> WhatsApp reste disponible 7j/7 de 8h à 20h pour les questions urgentes
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Suivez-nous
                </h3>
                <p className="text-gray-600 mb-6">
                  Restez connectés pour toutes les actualités, coulisses et annonces exclusives !
                </p>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-900 hover:text-white rounded-lg transition-all group ${social.color}`}
                    >
                      <div className="w-10 h-10 bg-white group-hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                        <social.icon className="text-gray-900 group-hover:text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">{social.name}</p>
                        <p className="text-sm opacity-75">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-900 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Besoin d'aide rapide ?
                </h3>
                <div className="space-y-3">
                  <a href="/visiteurs" className="block text-gray-300 hover:text-white transition-colors">
                    → Informations visiteurs
                  </a>
                  <a href="/exposants" className="block text-gray-300 hover:text-white transition-colors">
                    → Devenir exposant
                  </a>
                  <a href="/programme" className="block text-gray-300 hover:text-white transition-colors">
                    → Consulter le programme
                  </a>
                  <a href="/pass-premium" className="block text-gray-300 hover:text-white transition-colors">
                    → Acheter un Pass Premium
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Nos bureaux
          </h2>

          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9730824993194!2d1.2194143!3d6.134318999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1e6608d109d%3A0xd2277af0306a339!2sANA%C3%8FS%20Concept!5e0!3m2!1sfr!2stg!4v1761915158157!5m2!1sfr!2stg"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Adresse complète</h4>
                  <p className="text-gray-600">
                    ANAÏS Concept - La Foire Aux Cadeaux<br />
                    558, Avenue Kléber Dadjo,<br />
                    Quartier des Étoiles, Wétrivi Kondji<br />
                    Lomé, Togo
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Comment venir</h4>
                  <p className="text-gray-600 text-sm">
                    <strong>En taxi :</strong> Dites "Quartier des étoiles, face à l'entreprise MATS transports"<br />
                    <strong>En personnel :</strong> Localisation GPS (Carte interactive plus haut)<br />
                    <strong>Parking :</strong> Disponible, peu de places
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
