
import './App.css';
import React from "react";
import About from "./components/About/about";
import Nav from "./components/Nav/index.js";
import Footer from "./components/Footer/index.js";
import Projects from "./components/Projects/index.js"
import Resume from "./components/Resume/index.js"

function App() {
  return (
   <div>
     <Nav></Nav>
     <main>
    <About></About>
    <Projects></Projects>
    <Resume></Resume>
     </main>
    <Footer></Footer>
   </div> 
  );
}

export default App;
