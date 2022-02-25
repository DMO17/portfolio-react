import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
