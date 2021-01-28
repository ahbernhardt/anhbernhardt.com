import styled from "styled-components"
import { colors,media} from '../../../style/constants'

export const Wrapper = styled.div`
   position: relative;
   opacity: 100%;
   padding: 15% 0 0 20%;
   
  ${media.mac13`
    position: static;
    padding: 25% 0 0 20%;
  `}
 
  ${media.lg`
    position: static;
    padding: 25% 0 0 18%;
  `}
  
  ${media.md`
    position: static;
    padding: 50% 0 0 10%;
  `}
  
  ${media.sm`
    position: static;
    padding: 10% 0 0 7%;
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
