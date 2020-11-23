import styled, { css } from 'styled-components'
import { colors, media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.div`
  font-size: 1.5rem;
  max-width: 45rem;
  line-height: 1.5em;
  
  ${media.mon27`
    max-width: 58rem;
    font-size: 1.8rem;
    line-height: 1.8em;
  `}
  
  ${media.mon24`
    max-width: 42rem;
    font-size: 1.3rem;
    line-height: 1.3em;
  `}
  
  ${media.mac15`
    max-width: 40rem;
    font-size: 1.3rem;
    line-height: 1.3em;
  `}
  
  ${media.pro`
    max-width: 38rem;
    font-size: 1.2rem;
    line-height: 1.2em;
  `}
  
  ${media.mac13`
    max-width: 30rem;
    font-size: 1rem;
    line-height: 1.2em;
  `}
  ${media.ipadpro`
    min-width: 42rem;
    font-size: 1.5rem;
    line-height: 1.3em;
  `}
  ${media.lg`
    max-width: 32rem;
  `}
  ${media.md`
    max-width: 35rem;
    font-size: 1.3rem;
    line-height: 1.3em;
  `}
  ${media.sm`
    max-width: 95%;
    font-size: 1rem;
  `}
  ${media.xs`
    max-width: 95%;
    font-size: 1rem;
    line-spacing: 1rem;
  `}

  ${props => props.fixed
    ? css`
      ${getOuterSpace('padding')};
      position: absolute;
      top: 0;
      right: 0;
      text-align: right;
      color: ${colors.gray500};
      ${media.md`
        text-align: right;
        top: 2%;
        right: 2%;
        left: auto;
      `}
      
      ${media.xs`
        text-align: left;
        top: 52%;
        left: 36px;
        right: 36px;
      `}
      
      ${media.xxs`
        text-align: left;
        top: 50%;
        left: 32px;
        right: 18px;
      `}
    `
    : css`
      text-align: left;
    `
}
`

export const Title = styled.h1`
  margin-bottom:5px; 
  .name {
    color: ${colors.yellow500};
    font-weight: 700;
  }
`
