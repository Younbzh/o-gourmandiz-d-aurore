import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getSeason, seasonName } from '../utils/season';
import { incontournables, saisonProduits, type Product } from '../data/products';

function ProductCard({ product }: { product: Product }) {
  const rawPrix = product.prix[0]?.prix ?? '';
  const prixMin = rawPrix.replace(/^à partir de\s*/i, '');
  const prixLabel = /devis|demande/i.test(prixMin) ? prixMin : `dès ${prixMin}`;

  return (
    <Link
      to={`/carte/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F3EBE1] block"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.photos[0]}
          alt={product.name}
          loading="lazy"
          className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.sansGluten && (
          <span className="absolute top-3 left-3 bg-[#5BBFBF] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
            Sans gluten
          </span>
        )}
        {product.photos.length > 1 && (
          <span className="absolute bottom-3 right-3 bg-black/45 text-white text-[10px] font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
            {product.photos.length} photos
          </span>
        )}
      </div>
      <div className="px-4 py-4 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-display font-bold italic text-[#1A130C] text-lg leading-tight">{product.name}</h3>
          <p className="text-xs text-[#5BBFBF] font-semibold mt-1">{prixLabel}</p>
        </div>
        <span className="w-9 h-9 rounded-full border border-[#F3EBE1] flex items-center justify-center text-[#5BBFBF] group-hover:bg-[#5BBFBF] group-hover:text-white group-hover:border-transparent transition-all flex-shrink-0">
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

export default function Carte() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'incontournables' | 'saison'>('incontournables');
  const season = getSeason();
  const produitsSaison = saisonProduits[season] ?? [];

  const products = tab === 'incontournables' ? incontournables : produitsSaison;

  return (
    <>
      <div className="pt-36 pb-10 bg-[#FDFAF6] text-center px-5">
        <p className="label mb-4">La carte</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-[#1A130C] italic mb-3">
          Nos créations
        </h1>
        <p className="text-gray-400 max-w-md mx-auto text-sm">
          Cliquez sur une création pour découvrir ses photos en grand, sa composition, ses tarifs et ses allergènes.
        </p>
      </div>

      {/* Onglets */}
      <div className="sticky top-20 z-30 bg-[#FDFAF6] border-b border-[#F3EBE1]">
        <div className="max-w-6xl mx-auto px-5 flex">
          {(['incontournables', 'saison'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`py-4 px-5 text-sm font-semibold border-b-2 transition-colors ${
                tab === t
                  ? 'border-[#5BBFBF] text-[#1A130C]'
                  : 'border-transparent text-gray-400 hover:text-[#1A130C]'
              }`}
            >
              {t === 'incontournables' ? 'Incontournables' : `Carte de saison · ${seasonName[season]}`}
            </button>
          ))}
        </div>
      </div>

      {/* Grille produits */}
      <section className="bg-[#FDFAF6] py-12 min-h-[50vh]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          {products.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-400 mb-2">La carte de {seasonName[season].toLowerCase()} arrive bientôt.</p>
              <p className="text-gray-400 text-sm mb-8">Contactez-moi pour connaître les créations du moment.</p>
              <button
                onClick={() => navigate('/commander')}
                className="bg-[#5BBFBF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors"
              >
                Me contacter
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-12">
                <button
                  onClick={() => navigate('/commander')}
                  className="bg-[#5BBFBF] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors"
                >
                  Je passe commande
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
