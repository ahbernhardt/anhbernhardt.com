import styled from 'styled-components'
import Image from "../../Elements/Image"
import { colors, media } from "../../../style/constants"

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-areas: unset;
  grid-template-columns: repeat(3, 1.5fr);
  align-content: center;
  grid-column-gap: 1rem;
  // border: dotted 2px ${colors.yellow500};
  width: 85vw;
  
  ${media.mac13`
    grid-template-areas: unset;
    grid-template-columns: repeat(3, 1.8fr);
    align-content: center;
    grid-column-gap: .9rem;
    width: 100%;
    margin-right: 60px;
    padding-left: 120px;
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
  font-size: 9rem;
  transform: var(--ease-out-editorial);
  
  span{
    color: ${colors.gray200}
  }
  
  ${media.mac13`
    grid-column: 1 / 3;
    grid-row; 1;
    align-self: unset;
    font-size: 3.5vw;
    line-height: 1;
    margin-top: 12rem;
    margin-left: 12rem;
    z-index: 1;
    
    span{
      font-size: 6vw;
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
  z-index: 0;
  
  ${media.mac13`
    grid-row: 1;
    grid-column: 3;
    padding-top: 100%;
    margin-inline-end: 1%;
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
    filter: grayscale(85%) brightness(50%);
    opacity: 1;
    display: block;
    object-fit: cover;
    padding: 0 6% 0 3%;
  }
`
export const ContentInfo = styled.div`
    display: block;
    padding: 0;
    
    p{
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      letter-spacing: .05em;
      color: ${colors.gray300};
      font-size: .8rem;
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
      grid-column: 3;
      padding: 6% 6% 0 3%;
      
      p{
      color: ${colors.gray300};
      font-size: .8rem;
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

    img{
      width: 95%;
      opacity: .5;
    }
  
  ${media.mac13`
      grid-row: 2;
      grid-column: 2;
      padding: 5% 0 0 5%;
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
  max-width: 100%;
  max-height: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: .9rem;
  padding: 7% 0 0 15%;
  
  grid-row: 2;
  grid-column: 1;
  
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

