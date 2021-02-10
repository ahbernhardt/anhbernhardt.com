import styled from "styled-components"
import { colors, fonts, media } from "../../style/constants"

export const ContentWrapper = styled.main`
  display: block;
  width: 85vw;
  height: 100vh;
  // border: dotted 1px ${colors.yellow500};
  
  ${media.mon`
    width: 100%;
    height: 100vh;
    margin-right: 60px;
    padding-left: 120px;
  `}
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
    border: solid 1px #223232;
    ${media.mon`
      height: 100%;
    `}
    ${media.mac13`
      height: 100%;
    `}
    
    ${media.lg`
      width: 100%;
      height: 95%;
    `}
    
    ${media.md`
      width: 100%;
      height: 80%;
    `}
    
    ${media.sm`
      width: 100%;
      height: 90%;
    `}
`
export const Email = styled.h2`
    position: relative;
    display: flex;
    text-align: right;
    margin-right: .2rem;
    color: ${colors.white};
    font-family: ${fonts.hunny};
    font-size: 4.5rem;
    font-weight: 400;
    font-style: normal;
    // border: solid 1px #223232;
    
    a {
      margin-left: 10px;
      margin-right: 3px;
      display: inline-block;
      text-decoration: none;
      position: relative;
      z-index: 0;
      color: ${colors.yellow500};
      
      &::after {
        position: absolute;
        z-index: -1;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        width: 100%;
        height: .5px;
        background-color: ${colors.yellow500};
        opacity: 0.2;
        transition: all 250ms;
      }
      
      &:hover {
        color: ${colors.black};
      
        &::after {
          height: 108%;
          width: 105%;
          opacity: 1;
        }
      }
    }
    ${media.mon`
      font-size: 6rem;
      margin-top: 25rem;
    `}
    ${media.mac13`
      font-size: 3.5rem;
      margin-top: 15rem;
    `}
    
    ${media.lg`
      margin-top: 15rem;
      font-size: 3.2rem;
    `}
    
    ${media.md`
      width: 100%;
      height: auto;
      font-size: 3rem;
      margin-top: 20rem;
      padding-left: 5rem;
    `}
    
    ${media.sm`
      width: 100%;
      height: auto;
      font-size: 3vh;
      margin-top: 18rem;
      
      span {
        margin-left: 5px;
      }
    `} 
`

export const SocialSection = styled.div`
    position: relative;
    display: block;
    flex-direction: column;
    align-items: flex-end;
    width: auto;
    right: 0;
    font-size: 1.3rem;
    font-family: 'Poppins', san-serif;
    color:  ${colors.gray200};
    // border: dotted 1px ${colors.yellow500};
    
    a { 
      margin-left: 20px;
      
     &:hover {
      color: ${colors.yellow500};
      }
    }
    ${media.mon`
      position: absolute;
      bottom: 0;
      align-items: flex-end;
      margin-bottom: 8rem;
    `}
    
    ${media.mac13`
    font-size: 1rem;
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
      display: flex;
      font-size: .9rem;
      bottom: 0;
      
      a { 
        margin-top: 5px;
      }
    `}
`
