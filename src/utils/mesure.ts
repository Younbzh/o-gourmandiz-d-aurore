/**
 * Google Analytics — chargé uniquement après un consentement explicite.
 *
 * La CNIL n'exempte pas Google Analytics de consentement : le script ne doit
 * pas être présent dans la page tant que la personne n'a pas dit oui. Il n'est
 * donc pas dans index.html — il est injecté ici, et seulement là.
 *
 * Le choix est gardé dans le navigateur de la personne, jamais envoyé ailleurs.
 * `null` signifie « pas encore répondu » : c'est ce qui déclenche le bandeau.
 */

import { useSyncExternalStore } from 'react';

const CLE = 'ogda-consentement-mesure';

export type Consentement = 'accepte' | 'refuse' | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/* --------------------------------------------------------------- le choix */

export function lireConsentement(): Consentement {
  // Navigation privée, cookies bloqués, prérendu : l'accès peut lever.
  try {
    const v = window.localStorage.getItem(CLE);
    return v === 'accepte' || v === 'refuse' ? v : null;
  } catch {
    return null;
  }
}

const abonnes = new Set<() => void>();

function surChangement(f: () => void): () => void {
  abonnes.add(f);
  return () => {
    abonnes.delete(f);
  };
}

/**
 * Le choix, tel que le voit un composant.
 *
 * `undefined` au prérendu et à l'hydratation : le serveur ne connaît pas le
 * navigateur de la personne, et rendre un bandeau dans le HTML livré le ferait
 * indexer comme du contenu. La vraie valeur arrive juste après l'hydratation.
 */
export function useConsentement(): Consentement | undefined {
  return useSyncExternalStore(surChangement, lireConsentement, () => undefined);
}

export function ecrireConsentement(choix: Consentement): void {
  try {
    if (choix === null) window.localStorage.removeItem(CLE);
    else window.localStorage.setItem(CLE, choix);
  } catch {
    /* Refus d'écrire : le choix ne vaut que pour cette visite, tant pis. */
  }

  if (choix === 'accepte') charger();
  abonnes.forEach((f) => f());
}

/* ------------------------------------------------------------- la balise */

export const ID_MESURE = 'G-XVCD0G2Q21';

let chargee = false;

/**
 * Injecte gtag.js une seule fois.
 *
 * `send_page_view: false` : le site est une application à une seule page, où un
 * changement de page ne recharge rien. Les vues sont envoyées à la main par
 * `envoyerVue`, sinon seule la première page de chaque visite serait comptée.
 */
function charger(): void {
  if (chargee || typeof window === 'undefined') return;
  chargee = true;

  const balise = document.createElement('script');
  balise.async = true;
  balise.src = `https://www.googletagmanager.com/gtag/js?id=${ID_MESURE}`;
  document.head.appendChild(balise);

  window.dataLayer = window.dataLayer || [];
  // Le stub officiel de Google, à la lettre : gtag.js relit la file d'attente
  // en objets `arguments`, pas en tableaux.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', ID_MESURE, { send_page_view: false });
}

/** À appeler au démarrage : ne charge rien si le consentement manque. */
export function demarrer(): void {
  if (lireConsentement() === 'accepte') charger();
}

export function envoyerVue(chemin: string): void {
  if (!chargee || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: chemin,
    page_location: window.location.href,
    page_title: document.title,
  });
}
