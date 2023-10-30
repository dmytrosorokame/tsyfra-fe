import React from 'react';

import AppRouter from './router/AppRouter';
import AppWrapper from './wrappers/AppWrapper/AppWrapper';

export const App: React.FC = () => (
  <AppWrapper>
    <AppRouter />
  </AppWrapper>
);
