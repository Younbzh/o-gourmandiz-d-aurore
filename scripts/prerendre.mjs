#!/usr/bin/env node
/**
 * Écrit le site dans le HTML livré, au lieu de le laisser produire par JavaScript.
 *
 * Avant ce script, `dist/index.html` était la seule page du site : toutes les
 * adresses renvoyaient ce même fichier, et le serveur répondait 200 à n'importe
 * quelle adresse inventée. Deux conséquences : les robots qui n'exécutent pas
 * JavaScript ne voyaient rien du contenu, et aucune page ne pouvait porter son
 * propre titre, ce qui rend une page commune inutile.
 *
 * Produit un vrai fichier par page, avec ses balises, plus le plan de site.
 * Lancé automatiquement à la fin de `npm run build`.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const RACINE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(RACINE, 'dist');
const DIST_SSR = path.join(RACINE, '.ssr');
const SITE = 'https://ogourmandizdaurore.com';

const echapper = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------------------------------------------------------------- rendu */

execFileSync(
  'npx',
  ['vite', 'build', '--ssr', 'src/entry-server.tsx', '--outDir', '.ssr', '--logLevel', 'error'],
  { cwd: RACINE, stdio: ['ignore', 'ignore', 'inherit'] },
);

const serveur = await import(pathToFileURL(path.join(DIST_SSR, 'entry-server.js')).href);
const gabarit = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

/**
 * Remplace le titre, la description et la canonique du gabarit.
 * Les pages sans titre propre, l'accueil, gardent celles d'index.html.
 */
function habiller(html, { titre, description, url }) {
  let page = gabarit.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  if (titre) page = page.replace(/<title>[\s\S]*?<\/title>/, `<title>${echapper(titre)}</title>`);
  if (description) {
    page = page.replace(
      /<meta name="description" content="[\s\S]*?"\s*\/?>/,
      `<meta name="description" content="${echapper(description)}" />`,
    );
    page = page.replace(
      /<meta property="og:description" content="[\s\S]*?"\s*\/?>/,
      `<meta property="og:description" content="${echapper(description)}" />`,
    );
  }
  if (titre) {
    page = page.replace(
      /<meta property="og:title" content="[\s\S]*?"\s*\/?>/,
      `<meta property="og:title" content="${echapper(titre)}" />`,
    );
  }

  // Chaque page déclare sa propre adresse : sans ça, huit pages se disent la même.
  const canonique = `<link rel="canonical" href="${url}" />`;
  page = /<link rel="canonical"[^>]*>/.test(page)
    ? page.replace(/<link rel="canonical"[^>]*>/, canonique)
    : page.replace('</head>', `  ${canonique}\n</head>`);

  return page;
}

let ecrites = 0;
for (const p of serveur.rendrePages()) {
  const url = p.chemin ? `${SITE}/${p.chemin}` : `${SITE}/`;
  const dossier = p.chemin ? path.join(DIST, p.chemin) : DIST;
  fs.mkdirSync(dossier, { recursive: true });
  fs.writeFileSync(
    path.join(dossier, 'index.html'),
    habiller(p.html, { titre: p.titre, description: p.description, url }),
  );
  ecrites++;
}

/* ----------------------------------------------------------- plan de site */

const aujourdhui = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    serveur
      .adresses()
      .map((a) => {
        const url = a ? `${SITE}/${a}` : `${SITE}/`;
        // L'accueil et la carte changent plus souvent que les pages commune.
        const priorite = a === '' ? '1.0' : a.startsWith('patisserie-') ? '0.7' : '0.8';
        return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${aujourdhui}</lastmod>\n    <priority>${priorite}</priority>\n  </url>`;
      })
      .join('\n') +
    `\n</urlset>\n`,
);

fs.writeFileSync(
  path.join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`,
);

console.log(
  `\x1b[90mprérendu : ${ecrites} page(s) écrites dans dist/, plan de site et robots.txt\x1b[0m`,
);
