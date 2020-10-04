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
    padding: 3% 0 0 20%;
  `}
  
  ${media.lg`
    position: static;
    padding: 25% 0 0 20%;
  `}
  
  ${media.md`
    position: static;
    padding: 7% 0 0 60%;
    opacity: 50%;
  `}
  
  ${media.sm`
    position: static;
    padding: 45% 0 0 7%;
  `}
  ${media.xs`
    position: static;
    padding: 55% 0 0 7%;
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
    // transform: translate(37%, 35%);
    margin-bottom: 0px !important;
    
    ${media.xl`
      width: 550px;
      height: 500px;
     transform: translate(0%, 0%);
  `}
  
    ${media.lg`
      width: 400px;
      height: 350px;
     transform: translate(0%, 0%);
  `}
  
    ${media.md`
      width: 250px;
      height: 200px;
      transform: translate(0%, 0%);
  `}
  
  ${media.sm`
    width: 225px;
    height: 175px;
    transform: translate(0%, 0%);
  `}
  
  ${media.xs`
    width: 200px;
    height: 150px;
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

