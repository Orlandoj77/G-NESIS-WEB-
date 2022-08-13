import styled from "styled-components";
import Carro from "../../../assets/carro.svg";
import Ondas from "../../assets/ondas.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 500px;
  background: url(${Carro}) left no-repeat;
  padding: 20px 30px;
  background-size: 700px 530px;
  background-position: 100px 100px;
`;

export const Box = styled.div`
  width: 50%;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.14) 4.13%,
    rgba(255, 255, 255, 0.6) 80.29%
  );
  border: 1px solid #ffffff;
  box-shadow: 0px 70px 40px rgba(74, 85, 188, 0.137074);
  backdrop-filter: blur(19.028px);
  border-radius: 20px;
  flex-direction: row;
  padding: 50px 30px 25px;

  @media (max-width: 800px) {
    .flex-container {
      flex-direction: column;
    }
  }

  h1.G_NESIS {
    font-family: "Audiowide", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 57px;

    color: #ff5950;
  }

  h1 {
    font-family: "Audiowide", cursive;
    font-weight: 400;
    font-size: 45px;
    width: 80%;
  }

  p {
    display: flex;
    width: 80%;
    font-family: "Abhaya Libre", sans-serif;

    font-family: "Abhaya Libre";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 33px;

    color: #000000;
  }

  button {
    background: #ff5b50;
    height: 55px;
    width: 224px;
    border-radius: 0px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: justify;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    transition: all 0.4s;

    :hover {
      border-radius: 30px;
      border: 2px solid #ff5b50;
      background: #ffffff;
      color: #ff5b50;
    }
  }
`;
