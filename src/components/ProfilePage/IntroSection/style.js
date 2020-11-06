import styled from 'styled-components'
import Image from '../../Elements/Image'
import { colors, media } from '../../../style/constants'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  position: relative;
  
  ${media.xl`
    grid-template-rows: repeat(2, 1fr);
    padding: 0 0 0 0;
  `}
  
  ${media.lg`
    grid-template-rows: repeat(2, auto);
    padding: 0 0 0 6%;
  `}
  
  ${media.md`
    grid-template-rows: repeat(4, auto);
  `}
  
  ${media.sm`
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: .5rem;
  `}
`

export const StyledImage = styled(Image)`
  grid-row: 1 / 4;
  grid-column: 5 / 8;
  position: relative;
  overflow: hidden;
  margin-right: -150px;
  z-index: 0;
  
  &::before {
    content: '';
    display: block;
    ${media.sm`
      padding-top: 100%;
    `}
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    mix-blend-mode: lighten;
    opacity: .1;
    display: block;
    object-fit: cover;
    
    ${media.md`
      opacity: .2;
      object-fit: cover;
    `}
    
    ${media.sm`
      opacity: .2;
    `}
  }

  ${media.xl`
    width: 500px;
    grid-row: 1 / 12;
    grid-column: 5 / 8;
    margin-top: -100px;
    margin-right: 0;
        &:before {
          padding-top: 100%;
        }
  `}
  
  ${media.lg`
    width: 450px;
    grid-row: 1 / 6;
    grid-column: 5 / 8;
    margin-top: -60px;
    margin-right: 0;
        &:before {
          padding-top: 100%;
        }
  `}
  
  ${media.md`
    max-width: 400px;
    grid-row: 1 / 8;
    grid-column: 5 / 10;
    margin-top: 100px;
    margin-left: -60px;
      &:before {
        padding-top: 100%;
      }
    `}
  
  ${media.sm`
    grid-area: 1 / 1 / 1 / 1 ;
    margin-top: 0;
    margin-left: 0;
    &:before {
      padding-top: 100%;
    }
  `}
    
  ${media.xs`
    grid-area: 1 / 1 / 1 / 1 ;
    margin-top: 0;
    margin-left: 0;
    &:before {
      padding-top: 100%;
    }
  `}
`

export const InfoWrapper = styled.header`
  grid-row: 1 / 4;
  grid-column: 2 / 6;
  z-index: 1;
  
  ${media.xl`
    grid-column: 2 / 6;
    grid-row: 1 / 4;
  `}
  
  ${media.lg`
    grid-column: 1 / 6;
    grid-row: 1 / 5;
  `}
  
  ${media.md`
    grid-column: 1 / 5;
    grid-row: 1 / 4;
  `}
  
  ${media.sm`
    padding-top: 15px;
    grid-row: 2 / 3;
    grid-column: 1 / 1;
  `}
`

export const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${colors.gray500};
  
  ${media.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }

  a {
    color: #fff;
    border-bottom: 1px dotted ${colors.gray500};
    
    &:hover {
      border-bottom-color: ${colors.yellow500};
    }
  }
`
