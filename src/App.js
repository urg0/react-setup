import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes";
import DarkModeContextProvider from "@contexts/DarkModeContext";

const App = () => {
  return (
    <BrowserRouter>
      <DarkModeContextProvider>
        <AppRouter />
      </DarkModeContextProvider>
    </BrowserRouter>
  );
};

export default App;
