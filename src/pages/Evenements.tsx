import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Evenements() {
  const navigate = useNavigate();

  return (
    <>
      {/* En-tête */}
      <div className="pt-36 pb-16 bg-[#FDFAF6] text-center px-5">
        <p className="text-xs uppercase tracking-[0.25em] text-[#5BBFBF] mb-4">Grands moments</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-[#1A130C] italic mb-6">
          Événements &<br />grandes occasions
        </h1>
        <div className="inline-flex items-center gap-2 border border-[#1A130C]/15 bg-white rounded-full px-5 py-2.5 text-sm text-gray-500">
          <Clock className="w-4 h-4 text-[#5BBFBF]" />
          {siteConfig.evenementsSection.note}
        </div>
      </div>

      {/* Sections événements — alternées photo / texte */}
      {siteConfig.evenementsSection.list.map((item, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={i}
            className={`grid md:grid-cols-2 min-h-[70vh] ${i === siteConfig.evenementsSection.list.length - 1 ? '' : 'border-b border-[#F3EBE1]'}`}
          >
            {/* Photo */}
            <div className={`relative overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}>
              <img
                src={item.photo}
                alt={item.name}
                className="w-full h-full object-cover min-h-[50vw] md:min-h-0"
                style={{ minHeight: '320px' }}
              />
              <div className="absolute inset-0 bg-[#1A130C]/10" />
            </div>

            {/* Texte */}
            <div className={`bg-[#FDFAF6] flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
              <p className="text-xs uppercase tracking-[0.25em] text-[#5BBFBF] mb-5">
                {`0${i + 1}`}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A130C] italic mb-5 leading-tight">
                {item.name}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
                {item.description}
              </p>
              <ul className="space-y-3 mb-10">
                {item.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#5BBFBF] rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/commander')}
                className="self-start bg-[#1A130C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5BBFBF] transition-colors"
              >
                Je demande un devis
              </button>
            </div>
          </section>
        );
      })}

      {/* CTA bas */}
      <section className="bg-[#1A130C] py-24 text-center">
        <div className="max-w-xl mx-auto px-5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#5BBFBF] mb-5">
            Minimum 3 semaines à l'avance
          </p>
          <h2 className="font-display text-4xl font-bold text-white italic mb-6">
            Un grand événement en préparation ?
          </h2>
          <p className="text-white/40 mb-10 text-sm leading-relaxed">
            Remplissez le formulaire de commande — je reviens vers vous rapidement pour étudier votre projet.
          </p>
          <button
            onClick={() => navigate('/commander')}
            className="bg-[#5BBFBF] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors"
          >
            Je prends contact
          </button>
        </div>
      </section>
    </>
  );
}
