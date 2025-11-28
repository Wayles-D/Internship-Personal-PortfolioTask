import Navbar from "./Navigation/Navbar";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Footer from "./Navigation/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Projects/>
      <About />
      <Footer />
    </>
  );
}

export default App;