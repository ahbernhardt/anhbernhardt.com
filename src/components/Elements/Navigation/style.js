import styled, { css } from 'styled-components'
import { colors, media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.div`
  ${media.ipadpro`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1;
    background-color: ${colors.blue900};
  `}
  ${media.md`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1;
    background-color: ${colors.blue900};
  `}
 
`

export const Shoable = styled.div`
  ${media.ipadpro`
    background: ${colors.blue900};
    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);
    will-change: max-height;
    ${props => props.open
  ? css`
        max-height: 250px;
      `
  : css`
        max-height: 0;
      `}
    
    > div {
      padding: 0 4rem 4rem;
    }
  `}

  ${media.md`
    background: ${colors.blue900};
    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);
    will-change: max-height;
    ${props => props.open
    ? css`
        max-height: 200px;
      `
    : css`
        max-height: 0;
      `}
    
    > div {
      padding: 0 3rem 3rem;
    }
  `}

  ${media.xs`
    background: ${colors.blue900};
    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);
    will-change: max-height;
    ${props => props.open
  ? css`
        max-height: 200px;
      `
  : css`
        max-height: 0;
      `}
    
    > div {
      padding: 0 2rem 3rem;
    }
  `}
`

export const Header = styled.header`
  ${media.ipadpro`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    min-height: 5.5rem;
    background-color: ${colors.black700};
    box-shadow: 0 0 15px 1px ${colors.gray700};
    ${getOuterSpace('padding')};
  `}
  ${media.md`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    min-height: 5rem;
    background-color: ${colors.black700};
    box-shadow: 0 0 15px 1px ${colors.gray700};
    ${getOuterSpace('padding')};
  `}
  
  ${media.xs`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    min-height: 5rem;
    background-color: ${colors.black700};
    box-shadow: 0 0 15px 1px ${colors.gray700};
    ${getOuterSpace('padding')};
  `}
 
`
