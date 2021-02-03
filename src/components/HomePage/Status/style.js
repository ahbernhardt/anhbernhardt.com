import styled, { keyframes } from "styled-components"
import { colors, fonts, media, transition } from "../../../style/constants"

export const Wrapper = styled.div`
  font-size: 1rem;
  color: ${colors.white};
  display: flex;
  align-items: center;
  opacity: .4;
  bottom: 0;
  width: 100%;
  // border: solid 1px #223232;
   
  ${media.mac13`
    bottom: 0;
  `}

`

export const StatusLight = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  font-size: .8rem;
  -webkit-box-pack: center;
  justify-content: center; 
  -web-box-align: center;
  align-items: center; 
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
    width: 25px;
    height: 25px;
    animation: ${pulsate} 2s ease-out;
    animation-iteration-count: infinite;
    opacity: 0;
    border: solid 3px ${colors.yellow500};
    border-radius: 100px; 
    
    ${media.sm`
      width: 20px;
      height: 20px;
    `}
`

export const StatusLed = styled.div`
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid ${colors.yellow500};
    background-color: ${colors.yellow500};
    border-radius: 100%;
    
    ${media.sm`
      width: 12px;
      height: 12px;
    `}
`

export const StatusMessage = styled.div`
  font-family: ${fonts.display};
  font-style: italic;
  font-weight: 200;
  letter-spacing: 0.5px;
  margin-left: 15px;
  display: block;
  
    ${media.sm`
      font-size: .8rem;
      margin-left: 10px;
    `}
`
