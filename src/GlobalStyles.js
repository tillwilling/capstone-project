import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: #1A1A1D;
}
body {
  font-family: sans-serif;
  font-size: 112.5%;
  height: 100vh;
}
input,
button,
textarea {
  font-size: inherit;
}
`

export default GlobalStyles
