import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';

const Basic_TSX_components = lazy(() => import('./components/Basic_TSX_components.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='basic_TSX_components' element={<Basic_TSX_components />} />
          </Route>
          <Route path='*' element={<App />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
