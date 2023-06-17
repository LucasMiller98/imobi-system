import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
    font-size: 1.6rem;
  }

  :root {
    --primary: #f1f2f3;
    --secondary: #15181c;
    --gray: #d9d9d9;
    --blue: #4766ff;
    --white: #fff;
    --gray-light: #e5e1dc;
    --shade: #efefef;
    font-size: 62.5%;
  }

  body {
    background-color: var(--primary);
    color: var(--secondary);
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`