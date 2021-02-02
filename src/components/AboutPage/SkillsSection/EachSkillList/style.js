import styled from 'styled-components'
import { colors,media } from '../../../../style/constants'

export const EachSkillSectionTitle = styled.h2`
  color: #fff;
  font-size: .8rem;
  text-align: left;
  margin-bottom: .7rem;
  font-weight: 600;
  
  &::before {
    content: '◻️';
    // width: .6rem;
    // height: 1px;
    // background: ${colors.yellow500};
    display: inline-block;
    vertical-align: middle;
    margin-right: .6rem;
  }
`
export const EachSkillSectionList = styled.ul`
  position: relative;
  width: 100%;
  display: inline-block;
  padding-left: 0.5rem;
  
  ${media.sm`
    font-size: .6rem;
  `}
`
