import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero";
import { Route, Routes } from "react-router";

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
       
      </main>
    </div>
  );
}
