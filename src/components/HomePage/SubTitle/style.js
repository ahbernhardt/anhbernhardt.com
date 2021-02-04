import styled from "styled-components"
import { colors, fonts, media } from "../../../style/constants"

export const Wrapper = styled.div`
  font-size: 1rem;
  color: ${colors.white};
  display: flex;
  align-items: center;
  opacity: .4;
  bottom: 0;
  width: 80%;
  padding: 10px 0.2rem 10px 0;
  // border: solid 1px #223232;
   
  ${media.mac13`
    bottom: 0;
  `}
  
  ${media.sm`
    width: 90%;
  `}
`

export const SubLine = styled.hr`
  width: 30%;
  overflow: visible;
  box-sizing: content-box;
  margin-right: 10px;
  border: solid 1px ${colors.gray200};
  
  ${media.sm`
      width: 18%;
    `}
`

export const SubMessage = styled.div`
  font-family: ${fonts.mono};
  font-style: normal;
  font-weight: 200;
  letter-spacing: 0.5px;
  margin-left: 15px;
  display: block;
  // border: solid 1px #223232;
  
    ${media.sm`
      width: 100%;
      font-size: .8rem;
      margin-left: -30px;
    `}
`
