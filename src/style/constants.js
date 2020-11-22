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
    xxs:    '24em',   //375px
    xs:     '25.9em', //414px
    sm:     '40em',   //640px
    md:     '54em',   //864px
    lg:     '64em',   //1024px
    mac13:  '80em',   //1280px
    pro:    '85.4em', //1366.4px
    mac15:  '90em',   //1440px
    mon24:  '120em',  //1920px
    mon27:  '160em',  //2560px
}

export const media = {
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
    ${media.mac13`
      ${rule(p, spaces.p300)}
    `}
    ${media.lg`
      ${rule(p, spaces.p400)}
    `}
    ${media.md`
      ${rule(p, spaces.p300)}
    `}
    ${media.sm`
      ${rule(p, spaces.p200)}
    `}
    ${media.xs`
      ${rule(p, spaces.p100)}
    `}
  `
