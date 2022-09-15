import styled, { css } from 'styled-components';


export const Container = styled.div`
.cssbuttons-io-button:active .icon {
 transform: scale(0.95);
}

}
`;


export const Button = styled.button`
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 20px 30px;
  transition: 0.5s;
  position: relative;
  font-size: 17px;
  border: none; 
  color: #fff;
  cursor: pointer;
  

:hover {
  letter-spacing: 0.25em;
  background: #FF5B50;
  color: #fff;
  box-shadow: 0 0 45px #FF5B50;
  background-color: #fff;
}

::before {
  content: '';
  position: absolute;
  inset: 2px;
  background: #FF5B50;
}
 span {
  position: relative;
  z-index: 1;
}

i {
  position: absolute;
  inset: 0;
  display: block;
}

 i::before {
  content: '';
  position: absolute;
  border: 2px solid #FF5B50;
  width: 7px;
  height: 4px;
  top: -3.5px;
  left: 80%;
  background: #222222;
  transform: translateX(-50%);
  transition: 0.5s;
}

:hover i::before {
  width: 20px;
  left: 20%;
}

i::after {
  content: '';
  position: absolute;
  border: 2px solid #FF5B50;
  width: 7px;
  height: 4px;
  bottom: -3.5px;
  left: 20%;
  background: #222222;
  transform: translateX(-50%);
  transition: 0.5s;
}

:hover i::after {
  width: 20px;
  left: 80%;
}


`;