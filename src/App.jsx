import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/index.scss";
import { Header } from "./components/sections/Header/Header";
import { About } from "./components/sections/About/About";
import { Projects } from "./components/sections/ProjectsSection/Projects";
import { Contact } from "./components/sections/Contact/Contact";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
