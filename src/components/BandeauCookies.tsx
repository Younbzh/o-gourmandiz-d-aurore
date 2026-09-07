import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { demarrer, ecrireConsentement, envoyerVue, useConsentement } from '../utils/mesure';

/**
 * Le bandeau de consentement, et la mesure d'audience qu'il commande.
 *
 * Les deux sont dans le même composant parce qu'ils sont indissociables : la
 * mesure ne démarre que si le bandeau a reçu un oui, et les vues de page ne
 * partent qu'ensuite.
 *
 * Rien n'est rendu au prérendu ni à l'hydratation : `choix` vaut `undefined`
 * tant que le navigateur n'a pas été lu. Sans ça, le HTML livré contiendrait un
 * bandeau que Google indexerait comme du contenu de la page.
 */
export default function BandeauCookies() {
  const choix = useConsentement();
  const { pathname } = useLocation();

  // Une visite déjà consentie reprend la mesure sans redemander quoi que ce soit.
  useEffect(demarrer, []);

  // Une vue par page visitée : le routeur ne recharge pas le document.
  useEffect(() => {
    if (choix === 'accepte') envoyerVue(pathname);
  }, [pathname, choix]);

  if (choix !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Mesure d'audience"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 md:p-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:pb-5"
    >
      <div className="max-w-3xl mx-auto bg-[#FDFAF6] border border-[#1A130C]/10 rounded-2xl shadow-2xl p-5 md:p-6 mb-16 md:mb-0">
        <p className="font-display text-lg font-bold text-[#1A130C] italic mb-2">
          Un cookie de mesure ?
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          J'aimerais savoir quelles pages vous intéressent, pour améliorer le site. Cela passe par
          Google Analytics, qui dépose un cookie. Rien n'est déposé si vous refusez, et le site
          fonctionne exactement pareil.{' '}
          <Link to="/confidentialite" className="text-[#5BBFBF] font-semibold hover:underline">
            En savoir plus
          </Link>
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => ecrireConsentement('accepte')}
            className="bg-[#1A130C] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#5BBFBF] transition-colors"
          >
            Accepter
          </button>
          <button
            type="button"
            onClick={() => ecrireConsentement('refuse')}
            className="border border-[#1A130C]/20 text-[#1A130C] px-7 py-3 rounded-full font-semibold text-sm hover:border-[#1A130C]/50 transition-colors"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}
