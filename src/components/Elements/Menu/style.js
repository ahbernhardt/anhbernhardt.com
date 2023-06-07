import {Link} from 'gatsby-link'
import styled, { css } from 'styled-components'
import { colors, media } from '../../../style/constants'

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 60px;
  display: block;
  pointer-events: none;
  z-index: 1;
  vertical-align: baseline;
  transform-origin: left top; 
  transform: rotate(-90deg) translate(-100%, 0);

  ${media.ultra`
    position: fixed;
    top: 0;
    width: 100vh;
  `}
  
  ${media.mon`
    position: fixed;
    top: 0;
    width: 100vh;
  `}
  
  ${media.mac`
    position: fixed;
    top: 0;
    width: 100vh;
  `}
  
  ${media.lg`
    position: fixed;
    top: 0;
    width: 100vh;
    height: 65px;
    border-bottom: solid 1px ${colors.gray400};
  `}
  
  ${media.md`
    position: fixed;
    top: 0;
    width: 120vh;
    height: 60px;
    border-bottom: solid 1px ${colors.gray400};
  `}
  
  ${media.sm`
    background-color: ${colors.black};
    border-bottom: solid 1px ${colors.gray500};
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100vh;
    height: 60px;
    transform-origin: top; 
    transform: translate(0, 0);
  `}
  
  ul:last-child li {
    a {
      transition: color .4s ease;
      will-change: color;
      position: relative;
      
      // orange dot
      &::before {
        position: absolute;
        left: 50%;
        top: 2rem;
        background: ${colors.yellow500};
        border-radius: 100%;
        content: '';
        display: flex;
        height: .3rem;
        width: .3rem;
        transition: transform .3s cubic-bezier(.45, 0, .1, 1), opacity .1s ease;
        will-change: transform, opacity;
        
        
        ${media.mon`
          top: 1.7rem;
        `}
        
        ${media.mac`
          top: 1.7rem;
        `}
        
        ${media.lg`
          top: 1.7rem;
        `}
        
        ${media.md`
          top: 1.5rem;
        `}
        ${media.sm`
          top: 1.2rem;
          left: 45%;
          height: .2rem;
          width: .2rem;
          border-radius: 100%;
        `}
      }

      &:not(.active)::before {
        opacity: 0;
        transform: translate(-50%, -1rem);
      }

      &:hover {
        color: ${colors.white};
        
        &::before {
          transform: translate(0, 0);
          opacity: 1;
        }
      }
    }
  }

`

export const Nav = styled.ul`
  display: grid;
  grid-auto-flow: column;
  align-items:center;
  padding: 0 1.1rem;
  position: absolute;
  list-style: none;
  width: 100%;
  height: 90%;
  transform-origin: top;
  transform: rotate(180deg);

  ${media.ultra`
    right: 20px;
    margin-top: 56px;
    width: 90%;
    height: 70%;
  `}
  
  ${media.mon`
    right: 20px;
    margin-top: 55px;
    width: 90%;
    height: 70%;
  `}

  ${media.mac`
    right: 20px;
    margin-top: 50px;
    width: 90%;
    height: 70%;
  `}

  ${media.lg`
    width: 85%;
    right: 20px;
    margin-top: 58px;
  `}
  
  ${media.md`
    width: 75%;
    right: 20px;
    margin-top: 55px;
  `}

  ${media.sm`
    width: 48%;
    margin-top: 7px;
    left: 33px;
    transform-origin: top; 
    transform: rotate(0deg);
    margin-bottom: 10px;
  `}
`

export const NavItem = styled.li`
  list-style: none;
  line-height: 1;
  margin-left: 2rem;

  ${media.ultra`
    margin-left: 1rem;
  `}
  
  ${media.mon`
    margin-left: 1rem;
  `}

  ${media.mac`
    margin-left: 1rem;
  `}

  ${media.md`
    margin-left: .8rem;
  `}

  ${media.sm`
    margin-left: 0;
    margin-top: -1px;
  `}

  a {
    font-size: 1.4rem;
    font-family: 'Poppins', san-serif;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    pointer-events: all;
    transition: color .1s ease;
    line-height: .8em;
    ${props => props.highlight
    ? css`
        color: ${colors.yellow500};
        
        &:hover::before {
          display: none !important;
        }
      `
    : css`
        color: ${colors.gray300};
      `}

    ${media.ultra`
      font-size: 1.4rem;
    `}
    
    ${media.mon`
      font-size: 1.2rem;
    `}
    
    ${media.mac`
      font-size: 1rem;
    `}
    ${media.md`
      font-size: 1rem;
    `}
    ${media.sm`
      font-size: .75rem;
    `}
  }
`

export const NavLink = styled(Link).attrs({
    activeClassName: 'active'
})`
  &.active {
    color: ${colors.white};

    &::before {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`
