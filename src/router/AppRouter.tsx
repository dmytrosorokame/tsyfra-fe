import { RouterProvider } from "react-router-dom";
import { APP_ROUTES } from "./routes";

const AppRouter: React.FC = () => {
  return <RouterProvider router={APP_ROUTES} />;
};

export default AppRouter;
