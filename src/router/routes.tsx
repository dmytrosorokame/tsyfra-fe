import { createBrowserRouter } from "react-router-dom";
import MainPage from "../components/pages/MainPage";

export const APP_ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);
