import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Work } from "./pages/Work";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Resume } from "./pages/Resume";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact-me" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
