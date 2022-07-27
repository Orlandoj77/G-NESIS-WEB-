import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { Bars, Nav, NavBtn, NavBtnLink, NavLink} from "./style";

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <>
        <Nav>
          <Bars onClick={() => setMenuOpen(!menuOpen)} />
          <NavLink>
            <img src={Logo} />
          </NavLink>
          <NavBtn menuOpen={menuOpen}>
          <NavLink>Motorista</NavLink>
            <NavLink>Passageiro</NavLink>
            <NavLink>Contactar</NavLink>
            <NavBtnLink>Torna-se motorista </NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    )
}

export default Header;