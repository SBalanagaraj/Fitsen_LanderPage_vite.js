import { useState } from "react";
import "./Styles/App.css";
import { Header } from "./Components/Header";
import Home from "../src/Screens/Home";
import Footer from "./Components/Footer";

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
