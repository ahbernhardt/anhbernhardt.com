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
   
   ${media.ultra`
    width: auto;
    bottom: 0;
    padding: 25px 0.2rem 10px 5rem;
  `}
  
  ${media.mon`
    width: auto;
    bottom: 0;
    padding: 25px 0.2rem 10px 5rem;
  `}
  
  ${media.mac`
    bottom: 0;
    width: auto;
    padding: 25px 0.2rem 10px 2rem;
  `}
  
  ${media.lg`
    width: auto;
  `}
  
  ${media.md`
    width: auto;
  `}
  ${media.sm`
    width: auto;
    padding: 12px 0.2rem 10px 0;
  `}
`

export const SubLine = styled.hr`
  width: 150px;
  overflow: visible;
  box-sizing: content-box;
  margin-right: 10px;
  border: solid 1px ${colors.gray400};
  
  ${media.ultra`
     width: 150px;
  `}
  
  ${media.mon`
     width: 130px;
  `}
  
  ${media.mac`
     width: 110px;
  `}
   ${media.lg`
      width: 120px;
  `}
  ${media.md`
    width: 30px;
    // margin-left: -20px;
  `}
  ${media.sm`
      width: 30px;
      margin-left: -5px;
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
  
  ${media.ultra`
    width: 100%;
    font-size: 1.5rem;
     margin-left: -15px;
  `}
  
   ${media.mon`
    width: 100%;
    font-size: 1.3rem;
     margin-left: -15px;
  `}
  
   ${media.mac`
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
    margin-left: 0px;
  `}
  ${media.sm`
    width: 100%;
    font-size: .6rem;
    margin-left: 0px;
  `}
`
