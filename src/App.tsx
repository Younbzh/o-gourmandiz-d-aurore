import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Carte from './pages/Carte';
import Produit from './pages/Produit';
import Evenements from './pages/Evenements';
import Commander from './pages/Commander';
import About from './pages/About';
import PageCommune from './pages/PageCommune';
import NonTrouvee from './pages/NonTrouvee';
import { communes, cheminCommune } from './data/communes';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="carte" element={<Carte />} />
        <Route path="carte/:id" element={<Produit />} />
        <Route path="evenements" element={<Evenements />} />
        <Route path="commander" element={<Commander />} />
        <Route path="about" element={<About />} />

        {/*
          Une page par commune desservie. Le chemin est écrit en dur plutôt que
          paramétré : ces huit adresses sont fixes, elles sont prérendues au
          build, et une commune inconnue doit tomber en 404 plutôt que d'afficher
          une page vide au nom de n'importe quel village.
        */}
        {communes.map((c) => (
          <Route key={c.slug} path={cheminCommune(c.slug).slice(1)} element={<PageCommune commune={c} />} />
        ))}

        <Route path="*" element={<NonTrouvee />} />
      </Route>
    </Routes>
  );
}
