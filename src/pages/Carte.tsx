import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface Product {
  id: string;
  name: string;
  photo: string;
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
    photo: '/6398.jpg',
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
    photo: '/6467.jpg',
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
    photo: '/IMG-20260711-WA0033.jpg',
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
    photo: '/IMG-20260711-WA0024.jpg',
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
    photo: '/6480.jpg',
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
    id: 'biscuits-meringues',
    name: 'Biscuits / Meringues personnalisés',
    photo: '/6464.jpg',
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

function getSeason() {
  const m = new Date().getMonth();
  if (m >= 5 && m <= 7) return 'summer';
  if (m >= 8 && m <= 10) return 'autumn';
  if (m === 11 || m <= 1) return 'winter';
  return 'spring';
}

const saisonProduits: Partial<Record<string, Product[]>> = {
  summer: [
    {
      id: 'fraisier',
      name: 'Fraisier',
      photo: '/6426.jpg',
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
      photo: '/6410.jpg',
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
      photo: '/6453.jpg',
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
      photo: '/6417.jpg',
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
      photo: '/IMG-20260711-WA0031.jpg',
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

const seasonName: Record<string, string> = {
  summer: 'Été',
  autumn: 'Automne',
  winter: 'Hiver',
  spring: 'Printemps',
};

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
      <button onClick={() => setOpen(v => !v)} className="w-full text-left group">
        <div className="relative overflow-hidden">
          <img
            src={product.photo}
            alt={product.name}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.sansGluten && (
            <span className="absolute top-3 left-3 bg-[#5BBFBF] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
              Sans gluten
            </span>
          )}
        </div>
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
          Cliquez sur un gâteau pour voir sa composition, ses tarifs et ses allergènes.
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
