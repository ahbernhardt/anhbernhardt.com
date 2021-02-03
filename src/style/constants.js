import { css } from 'styled-components'

export const colors = {
  white: '#f6f6f6',
  black: '#040404',

  gray100: '#9b9b9b',
  gray200: '#a0a0a0',
  gray300: '#6e6e6e',
  gray400: '#3e3e3e',
  gray500: '#2c2c30',
  gray600: '#1d1e22',

  yellow500: '#feda6a',
  yellow700: '#f69126'
}

export const fonts = {
    inter: 'Inter, sans-serif',
    upright: 'Inter-Up',
    italic: 'Inter-Italic',
    display: 'GT-Display',
    outline: 'HunnyStrawSansOutline',
    hunny: 'HunnyStrawSans',
}


export const mq = {
    sm:     '480px',
    md:     '768px',
    lg:     '1080px',
 mac13:     '1280px',
}

export const media = {

  sm: (...a) => css`
    @media (max-width: ${mq.sm}) {
      ${css(...a)}
    }
  `,

  md: (...a) => css`
    @media (max-width: ${mq.md}) {
      ${css(...a)}
    }
  `,

  lg: (...a) => css`
    @media (max-width: ${mq.lg}){
      ${css(...a)}
    }
  `,

  mac13: (...a) => css`
    @media (min-width: ${mq.mac13}) {
      ${css(...a)}
    }
  `,

    hover: (...a) => css`
    @media not all and (hover: none) {
      ${css(...a)}
    }
  `
}

