import styled,{css} from "styled-components"
import { colors, media } from "../../../style/constants"

export const Wrapper = styled.div`
  font-size: 1.3rem;
  max-width: 75rem;
  line-height: 1.3em;
  position: relative;
  padding: 5% 0 0 20%;
   
  ${media.mac13`
    position: relative;
    padding: 10% 0 0 22%;
  `}
  
  ${media.lg`
    position: static;
    padding: 18% 0 0 18%;
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
  
  ${props => props.fixed
  ? css`
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
  color: ${colors.gray400};
  
  .name{
    color: ${colors.yellow500}
  }
`
