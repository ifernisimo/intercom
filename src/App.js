import React from "react";
import "./reset.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import OurProjectsSection from "./components/OurProjectsSection/OurProjectsSection";

function App() {
  return (
    <>
      <HeaderSection />
      <OurProjectsSection />
    </>
  );
}

export default App;
