import { getSeason, type Season } from '../utils/season';

export interface Product {
  id: string;
  name: string;
  photos: string[];
  composition: string[];
  compositionLabel?: string;
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
      '/IMG-20260801-WA0000.jpg',
      '/IMG-20260801-WA0002.jpg',
      '/IMG-20260801-WA0001.jpg',
      '/IMG-20260801-WA0003.jpg',
      '/6437.jpg',
      '/6404.jpg',
      '/7737.jpg',
      '/IMG-20260711-WA0021.jpg',
      '/IMG-20260711-WA0029.jpg',
    ],
    compositionLabel: 'Parfums & base',
    composition: [
      'Vanille & fruits de saison — base pâte sucrée',
      'Vanille & fraises façon pavlova — base meringue',
      'Vanille & caramel beurre salé — base pâte sucrée',
      'Chocolat noir croustillant — base pâte sucrée & biscuit madeleine',
      'Chocolat au lait & décor Kinder — base pâte sucrée',
      'Macarons assortis, meringues & fleurs comestibles de saison inclus',
    ],
    prix: [
      { format: '1 chiffre · 5-6 personnes', prix: '34,50 €' },
      { format: '1 chiffre XL · 10-12 personnes', prix: '66 €' },
      { format: '2 chiffres · 10-12 personnes', prix: '68 €' },
      { format: '2 chiffres XL · 20-24 personnes', prix: '128 €' },
    ],
    allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande, noisette)'],
    note: 'Supplément de 5 € pour deux saveurs différentes. Décor personnalisé à partir de 15 €. Option sans fruits à coque sur demande.',
  },
  {
    id: 'double-chocolat',
    name: 'Tarte Double Chocolat',
    photos: ['/6467.jpg', '/7747.jpg'],
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
    allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande, noisette)'],
    note: 'Option sans fruits à coque sur demande (sans amande dans la pâte).',
  },
  {
    id: 'multi-fruits',
    name: 'Tarte Multi-Fruits',
    photos: [
      '/IMG-20260801-WA0005.jpg',
      '/IMG-20260711-WA0033.jpg',
      '/7533.jpg',
      '/6392.jpg',
      '/IMG-20260711-WA0015.jpg',
    ],
    composition: [
      'Pâte sucrée amande',
      'Crème pâtissière',
      'Fruits frais de saison',
      'Fleurs comestibles de saison',
    ],
    prix: [
      { format: '4 personnes', prix: '20 €' },
      { format: '6 personnes', prix: '29 €' },
      { format: '8 personnes', prix: '38 €' },
      { format: '10 personnes', prix: '46 €' },
    ],
    allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande)'],
    note: 'Producteurs locaux selon disponibilités. Option sans fruits à coque sur demande.',
  },
  {
    id: 'citron-noisette',
    name: 'Tarte Citron Noisette Meringuée',
    photos: ['/6395.jpg', '/7723.jpg'],
    composition: [
      'Pâte sucrée',
      'Crème d\'amande',
      'Crémeux citron',
      'Gel citron',
      'Praliné noisette',
      'Meringue suisse',
    ],
    prix: [
      { format: '4 personnes', prix: '25 €' },
      { format: '6 personnes', prix: '34,50 €' },
      { format: '8 personnes', prix: '44,50 €' },
      { format: '10 personnes', prix: '54,50 €' },
    ],
    allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande, noisette)'],
    note: 'La noisette est essentielle à cette création — pas d\'option sans fruits à coque (ou version citron seul sur demande).',
  },
  {
    id: 'macarons',
    name: 'Macarons',
    photos: [
      '/7730.jpg',
      '/6480.jpg',
      '/6475.jpg',
      '/6492.jpg',
      '/IMG-20260711-WA0005.jpg',
    ],
    compositionLabel: 'Saveurs',
    composition: [
      'Vanille',
      'Chocolat noir',
      'Caramel beurre salé',
      'Citron',
      'Fraise',
      'Framboise',
      'Rhubarbe',
    ],
    prix: [
      { format: 'Boîte de 8', prix: '12 €' },
      { format: 'Boîte de 16', prix: '24 €' },
    ],
    allergenes: ['Œufs', 'Lait', 'Fruits à coque (amande)'],
    sansGluten: true,
    note: 'Personnalisables en couleurs selon votre occasion. Naturellement sans gluten.',
  },
  {
    id: 'pavlova',
    name: 'Pavlova',
    photos: ['/IMG-20260711-WA0031.jpg', '/6433.jpg'],
    composition: [
      'Meringue',
      'Ganache montée vanille',
      'Fruits frais de saison',
      'Fleurs comestibles de saison',
    ],
    prix: [
      { format: '4 personnes', prix: '20 €' },
      { format: '6 personnes', prix: '29 €' },
      { format: '8 personnes', prix: '38 €' },
      { format: '10 personnes', prix: '46 €' },
    ],
    allergenes: ['Œufs', 'Lait'],
    sansGluten: true,
    note: 'Producteurs locaux selon disponibilités.',
  },
  {
    id: 'mignardises',
    name: 'Mignardises',
    photos: [
      '/IMG-20260801-WA0006.jpg',
      '/7757.jpg',
      '/7756.jpg',
      '/IMG-20260711-WA0024.jpg',
      '/IMG-20260711-WA0002.jpg',
    ],
    compositionLabel: 'Parfums',
    composition: [
      'Assortiment de mini tartelettes & macarons',
      'Vanille & praliné',
      'Double chocolat',
      'Caramel beurre salé',
      'Citron meringué',
      'Fruits de saison',
      'Macarons assortis',
      'Format bouchée — idéal buffet & réceptions',
      'Personnalisables (feuille de sucre)',
    ],
    prix: [
      { format: 'À partir de 50 pièces', prix: '1,20 €/pièce' },
    ],
    allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande, noisette)'],
    note: 'Possibilité d\'assortir les mignardises avec des macarons. Option sans fruits à coque sur demande.',
  },
  {
    id: 'biscuits',
    name: 'Biscuits personnalisés',
    photos: [
      '/IMG-20260801-WA0004.jpg',
      '/6464.jpg',
      '/IMG-20260711-WA0018.jpg',
      '/IMG-20260711-WA0022.jpg',
      '/IMG-20260711-WA0025.jpg',
    ],
    composition: [
      'Sablés Vanille, Cacao, Citron, Noisette ou Amande',
      'Personnalisés : prénom, âge, message, illustration sur feuille de sucre',
      'Toujours emballés individuellement',
      'Commande minimum de 20 pièces par parfum',
    ],
    prix: [
      { format: 'À partir de 20 pièces', prix: 'à partir de 1,20 €/biscuit' },
    ],
    allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande, noisette)'],
    note: 'Personnalisables : prénom, date, motif. Fruits à coque uniquement pour les parfums noisette et amande.',
  },
  {
    id: 'meringues',
    name: 'Meringues personnalisées',
    photos: ['/IMG-20260618-WA0066.jpg', '/7738.jpg'],
    composition: [
      'Meringues croustillantes',
      'Parfums et couleurs personnalisables',
      'Toujours emballées individuellement',
      'Idéal buffet & cadeau invités',
    ],
    prix: [
      { format: 'À la pièce', prix: 'à partir de 2,50 €' },
    ],
    allergenes: ['Œufs'],
    sansGluten: true,
    note: 'Sans gluten, sans fruits à coque.',
  },
];

export const saisonProduits: Partial<Record<Season, Product[]>> = {
  summer: [
    {
      id: 'fraisier',
      name: 'Fraisier',
      photos: [
        '/6426.jpg',
        '/6472.jpg',
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
        'Fleurs comestibles de saison',
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
      photos: ['/6453.jpg', '/6451.jpg'],
      composition: [
        'Pâte sucrée amande',
        'Crème pâtissière',
        'Crumble',
        'Fraises fraîches',
        'Fleurs comestibles de saison',
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
