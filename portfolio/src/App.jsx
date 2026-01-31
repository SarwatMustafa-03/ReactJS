/*import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;*/







import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import ScrollToSection from "./components/ScrollToSection";


const MainLayout = () => (
  <>
    <Home />
    <About />
    
    <Projects />
    <Skills />
    <Experience />
    <Contact />
  </>
);

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToSection />

      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<MainLayout />} />
                <Route path="/projects" element={<MainLayout />} />
        <Route path="/skills" element={<MainLayout />} />

        <Route path="/experience" element={<MainLayout />} />
      
        <Route path="/contact" element={<MainLayout />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
