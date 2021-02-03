import { css } from 'styled-components';

import GTLightWoff from '@fonts/gt-super/GT-Super-Display-Light.woff';
import GTLightWoff2 from '@fonts/gt-super/GT-Super-Display-Light.woff2';
import GTRegularWoff2 from '@fonts/gt-super/GT-Super-Display-Regular.woff2';
import GTMediumWoff2 from '@fonts/gt-super/GT-Super-Display-Medium.woff2';
import GTBoldWoff from '@fonts/gt-super/GT-Super-Display-Bold.woff';
import GTBoldWoff2 from '@fonts/gt-super/GT-Super-Display-Bold.woff2';
import GTSuperWoff2 from '@fonts/gt-super/GT-Super-Display-Super.woff2';

import GTLightItalicWoff from '@fonts/gt-super/GT-Super-Display-Light-Italic.woff';
import GTLightItalicWoff2 from '@fonts/gt-super/GT-Super-Display-Light-Italic.woff2';
import GTRegularItalicWoff2 from '@fonts/gt-super/GT-Super-Display-Regular-Italic.woff2';
import GTMediumItalicWoff2 from '@fonts/gt-super/GT-Super-Display-Medium-Italic.woff2';
import GTBoldItalicWoff from '@fonts/gt-super/GT-Super-Display-Bold-Italic.woff';
import GTBoldItalicWoff2 from '@fonts/gt-super/GT-Super-Display-Bold-Italic.woff2';
import GTSuperItalicWoff2 from '@fonts/gt-super/GT-Super-Display-Super-Italic.woff2';

import Inter from '@fonts/inter/Inter.woff2';
import InterUpright from '@fonts/inter/Inter-upright.woff2';
import InterItalic from '@fonts/inter/Inter-italic.woff2';

import HunnyStraws from '../../static/fonts/Hunny-Staws/Hunny-Straw-Sans-Outline.otf';
import HunnyStrawsTTf from '../../static/fonts/Hunny-Staws/Hunny-Straw-Sans-Outline.ttf';

const gtNormalWeights = {
  200: [GTLightWoff, GTLightWoff2],
  300: [GTRegularWoff2],
  400: [GTMediumWoff2],
  500: [GTBoldWoff, GTBoldWoff2],
  600: [GTSuperWoff2]
};

const gtItalicWeights = {
  200: [GTLightItalicWoff, GTLightItalicWoff2],
  300: [GTRegularItalicWoff2],
  400: [GTMediumItalicWoff2],
  500: [GTBoldItalicWoff, GTBoldItalicWoff2],
  600: [GTSuperItalicWoff2]
};

const interNormalWeights = {
  400: Inter,
  600: InterUpright,
};

const interItalicWeights = {
  400: InterItalic
};

const hunnyStraws = {
  400: [HunnyStraws,HunnyStrawsTTf],
};

const GTDisplay = {
  name: 'GT-Display',
  normal: gtNormalWeights,
  italic: gtItalicWeights,
};

const inter = {
  name: 'Inter',
  normal: interNormalWeights,
  italic: interItalicWeights,
};

const hunnyStraw = {
  name: 'HunnyStrawSansOutline',
  normal: hunnyStraws,
}
const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};
const createFontFacesOutline = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const otf = formats[0];
    const ttf = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${otf}) format('opentype'),
              url(${ttf}) format('truetype');
        font-weight: ${weight};
      }
    `;
  }

  return styles;
};
const gtNormal = createFontFaces(GTDisplay);
const gtItalic = createFontFaces(GTDisplay, 'italic');

const interNormal = createFontFaces(inter);
const interItalic = createFontFaces(inter, 'italic');
const hunnyStrawsSanOutline = createFontFacesOutline(hunnyStraw);

const Fonts = css`
  ${gtNormal + gtItalic + interNormal + interItalic + hunnyStrawsSanOutline}
`;

export default Fonts;
