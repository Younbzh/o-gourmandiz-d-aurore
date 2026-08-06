import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { Commune } from '../data/communes';

/**
 * Une page par commune desservie.
 *
 * Volontairement courte : le bloc propre à la commune, ce qui s'y commande, et
 * le contact. Y recopier la carte, la FAQ et l'histoire d'Aurore ferait de
 * chaque page un quasi-doublon de l'accueil, ce que Google écarte. La page
 * renvoie vers l'accueil pour le reste, c'est son rôle.
 */
export default function PageCommune({ commune }: { commune: Commune }) {
  const tel = siteConfig.contact.phone.replace(/\s/g, '');

  return (
    <article className="bg-[#FDFAF6]">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pt-32 pb-20">
        <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#5BBFBF] mb-5">
          Pâtisserie sur commande · {commune.nom} ({commune.departement})
        </p>

        <h1 className="font-display text-4xl md:text-6xl font-bold text-[#1A130C] leading-[0.95] mb-6">
          Pâtisserie artisanale
          <br />
          <em>à {commune.nom}</em>
        </h1>

        <p className="text-lg text-[#1A130C]/70 leading-relaxed mb-4">
          Ô Gourmandiz d’Aurore est un laboratoire de pâtisserie artisanale installé à La Motte.{' '}
          {commune.nom} est {commune.situation}. Tout est fait sur commande, à la demande, sans
          vitrine ni stock.
        </p>

        <p className="text-lg text-[#1A130C]/70 leading-relaxed mb-10">{commune.ancrage}</p>

        <div className="border-t border-[#1A130C]/10 pt-8 mb-10">
          <p className="label mb-4">Ce qui se commande depuis {commune.nom}</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {commune.specialites.map((o) => (
              <li key={o} className="flex items-center gap-3 text-[#1A130C]/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5BBFBF] flex-shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm mb-10">
          <p className="label mb-4">Commander depuis {commune.nom}</p>
          <p className="text-[#1A130C]/70 leading-relaxed mb-6">
            {siteConfig.contact.labNote}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center gap-2 bg-[#1A130C] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#2A1F14] transition-colors"
            >
              <Phone className="w-4 h-4" /> {siteConfig.contact.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Bonjour%20Aurore%20!%20Je%20vous%20contacte%20depuis%20${encodeURIComponent(commune.nom)}%20pour%20une%20commande%20%F0%9F%8E%82`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5BBFBF] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Le reste du site est à un clic : la page commune n'a pas à le recopier. */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          <Link to="/carte" className="inline-flex items-center gap-2 text-[#1A130C] font-semibold hover:text-[#5BBFBF] transition-colors">
            Voir la carte de saison <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/evenements" className="inline-flex items-center gap-2 text-[#1A130C] font-semibold hover:text-[#5BBFBF] transition-colors">
            Mariages et événements <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/commander" className="inline-flex items-center gap-2 text-[#1A130C] font-semibold hover:text-[#5BBFBF] transition-colors">
            Passer commande <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
