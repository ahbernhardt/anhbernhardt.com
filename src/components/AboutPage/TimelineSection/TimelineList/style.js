import styled from 'styled-components'
import { colors } from '../../../../style/constants'

export const TimelineSectionTitle = styled.h2`
  color: #fff;
  font-size: 1.3rem;
  text-align: left;
  margin-bottom: 1rem;
  font-weight: 700;

  &::after {
    content: '';
    width: 1rem;
    height: 1px;
    background: ${colors.yellow500};
    display: inline-block;
    vertical-align: middle;
    margin-left: 1rem;
  }
`
export const TimelineSectionList = styled.ul`
  position: relative;
  width: 100%;
  display: block;
`
