import { StrictMode, lazy, Suspense, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';

export const toBeLearned: string[] = [
  'Basic_TSX_components',
  'Conditional_rendering',
  'Listing_&_keys',
  'Props_&_state',
  'Hooks',
  'Client_side_routing',
  'Server_side_routing',
  'Api',
  'Forms',
  'UI_libraries',
  'Packages'
];

// Create lazy-loaded components dynamically
const lazyComponents: Record<string, React.LazyExoticComponent<React.FC>> = {};
toBeLearned.forEach(name => {
  lazyComponents[name] = lazy(() => import(`./components/${name}.tsx`));
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<App />}>
            {toBeLearned.map(name => (
              <Route
                key={name}
                path={name.toLowerCase()}
                element={createElement(lazyComponents[name])}
              />
            ))}
          </Route>
          <Route path='*' element={<App />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
