import styled from "styled-components"
import { colors,media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.div`
   position: relative;
   opacity: 100%;
   // ${getOuterSpace('padding')}
   
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
    padding: 10% 0 0 20%;
  `}
  ${media.ipadpro`
    position: static;
    padding: 10% 0 0 13%;
  `}
  ${media.lg`
    position: static;
    padding: 18% 0 0 18%;
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
header {
  width: 100vw; 
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerWrap {
  width: 825px; 
  height: 200px;
  flex: 0 0 auto;
  margin-top: -27px;
  position: relative;
}
#particles, .headerWrap svg {
  position: absolute;
  top: 0; 
  left: 0;
  fill: ${colors.black};
}
`
