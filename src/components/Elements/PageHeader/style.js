import styled from 'styled-components'
import { colors, fonts, media } from "../../../style/constants"

export const Header = styled.div`
  display: block;
  position: fixed;
  width: 10vw;
  margin-top: 0;
  margin-left: 10rem;
  height: 100vh;
  transform-origin: top; 
  transform: rotate(90deg);
  
  ${media.mon24`
  margin-top: 10rem;
  margin-left: 11rem;
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

  ${media.mon24`
      font-size: 7.5vw;
  `}
  
 &:before,
 &:after {
    position: absolute;
    opacity: 0.2;
 }
  &:before {
    content: attr(data-title) "—" ;
    transform: translateX(-100%);
  }
  &:after {
    content: "—" attr(data-title) "—" attr(data-title) "—" attr(data-title) "—" ;
  }

  &:hover {
    transform: translate(-25px, 0);
    transition: transform .3s cubic-bezier(.45, 0, .1, 1), opacity .1s ease;
  }
`
