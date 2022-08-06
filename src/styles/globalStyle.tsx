
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;


  a {
    text-decoration: none;
  }

  input, textarea, button, select {
    outline: 0;
  }

  ul, li, ol {
    list-style: none;
  }
  }
`;
 
export default GlobalStyle;