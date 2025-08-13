import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/body/hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
