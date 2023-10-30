import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from 'src/components/pages/MainPage';

export const APP_ROUTES = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);
