import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { ScrollToTop } from './components/ScrollToTop'; 

function App() {
  return (
    <BrowserRouter>
      {/* 2. O componente invisível fica aqui, vigiando as trocas de página */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="servicos" element={<Services />} />
          <Route path="sobre" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;