/**
 * Les communes travaillées pour la recherche locale.
 *
 * DEUX RÈGLES, apprises en corrigeant une première version ratée.
 *
 * 1. Une page « pâtisserie à Loudéac » doit parler de PÂTISSERIE. La première
 *    version parlait surtout de retrait, de trajet et de créneaux : sur
 *    Merdrignac, autant de mots de logistique que de mots de métier. Une
 *    personne qui cherche un gâteau tombait sur une page qui lui expliquait
 *    comment venir le chercher. Chaque ancrage part donc du produit, et la
 *    logistique passe après.
 *
 * 2. On n'invente rien sur la commune. La première version affirmait que les
 *    commandes de dernière minute étaient fréquentes à Plémet et que Trévé
 *    commandait surtout de la biscuiterie. Personne ne l'a mesuré. Ces phrases
 *    sont retirées : Aurore lirait ces pages et verrait immédiatement qu'on
 *    parle d'un métier qu'on ne connaît pas.
 *
 * Ce qui différencie les pages est donc l'angle du métier, tous vrais : les
 * formats et le nombre de convives, les parfums de saison, le décor sur mesure,
 * les pièces montées, la dégustation avant un mariage. Pas des anecdotes
 * locales inventées.
 *
 * Aucune distance chiffrée non plus : elles n'ont pas été mesurées, et une
 * approximation fausse se remarque tout de suite dans un pays où tout le monde
 * connaît la route.
 */

export interface Commune {
  /** Segment d'URL, sous /patisserie-<slug>. */
  slug: string;
  nom: string;
  departement: string;
  /** Se lit après le nom : « Loudéac est <situation> ». Sans chiffre, on situe. */
  situation: string;
  /** Le paragraphe propre à cette commune. Il parle de pâtisserie, pas de trajet. */
  ancrage: string;
  /** Produits réels de sa carte, jamais des catégories inventées. */
  specialites: string[];
}

export const communes: Commune[] = [
  {
    slug: 'loudeac',
    nom: 'Loudéac',
    departement: 'Côtes-d’Armor',
    situation: 'la ville voisine du laboratoire',
    ancrage:
      'Tout est fait à la commande : la taille du gâteau se cale sur le nombre exact de convives, d’un Number Cake pour cinq personnes à un format XL pour vingt-quatre. Les parfums se choisissent ensemble, vanille et fruits de saison, chocolat noir croustillant ou caramel beurre salé, sur une base de pâte sucrée ou de meringue.',
    specialites: ['Number Cake', 'Macarons', 'Tarte Citron Noisette Meringuée', 'Biscuits personnalisés'],
  },
  {
    slug: 'plemet',
    nom: 'Plémet',
    departement: 'Côtes-d’Armor',
    situation: 'à l’est de La Motte, sur la même route',
    ancrage:
      'La carte suit les fruits : fraisier et tarte fraise-rhubarbe au printemps, abricot-framboise l’été, fruits de saison le reste de l’année. Rien n’est préparé à l’avance ni gardé en vitrine, ce qui explique qu’une commande se passe quelques jours avant la date.',
    specialites: ['Fraisier', 'Tarte Fraise Rhubarbe', 'Tarte Multi-Fruits', 'Pavlova'],
  },
  {
    slug: 'la-cheze',
    nom: 'La Chèze',
    departement: 'Côtes-d’Armor',
    situation: 'au sud-est de La Motte',
    ancrage:
      'Pour une tablée familiale, le format compte autant que le parfum : un gâteau calibré pour le nombre de convives évite d’en jeter la moitié. Les mignardises et les macarons se commandent aussi à l’unité, pour compléter un dessert sans repartir sur une grande pièce.',
    specialites: ['Mignardises', 'Macarons', 'Tarte Double Chocolat', 'Number Cake'],
  },
  {
    slug: 'treve',
    nom: 'Trévé',
    departement: 'Côtes-d’Armor',
    situation: 'entre le laboratoire et Loudéac',
    ancrage:
      'Les biscuits et les meringues se personnalisent : forme, couleur, message, décor aux couleurs d’un événement. C’est ce qui se prête le mieux à une remise en nombre, chaque pièce étant décorée à la main plutôt qu’imprimée.',
    specialites: ['Biscuits personnalisés', 'Meringues personnalisées', 'Macarons', 'Mignardises'],
  },
  {
    slug: 'uzel',
    nom: 'Uzel',
    departement: 'Côtes-d’Armor',
    situation: 'au nord de La Motte',
    ancrage:
      'Les tartes sont montées sur une pâte sucrée faite maison : double chocolat, citron noisette meringuée, ou multi-fruits selon la saison. Le décor peut être personnalisé, avec des fleurs comestibles et des macarons assortis posés au moment du montage.',
    specialites: ['Tarte Citron Noisette Meringuée', 'Tarte Double Chocolat', 'Tarte Multi-Fruits', 'Macarons'],
  },
  {
    slug: 'pontivy',
    nom: 'Pontivy',
    departement: 'Morbihan',
    situation: 'au sud-ouest, dans le Morbihan',
    ancrage:
      'Pour une réception, la pièce montée et la pyramide de macarons se conçoivent sur mesure : hauteur, parfums, couleurs, nombre de parts. Une dégustation se cale en amont, pour arrêter les saveurs avant de valider la commande.',
    specialites: ['Pièces montées', 'Pyramides de macarons', 'Mignardises', 'Pavlova'],
  },
  {
    slug: 'merdrignac',
    nom: 'Merdrignac',
    departement: 'Côtes-d’Armor',
    situation: 'à l’est du pays de Loudéac',
    ancrage:
      'Un gâteau qui voyage se conçoit différemment : les pièces les plus fragiles, pavlova et meringues, tiennent moins bien la route qu’une tarte ou un Number Cake sur pâte sucrée. Le choix se fait ensemble, en fonction de la distance et de la saison.',
    specialites: ['Number Cake', 'Tarte Double Chocolat', 'Biscuits personnalisés', 'Macarons'],
  },
  {
    slug: 'ploermel',
    nom: 'Ploërmel',
    departement: 'Morbihan',
    situation: 'au sud-est, dans le Morbihan',
    ancrage:
      'Pour un mariage, le dessert se décide plusieurs semaines à l’avance : pièce montée, pyramide de macarons ou dessert de buffet, avec un rendez-vous de dégustation pour arrêter les parfums. Les fleurs comestibles et les décors sont accordés aux couleurs du jour.',
    specialites: ['Pièces montées', 'Pyramides de macarons', 'Mignardises', 'Macarons'],
  },
];

export const cheminCommune = (slug: string) => `/patisserie-${slug}`;
