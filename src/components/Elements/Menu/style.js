import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { colors, fonts, media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 60px;
  display: flex;
  pointer-events: none;
  border-bottom: solid 2px ${colors.gray500};
  transform-origin: left top; 
  transform: rotate(-90deg) translate(-100%, 0);
  z-index:1;

  
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

  ${media.ipadpro`
    position: static;
    padding: 0;
  `}
  ${media.md`
    position: static;
    padding: 0;
  `}
`

export const Nav = styled.ul`
  list-style: none;
  margin: 7% 10%;;
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-item: flex-end;
  transform-origin: top; 
  transform: rotate(180deg);
  
  ${media.mon24`
      margin: 5.5% 10%;;
  `}
  
  ${media.mac13`
      margin: 6.5% 10%;;
  `}
`

export const NavItem = styled.li`
  list-style: none;
  line-height: .9em;
  margin-left: 2.5rem;
  
  ${media.mon27`
      padding: .7rem 0;
  `}
  
  ${media.mon24`
      margin-left: 3rem;
  `}
  
  ${media.mac13`
    margin-left: 3rem;
    padding: .4rem 0;
  `}
  
  ${media.ipadpro`
      padding: .5rem 0;
  `}
  
  ${media.md`
      padding: .6rem 0;
  `}

  a {
    font-size: 2rem;
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
      
      
    ${media.mon27`
      font-size: 1.2rem;
      line-height: 1rem;
  `}
  
  ${media.mon24`
      font-size: 1.2rem;
      padding-left: 15px;
      line-height: 1em;
  `}
  
   ${media.mac13`
      font-size: 1.2rem;
      padding-left: 15px;
      line-height: 1em;
  `}
  
  ${media.lg`
      font-size: .8rem;
      line-height: .8em;
  `}
  
  ${media.ipadpro`
      font-size: .9rem;
      line-height: 1em;
  `}
  
  ${media.md`
      font-size: .8rem;
      line-height: .8em;
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
