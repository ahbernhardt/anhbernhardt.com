import styled from 'styled-components'
import {  media } from '../../../style/constants'
export const App = styled.div`
  min-height: 100vh;
  grid-auto-flow: column;
  justify-content: start;
`
export const MainBody = styled.div`
  max-width: 100vw;
  grid-auto-flow: column;
  margin-left: 60px;
  
  ${media.mac13`
    display: grid
  `}
  
  ${media.md`
    display: block
  `}
  `
