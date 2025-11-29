import { Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import HomeAbout from "./Pages/HomeAbout";
import Footer from "./Navigation/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <hr className="border-[#484848] mx-4 lg:mx-20 mt-20 lg:mt-32" />
            <Projects />
            <hr className="border-[#484848] mx-4 lg:mx-20 mt-20 lg:mt-32" />
            <HomeAbout />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      <hr className="border-[#484848] mx-4 lg:mx-20 mt-20 lg:mt-32" />
      <Footer />
    </>
  );
}

export default App;