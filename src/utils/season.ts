export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

/**
 * Renvoie la saison en cours selon la date (par défaut : aujourd'hui, dans le
 * navigateur du visiteur). Les bascules se font aux dates astronomiques
 * (solstices / équinoxes) — « le premier jour de l'été » = 21 juin, etc.
 *
 * Aucune intervention ni redéploiement nécessaire : chaque visiteur voit
 * automatiquement la bonne saison au moment où il charge la page.
 */
export function getSeason(date: Date = new Date()): Season {
  // valeur comparable "mois-jour" : ex. 21 juin -> 621
  const md = (date.getMonth() + 1) * 100 + date.getDate();

  if (md >= 320 && md < 621) return 'spring';   // 20 mars  -> 20 juin
  if (md >= 621 && md < 922) return 'summer';   // 21 juin  -> 21 sept.
  if (md >= 922 && md < 1221) return 'autumn';  // 22 sept. -> 20 déc.
  return 'winter';                              // 21 déc.  -> 19 mars
}

export const seasonName: Record<Season, string> = {
  spring: 'Printemps',
  summer: 'Été',
  autumn: 'Automne',
  winter: 'Hiver',
};
