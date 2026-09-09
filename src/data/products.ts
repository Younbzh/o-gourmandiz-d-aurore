import { getSeason, type Season } from '../utils/season';

export interface Product {
  id: string;
  name: string;
  photos: string[];
  composition: string[];
  compositionLabel?: string;
  details?: string[];
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
      '/8496.jpg',
      '/8499.jpg',
      '/7757.jpg',
      '/7756.jpg',
      '/IMG-20260711-WA0024.jpg',
      '/IMG-20260711-WA0002.jpg',
      '/IMG-20260711-WA0026.jpg',
    ],
    compositionLabel: 'Parfums',
    composition: [
      'Vanille & praliné',
      'Double chocolat',
      'Caramel beurre salé',
      'Citron meringué',
      'Fruits de saison',
    ],
    details: [
      'Assortiment de mini tartelettes & macarons',
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
      'Couleurs personnalisables',
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
        '/IMG-20260711-WA0004.jpg',
        '/IMG-20260711-WA0010.jpg',
        '/6426.jpg',
        '/6472.jpg',
        '/IMG-20260711-WA0003.jpg',
        '/IMG-20260711-WA0006.jpg',
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

  autumn: [
    {
      id: 'tarte-pomme',
      name: 'Tarte Pomme',
      photos: ['/8473.jpg', '/8464.jpg'],
      composition: [
        'Pâte sucrée amande',
        'Compote de pomme',
        'Pommes',
      ],
      prix: [
        { format: '4 personnes', prix: '15 €' },
        { format: '6 personnes', prix: '21 €' },
        { format: '8 personnes', prix: '28 €' },
        { format: '10 personnes', prix: '34 €' },
      ],
      allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande)'],
      note: 'Option sans fruits à coque sur demande.',
    },
    {
      id: 'tarte-pomme-speculoos',
      name: 'Tarte Pomme Spéculoos',
      photos: ['/8470.jpg'],
      composition: [
        'Pâte sucrée amande',
        'Croustillant spéculoos',
        'Compote et brunoise de pomme',
        'Ganache montée spéculoos',
      ],
      prix: [
        { format: '4 personnes', prix: '20 €' },
        { format: '6 personnes', prix: '29 €' },
        { format: '8 personnes', prix: '38 €' },
        { format: '10 personnes', prix: '46 €' },
      ],
      allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande)', 'Soja (spéculoos)'],
      note: 'Option sans fruits à coque sur demande.',
    },
    {
      id: 'tarte-poire-pecan',
      name: 'Tarte Poire Pécan',
      photos: ['/8458.jpg', '/8461.jpg'],
      composition: [
        'Pâte sucrée amande',
        'Crème amande éclats de noix de pécan',
        'Gel et brunoise de poire',
        'Ganache montée noix de pécan',
      ],
      prix: [
        { format: '4 personnes', prix: '24,50 €' },
        { format: '6 personnes', prix: '34,50 €' },
        { format: '8 personnes', prix: '44,50 €' },
        { format: '10 personnes', prix: '54,50 €' },
      ],
      allergenes: ['Gluten', 'Œufs', 'Lait', 'Fruits à coque (amande, noix de pécan)'],
    },
    {
      id: 'tarte-caramel-cacahuete',
      name: 'Tarte Caramel Cacahuète',
      photos: ['/8476.jpg', '/8479.jpg'],
      composition: [
        'Pâte sucrée amande',
        'Caramel et cacahuètes',
        'Ganache chocolat noir',
        'Ganache montée vanille',
      ],
      prix: [
        { format: '4 personnes', prix: '24,50 €' },
        { format: '6 personnes', prix: '34,50 €' },
        { format: '8 personnes', prix: '44,50 €' },
        { format: '10 personnes', prix: '54,50 €' },
      ],
      allergenes: ['Gluten', 'Œufs', 'Lait', 'Arachides', 'Fruits à coque (amande)'],
      note: 'Contient des arachides (cacahuètes). Cette création ne peut pas être adaptée sans arachides.',
    },
  ],
};

/*
  Feu vert d'Aurore le 9 septembre 2026 : la carte d'automne est publiée, et
  montrée en avance à côté de celle d'été plutôt qu'attendre le 22 septembre.
  Ses clientes commandent longtemps à l'avance — une pièce de début octobre se
  décide maintenant, et elle ne se décide pas sur une carte qu'on ne voit pas.

  Les arachides (Tarte Caramel Cacahuète) et le soja (spéculoos) sont déjà
  déclarés en présence avérée dans siteConfig.allergens — rien à reprendre là.
*/
export const carteAutomnePubliee = true;

/** Les saisons réellement visibles par les visiteurs. */
function saisonsPubliees(): Partial<Record<Season, Product[]>> {
  if (carteAutomnePubliee) return saisonProduits;
  const { autumn, ...publiees } = saisonProduits;
  void autumn;
  return publiees;
}

/**
 * La carte de la saison suivante, montrée avant l'heure.
 *
 * Ne renvoie quelque chose qu'en été : le 22 septembre, l'automne devient la
 * carte de saison, et la montrer encore ici en ferait un doublon — deux onglets
 * pour les mêmes gâteaux. La bascule est donc automatique, sans rien à changer
 * ce jour-là.
 */
export function getCarteEnAvance(): { saison: Season; produits: Product[] } | null {
  if (!carteAutomnePubliee || getSeason() !== 'summer') return null;
  const produits = saisonProduits.autumn;
  return produits?.length ? { saison: 'autumn', produits } : null;
}

/** Tous les produits publiés, toutes saisons confondues (pour la page produit). */
export function getAllProducts(): Product[] {
  const seasonal = Object.values(saisonsPubliees()).flat().filter(Boolean) as Product[];
  return [...incontournables, ...seasonal];
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find((p) => p.id === id);
}

export function getCurrentSeasonProducts(): Product[] {
  return saisonsPubliees()[getSeason()] ?? [];
}
