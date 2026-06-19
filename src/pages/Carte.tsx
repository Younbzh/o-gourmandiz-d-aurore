import { useNavigate } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

const fichesSaison: Record<string, { src: string; alt: string }[]> = {
  summer: [
    { src: '/6347.jpg', alt: 'Fraisier' },
    { src: '/6332.jpg', alt: 'Tarte Fraise Rhubarbe' },
    { src: '/6341.jpg', alt: 'Tarte Fraise Crumble' },
    { src: '/6335.jpg', alt: 'Tarte Abricot Framboise' },
    { src: '/6338.jpg', alt: 'Tarte Multi-Fruits' },
    { src: '/6350.jpg', alt: 'Pavlova' },
  ],
};

const fichesPerma = [
  { src: '/6329.jpg', alt: 'Tarte Double Chocolat' },
  { src: '/6343.jpg', alt: 'Tarte Citron Noisette' },
  { src: '/6355.jpg', alt: 'Number Cake' },
  { src: '/6356.jpg', alt: 'Macarons' },
  { src: '/6367.jpg', alt: 'Mignardises' },
  { src: '/6370.jpg', alt: 'Biscuits personnalisés' },
];

const seasonLabels: Record<string, string> = {
  summer: 'Été',
  autumn: 'Automne',
  winter: 'Hiver',
  spring: 'Printemps',
};

function getSeason() {
  const m = new Date().getMonth();
  if (m >= 5 && m <= 7) return 'summer';
  if (m >= 8 && m <= 10) return 'autumn';
  if (m === 11 || m <= 1) return 'winter';
  return 'spring';
}

export default function Carte() {
  const navigate = useNavigate();
  const season = getSeason();
  const fichesEnCours = fichesSaison[season] ?? [];

  return (
    <>
      {/* En-tête */}
      <div className="pt-36 pb-16 bg-[#FDFAF6] text-center px-5">
        <p className="label mb-4">Toute l'année</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-[#1A130C] italic mb-4">
          Les incontournables
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          Mes créations phares — disponibles à la commande dans la gamme de saison
        </p>
      </div>

      {/* Grille incontournables */}
      <section className="bg-[#FDFAF6] pb-4">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {siteConfig.incontournables.list.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-[#1A130C]">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full aspect-[4/3] object-cover opacity-80 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A130C]/90 via-[#1A130C]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-display text-2xl font-bold text-white italic mb-2">{item.name}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {item.features.map((f, j) => (
                      <li key={j} className="text-xs border border-white/20 text-white/70 px-3 py-1 rounded-full">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiches de saison */}
      <section className="bg-[#F3EBE1] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          {fichesEnCours.length > 0 && (
            <>
              <div className="text-center mb-10">
                <p className="label mb-3">En ce moment · {seasonLabels[season]}</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A130C] italic">
                  Les créations de saison
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                {fichesEnCours.map(({ src, alt }) => (
                  <img key={src} src={src} alt={alt} className="w-full rounded-2xl shadow-sm object-cover aspect-[3/4]" />
                ))}
              </div>
            </>
          )}
          <div className="text-center mb-10">
            <p className="label mb-3">Toute l'année</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A130C] italic">
              Les incontournables
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {fichesPerma.map(({ src, alt }) => (
              <img key={src} src={src} alt={alt} className="w-full rounded-2xl shadow-sm object-cover aspect-[3/4]" />
            ))}
          </div>
        </div>
      </section>

      {/* Séparateur saison */}
      <div className="bg-[#1A130C] py-14 text-center">
        <p className="label mb-3">Ma carte évolue</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white italic mb-4">
          Les Gourmandiz de saison
        </h2>
        <p className="text-white/40 max-w-md mx-auto text-sm">
          {siteConfig.saisonSection.subtitle}
        </p>
      </div>

      {/* Grille saisons */}
      <section className="bg-[#F3EBE1] py-16">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <p className="text-center text-gray-500 text-sm leading-relaxed mb-12 max-w-xl mx-auto">
            {siteConfig.saisonSection.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {siteConfig.saisonSection.seasons.map((season, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{season.emoji}</div>
                <h3 className="font-display text-lg font-bold italic text-[#1A130C] mb-4">{season.name}</h3>
                <ul className="space-y-2">
                  {season.items.map((item, j) => (
                    <li key={j} className="text-xs text-gray-500 leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm italic mb-6">
              Les créations de saison changent — contactez-moi pour connaître la carte du moment
            </p>
            <button
              onClick={() => navigate('/commander')}
              className="bg-[#5BBFBF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors"
            >
              Je passe commande
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
