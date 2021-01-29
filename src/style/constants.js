import { css } from 'styled-components'

export const colors = {
  white: '#f6f5f3',
  black: '#040404',

  gray200: '#6b7a8f',
  gray300: '#393f4d',
  gray400: '#3d3d3f',
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
}

export const spaces = {
    p1000: '6rem', //160px
    p900:  '9rem', //144px
    p800:  '8rem', //128px
    p700:  '7rem', //112px
    p600:  '6rem', //96px
    p500:  '5rem', //80px
    p400:  '4rem', //64px
    p300:  '3rem', //48px
    p200:  '2rem', //32px
    p100:  '1rem', //16px
    p50:  '.5rem', //8px
    p25:  '.25rem' //4px
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

export const transition = {

  /* FADE UP */
  fadeupEnter: css`
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  `,

  fadeupEnterActive: css`
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  `
}
