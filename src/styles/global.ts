import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  
    }
  body {
    background: #1c1a1c;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
  }
  
  ::-webkit-scrollbar {
  background: #1c1a1c;
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #242124;
  border-radius: 6px;
}
  `;

export default GlobalStyles;
