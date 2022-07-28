import React from "react";
import Header from "../../components/header/header";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Home Page</h1>
      </Container>
    </>
  );
};

export default Home;
