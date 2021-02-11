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
     sm:     '414px',
     md:     '768px',
     lg:     '1080px',
    mac:     '1280px',
    mlg:     '1440px',
    mon:     '1920px',
  ultra:     '2560px',
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

  mac: (...a) => css`
    @media (min-width: ${mq.mac}) and (max-width: ${mq.mlg}){
      ${css(...a)}
    }
  `,

  mon: (...a) => css`
    @media (max-width: ${mq.mon}) {
      ${css(...a)}
    }
  `,

  ultra: (...a) => css`
    @media (min-width: 1921px) and (max-width: ${mq.ultra}) {
      ${css(...a)}
    }
  `,

    hover: (...a) => css`
    @media not all and (hover: none) {
      ${css(...a)}
    }
  `
}
