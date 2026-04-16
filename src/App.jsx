import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero";
import Moments from "./sections/Moments";
import Story from "./sections/Story";
import Gallery from "./components/Gallery";

export default function App() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.getElementById("navbar");
    if (nav) setNavHeight(nav.offsetHeight);
  }, []);

  return (
    <div className="bg-white">
      <Navbar />

      <main style={{ paddingTop: navHeight }} className="min-h-screen bg-white">
        <ScrollToTop />
        <Hero />
        <Moments />
        <Story />
        <Gallery />
      </main>
    </div>
  );
}
