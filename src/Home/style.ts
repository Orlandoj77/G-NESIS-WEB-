import styled, { css } from 'styled-components';


export const  Box = styled.div`

position: absolute;
right: 4%;
padding: 2%;
width: 800px; 
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
