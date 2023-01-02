import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
// import { NotFoundPage } from '../pages/404';
// import { DashBoardPage } from '../pages/Dashboard';
// import { HomePage } from '../pages/HomePage';
// import { RepoPage } from '../pages/RepoPage';

const HomePage = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "Home Page" */ '../pages/HomePage'
  );
});
const DashBoardPage = lazy(() => {
  return import(
    /* webpackPrefetch: true */ /* webpackChunkname: "Dashboard Page" */ '../pages/Dashboard'
  );
});
const RepoPage = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "RepoPage Page" */ '../pages/RepoPage'
  );
});
const NotFoundPage = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "NotFound Page" */ '../pages/404'
  );
});

export const Routes: React.FC = () => {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/dashboard', element: <DashBoardPage /> },
    { path: '/repositories/:login/:name', element: <RepoPage /> },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
};
