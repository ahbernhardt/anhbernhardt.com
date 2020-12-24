import styled,{css} from "styled-components"
import { colors, getOuterSpace, media } from "../../../style/constants"

export const Wrapper = styled.div`
   font-size: 1.3rem;
    max-width: 75rem;
    line-height: 1.3em;
   
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
    padding: 10% 0 0 25%;
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
  ${props => props.fixed
  ? css`
      ${getOuterSpace('padding')};
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: left;
      color: ${colors.gray500};
      ${media.md`
        text-align: left;
        left: 0;
        right: auto;
      `}
    `
  : css`
      text-align: left;
    `
}
\`
`
export const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${colors.gray500};
`
