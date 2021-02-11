import styled from 'styled-components'
import {  colors, media } from '../../../style/constants'

export const App = styled.main`
  min-height: 100vh;
  display: block;
  margin: 0 85px 0 0;
  opacity: 1;
  transition: opacity .5s cubic-bezier(.215,.61,.355,1),visibility .5s cubic-bezier(.215,.61,.355,1);
   
   ${media.ultra`
      height: auto;
      margin: 0 70px 0 0;
   `}
   
   ${media.mon`
      height: auto;
      margin: 0 60px 0 0;
   `}
   
   ${media.mac`
      height: auto;
      margin: 0 50px 0 0;
   `}
   
   ${media.sm`
      height: auto;
      margin: 0 30px 0 0;
   `}
`
export const MainBody = styled.div`
    height: 100%;
    width: 100% - 65px;
    grid-auto-flow: column;
    margin-left: 150px;
   
   ${media.ultra`
    height: 100%;
    width: 100% - 65px;
  `}
  
   ${media.mon`
    height: 100%;
    width: 100% - 60px;
    margin-left: 125px;
  `}
  
  ${media.mac`
    height: 100%;
    width: 100% - 30px;
    grid-auto-flow: column;
    margin-left: 120px;
  `}
  
  ${media.lg`
    display: block;
  `}
  ${media.md`
    display: block;
  `}
  
  ${media.sm`
    // width: 100% - 30px;
    margin-left: 30px;
    display: block;
  `}
`
