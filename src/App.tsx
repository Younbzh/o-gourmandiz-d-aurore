import React, { useState, useEffect } from 'react';
import {
  Cake, Cookie, Star, Gift, Sparkles, Leaf, Clock,
  Award, MapPin, Phone, Mail, MapPinned,
  ChevronDown, ChevronLeft, ChevronRight,
  Menu, X, Check, MessageCircle
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

const marqueeItems = [
  'Tarte citron noisette meringué',
  'Pyramide de macarons',
  'Fraisier aux fleurs',
  'Sablés personnalisés',
  'Pièce montée à la française',
  'Number cake personnalisé',
  'Biscuiterie artisanale',
  'Snickers revisité',
  'Entremets de saison',
  'Macarons à votre couleur',
];

const gallery = [
  { src: '/gateau-fraises.jpeg', alt: 'Fraisier entremets aux fleurs comestibles' },
  { src: '/gateau-mariage.jpeg', alt: 'Pièce montée fraisier pour mariage' },
  { src: '/tarte.jpeg', alt: 'Tarte citron noisette meringué' },
  { src: '/macaron-1.jpeg', alt: 'Macarons vanille' },
  { src: '/macaron-2.jpeg', alt: 'Macarons' },
  { src: '/macarons-fille-garcon.jpeg', alt: 'Macarons fille & garçon' },
  { src: '/sables-personnalises.jpeg', alt: 'Sablés personnalisés' },
  { src: '/gateau-1-an.jpeg', alt: 'Gâteau 1 an' },
  { src: '/gateau-3-ans.jpeg', alt: 'Gâteau 3 ans' },
  { src: '/gateau-8-ans.jpeg', alt: 'Gâteau 8 ans' },
  { src: '/gateau 10-ans.jpeg', alt: 'Gâteau 10 ans' },
  { src: '/gateau-40-ans.jpeg', alt: 'Gâteau 40 ans' },
  { src: '/gateau-baby-shower.jpeg', alt: 'Gâteau baby shower' },
  { src: '/tarte-floral-multi-fruits.jpeg', alt: 'Tarte florale multi-fruits' },
  { src: '/tartelette-fleur.jpeg', alt: 'Tartelette fleurie' },
  { src: '/gourmandise-st-valentin.jpeg', alt: 'Gourmandise Saint-Valentin' },
  { src: '/cupcakes.jpeg', alt: 'Cupcakes' },
];

const iconFor = (name: string, cls = 'w-6 h-6 text-white') => {
  const map: Record<string, React.ReactNode> = {
    Cake: <Cake className={cls} />,
    Cookie: <Cookie className={cls} />,
    Star: <Star className={cls} />,
    Gift: <Gift className={cls} />,
    Sparkles: <Sparkles className={cls} />,
    Leaf: <Leaf className={cls} />,
    Clock: <Clock className={cls} />,
    Award: <Award className={cls} />,
    MessageCircle: <MessageCircle className={cls} />,
    Phone: <Phone className={cls} />,
    MapPin: <MapPin className={cls} />,
  };
  return map[name] ?? null;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [galleryStart, setGalleryStart] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setGalleryStart(prev => (prev + 1) % gallery.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const goPrev = () => setGalleryStart(prev => (prev - 1 + gallery.length) % gallery.length);
  const goNext = () => setGalleryStart(prev => (prev + 1) % gallery.length);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }
  };

  const navLinks = [
    { label: 'Qui suis-je', id: 'about' },
    { label: 'Les incontournables', id: 'incontournables' },
    { label: 'Saison', id: 'saison' },
    { label: 'Événements', id: 'evenements' },
    { label: 'FAQ', id: 'faq' },
  ];

  const quickLinks = [
    { label: 'Les incontournables', id: 'incontournables', icon: 'Cake' },
    { label: 'Gourmandiz de saison', id: 'saison', icon: 'Leaf' },
    { label: 'Événements', id: 'evenements', icon: 'Star' },
    { label: 'Je commande', id: 'contact', icon: 'MessageCircle', highlight: true },
  ];

  // 3 photos visibles en carousel (circulaire)
  const slides = [-1, 0, 1].map(offset =>
    gallery[(galleryStart + offset + gallery.length) % gallery.length]
  );

  return (
    <div className="min-h-screen bg-[#FEF6EE]">

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <img src="/logo.jpeg" alt="Ô Gourmandiz d'Aurore" className="h-14 w-auto object-contain rounded" />

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map(({ label, id }) => (
                <button key={id} onClick={() => scrollToSection(id)}
                  className="text-gray-700 hover:text-[#E8899B] transition-colors font-medium text-sm">
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
                {navLinks.map(({ label, id }) => (
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

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="/gateau-fraises.jpeg" alt="Fraisier d'Aurore" className="w-full h-full object-cover" />
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
              Je commande
            </button>
            <button onClick={() => scrollToSection('incontournables')}
              className="bg-white/15 backdrop-blur-sm text-white px-10 py-4 rounded-xl hover:bg-white/25 transition-all font-bold text-lg border-2 border-white/30">
              Je découvre
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Bandeau défilant */}
      <div className="bg-[#2B1820] border-y border-[#E8899B]/20 py-4 overflow-hidden">
        <div className="flex gap-0 whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-[#F5D5C0] font-medium text-sm px-6 font-display italic">
              {item}
              <span className="text-[#E8899B] mx-6">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Liens rapides */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickLinks.map(({ label, id, icon, highlight }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  highlight
                    ? 'bg-[#E8899B] text-white shadow-md'
                    : 'bg-[#FEF6EE] text-[#2B1820] hover:bg-[#E8899B]/10'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  highlight ? 'bg-white/20' : 'bg-[#E8899B]'
                }`}>
                  {iconFor(icon)}
                </div>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Qui suis-je */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[#2B1820] mb-4">
              {siteConfig.about.title}
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              {siteConfig.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
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
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-[#FEF6EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold italic text-[#2B1820] mb-3">
              {siteConfig.modalites.title}
            </h2>
            <p className="text-lg text-gray-500">{siteConfig.modalites.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.modalites.steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#E8899B] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {step.number}
                </div>
                <div className="mt-4 mb-4 flex justify-center">
                  <div className="w-14 h-14 bg-[#FEF6EE] rounded-xl flex items-center justify-center">
                    {iconFor(step.icon, 'w-7 h-7 text-[#E8899B]')}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold italic text-[#2B1820] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={() => scrollToSection('contact')}
              className="bg-[#E8899B] text-white px-10 py-4 rounded-xl hover:bg-[#D07088] transition-all font-bold text-lg shadow-lg hover:shadow-xl">
              Je passe commande
            </button>
          </div>
        </div>
      </section>

      {/* Les incontournables */}
      <section id="incontournables" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[#2B1820] mb-4">
              {siteConfig.incontournables.title}
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              {siteConfig.incontournables.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {siteConfig.incontournables.list.map((item, index) => (
              <div key={index} className="bg-[#FEF6EE] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="h-56 overflow-hidden relative">
                  <img src={item.photo} alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1820]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#E8899B] rounded-xl flex items-center justify-center shadow-lg">
                    {iconFor(item.icon)}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold italic text-[#2B1820] mb-3">{item.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
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

      {/* Galerie — carousel */}
      <section id="gallery" className="py-24 bg-[#FEF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[#2B1820] mb-4">
              La galerie
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Quelques-unes de mes créations — chaque pièce est unique
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[300px] md:h-[420px]">
              {slides.map((photo, i) => (
                <div
                  key={`${galleryStart}-${i}`}
                  className={`overflow-hidden rounded-2xl shadow-md transition-all duration-500 ${
                    i === 1
                      ? 'md:scale-105 md:shadow-2xl z-10'
                      : 'hidden md:block opacity-70'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Flèches */}
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#E8899B] hover:text-white transition-colors group z-20">
              <ChevronLeft className="w-6 h-6 text-[#2B1820] group-hover:text-white" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#E8899B] hover:text-white transition-colors group z-20">
              <ChevronRight className="w-6 h-6 text-[#2B1820] group-hover:text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setGalleryStart(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === galleryStart
                    ? 'w-6 h-2.5 bg-[#E8899B]'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-[#E8899B]/50'
                }`}
              />
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Encore plus de créations sur{' '}
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
               className="text-[#E8899B] hover:underline font-medium">Instagram</a>
            {' '}et{' '}
            <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer"
               className="text-[#E8899B] hover:underline font-medium">TikTok</a>
          </p>
        </div>
      </section>

      {/* Gourmandiz de saison */}
      <section id="saison" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[#2B1820] mb-4">
              {siteConfig.saisonSection.title}
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              {siteConfig.saisonSection.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-12">
              {siteConfig.saisonSection.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {siteConfig.saisonSection.seasons.map((season, index) => (
                <div key={index} className="bg-[#FEF6EE] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="text-4xl mb-3">{season.emoji}</div>
                  <h3 className="font-display text-xl font-bold italic text-[#2B1820] mb-4">{season.name}</h3>
                  <ul className="space-y-2">
                    {season.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#E8899B] rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 mb-6 italic">Les créations de saison varient — contactez-moi pour connaître la carte du moment</p>
            <button onClick={() => scrollToSection('contact')}
              className="bg-[#E8899B] text-white px-10 py-4 rounded-xl hover:bg-[#D07088] transition-all font-bold text-lg shadow-lg hover:shadow-xl">
              {siteConfig.saisonSection.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Événements */}
      <section id="evenements" className="py-24 bg-gradient-to-br from-[#2B1820] to-[#1C1215] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="font-display text-5xl md:text-6xl font-bold italic mb-4">
              {siteConfig.evenementsSection.title}
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {siteConfig.evenementsSection.subtitle}
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-[#E8899B]/20 border border-[#E8899B]/40 text-[#FFD8E2] px-5 py-2 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
              {siteConfig.evenementsSection.note}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.evenementsSection.list.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="h-52 overflow-hidden relative">
                  <img src={item.photo} alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1820]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#E8899B] rounded-xl flex items-center justify-center shadow-lg">
                    {iconFor(item.icon)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold italic mb-3 text-white">{item.name}</h3>
                  <p className="text-white/70 mb-5 text-sm leading-relaxed">{item.description}</p>
                  <ul className="space-y-1.5">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white/80 text-sm">
                        <Check className="w-4 h-4 text-[#E8899B] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => scrollToSection('contact')}
              className="bg-[#E8899B] text-white px-10 py-4 rounded-xl hover:bg-[#D07088] transition-all font-bold text-lg shadow-xl hover:shadow-2xl">
              Je prends contact pour mon événement
            </button>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[#2B1820] mb-4">
              {siteConfig.reviews.title}
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              {siteConfig.reviews.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {siteConfig.reviews.list.map((review, index) => (
              <div key={index} className="bg-[#FEF6EE] rounded-2xl p-8 border border-[#E8899B]/20 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E8899B] text-[#E8899B]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#2B1820]">{review.name}</span>
                  <span className="text-xs text-gray-400 bg-white px-3 py-1 rounded-full">{review.occasion}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2B1820] text-white px-8 py-4 rounded-xl hover:bg-[#1C1215] transition-colors font-semibold">
              <Star className="w-5 h-5 text-[#E8899B]" />
              {siteConfig.reviews.googleCta}
            </a>
          </div>
        </div>
      </section>

      {/* Ce que je vous promets */}
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
                    {iconFor(reason.icon)}
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

      {/* Zone de retrait */}
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
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-[#FEF6EE] transition-colors">
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

      {/* Allergènes */}
      <section className="py-16 bg-[#FEF6EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8899B]/20">
            <h2 className="font-display text-3xl font-bold italic text-[#2B1820] mb-3">
              {siteConfig.allergens.title}
            </h2>
            <div className="w-12 h-1 bg-[#E8899B] rounded mb-5"></div>
            <p className="text-gray-600 mb-6 leading-relaxed">{siteConfig.allergens.intro}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {siteConfig.allergens.list.map((allergen, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#FEF6EE] rounded-xl p-4">
                  <div className="w-2 h-2 bg-[#E8899B] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-[#2B1820]">{allergen.name}</span>
                    <span className="text-gray-500 text-sm ml-2">— {allergen.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
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
              <p className="text-xl mb-8 text-white/80">
                Écrivez-moi par SMS ou WhatsApp, ou appelez-moi directement — je vous réponds vite.
              </p>

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
              </div>

              <p className="text-white/50 text-sm mt-6">
                Email : <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white/80 underline">{siteConfig.contact.email}</a>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Horaires */}
            <div className="bg-[#FEF6EE] rounded-2xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#E8899B] rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold italic text-[#2B1820]">Disponibilités</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wide">Horaires d'appels</p>
              <div className="space-y-3 mb-5">
                {siteConfig.hours.callHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{item.day}</span>
                    <span className="text-[#E8899B] font-semibold">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#E8899B]/20 text-center">
                <p className="text-[#2B1820] font-semibold">{siteConfig.hours.pickup}</p>
              </div>
            </div>

            {/* Adresse */}
            <div className="bg-[#FEF6EE] rounded-2xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#E8899B] rounded-xl flex items-center justify-center mr-4">
                  <MapPinned className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold italic text-[#2B1820]">Laboratoire</h3>
              </div>
              <div className="space-y-3 mb-5">
                <p className="text-gray-700 font-medium">{siteConfig.contact.address.street}</p>
                <p className="text-gray-700">{siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}</p>
                <p className="text-gray-500 text-sm">Côtes-d'Armor, Bretagne</p>
              </div>
              <div className="bg-[#2B1820]/5 border border-[#2B1820]/10 rounded-xl p-4">
                <p className="text-[#2B1820] text-sm font-medium leading-relaxed">{siteConfig.contact.labNote}</p>
              </div>
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
                « Du beau, du bon, avec des produits d'ici. »
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
                <p className="flex items-start">
                  <MapPinned className="w-4 h-4 mr-2 mt-0.5 text-[#E8899B] flex-shrink-0" />
                  <span>{siteConfig.contact.address.street}<br />{siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#E8899B]">Informations</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Pâtissière indépendante</p>
                <p>CAP Pâtissier 2023</p>
                <p>Laboratoire privé — sur commande uniquement</p>
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
