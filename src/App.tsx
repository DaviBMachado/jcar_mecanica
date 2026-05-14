// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { ScrollToTop } from './components/ScrollToTop'; 
import { TrabalheConosco } from './pages/TrabalheConosco';

function App() {
  return (
    <BrowserRouter basename="/jcar_mecanica/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="servicos" element={<Services />} />
          <Route path="sobre" element={<About />} />
          <Route path="trabalhe-conosco" element={<TrabalheConosco />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;