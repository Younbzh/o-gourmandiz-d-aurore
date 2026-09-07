import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { ecrireConsentement, useConsentement } from '../utils/mesure';

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[#1A130C]/10 pt-8 mt-8">
      <h2 className="font-display text-2xl font-bold text-[#1A130C] italic mb-4">{titre}</h2>
      <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">{children}</div>
    </section>
  );
}

/**
 * Mentions légales et confidentialité.
 *
 * Le bandeau de mesure d'audience renvoie ici : un consentement n'en est un que
 * si l'on peut savoir à quoi on a dit oui, et le retirer aussi simplement qu'on
 * l'a donné. D'où les deux boutons en bas, qui rejouent le choix à tout moment.
 */
export default function Confidentialite() {
  const choix = useConsentement();
  const { address, email, phone } = siteConfig.contact;

  return (
    <div className="bg-[#FDFAF6]">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pt-36 pb-24">
        <p className="label mb-4">Informations légales</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1A130C] italic mb-6">
          Mentions légales &<br />confidentialité
        </h1>
        <p className="text-lg text-[#1A130C]/70 leading-relaxed">
          Ce site est celui d'une pâtissière seule, pas d'une boutique en ligne. Il ne vend rien,
          n'ouvre aucun compte et ne conserve aucun fichier de clients.
        </p>

        <Bloc titre="Éditeur du site">
          <p>
            {siteConfig.businessName} — Aurore Delmas, pâtissière.<br />
            Entreprise individuelle sous le régime de la micro-entreprise.<br />
            SIRET : 990 868 721 00012.<br />
            {address.street}, {address.postalCode} {address.city} ({address.region}, {address.country}).<br />
            Téléphone : <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-[#5BBFBF] hover:underline">{phone}</a> ·{' '}
            E-mail : <a href={`mailto:${email}`} className="text-[#5BBFBF] hover:underline">{email}</a>
          </p>
          <p>Directrice de la publication : Aurore Delmas.</p>
        </Bloc>

        <Bloc titre="Hébergement">
          <p>
            Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
            États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#5BBFBF] hover:underline">vercel.com</a>.
          </p>
        </Bloc>

        <Bloc titre="Vos données">
          <p>
            <strong className="text-[#1A130C]">Le formulaire de commande n'envoie rien.</strong> Il
            met en forme votre demande et ouvre WhatsApp avec le message déjà rédigé : c'est vous
            qui l'envoyez, depuis votre téléphone, et rien n'est enregistré par le site au passage.
          </p>
          <p>
            Ce que vous transmettez ensuite par téléphone, SMS, WhatsApp ou e-mail sert uniquement à
            préparer votre commande et à vous recontacter. Ces échanges ne sont ni revendus, ni
            transmis à qui que ce soit.
          </p>
          <p>
            Vous pouvez à tout moment demander à consulter, corriger ou faire effacer ce qui vous
            concerne, en écrivant à{' '}
            <a href={`mailto:${email}`} className="text-[#5BBFBF] hover:underline">{email}</a>.
            En cas de désaccord, la CNIL peut être saisie.
          </p>
        </Bloc>

        <Bloc titre="Cookies et mesure d'audience">
          <p>
            Le site n'utilise aucun cookie publicitaire et ne suit personne d'un site à l'autre. Le
            seul cookie possible est celui de Google Analytics, qui compte les visites et indique
            quelles pages sont consultées — de quoi savoir ce qui intéresse et ce qui ne sert à
            rien.
          </p>
          <p>
            Il n'est déposé que si vous l'acceptez. Tant que vous n'avez pas répondu, ou si vous
            refusez, aucun script de mesure n'est chargé et le site fonctionne à l'identique. Votre
            réponse est gardée dans votre navigateur, et nulle part ailleurs.
          </p>
        </Bloc>

        {/* Le retrait doit être aussi simple que l'accord : deux boutons, ici. */}
        <div className="border border-[#1A130C]/10 bg-white rounded-2xl p-6 md:p-8 mt-10">
          <p className="label mb-3">Votre choix</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            {choix === 'accepte' && 'Vous avez accepté la mesure d’audience. Vous pouvez revenir dessus maintenant.'}
            {choix === 'refuse' && 'Vous avez refusé la mesure d’audience. Aucun cookie n’est déposé.'}
            {(choix === null || choix === undefined) && 'Vous n’avez pas encore répondu : aucun cookie de mesure n’est déposé.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => ecrireConsentement('accepte')}
              disabled={choix === 'accepte'}
              className="bg-[#1A130C] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#5BBFBF] transition-colors disabled:opacity-30 disabled:hover:bg-[#1A130C]"
            >
              Accepter la mesure
            </button>
            <button
              type="button"
              onClick={() => ecrireConsentement('refuse')}
              disabled={choix === 'refuse'}
              className="border border-[#1A130C]/20 text-[#1A130C] px-7 py-3 rounded-full font-semibold text-sm hover:border-[#1A130C]/50 transition-colors disabled:opacity-30"
            >
              Refuser la mesure
            </button>
          </div>
        </div>

        <Bloc titre="Photos et propriété">
          <p>
            Les photos du site sont celles des créations d'Aurore et lui appartiennent. Les textes,
            la mise en page et les images ne peuvent pas être repris sans son accord.
          </p>
        </Bloc>

        <div className="mt-12">
          <Link
            to="/"
            className="inline-block bg-[#1A130C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5BBFBF] transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
