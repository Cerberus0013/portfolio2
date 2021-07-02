import React from "react"
import {capitializeFirstLetter} from "../../utils/helpers"
const categories =[
    {}]




function categorySelected() {
  console.log("hello");
}


function Nav(){
    return (
      <header>
        <h2>place to put a side logo or something</h2>
        <nav>
          <ul>
            {" "}
            className = "flex-flow">
            <li className="m-2">
              <a href="#about">About me</a>
            </li>
            <li>
              <span>Contact</span>
            </li>
            {categories.map((category) => (
              <li className="mx-1" key={category.name}>
                <span onClick={categorySelected}>{category.name}</span>
                {capitializeFirstLetter(category.name)}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );

}


export default Nav