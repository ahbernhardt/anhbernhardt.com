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
      font-size: 16px;
  }
  
  html, body {
    height: 100%;
    font-size: 16px;
    // cursor:pointer;
    ${media.lg`
      font-size: 14px;
    `}
  }

  body {
    background-color: ${colors.blue900};
    color: #fff;
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
  
  // * {
  //   box-sizing: border-box;
  //   line-height: 1.4em;
  //   text-rendering: optimizeLegibility;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   font-kerning: auto;
  // }
  
  .background-noise {
      position: absolute;
      height: 100vh;
      width: 100vw;
      z-index: -1;
  }
  
  .background-noise:after {
      animation: grain 8s steps(10) infinite;
      background-image: url('./static/images/broken_noise.png');
      content: "";
      height: 300%;
      left: -50%;
      position: fixed;
      top: -110%;
      width: 300%;
  }
  
  @keyframes grain {
      0%, 100% {
          transform: translate(0, 0)
      }
      10% {
          transform: translate(-5%, -10%)
      }
      20% {
          transform: translate(-15%, 5%)
      }
      30% {
          transform: translate(7%, -25%)
      }
      40% {
          transform: translate(-5%, 25%)
      }
      50% {
          transform: translate(-15%, 10%)
      }
      60% {
          transform: translate(15%, 0%)
      }
      70% {
          transform: translate(0%, 15%)
      }
      80% {
          transform: translate(3%, 35%)
      }
      90% {
          transform: translate(-10%, 10%)
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
