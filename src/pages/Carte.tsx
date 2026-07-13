import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getSeason, seasonName, type Season } from '../utils/season';

interface Product {
  id: string;
  name: string;
  photos: string[];
  composition: string[];
  prix: { format: string; prix: string }[];
  allergenes: string[];
  note?: string;
  sansGluten?: boolean;
}

const incontournables: Product[] = [
  {
    id: 'number-cake',
    name: 'Number Cake',
    photos: [
      '/6398.jpg',
      '/IMG-20260711-WA0008.jpg',
      '/IMG-20260711-WA0013.jpg',
      '/IMG-20260711-WA0020.jpg',
      '/IMG-20260711-WA0027.jpg',
      '/IMG-20260711-WA0029.jpg',
      '/IMG-20260711-WA0021.jpg',
    ],
    composition: [
      'Base pâte sucrée ou meringue au choix',
      'Macarons assortis & meringues inclus',
      'Fleurs comestibles incluses',
      'Parfum au choix parmi la gamme de saison',
    ],
    prix: [
      { format: '5 – 6 personnes', prix: '34,50 €' },
      { format: '10 – 12 personnes', prix: '66 €' },
    ],
    allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande, noisette)'],
    note: 'Supplément de 5 € pour deux parfums différents. Personnalisable en couleurs, thème et décors. Option sans fruits à coque sur demande.',
  },
  {
    id: 'double-chocolat',
    name: 'Tarte Double Chocolat',
    photos: ['/6467.jpg'],
    composition: [
      'Pâte sucrée amande',
      'Croustillant',
      'Ganache chocolat noir',
      'Ganache montée chocolat au lait',
    ],
    prix: [
      { format: '4 personnes', prix: '20 €' },
      { format: '6 personnes', prix: '29 €' },
      { format: '8 personnes', prix: '38 €' },
      { format: '10 personnes', prix: '46 €' },
    ],
    allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande)'],
    note: 'Option sans fruits à coque sur demande (sans amande dans la pâte).',
  },
  {
    id: 'multi-fruits',
    name: 'Tarte Multi-Fruits',
    photos: [
      '/IMG-20260711-WA0033.jpg',
      '/6392.jpg',
      '/IMG-20260711-WA0015.jpg',
      '/IMG-20260711-WA0023.jpg',
    ],
    composition: [
      'Pâte sucrée amande',
      'Crème pâtissière',
      'Fruits frais de saison & producteurs locaux',
      'Fleurs comestibles',
    ],
    prix: [
      { format: '4 personnes', prix: '20 €' },
      { format: '6 personnes', prix: '29 €' },
      { format: '8 personnes', prix: '38 €' },
      { format: '10 personnes', prix: '46 €' },
    ],
    allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande)'],
    note: 'Option sans fruits à coque sur demande.',
  },
  {
    id: 'citron-noisette',
    name: 'Tarte Citron Noisette Meringuée',
    photos: ['/IMG-20260711-WA0024.jpg'],
    composition: [
      'Pâte sucrée',
      'Praliné noisette',
      'Crème de citron',
      'Meringue italienne',
    ],
    prix: [
      { format: 'Selon le nombre de personnes', prix: 'Sur devis' },
    ],
    allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande, noisette)'],
    note: 'La noisette est essentielle à cette création — pas d\'option sans fruits à coque (ou version citron seul sur demande).',
  },
  {
    id: 'macarons',
    name: 'Macarons',
    photos: [
      '/6480.jpg',
      '/IMG-20260711-WA0005.jpg',
      '/IMG-20260711-WA0007.jpg',
    ],
    composition: [
      'Vanille · Chocolat noir · Caramel beurre salé',
      'Citron · Fraise · Framboise · Rhubarbe',
    ],
    prix: [
      { format: 'Boîte de 8', prix: '12 €' },
      { format: 'Boîte de 16', prix: '24 €' },
    ],
    allergenes: ['Œufs', 'Lait', 'Fruits à coque (amande)'],
    note: 'Personnalisables en couleurs selon votre occasion. Naturellement sans gluten.',
  },
  {
    id: 'mignardises',
    name: 'Mignardises',
    photos: [
      '/IMG-20260711-WA0002.jpg',
      '/IMG-20260711-WA0032.jpg',
      '/IMG-20260711-WA0028.jpg',
      '/IMG-20260711-WA0014.jpg',
      '/IMG-20260711-WA0019.jpg',
      '/IMG-20260711-WA0026.jpg',
    ],
    composition: [
      'Assortiment de mini tartelettes',
      'Citron meringué, fruits frais de saison',
      'Praliné, vanille, caramel',
      'Format bouchée — idéal buffet & réceptions',
      'Personnalisables (feuille de sucre, couleurs)',
    ],
    prix: [
      { format: 'Selon quantité & assortiment', prix: 'Sur devis' },
    ],
    allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande, noisette)'],
    note: 'Assortiment sur mesure selon votre événement. Option sans fruits à coque sur demande.',
  },
  {
    id: 'biscuits-meringues',
    name: 'Biscuits / Meringues personnalisés',
    photos: [
      '/6464.jpg',
      '/IMG-20260711-WA0018.jpg',
      '/IMG-20260711-WA0022.jpg',
      '/IMG-20260711-WA0025.jpg',
    ],
    composition: [
      'Sablés Vanille, Cacao ou Citron',
      'Meringues personnalisées disponibles',
      'Personnalisés : prénom, âge, message, illustration sur feuille de sucre',
      'Emballage individuel possible',
      'Commande minimum de 20 pièces par parfum',
    ],
    prix: [
      { format: 'À partir de 20 pièces', prix: 'à partir de 1,20 €/biscuit' },
    ],
    allergenes: ['Gluten', 'Œufs', 'Lait'],
    note: 'Meringues personnalisées : œuf uniquement (sans gluten, sans fruits à coque).',
  },
];

const saisonProduits: Partial<Record<Season, Product[]>> = {
  summer: [
    {
      id: 'fraisier',
      name: 'Fraisier',
      photos: [
        '/6426.jpg',
        '/IMG-20260711-WA0003.jpg',
        '/IMG-20260711-WA0004.jpg',
        '/IMG-20260711-WA0006.jpg',
        '/IMG-20260711-WA0010.jpg',
        '/IMG-20260711-WA0011.jpg',
      ],
      composition: [
        'Génoise',
        'Crème légère vanille',
        'Ganache montée vanille',
        'Fraises fraîches',
        'Fleurs comestibles',
      ],
      prix: [
        { format: '4 personnes', prix: '25 €' },
        { format: '6 personnes', prix: '34,50 €' },
        { format: '8 personnes', prix: '44,50 €' },
        { format: '10 personnes', prix: '54,50 €' },
      ],
      allergenes: ['Gluten', 'Œufs', 'Lait'],
    },
    {
      id: 'tarte-fraise-rhubarbe',
      name: 'Tarte Fraise Rhubarbe',
      photos: ['/6410.jpg'],
      composition: [
        'Sablé breton',
        'Compotée fraise / rhubarbe',
        'Ganache montée vanille',
        'Fraises fraîches',
        'Rhubarbe pochée',
      ],
      prix: [
        { format: '4 personnes', prix: '20 €' },
        { format: '6 personnes', prix: '29 €' },
        { format: '8 personnes', prix: '38 €' },
        { format: '10 personnes', prix: '46 €' },
      ],
      allergenes: ['Gluten', 'Œufs', 'Lait'],
    },
    {
      id: 'tarte-fraise-crumble',
      name: 'Tarte Fraise Crumble',
      photos: ['/6453.jpg'],
      composition: [
        'Pâte sucrée amande',
        'Crème pâtissière',
        'Crumble',
        'Fraises fraîches',
        'Fleurs comestibles',
      ],
      prix: [
        { format: '4 personnes', prix: '22 €' },
        { format: '6 personnes', prix: '32 €' },
        { format: '8 personnes', prix: '42 €' },
        { format: '10 personnes', prix: '52 €' },
      ],
      allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande)'],
      note: 'Option sans fruits à coque sur demande.',
    },
    {
      id: 'tarte-abricot-framboise',
      name: 'Tarte Abricot Framboise',
      photos: ['/6417.jpg'],
      composition: [
        'Sablé breton',
        'Abricots rôtis',
        'Gel framboise',
        'Ganache montée vanille',
        'Abricots & framboises fraîches',
        'Macarons vanille',
      ],
      prix: [
        { format: '4 personnes', prix: '25 €' },
        { format: '6 personnes', prix: '34,50 €' },
        { format: '8 personnes', prix: '44,50 €' },
        { format: '10 personnes', prix: '54,50 €' },
      ],
      allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande)'],
      note: 'Contient des macarons (amande). Option sans fruits à coque sur demande (sans macarons).',
    },
    {
      id: 'pavlova',
      name: 'Pavlova',
      photos: ['/IMG-20260711-WA0031.jpg'],
      composition: [
        'Meringue',
        'Ganache montée vanille',
        'Fruits frais de saison & producteurs locaux',
        'Fleurs comestibles',
      ],
      prix: [
        { format: '4 personnes', prix: '20 €' },
        { format: '6 personnes', prix: '29 €' },
        { format: '8 personnes', prix: '38 €' },
        { format: '10 personnes', prix: '46 €' },
      ],
      allergenes: ['Œufs', 'Lait'],
      sansGluten: true,
    },
  ],
};

function PhotoCarousel({ photos, alt, badge }: { photos: string[]; alt: string; badge?: boolean }) {
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
      className="relative overflow-hidden bg-[#F3EBE1]"
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
        <span className="absolute top-3 left-3 bg-[#5BBFBF] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full z-10">
          Sans gluten
        </span>
      )}

      {n > 1 && (
        <>
          <button
            type="button"
            aria-label="Photo précédente"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#1A130C] hover:bg-white transition-colors z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Photo suivante"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#1A130C] hover:bg-white transition-colors z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-10">
            {photos.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Voir la photo ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  const rawPrix = product.prix[0]?.prix ?? '';
  const prixMin = rawPrix.replace(/^à partir de\s*/i, '');
  const prixLabel = /devis|demande/i.test(prixMin) ? prixMin : `dès ${prixMin}`;

  const commandeUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    `Bonjour Aurore ! Je souhaite commander : ${product.name}. `
  )}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F3EBE1]">
      <PhotoCarousel photos={product.photos} alt={product.name} badge={product.sansGluten} />

      <button onClick={() => setOpen(v => !v)} className="w-full text-left">
        <div className="px-4 py-3 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-display font-bold italic text-[#1A130C] text-base leading-tight">{product.name}</h3>
            <p className="text-[11px] text-[#5BBFBF] font-semibold mt-0.5">{prixLabel}</p>
          </div>
          <ChevronDown className={`w-4 h-4 text-[#5BBFBF] flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {open && (
        <div className="px-4 pb-5 border-t border-[#F3EBE1] pt-4 space-y-4">
          <div>
            <p className="label mb-2">Composition</p>
            <ul className="space-y-1">
              {product.composition.map((c, i) => (
                <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#5BBFBF] rounded-full mt-1.5 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label mb-2">Tarifs</p>
            <div className="space-y-1">
              {product.prix.map((p, i) => (
                <div key={i} className="flex justify-between text-xs border-b border-[#F3EBE1] pb-1 last:border-0">
                  <span className="text-gray-500">{p.format}</span>
                  <span className="font-semibold text-[#1A130C]">{p.prix}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="label mb-2">Allergènes</p>
            <div className="flex flex-wrap gap-1">
              {product.allergenes.map((a, i) => (
                <span key={i} className="text-[10px] bg-[#F3EBE1] text-[#1A130C] px-2 py-0.5 rounded-full">{a}</span>
              ))}
            </div>
          </div>

          {product.note && (
            <p className="text-[11px] text-gray-400 italic leading-relaxed">{product.note}</p>
          )}

          <a
            href={commandeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#5BBFBF] text-white py-3 rounded-full text-sm font-semibold hover:bg-[#4AAEAE] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Je commande
          </a>
        </div>
      )}
    </div>
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
          Cliquez sur un gâteau pour voir sa composition, ses tarifs et ses allergènes. Faites défiler les photos pour voir les différentes réalisations.
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
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
