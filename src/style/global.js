import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts, media } from './constants'
import Fonts from "./fonts"

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${Fonts};
  
/*============================
    Base
============================*/
  *, *::after, *::before {
      box-sizing: border-box;
  }
  
  :root {
    --font-display: 'GT-Display',serif;
    --font-mono: 'Inter', 'Roboto Mono', san-serif, monospace;
    // font-size: 16px;
    
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  
  html, body {
    height: 100%;
    font-size: 14px;
    ${media.lg`
      font-size: 16px;
    `}
  }

  body {
    background-color: ${colors.black};
    font-family: ${fonts.inter};
    backface-visibility: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ease-in .2s;
    
    &:hover {
      color: ${colors.yellow500};
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    line-height: inherit;
  }
  
  ::selection {
    color: ${colors.yellow500};
    background: transparent;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  .app{
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
  }
  
  $ease-out-editorial: cubic-bezier(0.645, 0.045, 0.355, 1);
  $ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);
`;

