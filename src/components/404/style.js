import styled, {css} from 'styled-components'
import { colors,media } from '../../style/constants'

export const Wrapper = styled.div`
   position: relative;
   z-index:0;
   cursor:none;
  
  ${media.mac13`
    position: static;
    padding-top: 20%;
    margin: 0 0 0 33%;
  `}
  
  ${media.lg`
    position: relative;
    margin: 50% 0 0 32%;
  `}

  ${media.md`
    position: relative;
    margin: 50% 0 0 27%;
  `}

  ${media.sm`
    position: relative;
    padding: 0% 0 0 0%;
  `}

\`

  .padding{
    height: 100vh;
    -webkit-transform: translateX(50%);
    -moz-transform: translateX(50%);
    -ms-transform: translateX(50%);
    -o-transform: translateX(50%);
  }
  svg {
    width: 100%;
    height: 100%;
  } 
  
  h1 {
    position: absolute;
    margin-bottom: 0px !important;
    
    ${media.mac13`
      width: 400px;
      height: 300px;
      transform: translate(0%, -25%);
    `}

    ${media.lg`
      width: 400px;
      height: 300px;
      transform: translate(0%, -35%);
    `}

    ${media.md`
      width: 350px;
      height: 300px;
      transform: translate(0%, -35%);
    `}

    ${media.sm`
      width: 250px;
      height: 225px;
      transform: translate(0%, -45%);
    `}

  }
    
  .line {
    fill: none;
    stroke:${colors.gray300};
  }
      
  .dot {
    opacity: 75%;
    fill:${colors.gray400};
  }
`

