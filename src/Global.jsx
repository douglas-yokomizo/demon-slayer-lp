import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'blood crow';
  src: url('./src/assets/fonts/blood-crow.ttf');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  background-color: #0c0c0c
}
`
export default GlobalStyles
