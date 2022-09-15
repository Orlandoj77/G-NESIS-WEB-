import { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Bars, Nav, NavBtn, NavBtnLink, NavLink } from "./style";
import { Link } from "react-router-dom";
import Home from "../../pages/home";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Nav>
        <Bars onClick={() => setMenuOpen(!menuOpen)} />
      <Link to="/">
       <NavLink>
          <img src={Logo} />
        </NavLink>
      </Link>
       
        <NavBtn menuOpen={menuOpen}>
          <NavLink>Motorista</NavLink>
          <NavLink>Passageiro</NavLink>
          <NavLink>Contactar</NavLink>
        <NavBtnLink > <Link to="driver" > Torna-se motorista </Link>  </NavBtnLink> 
        </NavBtn>
      </Nav>
    </>
  );
}

export default Header;
