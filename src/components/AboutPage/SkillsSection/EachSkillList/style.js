import styled from 'styled-components'
import { colors,media } from '../../../../style/constants'

export const EachSkillSectionTitle = styled.h2`
  color: ${colors.gray200};
  font-size: .8rem;
  text-align: left;
  margin-bottom: .7rem;
  font-weight: 600;
  
  &::before {
    content: '◻️';
    display: inline-block;
    vertical-align: middle;
    margin-right: .4rem;
  }
`
export const EachSkillSectionList = styled.ul`
  position: relative;
  width: 100%;
  display: inline-block;
  padding-left: 1rem;
  
  ${media.sm`
    font-size: .6rem;
  `}
`
