import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { APP_ROUTES } from './routes';

const AppRouter: React.FC = () => <RouterProvider router={APP_ROUTES} />;

export default AppRouter;
