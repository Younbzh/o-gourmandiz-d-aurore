import React, { useState, useEffect } from 'react';
import {
  Cake, Cookie, Star, Gift, Sparkles, Leaf, Clock,
  Award, CheckCircle, MapPin,
  Phone, Mail, MapPinned, ChevronDown, Menu, X, Check, MessageCircle
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

const marqueeItems = [
  'Tarte citron noisette meringué',
  'Pyramide de macarons',
  'Fraisier aux fleurs',
  'Sablés personnalisés',
  'Pièce montée',
  'Gâteau d\'anniversaire',
  'Biscuiterie artisanale',
  'Snickers revisité',
  'Entremets de saison',
  'Cupcakes gourmands',
];

const gallery = [
  { src: '/gateau-fraises.jpeg', alt: 'Fraisier entremets aux fleurs comestibles', featured: true },
  { src: '/gateau-mariage.jpeg', alt: 'Pièce montée fraisier pour mariage', featured: true },
  { src: '/tarte.jpeg', alt: 'Tarte citron noisette meringué', featured: false },
  { src: '/macaron-1.jpeg', alt: 'Macarons vanille', featured: false },
  { src: '/macaron-2.jpeg', alt: 'Macarons', featured: false },
  { src: '/macarons-fille-garcon.jpeg', alt: 'Macarons fille & garçon', featured: false },
  { src: '/sables-personnalises.jpeg', alt: 'Sablés personnalisés', featured: false },
  { src: '/gateau-1-an.jpeg', alt: 'Gâteau 1 an', featured: false },
  { src: '/gateau-3-ans.jpeg', alt: 'Gâteau 3 ans', featured: false },
  { src: '/gateau-8-ans.jpeg', alt: 'Gâteau 8 ans', featured: false },
  { src: '/gateau 10-ans.jpeg', alt: 'Gâteau 10 ans', featured: false },
  { src: '/gateau-40-ans.jpeg', alt: 'Gâteau 40 ans', featured: false },
  { src: '/gateau-baby-shower.jpeg', alt: 'Gâteau baby shower', featured: false },
  { src: '/tarte-floral-multi-fruits.jpeg', alt: 'Tarte florale multi-fruits', featured: false },
  { src: '/tartelette-fleur.jpeg', alt: 'Tartelette fleurie', featured: false },
  { src: '/gourmandise-st-valentin.jpeg', alt: 'Gourmandise Saint-Valentin', featured: false },
  { src: '/cupcakes.jpeg', alt: 'Cupcakes', featured: false },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }
  };

  return (
    <div className="min-h-screen bg-[#FEF6EE]">

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <img src="/logo.jpeg" alt="Ô Gourmandiz d'Aurore" className="h-14 w-auto object-contain rounded" />

            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: "L'histoire", id: 'about' },
                { label: 'Les créations', id: 'services' },
                { label: 'Galerie', id: 'gallery' },
                { label: 'FAQ', id: 'faq' },
              ].map(({ label, id }) => (
                <button key={id} onClick={() => scrollToSection(id)}
                  className="text-gray-700 hover:text-[#E8899B] transition-colors font-medium">
                  {label}
                </button>
              ))}
              <button onClick={() => scrollToSection('contact')}
                className="bg-[#E8899B] text-white px-6 py-2.5 rounded-lg hover:bg-[#D07088] transition-all font-semibold shadow-md hover:shadow-lg">
                Commander
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                {[
                  { label: "L'histoire", id: 'about' },
                  { label: 'Les créations', id: 'services' },
                  { label: 'Galerie', id: 'gallery' },
                  { label: 'FAQ', id: 'faq' },
                ].map(({ label, id }) => (
                  <button key={id} onClick={() => scrollToSection(id)}
                    className="text-left py-2 text-gray-700 hover:text-[#E8899B]">
                    {label}
                  </button>
                ))}
                <button onClick={() => scrollToSection('contact')}
                  className="text-left py-2 bg-[#E8899B] text-white px-4 rounded-lg font-semibold">
                  Commander
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero – plein écran avec photo en fond */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/gateau-fraises.jpeg"
            alt="Fraisier d'Aurore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B1820]/55 via-[#2B1820]/50 to-[#2B1820]/80" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-24">
          <div className="inline-flex items-center bg-[#E8899B]/25 backdrop-blur-sm text-[#FFD8E2] border border-[#E8899B]/40 px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <Cake className="w-4 h-4 mr-2" />
            Pâtisserie artisanale sur commande · La Motte (22)
          </div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 italic">
            Du beau,<br />du bon,<br />
            <span className="text-[#FFB8CB] not-italic">avec des produits d'ici.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={() => scrollToSection('contact')}
              className="bg-[#E8899B] text-white px-10 py-4 rounded-xl hover:bg-[#D07088] transition-all font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105">
              Passer une commande
            </button>
            <button onClick={() => scrollToSection('gallery')}
              className="bg-white/15 backdrop-blur-sm text-white px-10 py-4 rounded-xl hover:bg-white/25 transition-all font-bold text-lg border-2 border-white/30">
              Voir les créations
            </button>
          </div>

          <div className="flex gap-8 justify-center">
            {siteConfig.about.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl font-bold text-[#FFB8CB] italic">{stat.number}</div>
                <div className="text-xs text-white/60 font-medium mt-1 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Bandeau défilant */}
      <div className="bg-[#2B1820] border-y border-[#E8899B]/20 py-4 overflow-hidden">
        <div
          className="flex gap-0 whitespace-nowrap"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-[#F5D5C0] font-medium text-sm px-6 font-display italic">
              {item}
              <span className="text-[#E8899B] mx-6">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[#2B1820] mb-4">
              {siteConfig.about.title}
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              {siteConfig.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              {siteConfig.about.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#2B1820] to-[#1C1215] p-8 rounded-2xl text-white shadow-xl">
              <h3 className="font-display text-2xl font-bold italic mb-2">Ma philosophie</h3>
              <div className="w-12 h-1 bg-[#E8899B] rounded mb-6"></div>
              <div className="space-y-4">
                {siteConfig.about.values.map((value, index) => (
                  <div key={index} className="border-l-4 border-[#E8899B]/60 pl-4">
                    <h4 className="font-bold text-lg mb-1 text-[#E8899B]">{value.title}</h4>
                    <p className="text-white/80">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pullquote */}
        <div className="bg-[#FEF6EE] border-y border-[#E8899B]/20 py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="font-display text-7xl text-[#E8899B]/30 leading-none mb-2">"</div>
            <blockquote className="font-display text-3xl md:text-4xl italic text-[#2B1820] leading-snug mb-6">
              J'aime quand l'esthétique raconte l'instant.
            </blockquote>
            <p className="text-[#E8899B] font-semibold tracking-widest text-sm uppercase">— Aurore Delmas</p>
          </div>
        </div>
      </section>

      {/* Services – cartes avec photo */}
      <section id="services" className="py-24 bg-[#FEF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[#2B1820] mb-4">
              {siteConfig.services.title}
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              {siteConfig.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {siteConfig.services.list.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group">
                {/* Photo */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={service.photo}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1820]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#E8899B] rounded-xl flex items-center justify-center shadow-lg">
                    {service.icon === 'Cake' && <Cake className="w-6 h-6 text-white" />}
                    {service.icon === 'Cookie' && <Cookie className="w-6 h-6 text-white" />}
                    {service.icon === 'Star' && <Star className="w-6 h-6 text-white" />}
                    {service.icon === 'Gift' && <Gift className="w-6 h-6 text-white" />}
                  </div>
                </div>
                {/* Contenu */}
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold italic text-[#2B1820] mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check className="w-5 h-5 text-[#E8899B] mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie – avec photos vedettes */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[#2B1820] mb-4">
              La galerie
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Voici quelques-unes de mes créations — chaque pièce est unique, réalisée pour une occasion précise
            </p>
          </div>

          {/* Grille avec vedettes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
            {gallery.map((photo, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow ${
                  photo.featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Encore plus de créations sur{' '}
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
               className="text-[#E8899B] hover:underline font-medium">Instagram</a>
            {' '}et{' '}
            <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer"
               className="text-[#E8899B] hover:underline font-medium">TikTok</a>
          </p>
        </div>
      </section>

      {/* Pourquoi choisir */}
      <section className="py-24 bg-[#FEF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[#2B1820] mb-4">
              {siteConfig.whyChooseUs.title}
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              {siteConfig.whyChooseUs.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.whyChooseUs.reasons.map((reason, index) => (
              <div key={index} className="border-l-4 border-[#E8899B] bg-white p-6 rounded-r-2xl hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E8899B] rounded-xl flex items-center justify-center flex-shrink-0">
                    {reason.icon === 'Clock' && <Clock className="w-6 h-6 text-white" />}
                    {reason.icon === 'MapPin' && <MapPin className="w-6 h-6 text-white" />}
                    {reason.icon === 'Sparkles' && <Sparkles className="w-6 h-6 text-white" />}
                    {reason.icon === 'CheckCircle' && <CheckCircle className="w-6 h-6 text-white" />}
                    {reason.icon === 'Award' && <Award className="w-6 h-6 text-white" />}
                    {reason.icon === 'Leaf' && <Leaf className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold italic text-[#2B1820] mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone de commande */}
      <section className="py-24 bg-gradient-to-br from-[#2B1820] to-[#1C1215] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-[#E8899B]" />
            <h2 className="font-display text-5xl font-bold italic mb-4">
              {siteConfig.serviceArea.title}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {siteConfig.serviceArea.description}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {siteConfig.serviceArea.cities.map((city, index) => (
                <div key={index} className="bg-white/10 px-4 py-3 rounded-xl text-center font-medium border border-[#E8899B]/20">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-center text-white/70 font-medium">
              {siteConfig.serviceArea.radius}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[#2B1820] mb-4">
              {siteConfig.faq.title}
            </h2>
            <p className="text-xl text-gray-500">
              {siteConfig.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {siteConfig.faq.questions.map((item, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#E8899B] transition-colors">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-[#FEF6EE] transition-colors"
                >
                  <span className="font-display font-bold italic text-[#2B1820] text-lg pr-4">{item.question}</span>
                  <ChevronDown className={`w-6 h-6 text-[#E8899B] flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 py-5 bg-[#FEF6EE] border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-[#FEF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[#2B1820] mb-4">
              {siteConfig.finalCTA.title}
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              {siteConfig.finalCTA.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-[#2B1820] to-[#1C1215] rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl border border-[#E8899B]/20">
              <h3 className="font-display text-4xl font-bold italic mb-3">Je suis là pour vous</h3>
              <div className="w-16 h-1 bg-[#E8899B] rounded mx-auto mb-6"></div>
              <p className="text-xl mb-8 text-white/80">Appelez-moi, écrivez-moi sur WhatsApp ou par email — je vous réponds vite et on construit votre commande ensemble.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="bg-[#E8899B] text-white px-8 py-4 rounded-xl hover:bg-[#D07088] transition-all font-bold text-lg shadow-lg hover:shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center">
                  <Phone className="w-6 h-6" />
                  {siteConfig.contact.phone}
                </a>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Bonjour%20Aurore%2C%20je%20souhaite%20passer%20une%20commande%20%F0%9F%8E%82`}
                  target="_blank" rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#1DAE54] transition-all font-bold text-lg shadow-lg hover:shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center">
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </a>
                <a href={`mailto:${siteConfig.contact.email}`}
                  className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-bold text-lg flex items-center gap-3 w-full sm:w-auto justify-center">
                  <Mail className="w-6 h-6" />
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8899B] to-[#C05E74] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold italic text-[#2B1820] mb-4">Appelez-moi ou écrivez sur WhatsApp</h3>
              <div className="space-y-3">
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="block text-[#E8899B] hover:underline text-lg font-semibold">
                  {siteConfig.contact.phone}
                </a>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Bonjour%20Aurore%2C%20je%20souhaite%20passer%20une%20commande%20%F0%9F%8E%82`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#1DAE54] transition-colors font-semibold text-sm">
                  <MessageCircle className="w-4 h-4" />
                  Écrire sur WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8899B] to-[#C05E74] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold italic text-[#2B1820] mb-4">Email</h3>
              <a href={`mailto:${siteConfig.contact.email}`}
                className="text-[#E8899B] hover:underline text-sm font-semibold break-all">
                {siteConfig.contact.email}
              </a>
              <p className="text-sm text-gray-500 mt-4">Je vous réponds sous 24–48h</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8899B] to-[#C05E74] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPinned className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold italic text-[#2B1820] mb-4">Secteur</h3>
              <p className="text-gray-700 font-medium">
                {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
              </p>
              <p className="text-gray-600 text-sm mt-1">Côtes-d'Armor, Bretagne</p>
              <p className="text-sm text-gray-500 mt-4">Je vous remets la commande en main propre</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-[#E8899B] mr-3" />
                <h3 className="font-display text-2xl font-bold italic text-[#2B1820]">Disponibilités</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {siteConfig.hours.details.map((item, index) => (
                  <div key={index} className="text-center p-4 bg-[#FEF6EE] rounded-xl">
                    <p className="font-bold text-gray-700 mb-1">{item.day}</p>
                    <p className="text-gray-600">{item.hours}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">{siteConfig.hours.message}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1215] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/logo.jpeg" alt="Ô Gourmandiz d'Aurore" className="h-12 w-auto object-contain rounded mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed mb-4 font-display italic">
                « Mon objectif est simple : vous offrir du beau et du bon, avec des produits d'ici. »
              </p>
              <div className="flex gap-2">
                {[
                  { label: 'Instagram', url: siteConfig.social.instagram },
                  { label: 'Facebook', url: siteConfig.social.facebook },
                  { label: 'TikTok', url: siteConfig.social.tiktok },
                ].map(({ label, url }) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                     className="text-xs bg-white/10 hover:bg-[#E8899B]/30 hover:text-white px-3 py-1.5 rounded-full text-gray-400 transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#E8899B]">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="flex items-center hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mr-2 text-[#E8899B] flex-shrink-0" />
                  {siteConfig.contact.phone}
                </a>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 mr-2 text-[#E8899B] flex-shrink-0" />
                  WhatsApp
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-2 text-[#E8899B] flex-shrink-0" />
                  {siteConfig.contact.email}
                </a>
                <p className="flex items-center">
                  <MapPinned className="w-4 h-4 mr-2 text-[#E8899B] flex-shrink-0" />
                  {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#E8899B]">Informations</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Pâtissière & biscuitière indépendante</p>
                <p>CAP Pâtissier</p>
                <p>22600 La Motte</p>
                <p>Côtes-d'Armor, Bretagne</p>
                <p>En activité depuis oct. 2025</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} {siteConfig.businessName} – Tous droits réservés</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
