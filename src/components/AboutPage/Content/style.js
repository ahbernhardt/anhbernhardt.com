import styled from 'styled-components'
import Image from "../../Elements/Image"
import { colors, fonts, media } from "../../../style/constants"

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-areas: unset;
  grid-template-columns: repeat(3, 2fr);
  align-content: center;
  grid-column-gap: 1rem;
  width: 85vw;
   // border: dotted 2px ${colors.yellow500};
  
  ${media.ultra`
    grid-template-areas: unset;
    grid-template-columns: repeat(3, 2fr);
    align-content: center;
    grid-column-gap: 1rem;
    width: 100%;
    margin-right: 60px;
    padding-left: 60px;
    // margin-bottom: 2.2rem;
  `}
  
  ${media.mon`
    grid-template-areas: unset;
    grid-template-columns: repeat(3, 1.8fr);
    align-content: center;
    grid-column-gap: 1rem;
    width: 100%;
    margin-right: 60px;
    padding-left: 60px;
    margin-bottom: 2.2rem;
  `}
  
  ${media.mac`
    grid-template-areas: unset;
    grid-template-columns: repeat(3, 1.8fr);
    align-content: center;
    grid-column-gap: 1rem;
    width: 100%;
    margin-right: 60px;
    padding-left: 60px;
    margin-bottom: 2.2rem;
  `}
  
   ${media.lg`
    width: 100%;
    padding-top: 2rem;
    padding-left: 2rem;
    grid-template-columns: 1.2fr 1fr;
    grid-column-gap: 1.3rem;
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
    width: 100%;
    grid-template-columns: repeat(1, 2fr);
    grid-row: 1;
    grid-column: 1;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
  `}
`
export const Subtitle = styled.h2`
  font-family: ${fonts.display};
  text-transform: uppercase;
  color: ${colors.white};
  line-height: .9em;
  font-weight: 200;
  font-size: 9rem;
  transform: var(--ease-out-editorial);
  
  span{
    color: ${colors.gray200}
  }
  ${media.ultra`
    grid-column: 1 / 3;
    grid-row; 1;
    align-self: unset;
    font-size: 4vw;
    line-height: 1;
    margin-top: 22rem;
    margin-left: 14rem;
    z-index: 0;
    
    span{
      font-size: 7vw;
      font-family: ${fonts.display};
      font-style: italic;
    }
  `}
  ${media.mon`
    grid-column: 1 / 3;
    grid-row; 1;
    align-self: unset;
    font-size: 4vw;
    line-height: 1;
    margin-top: 17rem;
    margin-left: 14rem;
    z-index: 0;
    
    span{
      font-size: 6.5vw;
      font-family: ${fonts.display};
      font-style: italic;
    }
  `}
  
  ${media.mac`
    grid-column: 1 / 3;
    grid-row; 1;
    align-self: unset;
    font-size: 3.5vw;
    line-height: 1;
    margin-top: 12rem;
    margin-left: 12rem;
    z-index: 1;
    
    span{
      font-size: 5.8vw;
      font-family: ${fonts.display};
      font-style: italic;
    }
  `}
   ${media.lg`
    grid-column: 1 / 2;
    grid-row: 1;
    align-self: unset;
    font-size: 4vw;
    line-height: 1.2;
    margin-top: 14rem;
    margin-left: -1.5rem;
    bottom: 0;
    
    span{
      font-size: 7vw;
      font-family: ${fonts.display};
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
      font-family: ${fonts.display};
      font-style: italic;
    }
  `}
  
  ${media.sm`
    grid-column: 1;
    grid-row: 2;
    align-self: unset;
    font-size: 8vw;
    line-height: 1.2;
    margin-top: 2rem;
    margin-left: -1.5rem;
    bottom: 0;
    
    span{
      font-size: 12.5vw;
      font-family: ${fonts.display};
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
  ${media.ultra`
    grid-row: 1;
    grid-column: 3;
    padding-top: 100%;
    margin-inline-end: 3%;
  `}
  ${media.mon`
    grid-row: 1;
    grid-column: 3;
    padding-top: 100%;
    margin-inline-end: 3%;
  `}
  
  ${media.mac`
    grid-row: 1;
    grid-column: 3;
    padding-top: 100%;
    margin-inline-end: 3%;
  `}
  ${media.lg`
    grid-row: 1;
    grid-column: 2;
    padding: 100% 0 0 0;
    margin-inline-end: -15px;
  `}
  ${media.md`
    grid-row: 1;
    grid-column: 2;
    padding: 100% 0 0 0;
    margin-inline-end: 0px;
  `}
  
  ${media.sm`
    grid-row: 1;
    grid-column: 1;
    margin-inline-end: 0px;
    margin-left: -2.2rem;
    margin-top: -.7rem;
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
    padding: 0 3% 0 6%;
    
    ${media.ultra`
      padding: 0 3% 0 8%;
    `}
    
    ${media.mon`
      padding: 0 3% 0 6%;
    `}
    
    ${media.md`
      padding: 0 8% 0 3%;
    `}
    
    ${media.sm`
      padding: 0;
      // margin-top: 15px;
    `}
  }
`
export const ContentInfo = styled.div`
    display: block;
    padding: 0;
    
    p{
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      letter-spacing: .08em;
      color: ${colors.white};
      font-size: 1.4rem;
      line-height: 1.2;
      margin-bottom: 1.2rem;
    }
    
    a {
      display: inline-block;
      color: ${colors.gray300};
      text-decoration: none;
      position: relative;
      z-index: 0;

      &::after {
        position: absolute;
        z-index: -1;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        width: 100%;
        height: .5px;
        background-color: ${colors.yellow500};
        opacity: 0.2;
        transition: all 250ms;
      }
      
      &:hover {
        color: ${colors.black};
      
        &::after {
          height: 108%;
          width: 105%;
          opacity: 1;
        }
      }
    }
    
    ${media.ultra`
        grid-row: 2;
        grid-column: 3;
        padding: 6% 3% 0 8%;
        
        p{
        font-size: 1.2rem;
        letter-spacing: .08em;
        line-height: 1.4;
        margin-bottom: 1rem;
      }
    `}
    
    ${media.mon`
        grid-row: 2;
        grid-column: 3;
        padding: 6% 6% 0 6%;
        
        p{
        font-size: 1rem;
        letter-spacing: .08em;
        line-height: 1.4;
        margin-bottom: 1rem;
      }
    `}

    ${media.mac`
      grid-row: 2;
      grid-column: 3;
      padding: 6% 3% 0 6%;
      
      p{
      font-size: .75rem;
      letter-spacing: .05em;
      line-height: 1.2rem;
      margin-bottom: 1rem;
    }
  `}
  
   ${media.lg`
      grid-row: 2;
      grid-column: 1;
      margin-top: 2rem;
      margin-left: -2rem;
      
      p{
      font-size: .8rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  `}
  ${media.md`
      grid-row: 2;
      grid-column: 1;
      margin-top: 2rem;
      margin-left: -3rem;
      
      p {
      font-size: .75rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  `}
  
  ${media.sm`
      grid-row: 2;
      grid-column: 1;
      margin-top: 145px;
      margin-left: -3rem;
      
      p {
      font-size: .7rem;
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
    
    ${media.ultra`
      grid-row: 2;
      grid-column: 2;
      padding: 8% 0 0 10%;
      img{
        width: 100%;
        opacity: .5;
      }
    `}
  ${media.mon`
    grid-row: 2;
    grid-column: 2;
    padding: 8% 0 0 10%;
    img{
      width: 100%;
      opacity: .5;
    }
  `}
  
  ${media.mac`
      grid-row: 2;
      grid-column: 2;
      padding: 5% 0 0 5%;
  `}
  ${media.lg`
    grid-row: 3;
    grid-column: 2;
    margin-top: 1rem;
  `}
  ${media.md`
    grid-row: 3;
    grid-column: 2;
    margin-top: -2rem;
  `}
  
   ${media.sm`
      grid-row: 4;
      grid-column: 1;
      margin-top: .5rem;
      margin-left: -3rem;
  `}
  
`
export const SkillsSection = styled.div`
  max-width: 100%;
  max-height: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1.2fr);
  grid-column-gap: 2rem;
  padding: 7% 0 0 15%;
  font-family: 'Poppins', san-serif;
  
  grid-row: 2;
  grid-column: 1;
  
  ${media.ultra`
    grid-template-columns: repeat(2, 2fr);
    grid-column-gap: 1.2rem;
    grid-row-gap: 1rem;
    padding: 4% 0 0 20%;
    grid-row: 2;
    grid-column: 1;
  `}
  
   ${media.mon`
    grid-column-gap: 1rem;
    padding: 9% 0 0 15%;
    grid-row: 2;
    grid-column: 1;
  `}
  
  ${media.mac`
    grid-column-gap: .9rem;
    padding: 7% 0 0 15%;
    grid-row: 2;
    grid-column: 1;
  `}
  ${media.lg`
    grid-row: 2;
    grid-column: 2;
    margin-top: 1rem;
    grid-template-columns: repeat(2, 1.5fr);
    grid-column-gap: .8em;
    grid-row-gap: 1rem;
    margin-left: -1rem;
  `}
  
  ${media.md`
    grid-row: 2;
    grid-column: 2;
    margin-top: 2rem;
    grid-template-columns: repeat(2, 1.5fr);
    grid-column-gap: 1em;
    // grid-row-gap: .8rem;
    padding: 0 0 0 8%;
  `}
  
  ${media.sm`
    width: 110%;
    grid-row: 3;
    grid-column: 1;
    margin-top: .5rem;
    margin-left: -3rem;
    
    grid-template-columns: repeat(2, 1.5fr);
    grid-column-gap: .8em;
    grid-row-gap: .8rem;
  `}
 
`

