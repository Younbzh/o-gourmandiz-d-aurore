import { CalendarDays, Gift, Wallet } from 'lucide-react';
import { modalitesFetes } from '../data/products';

/*
  Retrait, clôture et règlement de la carte des Fêtes. En grand sous la carte,
  et en version compacte sous le prix de chaque création, à la demande
  d'Aurore : la cliente qui ouvre une bûche voit tout de suite quand la
  récupérer.
*/
export default function ModalitesFetes({ compact = false }: { compact?: boolean }) {
  const m = modalitesFetes;
  const blocs = [
    { icone: Gift, titre: 'Retrait à La Motte', lignes: m.retraits },
    { icone: CalendarDays, titre: 'Clôture des commandes', lignes: m.clotures },
    { icone: Wallet, titre: 'Règlement', lignes: [m.reglement] },
  ];
  const grille = (
    <div className="grid md:grid-cols-3 gap-6">
      {blocs.map(({ icone: Icone, titre, lignes }) => (
        <div key={titre}>
          <div className="flex items-center gap-2 mb-3">
            <Icone className="w-4 h-4 text-[#5BBFBF]" />
            <h3 className="font-semibold text-[#1A130C] text-sm">{titre}</h3>
          </div>
          <ul className="space-y-1.5">
            {lignes.map((l) => (
              <li key={l} className="text-sm text-gray-600 leading-relaxed">{l}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  if (compact) {
    return (
      <div className="mt-8 bg-white rounded-2xl border border-[#F3EBE1] p-6">
        <p className="label mb-5">Retrait et réservation</p>
        {grille}
      </div>
    );
  }

  return (
    <div className="mt-14 bg-white rounded-2xl border border-[#F3EBE1] p-6 md:p-10">
      <p className="label mb-2 text-center">Les réservations sont ouvertes</p>
      <h2 className="font-display font-bold italic text-[#1A130C] text-3xl text-center mb-3">Modalités et réservations</h2>
      <p className="text-gray-500 text-sm text-center max-w-md mx-auto mb-8">
        Les quantités étant limitées, pensez à réserver votre gourmandiz dès maintenant, sur WhatsApp.
      </p>
      {grille}
    </div>
  );
}
