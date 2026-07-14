import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

function SectionCarousel({ photos, alt }: { photos: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const n = photos.length;

  const go = (dir: number) => setIndex((prev) => (prev + dir + n) % n);

  const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    startX.current = null;
  };

  return (
    <div
      className="relative overflow-hidden bg-[#F3EBE1] h-full"
      style={{ minHeight: '320px' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {photos.map((p, i) => (
          <img
            key={i}
            src={p}
            alt={`${alt} ${i + 1}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover flex-shrink-0 min-h-[50vw] md:min-h-0"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[#1A130C]/10 pointer-events-none" />

      {n > 1 && (
        <>
          <button
            type="button"
            aria-label="Photo précédente"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center text-[#1A130C] hover:bg-white transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Photo suivante"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center text-[#1A130C] hover:bg-white transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {photos.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Voir la photo ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-5 bg-white' : 'w-2 bg-white/60'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const gallery = [
  { src: '/IMG-20260711-WA0031.jpg', alt: 'Pavlova aux fruits et fleurs' },
  { src: '/6437.jpg', alt: 'Number cake fruits rouges' },
  { src: '/IMG-20260711-WA0002.jpg', alt: 'Mignardises 50 ans' },
  { src: '/6401.jpg', alt: 'Number cake 50 ans' },
  { src: '/IMG-20260711-WA0026.jpg', alt: 'Mignardises fleur vanille' },
  { src: '/IMG-20260711-WA0008.jpg', alt: 'Number cake anniversaire fraises' },
  { src: '/6442.jpg', alt: 'Number cake chocolat' },
  { src: '/IMG-20260711-WA0020.jpg', alt: 'Number cake fruits exotiques' },
  { src: '/IMG-20260711-WA0027.jpg', alt: 'Number cake 1 an aux fruits' },
  { src: '/IMG-20260711-WA0033.jpg', alt: 'Tarte aux fruits rouges' },
  { src: '/IMG-20260711-WA0013.jpg', alt: 'Number cake citron' },
  { src: '/6389.jpg', alt: 'Pyramide de macarons rose' },
];

export default function Evenements() {
  const navigate = useNavigate();

  return (
    <>
      {/* En-tête */}
      <div className="pt-36 pb-16 bg-[#FDFAF6] text-center px-5">
        <p className="label mb-4">Grands moments</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-[#1A130C] italic mb-6">
          Événements &<br />grandes occasions
        </h1>
        <div className="inline-flex items-center gap-2 border border-[#1A130C]/15 bg-white rounded-full px-5 py-2.5 text-sm text-gray-500">
          <Clock className="w-4 h-4 text-[#5BBFBF]" />
          {siteConfig.evenementsSection.note}
        </div>
      </div>

      {/* Sections événements — alternées carousel / texte */}
      {siteConfig.evenementsSection.list.map((item, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={i}
            className={`grid md:grid-cols-2 min-h-[70vh] ${i === siteConfig.evenementsSection.list.length - 1 ? '' : 'border-b border-[#F3EBE1]'}`}
          >
            {/* Carousel photos */}
            <div className={`relative ${isEven ? 'md:order-1' : 'md:order-2'}`}>
              <SectionCarousel photos={item.photos} alt={item.name} />
            </div>

            {/* Texte */}
            <div className={`bg-[#FDFAF6] flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
              <p className="label mb-5">
                {`0${i + 1}`}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A130C] italic mb-5 leading-tight">
                {item.name}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
                {item.description}
              </p>
              <ul className="space-y-3 mb-10">
                {item.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#5BBFBF] rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/commander')}
                className="self-start bg-[#1A130C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5BBFBF] transition-colors"
              >
                Je demande un devis
              </button>
            </div>
          </section>
        );
      })}

      {/* Galerie réalisations */}
      <section className="bg-[#F3EBE1] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="label mb-3">En images</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A130C] italic">
              Quelques créations
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {gallery.map(({ src, alt }) => (
              <img key={src} src={src} alt={alt} loading="lazy" className="w-full aspect-[3/4] object-cover rounded-xl" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA bas */}
      <section className="bg-[#1A130C] py-24 text-center">
        <div className="max-w-xl mx-auto px-5">
          <p className="label mb-5">
            Minimum 3 semaines à l'avance
          </p>
          <h2 className="font-display text-4xl font-bold text-white italic mb-6">
            Un grand événement en préparation ?
          </h2>
          <p className="text-white/40 mb-10 text-sm leading-relaxed">
            Remplissez le formulaire de commande — je reviens vers vous rapidement pour étudier votre projet.
          </p>
          <button
            onClick={() => navigate('/commander')}
            className="bg-[#5BBFBF] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors"
          >
            Je prends contact
          </button>
        </div>
      </section>
    </>
  );
}
