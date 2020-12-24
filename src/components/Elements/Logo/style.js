import styled from 'styled-components'
import { colors,media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 10rem;
  z-index:2;
  ${getOuterSpace('padding')}
  ${media.ipadpro`
    position: static;
    padding: 0;
  `}
  ${media.md`
    position: static;
    padding: 0;
  `}
  
  ${media.xs`
    position: static;
    padding: 0 0 2% 3%;
  `}
  
  > div {
    position: relative;
  }

  a, svg {
    display: block;
  }

  a {
    width: 2.5rem;
    left:50%;
    
    ${media.mon27`
      width: 2.8rem;
    `}
    
    ${media.mon24`
      width: 2.5rem;
    `}
    ${media.ipadpro`
      width: 3rem;
    `}
    ${media.mac13`
      width: 2rem;
    `}
    
    ${media.xs`
      width: 1.8rem;
    `}
  }

  svg {
    width: 100%;
    height: 100%;
    stroke:${colors.white};
  } 

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: rgba(255, 255, 255, .05);
    height: 100%;
    width: 100%;
    pointer-events: none;
    opacity: 1;
    will-change: transform;
  }

  a:hover + .logo {
    opacity: .2;
    transform: translate(-50%, -50%) scale(5);
    transition: transform 1s cubic-bezier(.4, 0, .1, 1), opacity .8s ease;
  }
`
