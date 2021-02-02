import styled from 'styled-components'
import {  colors, media } from '../../../style/constants'

export const App = styled.main`
  min-height: 100vh;
  // grid-auto-flow: column;
  // justify-content: start;
  display: block;
  margin: 0 2% 0 0;
  opacity: 1;
  transition: opacity .5s cubic-bezier(.215,.61,.355,1),visibility .5s cubic-bezier(.215,.61,.355,1);
`
export const MainBody = styled.div`
  z-index: 1;
  height: 100%;
  // max-width: 95vw;
  width: 96%;
  border: dotted 1px ${colors.yellow700};
  // left: 0;
  grid-auto-flow: column;
  margin-left: 60px;
  
  ${media.mac13`
    display: grid
  `}
  
  ${media.md`
    display: block
  `}
`
