import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *:after, *:before {
      box-sizing: border-box;
    }    
    html, body, #index {
      height: 100%;
      margin: 0;
    }  
    #index {
      background: #f7cac9;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #92a8d1, #f7cac9);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #92a8d1, #f7cac9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    @font-face {
      font-family: 'sometimelater';
      src: url('/fonts/Some Time Later.otf') format('opentype');
      font-weight: 100;
      font-style: normal;    
    }
    .sometimelater {
      font-family: 'sometimelater';
    }
`;

export default GlobalStyle;
