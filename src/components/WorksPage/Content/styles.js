import styled from "styled-components"
import { colors, media } from "../../../style/constants"

export const ContentWrapper = styled.main`
  display: block;
  width: 85vw;
  height: 100vh;
  counter-reset: counter;
  // border: dotted 1px ${colors.yellow500};
  
  ${media.mac13`
    width: 100%;
    height: 100%;
    margin-top: 3rem;
    margin-bottom: 4rem;
    margin-right: 60px;
    padding-left: 120px;
  `}
  ${media.lg`
    width: 100%;
  `}
  ${media.md`
    width: 100%;
  `}
  
  ${media.sm`
    width: 90vw;
    margin-left: -4rem;
    grid-template-columns: repeat(1, 1.8fr);
    grid-row: 1;
    grid-column: 1;
  `}
`
