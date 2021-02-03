import styled from "styled-components"
import { colors, media } from "../../../style/constants"

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: unset;
  grid-template-columns: repeat(2, 2fr);
  align-content: center;
  grid-column-gap: 1rem;
  width: 85vw;
  height: 100vh;
  border: dotted 2px ${colors.yellow500};
  
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
    padding-top: 2rem;
    padding-left: 2rem;
    grid-template-columns: 1.2fr 1fr;
    grid-column-gap: 1.3rem;
    margin-bottom: 2rem;
  `}
  
  ${media.sm`
    width: 90vw;
    margin-top: -2rem;
    margin-left: -4rem;
    grid-template-columns: repeat(1, 1.8fr);
    grid-row: 1;
    grid-column: 1;
    margin-bottom: 1rem;
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
    font-family: var(--font-outline);
    font-size: var(--size-title);
    font-weight: 400;
    font-style: normal;
    color: ${colors.gray100};
    pointer-events: none;
    // border: solid 1px #223232;
    
    ${media.mac13`
      grid-row: 2;
      grid-column: 3;
      margin-top: 5rem;
    `}
`
export const EachBlockText = styled.span`
    height: var(--size-title);
    width: fit-content;
    position: relative;
    display: block;
    overflow: hidden;
`

export const StatusWrapper = styled.div`
    position: relative;
    display: block;
    flex-direction: column;
    align-items: flex-end;
    pointer-events: none;
    width: 100%;
    // border: dotted 1px ${colors.yellow500};
    
    ${media.mac13`
      bottom: 0;
      align-items: flex-end;
      grid-row: 2;
      grid-column: 1 /span 2;
      margin-top: 3rem;
      margin-left: 25px;
    `}
`
