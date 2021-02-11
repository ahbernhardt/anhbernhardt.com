import styled from 'styled-components'
import { colors, fonts, media } from "../../../style/constants"

export const Header = styled.header`
  display: block;
  overflow: hidden:
  top: 0;
  margin-top: 0;
  height: 100%;
  // border: dotted 1px ${colors.yellow700};
  
  ${media.mac`
    top: 0;
    left: 0;
    overflow: hidden:
    height: 100vh;
    width: 10vw;
  `}
  ${media.lg`
    margin-top: 6.5rem;
    margin-bottom: 0;
    width: 110%;
    height: 150px;
    margin-left: -28px;
    padding-left: 30px;
    border-bottom: solid 1px ${colors.gray400};
  `}
  ${media.md`
    margin-top: 6.5rem;
    margin-bottom: 0;
    width: 114%;
    height: 150px;
    margin-left: -28px;
    padding-left: 30px;
    border-bottom: solid 1px ${colors.gray400};
  `}
  
  ${media.sm`
    margin-top: 6.5rem;
    margin-left: -5rem;
    margin-bottom: .5rem;
    width: 100%;
    height: 100px;
    padding-bottom: 2rem;
    border: none;
  `}
`
export const HeaderTitle = styled.h1`
  font-family: ${fonts.display};
  color: ${colors.white};
  font-style: normal;
  font-weight: 200 ;
  letter-spacing: 5px;
  font-size: 7rem;
  text-transform: uppercase;
  white-space: nowrap;
  transform: rotate(90deg);
  opacity: 0.3;
   
  ${media.mac`
    width: 6.5vw;
    position: fixed;
  `}
  ${media.lg`
    transform: rotate(0deg);
    font-size: 9vw;
    font-style: normal;
    font-display: auto;
    font-weight: 200 ;
  `}
  ${media.md`
    transform: rotate(0deg);
    font-size: 9vw;
    font-style: normal;
    font-display: auto;
    font-weight: 200 ;
  `}
  
  ${media.sm`
    transform: rotate(0deg);
    font-size: 52px;
  `}
  
 &:before,
 &::after {
    position: absolute;
    opacity: 0.2;
 }
 
  &:before {
    content: attr(data-title) "—" ;
    transform: translateX(-100%);
    ${media.lg`
      content: "";
    `}
     ${media.md`
      content: "";
    `}
    
    ${media.sm`
      content: "";
    `}
  }
  
  &:after {
    content: attr(data-title) "—" ;
    ${media.lg`
      content: "";
    `}
    ${media.md`
      content: "";
    `}
    
    ${media.sm`
      content: "";
    `}
  }
`
