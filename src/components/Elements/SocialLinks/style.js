import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { colors, fonts, media} from '../../../style/constants'

export const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 25% 0 25%;
  display: block;
  text-align: center;
  justify-content: space-between;
  pointer-events: none;
  
  ul:last-child li {
    // text-align: right;
    
    a {
      transition: color .4s ease;
      will-change: color;
      position: relative;
      
      &::before {
        position: absolute;
        left: -1.1rem;
        top: 50%;
        background: ${colors.yellow500};
        border-radius: 100%;
        content: '';
        display: block;
        height: .3rem;
        width: .3rem;
        transition: transform .3s cubic-bezier(.45, 0, .1, 1), opacity .1s ease;
        will-change: transform, opacity;
      }

      &:not(.active)::before {
        opacity: 0;
        transform: translate(-1rem, -50%);
      }

      &:hover {
        color: #fff;
        
        &::before {
          transform: translate(0, -50%);
          opacity: 1;
        }
      }
    }
  }
  
  ${media.md`
    position: static;
    padding: 0;
  `}
  
`

export const Nav = styled.ul`
  list-style: none;
  padding: 0 30% 0 33%;;
  margin: 0;
  width: 100%;
`

export const NavItem = styled.li`
  list-style: none;
  padding: .5rem 0;
  line-height: 1em;
  display: inline-flex;
  margin-left: 2.2rem;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  ${media.mac13`
      padding: .4rem 0;
  `}
  
  ${media.md`
      padding: .6rem 0;
  `}

  a {
    font-size: .9rem;
    font-family: ${fonts.upright};
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
        color: ${colors.gray400};
      `}
      
      
   ${media.mac13`
      font-size: .8rem;
      line-height: .8em;
  `}
  ${media.lg`
      font-size: .8rem;
      line-height: .8em;
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
    color: #fff;
    
    &::before {
      transform: translate(0, -50%);
      opacity: 1;
    }
  }
`
export const Item = styled.div`
  font-family: ${fonts.upright};
  color: ${colors.gray300};
  font-size: .9rem;
  line-height: 1.2em;
  
  span {
    font-family: ${fonts.upright};
    font-size:1.2rem;
  } 
`
