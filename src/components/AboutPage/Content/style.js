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
    margin-bottom: 2.2rem;
  `}
  
  ${media.md`
    width: 100%;
    padding-top: 2rem;
    padding-left: 2rem;
    grid-template-columns: 1.2fr 1fr;
    grid-column-gap: 1.3rem;
    margin-bottom: 2rem;
  `}
  
  ${media.sm`
    width: 90vw;
    margin-top: -2rem;
    margin-left: -4rem;
    grid-template-columns: repeat(1, 1.8fr);
    grid-row: 1;
    grid-column: 1;
    margin-bottom: 1rem;
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
    font-size: 4vw;
    line-height: 1.2;
    margin-top: 9rem;
    margin-left: -1.5rem;
    bottom: 0;
    
    span{
      font-size: 6vw;
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
    margin-left: -1.5rem;
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
    padding: 100% 0 0 0;
    margin-inline-end: -15px;
  `}
  ${media.sm`
    grid-row: 1;
    grid-column: 1;
    padding-top: 100%;
    margin-left: -2.2rem;
    margin-top: -1.5rem;
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
      margin-top: 2rem;
      margin-left: -2rem;
      
      p{
      color: ${colors.gray300};
      font-size: .8rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  `}
  
  ${media.sm`
      grid-row: 2;
      grid-column: 1;
      margin-top: 145px;
      margin-left: -1.5rem;
      
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
    margin-top: -2rem;
  `}
  
   ${media.sm`
      grid-row: 4;
      grid-column: 1;
      margin-left: -1.1rem;
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
    grid-template-columns: repeat(2, 1.3fr);
    grid-column-gap: .8em;
    grid-row-gap: 1rem;
    padding: 0;
  `}
  
  ${media.sm`
    width: 100%;
    grid-row: 3;
    grid-column: 1;
    margin-top: 1.5rem;
    margin-left: -1.5rem;
    grid-template-columns: repeat(2, 1.5fr);
    grid-column-gap: .8em;
    grid-row-gap: 1rem;
    padding: 0;
  `}
 
`

