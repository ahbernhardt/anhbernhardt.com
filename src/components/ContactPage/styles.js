import styled from "styled-components"
import { colors, media } from "../../style/constants"

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
    padding-bottom: 4rem;
  `}
`

export const ContactInfo = styled.div`
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

