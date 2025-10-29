import { useState } from "react";
import CartWidget from "./CartWidget";
import "../index.css"; // importamos el CSS general

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav className="navbar">
      <img src="../logoTicket.png" alt="Logo Tienda" className="logo-img" />

      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>

        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-btn">
            Entradas ▾
          </button>

          {showDropdown && (
            <ul className="dropdown-menu">
              <li><a href="#">Metallica</a></li>
              <li><a href="#">AC/DC</a></li>
              <li><a href="#">Queen</a></li>
              <li><a href="#">The Beatles</a></li>
              <li><a href="#">Linkin Park</a></li>
              <li><a href="#">Rata Blanca</a></li>
              <li><a href="#">Glory Hammer</a></li>
              <li><a href="#">Avenged Sevenfold</a></li>
              <li><a href="#">Molotov</a></li>
              <li><a href="#">HammerFall</a></li>
              <li><a href="#">Feuerschwanz</a></li>  
            </ul>
          )}
        </li>

        <li><a href="#">Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
