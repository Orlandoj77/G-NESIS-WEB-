import React from "react";
import {Container} from "./style/index"
import {BsWhatsapp,BsInstagram } from "react-icons/bs";
import {FiFacebook} from "react-icons/fi"

function Foother(){
    return(
        <>
        <Container>
          <div className="Div1">
            <ul>
                <li>Pivacidade</li>
                <li>Termos</li>
            </ul>
            </div>  

            <div className="Div2">
                <h1>
                    Siga-nos 
                </h1>
                <div className="icons">
                <BsWhatsapp className="element" />
                <BsInstagram className="element"/>
                <FiFacebook className="element" />
                </div>
               
                <hr className="line" />
                <p> <span>© 2020 G’NESIS</span> e colaboradores individuais.  As funcionalidades estarão  disponíveis brevemente  </p>
            </div>
            
        </Container>
        </>
        
    )
}

export default Foother