import styled from 'styled-components'
// import { colors,media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 2;
  
  .sun, .moon {
    width: 17px;
    height: 17px;
  }
  .sun {
    background: url('switch/sun-white.svg') no-repeat center;
    background-size: 100%;
  }
  .moon {
    background: url('switch/moon-white.svg') no-repeat center;
    background-size: 100%;
  }
  
  .toggle-wrapper {
    margin: 10px;
    #switch {
      height: 0;
      width: 0;
      visibility: hidden;
      position: absolute;
      &:checked + label {
        background: $yellow;
      }
      &:checked + label:after {
        left: calc(100% - 3px);
        transform: translateX(-100%);
      }
    }
    label {
      cursor: pointer;
      text-indent: -9999px;
      width: 45px;
      height: 25px;
      background: grey;
      display: block;
      border-radius: 100px;
      position: relative;
      &:after {
        @include transition;
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 19px;
        height: 19px;
        background: #fff;
        border-radius: 100%;
      }
    }
  }
  `
