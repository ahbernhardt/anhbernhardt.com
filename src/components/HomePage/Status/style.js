import styled, { keyframes } from "styled-components"
import { colors, fonts, media } from "../../../style/constants"

export const Wrapper = styled.div`
  font-size: 1.2rem;
  color: ${colors.white};
  display: flex;
  align-items: center;
  opacity: .8;
  bottom: 0;
  width: 100%;
   
 ${media.mon`
  bottom: 0;
`}

  ${media.mac`
    bottom: 0;
    font-size: 1rem;
  `}

`

export const StatusLight = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  font-size: 1rem;
  -webkit-box-pack: center;
  justify-content: center; 
  -web-box-align: center;
  align-items: center; 
  
  ${media.mon`
    width: 40px;
    height: 40px;
  `}
  ${media.mac`
    width: 35px;
    height: 35px;
  `}
`

export const pulsate = keyframes`
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
`

export const StatusRing = styled.div`
    position: absolute;
    width: 35px;
    height: 35px;
    animation: ${pulsate} 2s ease-out;
    animation-iteration-count: infinite;
    opacity: 0;
    border: solid 5px ${colors.yellow500};
    border-radius: 100px; 
    
    ${media.ultra`
      width: 40px;
      height: 40px;
    `}
    ${media.mon`
      width: 30px;
      height: 30px;
    `}
    ${media.mac`
      width: 23px;
      height: 23px;
      border: solid 3px ${colors.yellow500};
    `}
    
    ${media.sm`
      width: 20px;
      height: 20px;
    `}
`

export const StatusLed = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    border: 5px solid ${colors.yellow500};
    background-color: ${colors.yellow500};
    border-radius: 100%;
    
    ${media.ultra`
      width: 25px;
      height: 25px;
    `}
    
     ${media.mon`
      width: 20px;
      height: 20px;
    `}
    
    ${media.mac`
      width: 13px;
      height: 13px;
    `}
    
    ${media.sm`
      width: 12px;
      height: 12px;
    `}
`

export const StatusMessage = styled.div`
  font-family: ${fonts.display};
  font-style: italic;
  font-weight: 200;
  letter-spacing: 0.75px;
  margin-left: 6px;
  display: block;
  
  ${media.ultra`
    font-size: 1.4rem;
  `}
  ${media.mon`
    font-size: 1.2rem;
  `}
  ${media.mac`
    font-size: 1rem;
  `}
  ${media.lg`
    font-size: 1rem;
  `}
  ${media.md`
    font-size: 1rem;
  `}
  ${media.sm`
    font-size: .8rem;
  `}
`
