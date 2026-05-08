import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Rota inicial provisória para teste */}
          <Route index element={
            <div className="container mx-auto p-8 text-center mt-20">
              <h1 className="text-4xl font-bold mb-4">Motor Ligado! 🚗💨</h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                Seu layout base e roteamento estão funcionando perfeitamente.
              </p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;