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
  
  ${media.lg`
    width: 100%;
  `}
  
  ${media.md`
    width: 90%;
  `}
  ${media.sm`
    width: 90%;
  `}
`

export const SubLine = styled.hr`
  width: 120px;
  overflow: visible;
  box-sizing: content-box;
  margin-right: 10px;
  border: solid 1px ${colors.gray200};
   ${media.lg`
      width: 18%;
  `}
  ${media.md`
      width: 15%;
      margin-left: 10px;
  `}
  ${media.sm`
      width: 10%;
      margin-left: -20px;
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
  
  ${media.md`
      width: 100%;
      font-size: .9rem;
      margin-left: -40px;
    `}
    ${media.sm`
      width: 100%;
      font-size: .6rem;
      margin-left: -25px;
    `}
`
