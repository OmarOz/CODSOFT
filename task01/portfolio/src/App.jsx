import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contacts from "./components/Contacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Image />
      <h1>Skills</h1>
      <Skills />
      <h1>Projects</h1>
      <Projects />
      <Resume />
      <h1>Contacts</h1>
      <Contacts />
    </>
  );
}

export default App;
