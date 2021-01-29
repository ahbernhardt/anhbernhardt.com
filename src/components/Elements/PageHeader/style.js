import styled from 'styled-components'
import { colors, fonts, media } from "../../../style/constants"

export const Header = styled.header`
  padding: 0 1rem; 
  margin: 4rem 0 2rem;
  display: block;
  // border: solid 2px ${colors.gray200};
  width: 100%;

  
  ${media.mac13`
    top: 0;
    margin-top: 0;
    margin-bottom: 0;
    overflow: hidden:
    position: sticky;
    height: 100vh;
  `}
  
  ${media.md`
    margin-top: 7.5rem;
    margin-bottom: 0;
    width: 100%;
    height: 150px;
    padding-bottom: 2rem;
    border-bottom: solid 2px ${colors.gray400};
  `}
  ${media.sm`
    margin-top: 7.5rem;
    margin-left: -3rem;
    margin-bottom: 0;
    width: 100%;
    height: 100px;
    padding-bottom: 2rem;
    border: none;
  `}
`
export const HeaderTitle = styled.h1`
  font-family: var(--font-display);
  color: ${colors.white};
  font-weight: 300 ;
  letter-spacing: 5px;
  font-size: 7.5rem;
  text-transform: uppercase;
  white-space: nowrap;
  transform: rotate(90deg);
  opacity: 0.3;
   
  ${media.mac13`
    top: 1rem;
    bottom: 1rem;
    margin-bottom: 1rem;
    width: 10vw;
  `}
  
  ${media.md`
    transform: rotate(0deg);
    font-size: 10vw;
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
    
     ${media.md`
      content: "";
    `}
    
    ${media.sm`
      content: "";
    `}
  }
  
  &:after {
    content: attr(data-title) "—" ;
  
    ${media.md`
      content: "";
    `}
    
    ${media.sm`
      content: "";
    `}
  }

  // &:hover {
  //   // transform-origin: center; 
  //   // transform: translate(-25px, 5px);
  //   transition: transform .3s cubic-bezier(.45, 0, .1, 1), opacity .1s ease;
  // }
`
