import styled from 'styled-components'
import { colors, fonts, media } from "../../../style/constants"

export const Header = styled.header`
  padding: 0 1rem; 
  margin: 4rem 0 2rem;
  display: block;
  overflow: hidden:
  top: 0;
  margin-top: 0;
  margin-bottom: 0;
  // width: 100%;
  height: 100vh;

  
  ${media.mac13`
    top: 0;
    margin-top: 0;
    margin-bottom: 0;
    overflow: hidden:
    height: 100vh;
    width: 13vw;
  `}
  
  ${media.md`
    margin-top: 6.5rem;
    margin-bottom: 0;
    width: 100%;
    height: 150px;
    margin-left: 1rem;
    border-bottom: solid 2px ${colors.gray400};
  `}
  
  ${media.sm`
    margin-top: 6.5rem;
    margin-left: -2.5rem;
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
  font-style: normal;
  font-display: auto;
  font-weight: 200 ;
  letter-spacing: 5px;
  font-size: 9rem;
  text-transform: uppercase;
  white-space: nowrap;
  transform: rotate(90deg);
  opacity: 0.3;
   
  ${media.mac13`
    top: 1rem;
    margin-bottom: 1rem;
    width: 10vw;
    position: fixed;
  `}
  
  ${media.md`
    transform: rotate(0deg);
    font-size: 9vw;
    // font-weight: 300;
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
