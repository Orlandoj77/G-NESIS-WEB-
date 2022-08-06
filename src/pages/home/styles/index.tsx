import styled from "styled-components";

export const Container = styled.div`
padding: 20px;
 display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 1110px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const  Box = styled.div`

float:right;
right: 5%;
padding: 2%;
width: 100%; 
margin-top: 2%;
align-items: center;
background: linear-gradient(90deg, rgba(255, 255, 255, 0.14) 4.13%, rgba(255, 255, 255, 0.6) 80.29%);
border: 1px solid #FFFFFF;
box-shadow: 0px 70px 40px rgba(74, 85, 188, 0.137074);
backdrop-filter: blur(19.028px);
border-radius: 20px;
flex-direction: row;


@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}

h1.G_NESIS{
    color: #FF5950;
    flex: 50%;
}

h1{
font-family: 'Audiowide';
font-weight: 400;
font-size: 45px;
width: 70%;
flex: 50%;
}

p{
display: flex;
width: 70%;
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
  color: #0000;
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