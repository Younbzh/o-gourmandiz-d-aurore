import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function About() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero about */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src="/tarte-floral-multi-fruits.jpeg"
          alt="Création d'Aurore"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A130C]/90 via-[#1A130C]/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 pb-16 w-full">
          <p className="label mb-4">Qui suis-je ?</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white italic leading-tight">
            Aurore Delmas
          </h1>
        </div>
      </section>

      {/* Histoire */}
      <section className="bg-[#FDFAF6] py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label mb-6">Mon histoire</p>
            {siteConfig.about.content.map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-lg mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Philosophie */}
          <div className="bg-[#1A130C] rounded-2xl p-8 md:p-10">
            <p className="label mb-6">Ma philosophie</p>
            <div className="space-y-6">
              {siteConfig.about.values.map((value, i) => (
                <div key={i} className={i < siteConfig.about.values.length - 1 ? 'pb-6 border-b border-white/10' : ''}>
                  <h3 className="font-display text-lg font-bold text-white italic mb-2">{value.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horaires & labo */}
      <section className="bg-[#F3EBE1] py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8">
            <p className="label mb-6">Horaires d'appels</p>
            <div className="space-y-4">
              {siteConfig.hours.callHours.map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-[#F3EBE1] pb-4">
                  <span className="font-medium text-[#1A130C]">{item.day}</span>
                  <span className="text-[#5BBFBF] font-semibold">{item.hours}</span>
                </div>
              ))}
              <div className="pt-2">
                <p className="text-gray-400 text-sm">{siteConfig.hours.pickup}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <p className="label mb-6">Laboratoire</p>
            <p className="font-medium text-[#1A130C] mb-1">{siteConfig.contact.address.street}</p>
            <p className="text-gray-600 mb-1">{siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}</p>
            <p className="text-gray-400 text-sm mb-6">Côtes-d'Armor, Bretagne</p>
            <div className="bg-[#F3EBE1] rounded-xl p-4">
              <p className="text-sm text-gray-500 leading-relaxed">{siteConfig.contact.labNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Allergènes */}
      <section className="bg-[#FDFAF6] py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="label mb-6">Information</p>
          <h2 className="font-display text-3xl font-bold text-[#1A130C] italic mb-4">Allergènes</h2>
          <p className="text-gray-500 mb-8 leading-relaxed text-sm">{siteConfig.allergens.intro}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {siteConfig.allergens.list.map((a, i) => (
              <div key={i} className="bg-white border border-[#F3EBE1] rounded-xl p-4 flex gap-3 items-start">
                <span className="w-2 h-2 bg-[#5BBFBF] rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[#1A130C] text-sm">{a.name}</span>
                  <span className="text-gray-400 text-xs block">{a.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="label mb-6 text-center">FAQ</p>
          <h2 className="font-display text-4xl font-bold text-[#1A130C] italic mb-12 text-center">
            {siteConfig.faq.title}
          </h2>

          <div className="divide-y divide-[#F3EBE1]">
            {siteConfig.faq.questions.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left gap-4"
                >
                  <span className="font-display font-bold italic text-[#1A130C] text-lg">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#5BBFBF] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <p className="pb-6 text-gray-500 text-sm leading-relaxed">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#1A130C] py-20 text-center">
        <div className="max-w-md mx-auto px-5">
          <h2 className="font-display text-4xl font-bold text-white italic mb-6">
            Prêt à commander ?
          </h2>
          <button
            onClick={() => navigate('/commander')}
            className="bg-[#5BBFBF] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors"
          >
            Je passe commande
          </button>
        </div>
      </section>
    </>
  );
}
