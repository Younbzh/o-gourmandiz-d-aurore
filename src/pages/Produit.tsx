import { useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getProductById } from '../data/products';

function BigCarousel({ photos, alt, badge }: { photos: string[]; alt: string; badge?: boolean }) {
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
    <div>
      <div
        className="relative overflow-hidden bg-[#F3EBE1] rounded-3xl shadow-xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {photos.map((p, i) => (
            <img
              key={i}
              src={p}
              alt={`${alt} ${i + 1}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="w-full aspect-square object-cover flex-shrink-0"
            />
          ))}
        </div>

        {badge && (
          <span className="absolute top-4 left-4 bg-[#5BBFBF] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10">
            Sans gluten
          </span>
        )}

        {n > 1 && (
          <>
            <button
              type="button"
              aria-label="Photo précédente"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center text-[#1A130C] hover:bg-white transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Photo suivante"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center text-[#1A130C] hover:bg-white transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Vignettes */}
      {n > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {photos.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Voir la photo ${i + 1}`}
              className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors ${
                i === index ? 'border-[#5BBFBF]' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={p} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Produit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FDFAF6] flex flex-col items-center justify-center px-5 text-center pt-20">
        <p className="text-gray-500 mb-6">Cette création n'existe pas ou n'est plus à la carte.</p>
        <Link to="/carte" className="bg-[#5BBFBF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors">
          Retour à la carte
        </Link>
      </div>
    );
  }

  const commandeUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    `Bonjour Aurore ! Je souhaite commander : ${product.name}. `
  )}`;

  return (
    <div className="bg-[#FDFAF6] min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <button
          onClick={() => navigate('/carte')}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1A130C] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à la carte
        </button>

        {/* Grandes photos */}
        <BigCarousel photos={product.photos} alt={product.name} badge={product.sansGluten} />

        {/* Détails en dessous */}
        <div className="mt-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1A130C] italic mb-8">
            {product.name}
          </h1>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="label mb-3">Composition</p>
              <ul className="space-y-2">
                {product.composition.map((c, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#5BBFBF] rounded-full mt-1.5 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label mb-3">Tarifs</p>
              <div className="space-y-1.5">
                {product.prix.map((p, i) => (
                  <div key={i} className="flex justify-between text-sm border-b border-[#F3EBE1] pb-1.5 last:border-0">
                    <span className="text-gray-500">{p.format}</span>
                    <span className="font-semibold text-[#1A130C]">{p.prix}</span>
                  </div>
                ))}
              </div>

              <p className="label mb-3 mt-8">Allergènes</p>
              <div className="flex flex-wrap gap-1.5">
                {product.allergenes.map((a, i) => (
                  <span key={i} className="text-xs bg-white border border-[#F3EBE1] text-[#1A130C] px-2.5 py-1 rounded-full">{a}</span>
                ))}
              </div>
            </div>
          </div>

          {product.note && (
            <p className="text-sm text-gray-400 italic leading-relaxed mt-8">{product.note}</p>
          )}

          <a
            href={commandeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto sm:inline-flex bg-[#5BBFBF] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4AAEAE] transition-colors mt-10"
          >
            <MessageCircle className="w-4 h-4" />
            Je commande sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
