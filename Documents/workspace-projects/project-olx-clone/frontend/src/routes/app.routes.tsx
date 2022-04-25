import React from 'react';
import { useRoutes } from 'react-router-dom';
import NotFoundPage from 'pages/404';

import Home from 'pages/Home';

const AppRoutes: React.FC = () => {
  return useRoutes([
    { path: '/', element: <Home /> },

    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
};

export { AppRoutes };
