import styled, { keyframes } from "styled-components"
import { colors, fonts, media } from "../../style/constants"

export const ContentWrapper = styled.main`
  display: block;
  width: 85vw;
  height: 100vh;
  // border: dotted 1px ${colors.yellow500};
  
  ${media.mac13`
    width: 100%;
    height: 100vh;
    margin-right: 60px;
    padding-left: 120px;
  `}
  ${media.lg`
    width: 100%;
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
export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: flex-end;
    text-align: right;
    margin-right: .2rem;
    color: ${colors.gray100};
    // border: solid 1px #223232;
    
    ${media.mac13`
      height: 100%;
    `}
    
    ${media.lg`
      width: 85vw;
      height: 100%;
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
    `}
`
export const Email = styled.h2`
    position: relative;
    display: flex;
    text-align: right;
    margin-right: .2rem;
    color: ${colors.gray100};
    font-family: ${fonts.hunny};
    font-size: 3.5rem;
    font-weight: 400;
    font-style: normal;
    // border: solid 1px #223232;
    
    span {
      margin-left: 10px;
      margin-right: 3px;
      color: ${colors.gray400};
    }
    
    ${media.mac13`
      margin-top: 15rem;
    `}
    
    ${media.lg`
      width: 85vw;
      height: 100%;
      margin-bottom: 15rem;
    `}
    
    ${media.md`
      width: 80vw;
      height: 100%;
      margin-bottom: 12rem;
    `}
    
    ${media.sm`
      position: absolute;
      width: 90%;
      height: 60%;
      bottom: 0;
      margin-bottom: 2rem;
    `} 
`

export const SocialSection = styled.div`
    position: relative;
    display: block;
    flex-direction: column;
    align-items: flex-end;
    width: auto;
    right: 0;
    font-size: 1rem;
    color:  ${colors.gray300};
    // border: dotted 1px ${colors.yellow500};
    
    a { 
      margin-left: 20px;
    }
    
    ${media.mac13`
      position: absolute;
      bottom: 0;
      align-items: flex-end;
      margin-bottom: 4rem;
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
      position: absolute;
      bottom: 0;
    `}
`
