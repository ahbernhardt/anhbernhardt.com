import { css } from 'styled-components'

export const colors = {
    white: '#f5f0e1',
    gray500: '#bfc0c0',
    gray700: '#556179',
    black500: '#2c2c30',
    black700: '#161616',
    yellow500: '#fcaf5d',
    yellow700: '#f69126'
}

export const fonts = {
    sansSerif: '\'Roboto\', stack-sans, sans-serif',
    mono: '\'Roboto Mono\', stack-mono, monospace'
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
  tiny:     '300px',      // 18.75em
   xxs:     '375px',      // 25em
    xs:     '480px',      // 30em
    sm:     '640px',      // 40em
  base:     '768px',      // 48em
    md:     '864px',      // 54em
    lg:     '1024px',     // 64em
   pro:     '1366px',     // 85.375em
 mac13:     '1280px',     // 80em
 mac15:     '1440px',     // 90em
 mon24:     '1920px',     // 120em
 mon27:     '2560px',     // 160em
}

export const media = {
  tiny: (...a) => css`
    @media (max-width: ${mq.tiny}) {
      ${css(...a)}
    }
  `,
  xxs: (...a) => css`
    @media (max-width: ${mq.xxs}) {
      ${css(...a)}
    }
  `,
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
  base: (...a) => css`
    @media (max-width: ${mq.base}) {
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
    mac13: (...a) => css`
    @media (max-width: ${mq.mac13}) {
      ${css(...a)}
    }
  `,
  ipadpro: (...a) => css`
    @media (min-height:1280px) and (max-height: ${mq.pro}) {
      ${css(...a)}
    }
  `,
  pro: (...a) => css`
    @media (max-width: ${mq.pro}) {
      ${css(...a)}
    }
  `,
  mac15: (...a) => css`
    @media (max-width: ${mq.mac15}) {
      ${css(...a)}
    }
  `,
  mon24: (...a) => css`
    @media (max-width: ${mq.mon24}) {
      ${css(...a)}
    }
  `,
  mon27: (...a) => css`
    @media (max-width: ${mq.mon27}) {
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
    ${media.mon27`
      ${rule(p, spaces.p800)}
    `}
    ${media.mon24`
      ${rule(p, spaces.p500)}
    `}
    ${media.mac15`
      ${rule(p, spaces.p500)}
    `}
    ${media.pro`
      ${rule(p, spaces.p400)}
    `}
    ${media.mac13`
      ${rule(p, spaces.p300)}
    `}
    ${media.ipadpro`
      ${rule(p, spaces.p400)}
    `}
    ${media.lg`
      ${rule(p, spaces.p400)}
    `}
    ${media.md`
      ${rule(p, spaces.p300)}
    `}
    ${media.base`
      ${rule(p, spaces.p200)}
    `}
    ${media.sm`
      ${rule(p, spaces.p200)}
    `}
    ${media.xs`
      ${rule(p, spaces.p100)}
    `}
    ${media.tiny`
      ${rule(p, spaces.p100)}
    `}
  `
