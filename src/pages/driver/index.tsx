import { FC } from "react";
import Header from "../../components/header/header";
import {Container, Box} from "./styles"


const Driver: FC = () => {
  return (
    <>
    <Header/>
    <Container>
      <p>Junte-se a G´NESIS</p>
    <h1>Torne-se um motorista na G’NESIS!</h1>
          <p>
          A G’NESIS É UM APLICATIVO QUE CONECTA MOTORISTAS A PASSAGEIROS 😀.
          </p>
    </Container>
    
    <Box>
   Box
    </Box>
    </>
  );
};

export default Driver;