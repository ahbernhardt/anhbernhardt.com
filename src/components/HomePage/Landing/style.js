import styled from "styled-components"
import { colors, fonts, media } from "../../../style/constants"

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: unset;
  grid-template-columns: repeat(2, 2fr);
  align-content: center;
  grid-column-gap: 1rem;
  width: 85vw;
  height: 100vh;
  // border: dotted 1px ${colors.yellow500};
  
  ${media.mac13`
    grid-template-areas: unset;
    grid-template-columns: repeat(2, 2fr);
    align-content: center;
    grid-column-gap: 1rem;
    width: 100%;
    margin-right: 60px;
    padding-left: 120px;
    margin-bottom: 2.2rem;
  `}
  
  ${media.md`
    width: 100%;
  `}
  
  ${media.sm`
     width: 90vw;
    margin-top: -2rem;
    margin-left: -4rem;
    grid-template-columns: repeat(1, 1.8fr);
    grid-row: 1;
    grid-column: 1;
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
    color: ${colors.gray100};
    pointer-events: none;
    // border: solid 1px #223232;
    
    ${media.mac13`
      grid-row: 2;
      grid-column: 3;
      margin-top: 5rem;
    `}
    
    ${media.md`
      width: 80vw;
      height: 100%;
    `}
    
    ${media.sm`
      position: absolute;
      width: 90%;
      height: 60%;
      bottom: 0;
      margin-bottom: 2rem;
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
    
    ${media.md`
      font-size: 10vw;
      height: 9vh;
    `}
    ${media.sm`
      height: 7vh;
      font-size: 6vh;
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
    
    ${media.md`
      font-size: 10vw;
      height: 9vh;
    `}
    
    ${media.sm`
      font-size: 6vh;
      height: 7vh;
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
    
    ${media.mac13`
      bottom: 0;
      align-items: flex-end;
      margin-top: 3rem;
    `}
    
     ${media.md`
      margin-top: 3rem;
    `}
    
    ${media.sm`
      position: absolute;
      bottom: 0;
    `}
`
