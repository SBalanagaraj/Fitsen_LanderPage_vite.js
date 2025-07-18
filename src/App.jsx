import { useState } from "react";
import "./Styles/App.css";
import { Header } from "./Components/Header";
import Home from "../src/Screens/Home";
import Footer from "./Components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

function App() {
  return (
    <>
      {/* -------------------------- Header  --------------------- */}
      <Header />
      <Home />
      {/* -------------------------- Footer Block ---------------- */}
      <Footer />
    </>
  );
}
export default App;
