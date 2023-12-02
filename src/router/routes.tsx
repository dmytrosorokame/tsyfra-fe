import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutPage from 'src/components/pages/AboutPage';
import CategoriesPage from 'src/components/pages/CategoriesPage';
import ContactPage from 'src/components/pages/ContactPage';
import FollowsPage from 'src/components/pages/FollowsPage';
import MainPage from 'src/components/pages/MainPage';
import ProfilePage from 'src/components/pages/ProfilePage';
import AppWrapper from 'src/wrappers/AppWrapper/AppWrapper';

export const APP_ROUTES = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppWrapper>
        <MainPage />
      </AppWrapper>
    ),
  },
  {
    path: '/categories',
    element: (
      <AppWrapper>
        <CategoriesPage />
      </AppWrapper>
    ),
  },
  {
    path: '/contact',
    element: (
      <AppWrapper>
        <ContactPage />
      </AppWrapper>
    ),
  },
  {
    path: '/about',
    element: (
      <AppWrapper>
        <AboutPage />
      </AppWrapper>
    ),
  },
  {
    path: '/profile',
    element: (
      <AppWrapper>
        <ProfilePage />
      </AppWrapper>
    ),
  },
  {
    path: '/follows',
    element: (
      <AppWrapper>
        <FollowsPage />
      </AppWrapper>
    ),
  },
]);
