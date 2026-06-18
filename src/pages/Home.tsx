import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const visualLinks = [
  {
    label: 'La carte',
    sub: 'Incontournables & créations de saison',
    photo: '/tarte.jpeg',
    to: '/carte',
  },
  {
    label: 'Événements',
    sub: 'Pièces montées · Pyramides · Biscuits',
    photo: '/gateau-mariage.jpeg',
    to: '/evenements',
  },
  {
    label: 'Commander',
    sub: 'Formulaire de commande en 4 étapes',
    photo: '/sables-personnalises.jpeg',
    to: '/commander',
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img
          src="/gateau-fraises.jpeg"
          alt="Fraisier d'Aurore"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A130C]/90 via-[#1A130C]/25 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 pb-16 md:pb-28 w-full">
          <p className="label mb-6">
            Pâtisserie artisanale · La Motte (22) · Sur commande
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[7.5rem] font-bold text-white leading-[0.88] mb-8">
            Ô Gourmandiz<br />
            <em>d'Aurore</em>
          </h1>
          <p className="text-white/55 text-base md:text-lg mb-10 max-w-sm leading-relaxed">
            Pâtisseries de saison,<br />entièrement sur commande.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/carte')}
              className="bg-white text-[#1A130C] px-8 py-4 rounded-full font-semibold hover:bg-[#F3EBE1] transition-colors"
            >
              Je découvre la carte
            </button>
            <button
              onClick={() => navigate('/commander')}
              className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Je commande
            </button>
          </div>
        </div>
      </section>

      {/* 3 blocs visuels */}
      <section className="grid md:grid-cols-3">
        {visualLinks.map(({ label, sub, photo, to }) => (
          <button
            key={to}
            onClick={() => navigate(to)}
            className="relative overflow-hidden group text-left"
            style={{ aspectRatio: '4/5' }}
          >
            <img
              src={photo}
              alt={label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#1A130C]/45 group-hover:bg-[#1A130C]/60 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
              <div>
                <p className="label mb-2">{sub}</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white italic">{label}</h2>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-[#5BBFBF] group-hover:border-transparent transition-all duration-300 flex-shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </button>
        ))}
      </section>

      {/* Mini about */}
      <section className="bg-[#FDFAF6] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative">
            <img
              src="/tartelette-fleur.jpeg"
              alt="Création d'Aurore"
              className="w-full aspect-[4/5] object-cover rounded-2xl"
            />
            <div className="absolute -bottom-5 -right-5 bg-[#1A130C] text-white px-6 py-5 rounded-xl hidden md:block">
              <p className="label mb-1">Diplômée</p>
              <p className="font-display text-xl font-bold italic">CAP 2023</p>
            </div>
          </div>

          <div>
            <p className="label mb-6">Qui suis-je ?</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A130C] leading-tight mb-8">
              Rien ne me<br />
              <em>prédestinait</em><br />
              à ça.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              J'ai d'abord été assistante vétérinaire, avant qu'on me mette le pied à l'étrier en 2022 et que je passe mon CAP en candidat libre en 2023.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              En octobre 2025, j'ai ouvert Ô Gourmandiz d'Aurore — pour créer quelque chose à mon image, et de nouveau sur le secteur.
            </p>
            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center gap-2 text-[#1A130C] font-semibold border-b-2 border-[#1A130C] pb-0.5 hover:text-[#5BBFBF] hover:border-[#5BBFBF] transition-colors"
            >
              En savoir plus <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="bg-[#1A130C] py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="label mb-4">Témoignages</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white italic">
              Ce que disent mes clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.reviews.list.map((review, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-8">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#5BBFBF] text-[#5BBFBF]" />
                  ))}
                </div>
                <p className="text-white/60 leading-relaxed mb-6 italic text-sm">"{review.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="font-semibold text-white text-sm">{review.name}</span>
                  <span className="text-xs text-white/25">{review.occasion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bas de page */}
      <section className="bg-[#FDFAF6] py-24 text-center">
        <div className="max-w-xl mx-auto px-5">
          <p className="label mb-5">Laboratoire privé · Sur commande</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A130C] italic mb-6">
            Une envie de gourmandise ?
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Remplissez le formulaire en 4 étapes — je vous réponds rapidement pour confirmer votre création.
          </p>
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
