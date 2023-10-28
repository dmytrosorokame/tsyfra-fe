import AppRouter from "./router/AppRouter";
import AppWrapper from "./wrappers/AppWrapper/AppWrapper";

export const App = () => (
  <AppWrapper>
    <AppRouter />
  </AppWrapper>
);
