import styled from 'styled-components'
import { media } from '../../../style/constants'
import ProfileList from '../List'

export const TimelinesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
  padding: 1rem 5% 0 8rem;
  
  ${media.ipadpro`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    padding: 0 0 0 6%;
  `}
  ${media.lg`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    padding: 0 0 0 6%;
  `}
  
  ${media.md`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1rem;
    padding: 2% 0 0 5%;
  `}
  
  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 3rem;
    padding: 2% 0 0 5%;
  `}
`



export const ListsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
  padding: 2rem 5% 0 8rem;
  
  ${media.lg`
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0;
    padding: 0 0 0 6%;
  `}
  
  ${media.md`
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1rem;
    padding: 2% 0 0 5%;
  `}
  
  ${media.sm`
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 3rem;
    padding: 2% 0 25px 5%;
  `}
`

export const SkillsList = styled(ProfileList)`
  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-auto-flow: unset;
    grid-column-gap: 5rem;
    ${media.md`
      grid-column-gap: 2rem;
    `}

    ${media.sm`
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 3rem;
      grid-template-rows: auto;
      grid-auto-flow: unset;
      grid-column-gap: 0;
      
    `}
  }
`
