import { css } from 'styled-components'

export const colors = {
    white: '#f5f0e1',
    gray500: '#bfc0c0',
    gray700: '#4f5d75',
    blue900: '#132743',
    yellow500: '#ffc13b',
    yellow700: '#D79922'
}

export const fonts = {
    sansSerif: '\'Roboto\', stack-sans, sans-serif',
    mono: '\'Roboto Mono\', stack-mono, monospace'
}

export const spaces = {
    p500: '5rem', //80px
    p400: '4rem', //64px
    p300: '3rem', //48px
    p200: '2rem', //32px
    p100: '1rem', //16px
    p50: '.5rem', //8px
    p25: '.25rem' //4px
}

export const mq = {
    xs: '22em', //352px
    sm: '40em', //640px
    md: '54em', //864px
    lg: '78em', //1248px
    xl: '125em' //2000px
}

export const media = {
    xs: (...a) => css`
    @media (max-width: ${mq.xs}) {
      ${css(...a)}
    }
  `,
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
    @media (max-width: ${mq.lg}) {
      ${css(...a)}
    }
  `,
    xl: (...a) => css`
    @media (max-width: ${mq.xl}) {
      ${css(...a)}
    }
  `,
    hover: (...a) => css`
    @media not all and (hover: none) {
      ${css(...a)}
    }
  `
}

const rule = (d, v) => `${d}: ${v};`

export const getOuterSpace = p =>
    css`
    ${rule(p, spaces.p500)}
    ${media.lg`
      ${rule(p, spaces.p300)}
    `}
    ${media.md`
      ${rule(p, spaces.p300)}
    `}
    ${media.sm`
      ${rule(p, spaces.p200)}
    `}
  `
