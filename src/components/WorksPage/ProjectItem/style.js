import styled from 'styled-components'
import { colors, fonts } from "../../../style/constants"
import Image from "../../Elements/Image"

export const ProjectWrapper = styled.nav`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 2;
  // border: 1px dotted ${colors.yellow500};
`
export const EachProject = styled.a`
  flex: none;
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-event: visible;
  
  &::before{
    counter-increment: counter;
    content: counters(counter, ".", decimal-leading-zero);
    position: absolute;
    left: 0;
    border-left: 3px solid currentColor;
    top: 20%;
    height: 60%;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    line-height: 1;
    font-weight: bold;
    opacity: 0;
    transform: translateX(0);
    transition: transform 0.3s, opacity 0.3s;
  }
  
  &:hover{
    &::before{
      opacity: 1;
      transform: translateX(0);
    }
    
    .titleSub{
      opacity: 1;
      transition-duration: 1s;
      transform: translateY(250px);
      
      &::before{
        transform: rotate(22.5deg) scale3d(1,1,1);
      }
    }
    
    .imageReveal{
      display: block;
      opacity: 1;
      z-index: 2;
    }
  }
`

export const Text = styled.span`
  position: relative;
  cursor: pointer;
  height: 100%;
  display: block;
  overflow: hidden;
  margin: 0;
  text-align: right;
`
export const Inner = styled.span`
  display: block;
  font-family: ${fonts.outline};
  font-weight: 400;
  font-size: 5vw;
  white-space: nowrap;
  color: ${colors.gray200};
  // border: 1px dotted ${colors.yellow500};
`

export const TitleSub = styled.span`
  color: ${colors.gray200}
  display: block;
  text-transform: uppercase;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  padding-left: 1rem;
  opacity: 0;
  transform: translateY(50px);
  transition: transform 1s, opacity 0.3s;
  line-height: 2.5rem;
  // border: 1px dotted ${colors.yellow700};
  
  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 5%;
    width: 1px;
    height: 75%;
    background: currentColor;
    transform-origin: 0 100%;
    transform: rotate(22.5deg) scale3d(0,1,1);
    transition: transform 0.3s;
`

export const HoverReveal = styled.div`
  position: absolute;
  display: block;
  overflow: hidden:
  z-index: -1;
  width: 360px;
  height: 200px;
  top: 0;
  left: 0;
  margin-left: 100px;
  margin-top: -50px;
  pointer-events: none;
  display: none;
  opacity: 1;
`
export const HoverInner = styled.div`
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  // border: 1px solid ${colors.gray400};
`

export const ProjectImage = styled(Image)`
  position: relative;
  display: block;
  z-index: 2;
  background-size: cover;
  // background-position: 50% 50%;
  
  img {
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    opacity: 1;
    object-fit: cover !important;
  }
`
