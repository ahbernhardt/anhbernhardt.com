import styled from 'styled-components'
import { colors,media } from '../../../../style/constants'

export const EachSkillSectionTitle = styled.h2`
  color: ${colors.white};
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 1rem;
  margin-top: 1.2rem;
  font-weight: 600;
  
  &::before {
    content: '◻️';
    display: inline-block;
    vertical-align: middle;
    margin-right: .8rem;
  }
  
  ${media.mac13`
    font-size: .8rem;
    text-align: left;
    margin-bottom: .7rem;
    
     &::before {
      margin-right: .4rem;
    }
  `}
`
export const EachSkillSectionList = styled.ul`
  position: relative;
  width: 100%;
  display: inline-block;
  padding-left: 1.6rem;
  
  ${media.mac13`
    padding-left: 1rem;
  `}
  
  ${media.sm`
    font-size: .6rem;
  `}
`
