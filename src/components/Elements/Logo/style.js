import styled from 'styled-components'
import { colors, media } from '../../../style/constants'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 5px;
  
 ${media.mac13`
   transform-origin: left top; 
   transform: rotate(-90deg) translate(-50%, 0);
`}
 ${media.lg`
   transform-origin: left top; 
   transform: rotate(-90deg) translate(-50%, 0);
`}

${media.md`
    transform-origin: left top; 
   transform: rotate(-90deg) translate(-50%, 0);
`}

${media.sm`
  margin-top: 10px;
  transform-origin: top; 
  transform: rotate(0deg) translate(0, 0);
`}
  
  > div {
    position: relative;
  }

  a, svg {
    display: block;
  }

  a {
    width: 1.8rem;
    left: -50%;

    ${media.sm`
      width: 1.5rem;
    `}
  }

  svg {
    width: 100%;
    height: 100%;
    stroke:${colors.white};
  } 

  .logo {
    position: absolute;
    top: 0;
    left: 0;
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
