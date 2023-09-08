import LandingPage from "@pages/LandingPage/LandingPage";
import { useRoutes } from "react-router-dom";

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);

  return elements;
};
