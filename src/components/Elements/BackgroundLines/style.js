import styled from "styled-components"
import { colors, media } from "../../../style/constants"

export const BlockLines = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: 100%;
    height: inherit;
    top: 0;
    left: 0;
    opacity: 1;
    visibility: visible;
    transition: opacity .5s cubic-bezier(.215,.61,.355,1),visibility .5s cubic-bezier(.215,.61,.355,1);
    width: 100%;
    height: 160%;
    padding: 0 4.5rem;
    pointer-events: none;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    visibility: visible;
    
    ${media.ultra`
      grid-template-columns: 200px auto;
      padding: 0 4rem;
    `} 
    
    ${media.mon`
      grid-template-columns: 150px auto;
      padding: 0 3.5rem;
    `} 
    
    ${media.mac`
      grid-template-columns:  160px auto;
      padding: 0 3rem;
    `}   
    
    ${media.lg`
      height: auto;
    `}
    
    ${media.md`
      height: auto;
    `}
    
    ${media.sm`
      height: auto;
    `}
`

export const Col = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
`
export const Lines =styled.span`
    display: block;
    height: 100%;
    width: 1px;
    background: ${colors.gray300};
    opacity: .2;
    pointer-events: none;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
 `
