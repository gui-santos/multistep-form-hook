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
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button:hover,
  button:focus {
    background-color: #aa3dfc;
  }

  button:focus,
  input:focus {
    outline: 2px solid #dbadfe;
    outline-offset: -4px;
  }

  input {
    font-size: 1rem;
    padding: .5rem;
    border: 2px solid #9100ff;
  }
`

export default GlobalStyle
