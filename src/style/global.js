import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { colors } from './constants'
import Fonts from "./fonts"
import TransitionStyles from "./transition"

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${Fonts};
  ${TransitionStyles};
  
/*============================
    Base
============================*/
  *, *::after, *::before {
      box-sizing: border-box;
  }
  
  :root {
    --font-size: 18px;
    
    --line-height: calc(var(--font-size)*1.5);
    --baseline: calc(var(--line-height)/2)
    
    --h1: 2.8rem;
    --h2: 2.2rem;
    --h3: 1.4rem;
    --h4: 1.1rem;
    
    --size-title: 9.2vw;
    
    --color-complement: #727272;
    --color-complement: #9b9b9b;
    --left-margin: 17.2rem;
    
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  
  html, body {
    font-size: 18px;
  }

  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    display: block;
    background-color: ${colors.black};
    // backface-visibility: hidden;
    line-height: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ease-in .2s;
    
    :hover{
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
  
`;

