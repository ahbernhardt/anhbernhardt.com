import styled from 'styled-components'
import { colors, fonts, media } from "../../../style/constants"

export const Header = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 100px;
  margin-left: 130px;
  height: 100px;
  width: 10vw;
  transform-origin: top; 
  transform: rotate(90deg);
  
  ${media.mac13`
    margin-top: 130px;
    margin-left: 130px;
  `}
  
  ${media.md`
    position: absolute;
    margin-top: 0px;
    margin-left: 60px;
    width: 100%;
    height: 150px;
    padding: 3% 0 0 5%;
    border-bottom: solid 2px ${colors.gray400};
    transform-origin: top; 
    transform: rotate(0deg);
  `}
  ${media.sm`
    position: static;
    margin-top: 90px;
    margin-left: -25px;
    height: 75px;
    transform-origin: top; 
    transform: rotate(0deg);
    border: none;
  `}
`
export const HeaderTitle = styled.h1`
  font-family: ${fonts.display};
  color: ${colors.white};
  font-weight: 300 ;
  letter-spacing: 5px;
  font-size: 8.5vw;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.3;
  
  ${media.md`
    font-size: 52px;
    content: "—" attr(data-title) "—";
  `}
  
  ${media.sm`
    font-size: 52px;
    content: "—" attr(data-title) "—";
  `}
  
 &:before,
 &:after {
    position: absolute;
    opacity: 0.2;
 }
 
  &:before {
    content: attr(data-title) "—" ;
    transform: translateX(-100%);
    
     ${media.md`
      content: "";
    `}
    
    ${media.sm`
      content: "";
    `}
  }
  
  &:after {
    content: "—" attr(data-title) "—" attr(data-title) "—" attr(data-title) "—" ;
  
    ${media.md`
      opacity: 1;
      border-bottom: solid 1px ${colors.white};
      margin-top: -60px;
      margin-left: 5px;
      padding-bottom: 35px;
      content: "—";
    `}
    ${media.sm`
      opacity: 1;
      border-bottom: solid 1px ${colors.white};
      margin-top: -105px;
      margin-left: 5px;
      padding-bottom: 80px;
      content: "—";
    `}
  }

  &:hover {
    transform: translate(-25px, 0);
    transition: transform .3s cubic-bezier(.45, 0, .1, 1), opacity .1s ease;
  }
`
