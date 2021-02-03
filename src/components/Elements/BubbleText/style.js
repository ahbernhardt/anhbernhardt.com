import styled from "styled-components"
import { colors,media} from '../../../style/constants'

export const Wrapper = styled.div`
   position: relative;
   opacity: 100%;
   padding: 10% 0 0 10%;
   
  ${media.mac13`
    position: static;
    padding: 10% 0 0 10%;
  `}
 
  ${media.lg`
    position: static;
    padding: 25% 0 0 18%;
  `}
  
  ${media.md`
    position: static;
    padding: 50% 0 0 10%;
  `}
  
  ${media.sm`
    position: static;
    padding: 10% 0 0 7%;
    opacity: 50%;
  `}
`

export const BubbleText = styled.header`
  width: 100%; 
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BubbleWrapper = styled.div`
  position: relative;
  
  #particles,  svg {
    position: absolute;
    top: 0;
    left: 0;
    fill: ${colors.black};
    width:825px;
    height:200px;
  }
  
    ${media.sm `
      svg {
        position: absolute;
        top: 0;
        right: 0;
        fill: ${colors.black};
        width: 45%;
        height:200px;
      }
    `}
    
`
export const BubbleCanvas = styled.canvas`
    position: relative;
    width:825px;
    height:200px;
    
    ${media.sm `
        width: 45%;
        height:200px;
        
        #particles{
          width: 45%;
          height:200px;
        }
    `}
`

