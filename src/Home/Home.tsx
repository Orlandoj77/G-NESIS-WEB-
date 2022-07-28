import React from "react";
import Header from "../components/header/header";
import { Box} from "./style";
import Carro from "../assets/carro.svg"


function Home(){
    return(
        <>
        <Header/>
      
        <Box>    
        <h1 className="G_NESIS">G'NESIS.</h1>
        <h1>Faça dinheiro com a sua motorizada ou o seu carro!</h1>
        <p>A G’NESIS  ESTÁ COMPROMETIDA EM SER O APLICATIVO DE MOBILIDADE MAIS JUSTO E QUE OFERECE AS MELHORES CONDIÇÕES PARA OS NOSSOS MOTORISTAS.</p>
        </Box>
 
       
      
       
        </>
    )
}

export default Home;