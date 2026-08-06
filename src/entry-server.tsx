/**
 * Point d'entrée du prérendu.
 *
 * Le site est une application React : le fichier livré ne contenait qu'un
 * `<div id="root">` vide, et tout le texte était produit par JavaScript. Google
 * sait l'exécuter, avec retard et sans garantie ; les robots d'IA ne l'exécutent
 * pas du tout. Ils ne voyaient donc rien du site.
 *
 * Ce point d'entrée rend chaque page en HTML au moment du build, et donne à
 * chacune son propre titre, sa description et son adresse canonique. C'est ce
 * qui fait qu'une page commune peut sortir sur « pâtisserie Loudéac » : sans
 * titre distinct, huit pages identiques ne servent à rien.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App';
import { siteConfig } from './config/siteConfig';
import { communes, cheminCommune } from './data/communes';

export interface PageRendue {
  /** Dossier de destination sous dist/. Vide pour la racine. */
  chemin: string;
  html: string;
  titre: string;
  description: string;
}

const VILLE = siteConfig.contact.address.city;

function rendre(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}

/** Les pages fixes du site, avec leurs balises propres. */
const PAGES: { chemin: string; url: string; titre: string; description: string }[] = [
  {
    chemin: 'carte',
    url: '/carte',
    titre: `La carte de saison — Ô Gourmandiz d'Aurore, ${VILLE} (22)`,
    description:
      `Gâteaux, tartes, macarons et biscuits de saison, préparés sur commande à ${VILLE} (Côtes-d'Armor). ` +
      `La carte change avec les fruits disponibles.`,
  },
  {
    chemin: 'evenements',
    url: '/evenements',
    titre: `Mariages et événements — Ô Gourmandiz d'Aurore, ${VILLE} (22)`,
    description:
      `Pièces montées, pyramides de macarons et desserts de réception sur commande, ` +
      `en Centre Bretagne. Rendez-vous de dégustation avant la date.`,
  },
  {
    chemin: 'commander',
    url: '/commander',
    titre: `Passer commande — Ô Gourmandiz d'Aurore, ${VILLE} (22)`,
    description:
      `Commande par téléphone, SMS ou WhatsApp. Laboratoire privé à ${VILLE}, ` +
      `retrait sur rendez-vous, pas de vente en boutique.`,
  },
  {
    chemin: 'about',
    url: '/about',
    titre: `Aurore, pâtissière à ${VILLE} — Ô Gourmandiz d'Aurore`,
    description:
      `Le parcours d'Aurore et sa façon de travailler : tout sur commande, ` +
      `rien en stock, des produits de saison.`,
  },
];

export function rendrePages(): PageRendue[] {
  const pages: PageRendue[] = [];

  // L'accueil garde les balises déjà écrites dans index.html : elles sont bonnes.
  pages.push({ chemin: '', html: rendre('/'), titre: '', description: '' });

  for (const p of PAGES) {
    pages.push({ chemin: p.chemin, html: rendre(p.url), titre: p.titre, description: p.description });
  }

  /*
    Les pages commune. Le titre reprend le mot que la personne tape réellement,
    « pâtisserie » plus le nom de sa ville, et la description dit ce qui la
    concerne : la commande à distance et le retrait.
  */
  for (const c of communes) {
    const url = cheminCommune(c.slug);
    pages.push({
      chemin: url.slice(1),
      html: rendre(url),
      titre: `Pâtisserie sur commande à ${c.nom} (${c.departement}) — Ô Gourmandiz d'Aurore`,
      description:
        `Gâteaux d'anniversaire, pièces montées et biscuits personnalisés sur commande pour ${c.nom}. ` +
        `Laboratoire artisanal à ${VILLE}, à proximité de ${c.nom}. Retrait sur rendez-vous.`,
    });
  }

  return pages;
}

/** Les adresses à déclarer au plan de site, dans l'ordre d'importance. */
export function adresses(): string[] {
  return ['', ...PAGES.map((p) => p.chemin), ...communes.map((c) => cheminCommune(c.slug).slice(1))];
}
