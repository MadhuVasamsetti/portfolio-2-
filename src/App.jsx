import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Glow from "./components/Glow";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    <SmoothScroll />
      
      <Cursor />

      
      <Glow />

      
      <Navbar />

      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        <Contact />
      </main>

      
      <Footer />
    </>
  );
}

export default App;