import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { colors, fonts, media } from '../../../style/constants'

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 60px;
  display: block;
  pointer-events: none;
  border-bottom: solid 2px ${colors.gray500};
  vertical-align: baseline;
  transform-origin: left top; 
  transform: rotate(-90deg) translate(-100%, 0);

  ${media.mac13`
    position: fixed;
    top: 0;
    width: 100vh;
  `}
  ${media.lg`
    position: fixed;
    top: 0;
    width: 100vh;
  `}
  ${media.md`
    position: fixed;
    top: 0;
    width: 100vh;
  `}
  
  ${media.sm`
    background-color: ${colors.black};
    border-left: solid 2px ${colors.gray500};
    z-index: 1;
    top: 0;
    width: 100vh;
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
        top: 1.7rem;
        background: ${colors.yellow500};
        border-radius: 100%;
        content: '';
        display: flex;
        height: .3rem;
        width: .3rem;
        transition: transform .3s cubic-bezier(.45, 0, .1, 1), opacity .1s ease;
        will-change: transform, opacity;
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
  width: 90%;
  height: 70%;
  transform-origin: top; 
  transform: rotate(180deg);

  ${media.mac13`
    right: 20px;
    margin-top: 50px;
  `}
  ${media.lg`
    width: 75%;
    right: 20px;
    margin-top: 50px;
  `}
  ${media.md`
    width: 75%;
    right: 20px;
    margin-top: 50px;
  `}
  
  ${media.sm`
    width: 50%;
    margin-top: 7px;
    left: 35px;
    transform-origin: top; 
    transform: rotate(0deg);
  `}
`

export const NavItem = styled.li`
  list-style: none;
  line-height: 1;
  margin-left: 2rem;
  
  ${media.mac13`
    margin-left: 1rem;
  `}
  
  ${media.mac13`
      margin-left: 1rem;
  `}
  
  ${media.md`
    margin-left: 1rem;
  `}
  
  ${media.sm`
    margin-left: .5rem;
  `}

  a {
    font-size: 1.2rem;
    font-family: ${fonts.inter};
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    pointer-events: all;
    transition: color .1s ease;
    line-height: .9em;
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
      
    ${media.sm`
      font-size: 1rem;
    `}
  }
`

export const NavLink = styled(Link).attrs({
    activeClassName: 'active'
})`
  &.active {
    color: ${colors.white};
    text-decoration: line-through;
    
    &::before {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`
