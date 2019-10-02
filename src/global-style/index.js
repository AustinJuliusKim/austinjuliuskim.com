import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *:after, *:before {
      box-sizing: border-box;
    }    
    html, body, #index {
      height: 100%;
      margin: 0;
      font-family: 'Roboto', sans-serif;
    }  
    #index {
      // background-color: black;
      background: #114357;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #F29492, #114357);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #F29492, #114357); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
