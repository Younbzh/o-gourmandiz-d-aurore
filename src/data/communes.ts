/**
 * Les communes travaillées pour la recherche locale.
 *
 * Une page par commune, courte et distincte. Le pari n'est pas de plaire à
 * Google en répétant un mot : c'est qu'une personne de Loudéac qui cherche
 * « gâteau d'anniversaire Loudéac » trouve une page qui lui parle d'elle, avec
 * le trajet, le retrait et ce qui se commande le plus par ici.
 *
 * RÈGLE : chaque page doit dire quelque chose de vrai et de propre à sa commune.
 * Une page qui ne fait que remplacer « La Motte » par « Uzel » est un doublon,
 * et Google écarte les doublons. Si on n'a rien à dire sur une commune, on ne
 * lui fait pas de page.
 *
 * Aucune distance chiffrée n'est écrite : elles n'ont pas été mesurées, et une
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
  /** Le paragraphe propre à cette commune. C'est lui qui évite le doublon. */
  ancrage: string;
  /** Ce qui se commande le plus depuis cette commune, ou ce qui s'y prête. */
  occasions: string[];
}

export const communes: Commune[] = [
  {
    slug: 'loudeac',
    nom: 'Loudéac',
    departement: 'Côtes-d’Armor',
    situation: 'la ville voisine du laboratoire',
    ancrage:
      'Loudéac est la ville la plus proche du laboratoire, et la plupart des commandes viennent de là. Le retrait se cale facilement sur un trajet du quotidien : on convient d’un créneau, vous passez, tout est prêt et emballé.',
    occasions: ['Gâteaux d’anniversaire', 'Pièces montées de mariage', 'Buffets d’entreprise', 'Sablés décorés'],
  },
  {
    slug: 'plemet',
    nom: 'Plémet',
    departement: 'Côtes-d’Armor',
    situation: 'à l’est de La Motte, sur la même route',
    ancrage:
      'Plémet est sur la même route que La Motte, ce qui rend le retrait simple même en semaine. Les commandes de dernière minute y sont fréquentes : appelez, on regarde ensemble ce qui reste faisable pour la date voulue.',
    occasions: ['Gâteaux d’anniversaire', 'Baptêmes', 'Desserts de fête de famille'],
  },
  {
    slug: 'la-cheze',
    nom: 'La Chèze',
    departement: 'Côtes-d’Armor',
    situation: 'au sud-est de La Motte',
    ancrage:
      'La Chèze fait partie des communes voisines desservies sans supplément. Les demandes y sont souvent familiales, pour des petites tablées : la taille du gâteau se cale sur le nombre exact de convives, sans rien jeter.',
    occasions: ['Gâteaux d’anniversaire', 'Desserts de fête de famille', 'Biscuits personnalisés'],
  },
  {
    slug: 'treve',
    nom: 'Trévé',
    departement: 'Côtes-d’Armor',
    situation: 'entre le laboratoire et Loudéac',
    ancrage:
      'Trévé est entre le laboratoire et Loudéac, donc le retrait s’organise sans détour. C’est aussi une commune où les commandes de biscuiterie personnalisée reviennent souvent, pour des événements associatifs ou d’entreprise.',
    occasions: ['Biscuits personnalisés', 'Gâteaux d’anniversaire', 'Commandes associatives'],
  },
  {
    slug: 'uzel',
    nom: 'Uzel',
    departement: 'Côtes-d’Armor',
    situation: 'au nord de La Motte',
    ancrage:
      'Uzel est dans la zone desservie au nord. Pour les commandes venant d’un peu plus loin, il vaut mieux appeler tôt : les créneaux de retrait se réservent, surtout en fin de semaine.',
    occasions: ['Gâteaux d’anniversaire', 'Pièces montées', 'Tartes de saison'],
  },
  {
    slug: 'pontivy',
    nom: 'Pontivy',
    departement: 'Morbihan',
    situation: 'au sud-ouest, dans le Morbihan',
    ancrage:
      'Pontivy est le point le plus au sud de la zone desservie. Le déplacement vaut surtout pour les grosses commandes, mariages et buffets, où l’on convient d’un rendez-vous unique plutôt que de plusieurs allers-retours.',
    occasions: ['Pièces montées de mariage', 'Buffets et réceptions', 'Grands formats'],
  },
  {
    slug: 'merdrignac',
    nom: 'Merdrignac',
    departement: 'Côtes-d’Armor',
    situation: 'à l’est du pays de Loudéac',
    ancrage:
      'Merdrignac est à la limite est de la zone. Comme pour toutes les communes éloignées, on cale un seul rendez-vous de retrait et on prépare la commande pour qu’elle voyage bien : emballage renforcé et conseils de transport.',
    occasions: ['Gâteaux d’anniversaire', 'Pièces montées', 'Commandes pour événements'],
  },
  {
    slug: 'ploermel',
    nom: 'Ploërmel',
    departement: 'Morbihan',
    situation: 'au sud-est, dans le Morbihan',
    ancrage:
      'Ploërmel marque la limite sud-est de la zone desservie. Les demandes qui en viennent concernent surtout les mariages et les grandes occasions, pour lesquels le rendez-vous de dégustation se prend plusieurs semaines à l’avance.',
    occasions: ['Pièces montées de mariage', 'Grandes réceptions', 'Desserts de mariage'],
  },
];

export const cheminCommune = (slug: string) => `/patisserie-${slug}`;
