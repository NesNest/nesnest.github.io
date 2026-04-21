import MainLayout from "../components/Layouts/MainLayout.tsx";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Projects from "../pages/Projects.tsx";
import Contact from "../pages/Contact.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
