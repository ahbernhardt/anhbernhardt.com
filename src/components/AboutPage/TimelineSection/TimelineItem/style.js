import styled from 'styled-components'
import { colors } from '../../../../style/constants'
export const Left = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  width: 25%;
`
export const Year = styled.sup`
  font-size: 85%;
  // color: ${colors.yellow500}
`

export const Position = styled.h1`
  font-size: 22px;
  letter-spacing: 1px;
  font-weight: 400;
  color: ${colors.gray200}
`
export const Company = styled.span`
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
  color: ${colors.gray300};
`
export const Description = styled.h1`
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 400;
  margin-left: 25%;
`
export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 30px 0;
  display: inline-flex;
  width: 100%;
  border-bottom: 1px dotted ${colors.gray300};
  
  div {
    transition: transform .3s cubic-bezier(.45, 0, .1, 1);
    will-change: transform;
  }
  
  .position {
    transform: translateY(0);
  }

  .description {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    color: #fff;
  }

  &:hover {
    .position {
      transform: translateY(-175%);
    }

    .description {
      transform: translateY(0);
    }
  }
`
