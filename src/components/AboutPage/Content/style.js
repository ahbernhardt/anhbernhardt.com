import styled from 'styled-components'
import { colors, media } from "../../../style/constants"

export const ContentWrapper = styled.main`
  display: grid;
  grid-template-areas: unset;
  grid-template-columns: repeat(3,1fr);
  align-content: center;
  grid-column-gap: 1rem;
  border: solid 2px ${colors.yellow500};
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
  `}
`

export const ContentInfo = styled.div`
    display: block;
    margin: 0;
    padding:0;
    grid-row: 2;
    grid-column: 1;
    
    p{
      color: ${colors.gray400};
      font-size: 1rem;
    }
    
    ${media.mac13`
      grid-row: 2;
      grid-column: 1;
  `}
  
`
export const SkillsSection = styled.section`
  max-width: 75%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1;
  grid-column-gap: 4rem;
  grid-row-gap: 1rem;
  grid-row: 2;
  grid-column: 3;
  
  ${media.lg`
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0;
    padding: 0 0 0 6%;
  `}
  
  ${media.md`
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1rem;
    grid-row: 3;
    grid-column: 1;
  `}
 
`
// export const TimelinesSection = styled.section`
//   max-width: 75%;
//   margin: 8rem auto 0;
//
//   // ${media.lg`
//   //   grid-template-columns: repeat(1, 1fr);
//   //   grid-column-gap: 0;
//   //   padding: 0 0 0 6%;
//   // `}
//   //
//   // ${media.md`
//   //   grid-template-columns: repeat(1, 1fr);
//   //   grid-column-gap: 1em;
//   //   grid-row-gap: 1rem;
//   //   padding: 2% 0 0 5%;
//   // `}
//   //
//   // ${media.sm`
//   //   grid-template-columns: repeat(1, 1fr);
//   //   grid-column-gap: 0;
//   //   grid-row-gap: 3rem;
//   //   padding: 2% 0 0 5%;
//   // `}
// `

