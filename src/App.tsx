import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout & Components
import Layout from './Components/Layouts/Layout';
import ScrollToTop from './Components/Common/ScrollToTop';
import ComingSoon from './Components/Common/ComingSoon';

// Pages
import Home from './Pages/Home';
import ExhibitorInfo from './Pages/ExhibitorInfo';
import VisitorInfo from './Pages/VisitorInfo';
import PremiumPass from './Pages/PremiumPass';
import Program from './Pages/Program';
import Exhibitors from './Pages/Exhibitors';
import ExhibitorDetailPage from './Pages/ExhibitorDetailPage';
import PracticalInfo from './Pages/PracticalInfo';
import Press from './Pages/Press';
import Partners from './Pages/Partners';
import Contact from './Pages/Contact';
import Legal from './Pages/Legal';
import Privacy from './Pages/Privacy';
import NotFound from './Pages/NotFound';

// Feature flags
const FEATURES = {
  PROGRAM_READY: false, // Set to true when programme page is ready
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main pages with layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="exposants" element={<ExhibitorInfo />} />
          <Route path="visiteurs" element={<VisitorInfo />} />
          <Route path="pass-premium" element={<PremiumPass />} />
          <Route path="programme" element={FEATURES.PROGRAM_READY ? <Program /> : <ComingSoon pageName="Programme" />} />
          <Route path="liste-exposants" element={FEATURES.PROGRAM_READY ? <Exhibitors /> : <ComingSoon pageName="Liste Exposants" />} />
          <Route path="exposants/:exhibitorSlug" element={<ExhibitorDetailPage />} />
          <Route path="infos-pratiques" element={<PracticalInfo />} />
          <Route path="presse" element={<Press />} />
          <Route path="partenaires" element={FEATURES.PROGRAM_READY ? <Partners /> : <ComingSoon pageName="Liste Partenaires" />} />
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