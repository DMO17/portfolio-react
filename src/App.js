import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import { NavigationBar } from "./components/NavBar";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
