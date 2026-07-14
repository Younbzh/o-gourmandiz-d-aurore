import { getSeason, type Season } from '../utils/season';

export interface Product {
  id: string;
  name: string;
  photos: string[];
  composition: string[];
  prix: { format: string; prix: string }[];
  allergenes: string[];
  note?: string;
  sansGluten?: boolean;
}

export const incontournables: Product[] = [
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
    photos: ['/6395.jpg', '/IMG-20260711-WA0024.jpg'],
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
    id: 'biscuits',
    name: 'Biscuits personnalisés',
    photos: [
      '/6464.jpg',
      '/IMG-20260711-WA0018.jpg',
      '/IMG-20260711-WA0022.jpg',
      '/IMG-20260711-WA0025.jpg',
    ],
    composition: [
      'Sablés Vanille, Cacao ou Citron',
      'Personnalisés : prénom, âge, message, illustration sur feuille de sucre',
      'Emballage individuel possible',
      'Commande minimum de 20 pièces par parfum',
    ],
    prix: [
      { format: 'À partir de 20 pièces', prix: 'à partir de 1,20 €/biscuit' },
    ],
    allergenes: ['Gluten', 'Œufs', 'Lait'],
    note: 'Personnalisables : prénom, date, motif, couleurs.',
  },
  {
    id: 'meringues',
    name: 'Meringues personnalisées',
    photos: ['/6464.jpg'],
    composition: [
      'Meringues croustillantes',
      'Parfums et couleurs personnalisables',
      'Idéal buffet & cadeau invités',
    ],
    prix: [
      { format: 'Selon quantité', prix: 'Sur devis' },
    ],
    allergenes: ['Œufs'],
    sansGluten: true,
    note: 'Sans gluten, sans fruits à coque. (Photos dédiées à venir.)',
  },
];

export const saisonProduits: Partial<Record<Season, Product[]>> = {
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

/** Tous les produits, toutes saisons confondues (pour la page produit). */
export function getAllProducts(): Product[] {
  const seasonal = Object.values(saisonProduits).flat().filter(Boolean) as Product[];
  return [...incontournables, ...seasonal];
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find((p) => p.id === id);
}

export function getCurrentSeasonProducts(): Product[] {
  return saisonProduits[getSeason()] ?? [];
}
