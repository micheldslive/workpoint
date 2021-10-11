import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --green: #0a8f4a;
    --red: #b72f58;
    --dark-blue: #00254c;
    --blue: #0e77ff;
    --purple: #645f79;
    --brown: #1c1315;
    --orange: #e08e4f;
    --yellow: #fbc72a;
    --gray1: #f9f9f9;
    --gray2: #dddddd;
    --gray3: #bbbbbb;
    --gray4: #888888;
    --gray5: #444444;
    --black: #000;
  }
  
  body,
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
  }
  
  body::-webkit-scrollbar {
    width: 0.5em;
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: var(--red);
    outline: 1px solid var(--red);
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  * {
    padding: 0;
    margin: 0;
    border: 0;
    text-decoration: none;
  }
  
  @media screen and (min-width: 1180px) {
    section {
      width: 1150px;
      margin: 0 auto;
    }
  }
  
  @media screen and (min-width: 880px) and (max-width: 1180px) {
    section {
      width: 850px;
      margin: 0 auto;
    }
  }
  
  @media screen and (max-width: 879px) {
    section {
      margin: 0 15px;
    }
  }
`;
