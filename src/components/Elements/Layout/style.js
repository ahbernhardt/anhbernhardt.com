import styled from 'styled-components'
import {  colors, media } from '../../../style/constants'

export const App = styled.main`
  min-height: 100vh;
  display: block;
  margin: 0 60px 0 0;
  opacity: 1;
  transition: opacity .5s cubic-bezier(.215,.61,.355,1),visibility .5s cubic-bezier(.215,.61,.355,1);
`
export const MainBody = styled.div`
  height: 100%;
  width: 100% - 30px;
  grid-auto-flow: column;
  margin-left: 90px;
   // border: dotted 1px ${colors.yellow700};
  
  // ${media.mac13`
  //   display: grid
  // `}
  
  ${media.md`
    display: block;
  `}
  
  ${media.sm`
    display: block;
  `}
`
