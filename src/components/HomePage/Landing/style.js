import styled from "styled-components"
import { colors, fonts, media } from "../../../style/constants"

export const Wrapper = styled.div`
  display: flex;
  width: 90vw;
  height: 100vh;
  
  ${media.ultra`
    width: 100%;
    height: 100vh;
    padding-left: 120px;
  `}
  
  ${media.mon`
    width: 100%;
    height: 100vh;
    margin-right: 60px;
    padding-left: 88px;
  `}
  
  ${media.mac`
    width: 100%;
    height: 100vh;
    margin-right: 50px;
    padding-left: 94px;
  `}
  
  ${media.lg`
    width: 100%;
  `}
  
  ${media.md`
    width: 100%;
  `}
  
  ${media.sm`
    width: 100%;
    padding-left: 0px;
  `}
`
export const LandingTitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: flex-end;
    text-align: right;
    margin-right: .2rem;
    color: ${colors.white};
    pointer-events: none;
    width: 100%;
    
    ${media.ultra`
      height: auto;
      margin-top: 13rem;
      margin-bottom: 8rem;
    `}
    
    ${media.mon`
      height: auto;
      margin-top: 10rem;
      margin-bottom: 5rem;
    `}
    
    ${media.mac`
      height: auto;
      margin-top: 8rem;
      margin-bottom: 5rem;
    `}
    
    ${media.lg`
      height: auto;
      margin-top: 20rem;
      margin-bottom: 15rem;
    `}
    
    ${media.md`
      height: auto;
      width: 100%;
      margin-bottom: 12rem;
    `}
    
    ${media.sm`
      width: 100%;
      height: auto;
      margin-top: 15rem;
      margin-bottom: 5rem;
    `}
`
export const EachBlockOutlineText = styled.span`
    height: var(--size-title);
    width: fit-content;
    position: relative;
    display: block;
    overflow: hidden;
    font-family: ${fonts.outline};
    font-size: var(--size-title);
    font-weight: 400;
    font-style: normal;
    
    ${media.ultra`
      font-size: 9vw;
      height: 19vh;
    `}
    
    ${media.mon`
      font-size: 8vw;
      height: 18vh;
    `}
    
    ${media.mac`
      font-size: 7.5vw;
      height: 15vh;
    `} 
    
    ${media.lg`
      font-size: 9.5vw;
      height: 9vh;
    `} 
    
    ${media.md`
      font-size: 10vw;
      height: 9vh;
    `}
    
    ${media.sm`
      font-size: 5.5vh;
      height: 7vh;
    `}
`

export const EachBlockText = styled.span`
    height: var(--size-title);
    width: fit-content;
    position: relative;
    display: block;
    overflow: hidden;
    font-family: ${fonts.hunny};
    font-size: var(--size-title);
    font-weight: 400;
    font-style: normal;
    
    ${media.ultra`
      font-size: 9vw;
      height: 19vh;
    `}
    
    ${media.mon`
      font-size: 8vw;
      height: 18vh;
    `}
    
    ${media.mac`
      font-size: 7.5vw;
      height: 15vh;
    `} 
    
    ${media.lg`
      font-size: 9.5vw;
      height: 9vh;
    `}
    
    ${media.md`
      font-size: 8vw;
      height: 8vh;
    `}
    ${media.sm`
      font-size: 5vh;
      height: 5vh;
    `}
`

export const StatusWrapper = styled.div`
    position: relative;
    display: block;
    flex-direction: column;
    align-items: flex-end;
    pointer-events: none;
    width: auto;
    right: 0;
    // border: dotted 1px ${colors.yellow500};
    
    ${media.ultra`
      position: absolute;
      bottom: 0;
      align-items: flex-end;
    `}
    
    ${media.mon`
      position: absolute;
      bottom: 0;
      align-items: flex-end;
    `}
    
    ${media.mac`
      position: absolute;
      bottom: 0;
      align-items: flex-end;
    `}
    
    ${media.lg`
      margin-top: 6rem;
      position: absolute;
      bottom: 0;
    `}
    
     ${media.md`
      margin-top: 5rem;
      position: absolute;
      bottom: 0;
    `}
    
    ${media.sm`
      margin-top: 5rem;
      position: absolute;
      bottom: 0;
    `}
`
