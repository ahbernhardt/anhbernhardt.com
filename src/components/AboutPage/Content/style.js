import styled from 'styled-components'
import Image from "../../Elements/Image"
import { colors, fonts, media, transition } from "../../../style/constants"

export const ContentWrapper = styled.main`
  display: grid;
  grid-template-areas: unset;
  grid-template-columns: repeat(3,1fr);
  align-content: center;
  grid-column-gap: 1rem;
  // border: solid 2px ${colors.yellow500};
  width: 90vw;
  margin: 0 auto;
  padding: 0 1rem 4rem;
  
  ${media.mac13`
    grid-template-areas: unset;
    grid-template-columns: repeat(3,1fr);
    align-content: center;
    grid-column-gap: 2rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem 4rem;
  `}
  
  ${media.md`
    width: 100%;
    padding-top: 2rem;
    padding-left: 2rem;
     grid-template-columns: 1.3fr 1fr;
     grid-column-gap: 2rem;
  `}
  
  ${media.sm`
    width: 110%;
    margin-top: -2rem;
    margin-left: -3.5rem;
    grid-template-columns: repeat(1, 2fr);
    grid-row: 1;
    grid-column: 1;
  `}
`
export const Subtitle = styled.h2`
  font-family: var(--font-display);
  text-transform: uppercase;
  color: ${colors.white};
  line-height: .9em;
  font-weight: 200;
  align-self: end;
  font-size: 9rem;
  transform: var(--ease-out-editorial);
  
  span{
    color: ${colors.gray200}
  }
  
  ${media.mac13`
    grid-column: 1 / 3;
    grid-row; 1;
    align-self: unset;
    font-size: 4vw;
    line-height: 1;
    margin-top: 12rem;
    bottom: 0;
    
    span{
      font-size: 8vw;
      font-family: var(--font-display);
      font-style: italic;
    }
  `}
  
  ${media.md`
    grid-column: 1 / 2;
    grid-row: 1;
    align-self: unset;
    font-size: 5vw;
    line-height: 1.2;
    bottom: 0;
    
    span{
      font-size: 7vw;
      font-family: var(--font-display);
      font-style: italic;
    }
  `}
  
  ${media.sm`
    grid-column: 1;
    grid-row: 2;
    align-self: unset;
    font-size: 6.5vw;
    line-height: 1.2;
    margin-top: 2rem;
    bottom: 0;
    
    span{
      font-size: 12vw;
      font-family: var(--font-display);
      font-style: italic;
    }
  `}
`

export const StyledImage = styled(Image)`
  grid-row: 1;
  grid-column: 3;
  position: relative;
  display: block;
  margin-inline-end: 40px;
  z-index: 0;
  
  ${media.mac13`
    grid-row: 1;
    grid-column: 3;
    padding-top 100%;
    margin-bottom: 1rem;
  `}
  
  ${media.md`
    grid-row: 1;
    grid-column: 2;
    padding-top 100%;
    margin-inline-end: 10px;
  `}
  ${media.sm`
    grid-row: 1;
    grid-column: 1;
  `}
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: grayscale(85%);
    opacity: 1;
    display: block;
    object-fit: cover;
  }
`
export const ContentInfo = styled.div`
    display: block;
    padding: 0;
    margin-top: 8%;
    
    p{
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      letter-spacing: .05em;
      color: ${colors.gray300};
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    
    a {
      color: ${colors.gray200};
      border-bottom: dotted 1px ${colors.yellow500}; 
      
      :hover{
      color: ${colors.yellow500};
       border-bottom: dotted 1px ${colors.gray200}; 
      }
    }

    ${media.mac13`
      grid-row: 2;
      grid-column: 1;
      
      p{
      color: ${colors.gray300};
      font-size: 1rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  `}
  
  ${media.md`
      grid-row: 2;
      grid-column: 1;
      margin-top: -140px;
      
      p{
      color: ${colors.gray300};
      font-size: 1rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  `}
  
  ${media.sm`
      grid-row: 2;
      grid-column: 1;
      margin-top: 140px;
      
      p{
      color: ${colors.gray300};
      font-size: .8rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  `}
  
`

export const ContentInfo2 = styled.div`
    display: block;
    padding: 0;
    margin-top: 5%;
    // max-width: 50%;
    
    img{
      width: 100%;
      // transform: rotate(180deg);
      opacity: .5;
    }
    ${media.mac13`
      grid-row: 2/3;
      grid-column: 2;
  `}
  
  ${media.md`
    grid-row: 3;
    grid-column: 2;
  `}
  
   ${media.sm`
      grid-row: 4;
      grid-column: 1;
  `}
  
`
export const SkillsSection = styled.div`
  margin-top: 8%;
  max-width: 100%;
  max-height: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  
  grid-row: 2;
  grid-column: 3;
  
  // ${media.lg`
  //   grid-template-columns: repeat(2, 1fr);
  //   grid-column-gap: 0;
  //   padding: 0 0 0 6%;
  // `}
  
  ${media.md`
    grid-row: 2;
    grid-column: 2;
    margin-top: 2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1rem;
  `}
  
  ${media.sm`
    grid-row: 3;
    grid-column: 1;
    margin-top: 2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1rem;
    font-size: .8rem;
  `}
 
`

