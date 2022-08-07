import React from "react";
import Header from "../../components/header/header";
import { Container,Button_div,Div,Box } from "./styles/index";
import Carro from "../../assets/carro.svg"
import subcrab from "../../assets/subcrab.svg"
import Button_download from "../../components/butthon/button_download"
import Foother from "../../components/foother";

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
          <Button_div><Button_download/></Button_div>
          </Box>
         
      </Container>
      <Div>
           <div className="input-group">
            <h1>
            Subscreva para receber todas as actualizações!
            </h1>
            <p>Só lhe enviaremos as melhores coisas!</p>
            
            <input type="email" className="input" id="Email" name="Email" placeholder="|E-mail..." autocomplete="off"/>
            <input className="button--submit" value="Send" type="submit"/>
            </div>
            <img src={subcrab} />
      </Div>
      <Foother/>
    </>
  );
};

export default Home;
