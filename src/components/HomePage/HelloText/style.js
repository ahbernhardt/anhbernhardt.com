import styled, {css} from 'styled-components'
import { colors,media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.div`
   position: relative;
   top: 20%;
   z-index:0;
   cursor:none;
   ${getOuterSpace('padding')}
  
  ${media.xl`
    position: static;
    padding: 10% 0 0 20%;
    opacity: 50%;
  `}
  
  ${media.lg`
    position: static;
    padding: 20% 0 0 20%;
    opacity: 50%;
  `}
  
  ${media.md`
    position: static;
    padding: 30% 0 0 5%;
    opacity: 50%;
  `}
  
  ${media.sm`
    position: static;
    padding: 50% 0 0 7%;
    opacity: 50%;
  `}
  ${media.xs`
    position: static;
    padding: 50% 0 0 7%;
    opacity: 50%;
  `}
\`

  .padding{
    height: 100vh;
    -webkit-transform: translateX(50%);
    -moz-transform: translateX(50%);
    -ms-transform: translateX(50%);
    -o-transform: translateX(50%);
  }
  svg {
    width: 100%;
    height: 100%;
  } 
  
  h1 {
    position: absolute;
    margin-bottom: 0px !important;
    
    ${media.xl`
      width: 450px;
      height: 450px;
     transform: translate(0%, 0%);
  `}
  
    ${media.lg`
      width: 400px;
      height: 400px;
     transform: translate(0%, 0%);
  `}
  
    ${media.md`
      width: 300px;
      height: 300px;
      transform: translate(0%, 0%);
  `}
  
  ${media.sm`
    width: 250px;
    height: 250px;
    transform: translate(0%, 0%);
  `}
  
  ${media.xs`
    width: 250px;
    height: 250px;
    transform: translate(0%, 0%);
  `}
    }
    
  .line {
    fill: none;
    stroke:${colors.gray700};
    stroke-width: 40px;
  }
      
  .dot {
    opacity: 75%;
    fill:${colors.gray500};
  }
`

