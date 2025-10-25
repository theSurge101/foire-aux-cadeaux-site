import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layouts/Layout';

// Pages
import Home from './Pages/Home';
import ExhibitorInfo from './Pages/ExhibitorInfo';
import VisitorInfo from './Pages/VisitorInfo';
import PremiumPass from './Pages/PremiumPass';
import Program from './Pages/Program';
import Exhibitors from './Pages/Exhibitors';
import PracticalInfo from './Pages/PracticalInfo';
import Press from './Pages/Press';
import Partners from './Pages/Partners';
import Contact from './Pages/Contact';
import Legal from './Pages/Legal';
import Privacy from './Pages/Privacy';
import NotFound from './Pages/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main pages with layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="exposants" element={<ExhibitorInfo />} />
          <Route path="visiteurs" element={<VisitorInfo />} />
          <Route path="pass-premium" element={<PremiumPass />} />
          <Route path="programme" element={<Program />} />
          <Route path="liste-exposants" element={<Exhibitors />} />
          <Route path="infos-pratiques" element={<PracticalInfo />} />
          <Route path="presse" element={<Press />} />
          <Route path="partenaires" element={<Partners />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mentions-legales" element={<Legal />} />
          <Route path="confidentialite" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;