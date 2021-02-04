import styled from "styled-components"
import { colors, media } from "../../../style/constants"

export const BlockLines = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 171rem auto;
    grid-template-rows: 100%;
    height: inherit;
    top: 0;
    left: 0;
    opacity: 1;
    visibility: visible;
    transition: opacity .5s cubic-bezier(.215,.61,.355,1),visibility .5s cubic-bezier(.215,.61,.355,1);
    width: 100%;
    height: 100%;
    padding: 0 5rem;
    pointer-events: none;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    visibility: visible;
    
    ${media.mac13`
      position: absolute;
      display: grid;
      grid-template-columns:  160px auto;
      grid-template-rows: 100%;
      height: inherit;
      top: 0;
      left: 0;
      opacity: 1;
      visibility: visible;
      transition: opacity .5s cubic-bezier(.215,.61,.355,1),visibility .5s cubic-bezier(.215,.61,.355,1);
      z-index: 0;
      width: 100%;
      height: 110%;
      padding: 0 3.5rem;
      pointer-events: none;
      transform: matrix3d(0,1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    `}   
    
    ${media.lg`
      position: absolute;
      display: grid;
      grid-template-columns:  30px auto;
      grid-template-rows: 100%;
      height: inherit;
      top: 0;
      left: 0;
      opacity: 1;
      visibility: visible;
      z-index: 0;
      width: 100%;
      height: auto;
      padding: 0 3.5rem;
    `}
    
    ${media.md`
       position: absolute;
      display: grid;
      grid-template-columns:  30px auto;
      grid-template-rows: 100%;
      height: inherit;
      top: 0;
      left: 0;
      opacity: 1;
      visibility: visible;
      z-index: 0;
      width: 100%;
      height: auto;
      padding: 0 3.5rem;
    `}
    
    ${media.sm`
      position: absolute;
      display: block;
      width: 100%;
      height: auto;
      padding: 0 1.5rem;
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
    
    ${media.mac13`
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
    `}
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
      
     ${media.mac13`
      display: block;
      height: 100%;
      width: 1px;
      background: ${colors.gray400};
      opacity: .2;
      pointer-events: none;
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      vertical-align: baseline;
      box-sizing: border-box;
    `}
 `
