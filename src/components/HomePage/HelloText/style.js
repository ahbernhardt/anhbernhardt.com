import styled from 'styled-components'
import { colors,media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.div`
   position: relative;
   opacity: 40%;
   ${getOuterSpace('padding')}
  
  ${media.mon27`
    position: static;
    padding: 10% 0 0 20%;
  `}
  
  ${media.mon24`
    position: static;
    padding: 10% 0 0 20%;
  `}
  
  ${media.mac15`
    position: static;
    padding: 22% 0 0 20%;
  `}
  
  ${media.pro`
    position: static;
    padding: 20% 0 0 5%;
  `}
  ${media.mac13`
    position: static;
    padding: 10% 0 0 18%;
  `}
  ${media.ipadpro`
    position: static;
    padding: 10% 0 0 13%;
  `}
  ${media.lg`
    position: static;
    padding: 18% 0 0 13%;
  `}
  
  ${media.md`
    position: static;
    padding: 50% 0 0 10%;
  `}
  
  // weird size (640px)
  ${media.sm`
    position: static;
    padding: 10% 0 0 7%;
    opacity: 50%;
  `}
  
  // iphone plus, pixel
  ${media.xs`
    position: static;
    padding: 22% 0 0 12%;
    opacity: 50%;
  `}
  
  // iphone x
  ${media.xxs`
    position: static;
    padding: 22% 0 0 12%;
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
    
  ${media.mon27`
    width: 1000px;
    height: 900px;
    transform: translate(0%, 0%);
`} 
  ${media.mon24`
    width: 750px;
    height: 550px;
    transform: translate(0%, 0%);
`} 

 ${media.mac15`
    width: 650px;
    height: 550px;
    transform: translate(0%, 0%);
`} 

  ${media.pro`
    width: 550px;
    height: 500px;
   transform: translate(0%, 0%);
  `} 

  ${media.mac13`
    width: 550px;
    height: 400px;
    transform: translate(0%, 0%);
  `}
  ${media.ipadpro`
   width: 650px;
   height: 700px;
  `} 
  
  // Tablet landscape
  ${media.lg`
    width: 650px;
    height: 400px;
    transform: translate(0%, 0%);
  `}
  
    // Tablet
  ${media.md`
      width: 550px;
      height: 400px;
      transform: translate(0%, 0%);
  `}
  
  // weird size
  ${media.sm`
    width: 250px;
    height: 250px;
    transform: translate(0%, 0%);
  `}
  
  // iphone xl, pixel
  ${media.xs`
    width: 300px;
    height: 300px;
    transform: translate(0%, 0%);
  `}
  
  ${media.xxs`
    width: 275px;
    height: 275px;
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

