import styled, { css } from 'styled-components'
import { media, colors } from './constants'

// export const ContentWrapper = styled.main`
//   display: grid;
//   max-width: 100vw;
//   grid-auto-flow: column;
//
//   ${media.mac13`
//     display: grid;
//     max-width: 100vw;
//     grid-auto-flow: column;
//   `}
//
// `

export const ListItem = styled.li`
  font-size: 1rem;
  color: ${colors.gray400};
  padding: .3rem 0;
  line-height: 1.6em;
`

export const ListItemLine = styled.li`
  font-size: 1rem;
  color: ${colors.gray400};
  padding: .1rem 0;
  line-height: 1.2;
  
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
  background: #1b242f;
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
  transition: .6s cubic-bezier(.45, 0, .07, 1) transform, .6s cubic-bezier(.45, 0, .07, 1) opacity;
  will-change: transform;
`
