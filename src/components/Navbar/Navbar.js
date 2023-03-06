import './Navbar.css';
import { useState } from "react";

function Navbar() {
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  // let dark_mode = () => {
  //   let navbar = document.getElementsByClassName("Navbar")[0]
  //   let btn_dark = document.getElementsByClassName("btn_dark_mode")[0]
  //   let recherche = document.getElementsByClassName("Recherche")[0]
  //   let api = document.getElementsByClassName("Api")[0]
  //   let test = document.getElementsByClassName("test")
  //   test = [...test]
  //   navbar.classList.toggle("black")
  //   for (let i = 0; i < test.length; i-=-1) {
  //     test[i].classList.toggle("black")
      
  //   }
  //   if ( recherche) {
  //     recherche.classList.toggle("black")
  //     api.classList.toggle("black")
  //   }
  //   if (api) {
  //     api.classList.toggle("black")
  //     recherche.classList.toggle("black")
  //   }
  //   btn_dark.classList.toggle("white")
  // }
  return (
    <div className={`Navbar ${darkMode ? 'dark-mode' : ''}`}>
        <nav >
            <ul>
                <li>Where In The World ?</li>
                <li><button className='btn_dark_mode' onClick={toggleDarkMode}>{darkMode ? 'Mode clair' : 'Mode sombre'}</button></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;