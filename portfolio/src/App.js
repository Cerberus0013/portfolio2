
import './App.css';
import About from "./components/About/about";
import Nav from "./components/Nav/index.js";
import Footer from "./components/Footer/index.js";



function App() {
  return (
   <div>
     <Nav></Nav>
     <main>
    <About></About>
     </main>
    <Footer></Footer>
   </div> 
  );
}

export default App;
