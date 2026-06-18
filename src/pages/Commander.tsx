import { useState } from 'react';
import { Check, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

type Occasion = 'Anniversaire' | 'Mariage / Fiançailles' | 'Baptême / Naissance' | 'Événement professionnel' | 'Autre';
type Creation = 'Tarte signature' | 'Gâteau d\'anniversaire / Number cake' | 'Macarons' | 'Biscuits personnalisés' | 'Pièce montée à la française' | 'Pyramide de macarons' | 'Je ne sais pas encore';

interface FormData {
  occasion: Occasion | '';
  date: string;
  guests: string;
  creation: Creation | '';
  wishes: string;
  name: string;
  phone: string;
}

const occasions: Occasion[] = [
  'Anniversaire',
  'Mariage / Fiançailles',
  'Baptême / Naissance',
  'Événement professionnel',
  'Autre',
];

const creations: { label: Creation; photo: string }[] = [
  { label: 'Tarte signature', photo: '/tarte.jpeg' },
  { label: 'Gâteau d\'anniversaire / Number cake', photo: '/gateau-40-ans.jpeg' },
  { label: 'Macarons', photo: '/macaron-1.jpeg' },
  { label: 'Biscuits personnalisés', photo: '/sables-personnalises.jpeg' },
  { label: 'Pièce montée à la française', photo: '/gateau-mariage.jpeg' },
  { label: 'Pyramide de macarons', photo: '/macarons-fille-garcon.jpeg' },
  { label: 'Je ne sais pas encore', photo: '/gateau-fraises.jpeg' },
];

export default function Commander() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    occasion: '',
    date: '',
    guests: '',
    creation: '',
    wishes: '',
    name: '',
    phone: '',
  });

  const set = (key: keyof FormData, value: string) =>
    setForm(f => ({ ...f, [key]: value }));

  const canNext = () => {
    if (step === 1) return form.occasion !== '';
    if (step === 2) return form.date !== '' && form.guests !== '' && form.creation !== '';
    if (step === 3) return true;
    if (step === 4) return form.name !== '' && form.phone !== '';
    return false;
  };

  const handleSubmit = () => {
    const msg = [
      `Bonjour Aurore ! Je souhaite passer une commande. 🎂`,
      ``,
      `📌 Occasion : ${form.occasion}`,
      `📅 Date souhaitée : ${form.date}`,
      `👥 Nombre de personnes : ${form.guests}`,
      `✨ Type de création : ${form.creation}`,
      form.wishes ? `💬 Mes souhaits : ${form.wishes}` : '',
      ``,
      `📋 Mon prénom : ${form.name}`,
      `📱 Mon téléphone : ${form.phone}`,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  const steps = ['L\'occasion', 'Les détails', 'Vos souhaits', 'Vos coordonnées'];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FDFAF6] flex items-center justify-center px-5 pt-20">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-[#5BBFBF] rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-white" />
          </div>
          <p className="label mb-4">Demande envoyée</p>
          <h2 className="font-display text-4xl font-bold text-[#1A130C] italic mb-6">
            Merci {form.name} !
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10">
            Votre demande a été envoyée sur WhatsApp. Aurore vous répond rapidement pour confirmer votre commande.
          </p>
          <div className="space-y-3">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-3 w-full border border-[#1A130C]/15 bg-white text-[#1A130C] py-4 rounded-full font-semibold hover:bg-[#F3EBE1] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-full font-semibold hover:bg-[#1DAE54] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Ouvrir WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFAF6] pt-28 pb-16 px-5">
      <div className="max-w-2xl mx-auto">

        {/* Titre */}
        <div className="text-center mb-12">
          <p className="label mb-4">Formulaire de commande</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1A130C] italic">
            Je passe commande
          </h1>
        </div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3">
            {steps.map((label, i) => (
              <div key={i} className="flex flex-col items-center gap-1 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  i + 1 < step ? 'bg-[#5BBFBF] text-white' :
                  i + 1 === step ? 'bg-[#1A130C] text-white' :
                  'bg-[#F3EBE1] text-gray-400'
                }`}>
                  {i + 1 < step ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-[10px] uppercase tracking-wide hidden sm:block ${
                  i + 1 === step ? 'text-[#1A130C] font-semibold' : 'text-gray-400'
                }`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-[#F3EBE1] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5BBFBF] rounded-full transition-all duration-500"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Étape 1 — Occasion */}
        {step === 1 && (
          <div>
            <h2 className="font-display text-2xl font-bold text-[#1A130C] italic mb-8">
              Quelle est l'occasion ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {occasions.map(o => (
                <button
                  key={o}
                  onClick={() => set('occasion', o)}
                  className={`text-left px-6 py-5 rounded-2xl border-2 font-medium transition-all ${
                    form.occasion === o
                      ? 'border-[#5BBFBF] bg-[#5BBFBF]/5 text-[#1A130C]'
                      : 'border-[#F3EBE1] bg-white text-gray-600 hover:border-[#5BBFBF]/50'
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Étape 2 — Détails */}
        {step === 2 && (
          <div className="space-y-8">
            <h2 className="font-display text-2xl font-bold text-[#1A130C] italic">
              Quelques détails
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={e => set('date', e.target.value)}
                  className="w-full border-2 border-[#F3EBE1] rounded-xl px-4 py-3 text-[#1A130C] focus:border-[#5BBFBF] outline-none transition-colors bg-white"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Nombre de personnes
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="ex. 20"
                  value={form.guests}
                  onChange={e => set('guests', e.target.value)}
                  className="w-full border-2 border-[#F3EBE1] rounded-xl px-4 py-3 text-[#1A130C] focus:border-[#5BBFBF] outline-none transition-colors bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-4">
                Type de création
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {creations.map(({ label, photo }) => (
                  <button
                    key={label}
                    onClick={() => set('creation', label)}
                    className={`relative overflow-hidden rounded-2xl border-2 transition-all ${
                      form.creation === label
                        ? 'border-[#5BBFBF] ring-2 ring-[#5BBFBF]/30'
                        : 'border-transparent hover:border-[#5BBFBF]/40'
                    }`}
                  >
                    <img src={photo} alt={label} className="w-full aspect-square object-cover" />
                    <div className={`absolute inset-0 flex items-end p-3 ${form.creation === label ? 'bg-[#5BBFBF]/30' : 'bg-[#1A130C]/40'}`}>
                      <span className="text-white text-xs font-semibold leading-tight text-left">{label}</span>
                    </div>
                    {form.creation === label && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-[#5BBFBF] rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Étape 3 — Souhaits */}
        {step === 3 && (
          <div>
            <h2 className="font-display text-2xl font-bold text-[#1A130C] italic mb-3">
              Vos souhaits
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Couleurs, thème, contraintes particulières… tout ce qui peut m'aider à créer exactement ce que vous imaginez.
            </p>
            <textarea
              rows={6}
              placeholder="Ex. : thème arc-en-ciel, couleurs pastels, prénom Léa…"
              value={form.wishes}
              onChange={e => set('wishes', e.target.value)}
              className="w-full border-2 border-[#F3EBE1] rounded-2xl px-5 py-4 text-[#1A130C] focus:border-[#5BBFBF] outline-none transition-colors resize-none bg-white text-sm leading-relaxed"
            />
            <div className="mt-6 bg-[#F3EBE1] rounded-2xl p-5">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-[#1A130C]">À savoir :</span> les parfums suivent la carte de saison. La personnalisation des couleurs, du thème et des décors est toujours possible.
              </p>
            </div>
          </div>
        )}

        {/* Étape 4 — Coordonnées */}
        {step === 4 && (
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-[#1A130C] italic">
              Pour vous recontacter
            </h2>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Votre prénom *
              </label>
              <input
                type="text"
                placeholder="Marie"
                value={form.name}
                onChange={e => set('name', e.target.value)}
                className="w-full border-2 border-[#F3EBE1] rounded-xl px-4 py-3 text-[#1A130C] focus:border-[#5BBFBF] outline-none transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Votre téléphone (WhatsApp si possible) *
              </label>
              <input
                type="tel"
                placeholder="06 XX XX XX XX"
                value={form.phone}
                onChange={e => set('phone', e.target.value)}
                className="w-full border-2 border-[#F3EBE1] rounded-xl px-4 py-3 text-[#1A130C] focus:border-[#5BBFBF] outline-none transition-colors bg-white"
              />
            </div>

            {/* Récap */}
            <div className="bg-white border border-[#F3EBE1] rounded-2xl p-6 mt-4">
              <p className="label mb-4">Récapitulatif</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between"><span className="text-gray-400">Occasion</span><span className="font-medium text-[#1A130C]">{form.occasion}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Date</span><span className="font-medium text-[#1A130C]">{form.date}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Personnes</span><span className="font-medium text-[#1A130C]">{form.guests}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Création</span><span className="font-medium text-[#1A130C] text-right max-w-[60%]">{form.creation}</span></div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation étapes */}
        <div className="flex justify-between mt-10 gap-4">
          {step > 1 ? (
            <button
              onClick={() => setStep(s => s - 1)}
              className="border-2 border-[#F3EBE1] text-gray-500 px-8 py-4 rounded-full font-semibold hover:border-gray-300 transition-colors"
            >
              Retour
            </button>
          ) : <div />}

          {step < 4 ? (
            <button
              onClick={() => setStep(s => s + 1)}
              disabled={!canNext()}
              className="bg-[#1A130C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5BBFBF] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Continuer
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canNext()}
              className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1DAE54] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <MessageCircle className="w-5 h-5" />
              Envoyer sur WhatsApp
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
