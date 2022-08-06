import React from "react";
import Header from "../../components/header/header";
import { Container } from "./styles/index";
import { Box} from "./styles/index";
import Carro from "../../assets/carro.svg"
import Ondas from "../../assets/ondas.svg"
import Button_download from "../../components/butthon/button_download"


const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
      <img src={Carro} />
        <Box>    
        <h1 className="G_NESIS">G'NESIS.</h1>
        <h1>Faça dinheiro com a sua motorizada ou o seu carro!</h1>
        <p>A G’NESIS  ESTÁ COMPROMETIDA EM SER O APLICATIVO DE MOBILIDADE MAIS JUSTO E QUE OFERECE AS MELHORES CONDIÇÕES PARA OS NOSSOS MOTORISTAS.</p>
        </Box>
        <img className="line_icon" src={Ondas} alt="Ondas icon" />    
        
      </Container>
   <Button_download/>
    </>
  );
};

export default Home;
