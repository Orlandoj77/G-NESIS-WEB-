import styled from "styled-components";
import Carro from "../../../assets/carro.svg";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 500px;
  background: url(${Carro}) left no-repeat;
  padding: 20px 30px;
  background-size: 700px 530px;
  background-position: 100px 100px;

  @media screen and (max-width: 767px) {
    padding: 10px 20px;
  }
`;

export const Box = styled.div`
  width: 60%;
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

  h1 {
    font-family: "Audiowide", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 57px;
    color: #ff5950;
  }

  h2 {
    font-family: "Audiowide", cursive;
    font-weight: 400;
    font-size: 45px;
    width: 80%;
  }

  p {
    display: flex;
    width: 80%;
    font-family: "Abhaya Libre", sans-serif;
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

  @media screen and (max-width: 767px) {
    width: 100%;

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
      line-height: 2;
    }

    button {
      height: 40px;
      width: 180px;
    }
  }

  @media screen and (max-width: 1040px) {
    width: 100%;

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
      line-height: 2;
    }

    button {
      height: 45px;
      width: 200px;
    }
  }
`;

export const Button_div =  styled.div`
  justify-content: center;
  align-items: center;
  padding-top: 10%;

`
export const Div = styled.div`
padding: 20px;
display: flex;
justify-content: space-around;

h1{
font-family: 'Audiowide';
font-weight: 400;
font-size: 45px;
width: 70%;
flex: 50%;
}

.input-group {

}

.input {
  min-height: 50px;
  max-width: 150px;
  padding: 0 1rem;
  color: #000;
  font-size: 15px;
  border: 1px solid #FF5950;
  border-radius: 6px 0 0 6px;
  background-color: transparent;
}

.button--submit {
  min-height: 50px;
  padding: .5em 1em;
  border: none;
  border-radius: 0 6px 6px 0;
  background-color: #FF5950;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: background-color .3s ease-in-out;

  :hover{
  transition: 1s;
  background: #FF5B50;
  color: #fff;
  box-shadow: 0 0 45px #FF5B50;
  background-color: #FF5B50;
}

.button--submit:hover {
  background-color: #FF5950;
}

.input:focus, .input:focus-visible {
  border-color: #FF5950;
  outline: none;
}
}
`