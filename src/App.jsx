import Topbar from "./Componenst/Top Bar/Topbar";
import Intro from "./Componenst/Introduction/Intro";
import Contact from "./Componenst/contact/Contact";
import Menu from "./Componenst/menu/Menu";
import './app.scss';
import { useState } from "react";
import Education from "./Componenst/education/Education";
import Experience from "./Componenst/Experience/Experience";
import Skills from "./Componenst/Skills/Skills";

// import { Menu } from "@material-ui/core";

function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
      <Education/>
      <Experience/>
      <Skills/>
      <Contact/>
    </div>

    </div>
  );
}

export default App;
