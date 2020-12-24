import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts, media } from './constants'

export const GlobalStyle = createGlobalStyle`
  ${reset}

/*============================
    Fonts
============================*/

  @font-face {
    font-family: stack-mono;
    src: local(".SFNSText-Light");
  }

  @font-face {
    font-family: stack-sans;
    src: local(".SFNSText-Light");
  }
  
/*============================
    Base
============================*/
  *, *::after, *::before {
      box-sizing: border-box;
  }
  
  :root {
      font-size: 14px;
  }
  
  html, body {
    height: 100%;
    font-size: 14px;
    // cursor:pointer;
    ${media.lg`
      font-size: 16px;
    `}
  }

  body {
    background-color: ${colors.black700};
    font-family: ${fonts.sansSerif};
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
  
  .bg-noise {
    // Simple class to reuse wherever you want to make some noise.
    background: url("https://i.ibb.co/FgcVfGG/bg-noise-1.png"), #1b1c20;
    animation: 250ms steps(10, end) 0s infinite alternate-reverse none running noise-animation;
    @keyframes noise-animation {
      0% { background-position: 0% 0%; }
      10% { background-position: -5% -5%; }
      20% { background-position: -10% 5%; }
      30% { background-position: 5% -10%; }
      40% { background-position: -5% 15%; }
      50% { background-position: -10% 5%; }
      60% { background-position: 5% 5%; }
      70% { background-position: 0% 10%; }
      80% { background-position: -5% -5%; }
      90% { background-position: 10% 5%; }
    }
  }
  ::selection {
    color: ${colors.yellow500};
    background: transparent;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }

`;
