import styled from "styled-components"
import { colors, fonts, media } from "../../../style/constants"

export const Wrapper = styled.div`
  font-size: 1rem;
  color: ${colors.gray300};
  display: flex;
  align-items: center;
  bottom: 0;
  width: 80%;
  padding: 10px 0.2rem 10px 0;
  // border: solid 1px #223232;
   
  ${media.mon`
    width: auto;
    bottom: 0;
    padding: 25px 0.2rem 10px 5rem;
  `}
  
  ${media.mac13`
    bottom: 0;
    width: auto;
    padding: 25px 0.2rem 10px 2rem;
  `}
  
  ${media.lg`
    width: auto;
    // width: 60%;
  `}
  
  ${media.md`
    width: auto;
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
  border: solid 1px ${colors.gray400};
  
  ${media.mon`
     width: 250px;
  `}
  
  ${media.mac13`
     width: 120px;
  `}
   ${media.lg`
      width: 120px;
  `}
  ${media.md`
    width: 30px;
    margin-left: -20px;
  `}
  ${media.sm`
      width: 8%;
      margin-left: -20px;
  `}
`

export const SubMessage = styled.div`
  font-family: 'Poppins', san-serif;
  font-style: normal;
  font-weight: 200;
  letter-spacing: 0.5px;
  margin-left: 15px;
  display: block;
  // border: solid 1px #223232;
  
   ${media.mon`
    width: 100%;
    font-size: 1.8rem;
  `}
  
   ${media.mac13`
    width: 100%;
    font-size: 1rem;
    letter-spacing: 0.5px;
    margin-left: -15px;
  `}
  
  ${media.lg`
    width: 100%;
    font-size: .9rem;
  `}
  
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
