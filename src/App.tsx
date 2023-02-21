import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header, LeftAside, RightAside } from '@/components';
import ROUTES, {CATEGORIES} from './routes';
import { IRoutesItem } from './routes/type';


function App() {
  const routes = ROUTES.map(r => r.items).flat(Infinity) as IRoutesItem[];

  return (
    <div className='app'>
      <LeftAside />
      <main className='main'>
        <Header />
        <Routes>
          {routes.map(route => {
            const Element = route.component
            return (
              <Route path={route.url} key={route.url} element={<Element />} />
            )
          })}
          {
            CATEGORIES.map(category => {
              const Element = category.component;
              return (
                <Route path={category.url} element={<Element />}
                  key={category.url} />
              )
            })
          }
        </Routes>
      </main>
      <RightAside />
    </div>
  );
}

export default App;
