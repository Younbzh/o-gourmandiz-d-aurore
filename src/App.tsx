import React, { useState, useEffect } from 'react';
import { 
  PaintBucket, Home, Building2, Palette, Square, Award, CheckCircle, 
  Users, Wrench, MapPin, Euro, Phone, Mail, MapPinned, Clock,
  ChevronDown, Menu, X, Check
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0099FF] to-[#0066CC] rounded-lg flex items-center justify-center shadow-lg">
                <PaintBucket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#3A3A3A] tracking-tight">
                  {siteConfig.businessName}
                </h1>
                <p className="text-sm text-gray-600">{siteConfig.tagline}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#0099FF] transition-colors font-medium">
                L'entreprise
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#0099FF] transition-colors font-medium">
                Prestations
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-[#0099FF] transition-colors font-medium">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-[#0099FF] text-white px-6 py-2.5 rounded-lg hover:bg-[#0088EE] transition-all font-semibold shadow-md hover:shadow-lg">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-700 hover:text-[#0099FF]">
                  L'entreprise
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-700 hover:text-[#0099FF]">
                  Prestations
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left py-2 text-gray-700 hover:text-[#0099FF]">
                  FAQ
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 bg-[#0099FF] text-white px-4 rounded-lg">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0099FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/40 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-[#0099FF]/10 text-[#0099FF] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4 mr-2" />
                Depuis 2013 à Loudéac
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#3A3A3A] leading-tight mb-6">
                {siteConfig.hero.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {siteConfig.hero.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                {siteConfig.hero.features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Check className="w-5 h-5 text-[#0099FF] mr-2" />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#0099FF] text-white px-8 py-4 rounded-lg hover:bg-[#0088EE] transition-all font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {siteConfig.hero.cta.primary}
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-white text-[#0099FF] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-bold text-lg shadow-md border-2 border-[#0099FF]"
                >
                  {siteConfig.hero.cta.secondary}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {siteConfig.about.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-[#0099FF] mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Nicolas Chapron</strong> et son équipe de professionnels qualifiés vous accompagnent dans tous vos projets de peinture et décoration.
                  </p>
                  <div className="flex items-center text-[#0099FF] font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    {siteConfig.contact.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mb-4">
              {siteConfig.about.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteConfig.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              {siteConfig.about.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#0099FF] to-[#0066CC] p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Nos valeurs</h3>
              <div className="space-y-4">
                {siteConfig.about.values.map((value, index) => (
                  <div key={index} className="border-l-4 border-white/50 pl-4">
                    <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                    <p className="text-white/90">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mb-4">
              {siteConfig.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteConfig.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.list.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0099FF] to-[#0066CC] rounded-xl flex items-center justify-center mb-6 shadow-md">
                  {service.icon === 'PaintBucket' && <PaintBucket className="w-8 h-8 text-white" />}
                  {service.icon === 'Home' && <Home className="w-8 h-8 text-white" />}
                  {service.icon === 'Building2' && <Building2 className="w-8 h-8 text-white" />}
                  {service.icon === 'Palette' && <Palette className="w-8 h-8 text-white" />}
                  {service.icon === 'Square' && <Square className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-[#3A3A3A] mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-[#0099FF] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mb-4">
              {siteConfig.whyChooseUs.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteConfig.whyChooseUs.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.whyChooseUs.reasons.map((reason, index) => (
              <div key={index} className="border-l-4 border-[#0099FF] bg-gray-50 p-6 rounded-r-xl hover:bg-white transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0099FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    {reason.icon === 'Award' && <Award className="w-6 h-6 text-white" />}
                    {reason.icon === 'CheckCircle' && <CheckCircle className="w-6 h-6 text-white" />}
                    {reason.icon === 'Users' && <Users className="w-6 h-6 text-white" />}
                    {reason.icon === 'Wrench' && <Wrench className="w-6 h-6 text-white" />}
                    {reason.icon === 'MapPin' && <MapPin className="w-6 h-6 text-white" />}
                    {reason.icon === 'Euro' && <Euro className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3A3A3A] mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gradient-to-br from-[#0099FF] to-[#0066CC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {siteConfig.serviceArea.title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {siteConfig.serviceArea.description}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {siteConfig.serviceArea.cities.map((city, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg text-center font-medium">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-center text-white/90 font-medium">
              {siteConfig.serviceArea.radius}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mb-4">
              {siteConfig.faq.title}
            </h2>
            <p className="text-xl text-gray-600">
              {siteConfig.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {siteConfig.faq.questions.map((item, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#0099FF] transition-colors">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#3A3A3A] text-lg pr-4">{item.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-[#0099FF] flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mb-4">
              {siteConfig.finalCTA.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {siteConfig.finalCTA.subtitle}
            </p>
          </div>

          {/* CTA Principal */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-[#0099FF] to-[#0066CC] rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Contactez-nous dès maintenant</h3>
              <p className="text-xl mb-8 text-white/90">Devis gratuit et personnalisé - Réponse rapide garantie</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="bg-white text-[#0099FF] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold text-lg shadow-lg hover:shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <Phone className="w-6 h-6" />
                  {siteConfig.contact.phone}
                </a>
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-bold text-lg flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <Mail className="w-6 h-6" />
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>

          {/* Coordonnées détaillées */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Téléphone */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0099FF] to-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Téléphone</h3>
              <div className="space-y-2">
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="block text-[#0099FF] hover:underline text-lg font-semibold"
                >
                  {siteConfig.contact.phone}
                </a>
                <a 
                  href={`tel:${siteConfig.contact.mobile.replace(/\s/g, '')}`}
                  className="block text-[#0099FF] hover:underline text-lg font-semibold"
                >
                  {siteConfig.contact.mobile}
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">Appel direct</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0099FF] to-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Email</h3>
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[#0099FF] hover:underline text-lg font-semibold break-all"
              >
                {siteConfig.contact.email}
              </a>
              <p className="text-sm text-gray-500 mt-4">Réponse sous 24h</p>
            </div>

            {/* Adresse */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0099FF] to-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPinned className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Adresse</h3>
              <p className="text-gray-700 font-medium">
                {siteConfig.contact.address.street}
              </p>
              <p className="text-gray-700 font-medium">
                {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
              </p>
              <p className="text-sm text-gray-500 mt-4">Centre Bretagne</p>
            </div>
          </div>

          {/* Horaires */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-[#0099FF] mr-3" />
                <h3 className="text-2xl font-bold text-[#3A3A3A]">Horaires d'ouverture</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {siteConfig.hours.details.map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="font-bold text-gray-700 mb-1">{item.day}</p>
                    <p className="text-gray-600">{item.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A3A3A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0099FF] to-[#0066CC] rounded-lg flex items-center justify-center">
                  <PaintBucket className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{siteConfig.businessName}</h3>
                  <p className="text-sm text-gray-300">{siteConfig.tagline}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Votre artisan peintre de confiance à Loudéac depuis 2013.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact rapide</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {siteConfig.contact.phone}
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {siteConfig.contact.email}
                </p>
                <p className="flex items-center">
                  <MapPinned className="w-4 h-4 mr-2" />
                  {siteConfig.contact.address.city}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Informations légales</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>SARL CHAPRON NICOLAS</p>
                <p>SIRET : 794 262 410 00010</p>
                <p>Capital social : 51 400 €</p>
                <p>RCS Saint-Brieuc</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} {siteConfig.businessName} - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}