import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './app.router';

export const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={'Loading'}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};
