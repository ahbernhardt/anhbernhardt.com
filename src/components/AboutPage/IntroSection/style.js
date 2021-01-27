import styled from "styled-components"
import Image from '../../Elements/Image'
import { colors, media } from "../../../style/constants"

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  position: relative;
  
  ${media.mon27`
    grid-template-rows: repeat(2, 1fr);
    padding: 0 0 0 0;
  `}
  
  ${media.mon24`
    grid-template-rows: repeat(2, 1fr);
    padding: 0 0 0 0;
  `}
  ${media.mac15`
    grid-template-rows: repeat(2, 1fr);
    padding: 0 0 0 0;
  `}
  ${media.pro`
    grid-template-rows: repeat(2, 1fr);
    padding: 0 0 0 0;
  `}
  ${media.mac13`
    grid-template-rows: repeat(2, 1fr);
    padding: 0 0 0 0;
  `}
  ${media.ipadpro`
    grid-template-rows: repeat(1, 1fr);
    padding: 0 0 0 6%;
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

export const InfoWrapper = styled.header`
  grid-row: 1 / 4;
  grid-column: 3 / 8;
  z-index: 1;
  
  ${media.mon27`
    grid-column: 2 / 6;
    grid-row: 1 / 5;
  `}
  ${media.mon24`
    grid-column: 1 / 6;
    grid-row: 1 / 5;
  `}
  ${media.mac15`
    grid-column: 2 / 6;
    grid-row: 1 / 5;
  `}
  ${media.pro`
    grid-column: 2 / 6;
    grid-row: 1 / 5;
  `}
  ${media.mac13`
    grid-column: 2 / 6;
    grid-row: 1 / 5;
  `}
  ${media.ipadpro`
    grid-column: 1 / 8;
    grid-row: 1 / 5;
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
export const TopWrapper = styled.div`
  font-size: 1.5rem;
  line-height: 1.5em;
  
  ${media.mon27`
    font-size: 1.7rem;
    line-height: 1.7em;
  `}
  
  ${media.mon24`
    font-size: 1.3rem;
    line-height: 1.3em;
  `}
  
  ${media.mac15`
    font-size: 1.3rem;
    line-height: 1.3em;
  `}
  
  ${media.pro`
    font-size: 1.2rem;
    line-height: 1.2em;
  `}
  
  ${media.mac13`
    font-size: 1.4rem;
    line-height: 1.4em;
  `}
  ${media.ipadpro`
    font-size: 1.5rem;
    line-height: 1.4em;
  `}
  ${media.lg`
    max-width: 32rem;
  `}
  ${media.md`
    max-width: 32rem;
    font-size: 1.2rem;
  `}
  ${media.sm`
    max-width: 95%;
    font-size: 1.1rem;
  `}
  ${media.xs`
    max-width: 95%;
    font-size: 1.1rem;
    line-spacing: 1rem;
  `}
}
`

export const Title = styled.h1`
  margin-bottom:5px; 
  color: ${colors.gray400};
  
  .name {
    color: ${colors.yellow500};
    font-weight: 700;
  }

`

export const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${colors.gray400};
  
  ${media.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }

  a {
    color: #fff;
    border-bottom: 1px dotted ${colors.gray400};
    
    &:hover {
      border-bottom-color: ${colors.yellow500};
    }
  }
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
    opacity: .2;
    display: block;
    object-fit: cover;
    
    ${media.ipadpro`
      opacity: .2;
      object-fit: cover;
    `}
    ${media.md`
      opacity: .2;
      object-fit: cover;
    `}
    
    ${media.sm`
      opacity: .2;
    `}
  }
  ${media.mon27`
    width: 650px;
    grid-row: 1 / 12;
    grid-column: 6 / 8;
    margin-top: -100px;
    margin-right: 0;
        &:before {
          padding-top: 100%;
        }
  `}
  ${media.mon24`
    width: 650px;
    grid-row: 1 / 12;
    grid-column: 5 / 8;
    margin-top: -100px;
    margin-right: 0;
        &:before {
          padding-top: 100%;
        }
  `}
  ${media.mac15`
    width: 450px;
    grid-row: 1 / 12;
    grid-column: 5 / 8;
    margin-top: -100px;
    margin-right: 0;
        &:before {
          padding-top: 100%;
        }
  `}
  ${media.pro`
    width: 450px;
    grid-row: 1 / 12;
    grid-column: 5 / 8;
    margin-top: -100px;
    margin-right: 0;
        &:before {
          padding-top: 100%;
        }
  `}
  ${media.mac13`
    width: 450px;
    grid-row: 1 / 12;
    grid-column: 5 / 8;
    margin-top: -100px;
    margin-right: 0;
        &:before {
          padding-top: 100%;
        }
  `}
  ${media.ipadpro`
    width: 450px;
    grid-row: 1 / 6;
    grid-column: 1 / 8;
    margin-top: -60px;
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
