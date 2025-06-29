import {
  StrictMode,
  lazy,
  Suspense,
  createElement,
  type FC,
  type LazyExoticComponent
} from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router';
import App from './App.tsx';

export const toBeLearned: string[] = [
  'Getting_started',
  'Basic_TSX_components',
  'Props_&_state',
  'Conditional_rendering',
  'Listing_&_keys',
  'Events',
  'Hooks',
  'Routing',
  'Forms',
  'Api',
  'Tables'
];

const lazyComponents: Record<string, LazyExoticComponent<FC>> = {};

toBeLearned.forEach(name => {
  lazyComponents[name] = lazy(() => import(`./components/${name}.tsx`));
});

const renderRoutes = toBeLearned.map(name => (
  <Route
    key={name}
    path={name.toLowerCase()}
    element={createElement(lazyComponents[name])}
  />
))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={
              createElement(
                lazy(() => import('./components/Welcome.tsx'))
              )
            } />
            {renderRoutes}
            <Route path='*' element={
              createElement(
                lazy(() => import('./components/NoPage.tsx'))
              )
            } />
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
