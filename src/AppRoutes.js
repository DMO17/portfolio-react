import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
