import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts, media } from './constants'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: GT-Display;
    font-weight: 300;
    font-style: normal;
    src: url("../../static/fonts/gt-super/GT-Super-Display-Light.woff2") format("woff2");
  }

   @font-face {
      font-family: GT-Display-Bold;
      font-weight: 700;
      font-style: normal;
      src: url("../../static/fonts/gt-super/GT-Super-Display-Bold.woff2") format("woff2");
    }
  
   @font-face {
      font-family: GT-Italic;
      font-weight: 300;
      font-style: italic;
      src: url("../../static/fonts/gt-super/GT-Super-Display-Light-Italic.woff2") format("woff2");
   }
    
   @font-face {
      font-family: GT-Italic-Bold;
      font-weight: 700;
      font-style: italic;
      src: url("../../static/fonts/gt-super/GT-Super-Display-Bold-Italic.eot") format("embedded-opentype"),
           url("../../static/fonts/gt-super/GT-Super-Display-Bold-Italic.woff2") format("woff2"),
           url("../../static/fonts/gt-super/GT-Super-Display-Bold-Italic.woff") format("woff"),
            url("../../static/fonts/gt-super/GT-Super-Display-Bold-Italic.ttf") format("ttf");
      font-display: swap;
   }
    
  @font-face {
    font-family: Inter;
    src: url("../../static/fonts/inter/Inter.woff2");
  }
  
  @font-face {
    font-family: Inter-Up;
    src: url("../../static/fonts/inter/Inter-upright.woff2");
  }
  
  @font-face {
    font-family: Inter-Italic;
    src: url("../../static/fonts/inter/Inter-italic.woff2");
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

`;
