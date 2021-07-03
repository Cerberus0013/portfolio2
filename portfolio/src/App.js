
import './App.css';
import React from "react";


// import About from "./components/About/about";
import Header from "./components/Header/header";
import Footer from "./components/Footer/index";
// import  from "./components/Projects/index.js"
// import Resume from "./components/Resume/index.js"
import Portfolio from "./components/Portfolio/portfolio"

function App() {
  return(
  
   <div>
     <Header/>
     <main>
 <Portfolio/>
    </main>
   <Footer/> 
   </div> 

  );
}

export default App;
