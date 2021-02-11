import styled, { css } from 'styled-components'
import { media, colors } from './constants'

export const ListItem = styled.li`
  font-size: 1rem;
  color: ${colors.gray300};
  padding: .3rem 0;
  line-height: 1.6em;
`

export const ListItemLine = styled.li`
  font-size: 1.3rem;
  color: ${colors.gray300};
  padding: .1rem 0;
  line-height: 1.4;
  
  ${media.mon`
    font-size: 1rem;
    line-height: 1.2;
  `}
  
  ${media.mac`
    font-size: .8rem;
    line-height: 1.2;
  `}
  ${media.lg`
    font-size: .8rem;
  `}
  ${media.md`
    font-size: .8rem;
  `}
  ${media.sm`
    font-size: .8rem;
  `}
`

export const Loader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  ${props => props.isLoaded
    ? css`
    transform: scale(1.05);
    opacity: 0;
  `
    : css`
    transform: scale(1);
    opacity: 1;
  `}
`
