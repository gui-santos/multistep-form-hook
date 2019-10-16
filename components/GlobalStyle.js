import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Helvetica', sans-serif;
    font-size: 16px;
  }

  button {
    display: inline-block;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0;
    text-decoration: none;
    background-color: #9100ff;
    color: #fff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background-color 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button:hover,
  button:focus {
    background-color: #aa3dfc;
  }

  button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  /* button:active {
      transform: scale(0.99);
  } */
`

export default GlobalStyle
