import { Link } from 'react-router-dom';

/**
 * Page 404.
 *
 * Elle ne suffit pas à elle seule : le vrai correctif est dans vercel.json, qui
 * ne réécrit plus toutes les adresses vers l'accueil. Sans ça, le serveur
 * répondait 200 à n'importe quelle adresse inventée, et Google pouvait indexer
 * autant de doublons de l'accueil qu'il existe d'adresses fantaisistes.
 */
export default function NonTrouvee() {
  return (
    <div className="bg-[#FDFAF6] min-h-[70vh] flex items-center">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-24">
        <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#5BBFBF] mb-5">
          Page introuvable
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[#1A130C] leading-[0.95] mb-6">
          Cette page n’existe pas
        </h1>
        <p className="text-lg text-[#1A130C]/70 leading-relaxed mb-10">
          Elle a peut-être été déplacée, ou l’adresse comporte une erreur.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#1A130C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2A1F14] transition-colors"
        >
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
