import { FC } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import NewsLetter from "../../components/NewsLetter";
import { Box, Container } from "./styles/index";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Box>
          <h1 className="G_NESIS">G'NESIS.</h1>
          <h2>Faça dinheiro com a sua motorizada ou o seu carro!</h2>
          <p>
            A G&apos;NESIS ESTÁ COMPROMETIDA EM SER O APLICATIVO DE MOBILIDADE
            MAIS JUSTO E QUE OFERECE AS MELHORES CONDIÇÕES PARA OS NOSSOS
            MOTORISTAS.
          </p>

          <button> Download </button>
        </Box>
      </Container>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;