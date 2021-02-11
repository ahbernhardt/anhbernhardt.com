import styled from "styled-components"
import { colors, fonts, media } from "../../../style/constants"

export const Wrapper = styled.div`
  font-size: 1rem;
  color: ${colors.white};
  display: flex;
  align-items: center;
  opacity: .4;
  bottom: 0;
  width: 100%;
  padding: 10px 0.2rem 10px 0;
  
  ${media.ultra`
    bottom: 0;
  `}
  ${media.mon`
    bottom: 0;
  `}
  ${media.mac`
    bottom: 0;
  `}
  ${media.lg`
    bottom: 0;
    padding: 0 0.2rem 10px 0;
  `}
  ${media.md`
    bottom: 0;
    padding: 0 0.2rem 10px 0;
  `}
  ${media.sm`
    bottom: 0;
    padding: 10px 0 10px 0;
    // width: 90%;
  `}
`

export const SubLine = styled.hr`
  width: 30%;
  overflow: visible;
  box-sizing: content-box;
  margin-right: 10px;
  border: solid 1px ${colors.gray200};
  ${media.ultra`
      width: 30%;
  `}
  ${media.mon`
      width: 30%;
  `}
  ${media.lg`
      width: 30%;
  `}
  ${media.md`
      width: 25%;
  `}
  ${media.sm`
      width: 16%;
  `}
`

export const SubMessage = styled.div`
  font-family:'Poppins', san-serif;
  font-style: normal;
  font-weight: 200;
  letter-spacing: 0.5px;
  margin-left: 15px;
  display: block;
  // border: solid 1px #223232;
  
  ${media.ultra`
    font-size: 1.8rem;
  `}
  
  ${media.mon`
    font-size: 1.3rem;
  `}
  
  ${media.mac`
      font-size: 1.1rem;
  `}
  ${media.lg`
      font-size: 1.2rem;
  `}
  ${media.md`
      font-size: 1rem;
  `}
  ${media.sm`
    width: 100%;
    font-size: .8rem;
    margin-left: 5px;
  `}
`
