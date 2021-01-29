import { css } from 'styled-components';

import GTLightWoff from '@fonts/gt-super/GT-Super-Display-Light.woff';
import GTLightWoff2 from '@fonts/gt-super/GT-Super-Display-Light.woff2';
import GTBoldWoff from '@fonts/gt-super/GT-Super-Display-Bold.woff';
import GTBoldWoff2 from '@fonts/gt-super/GT-Super-Display-Bold.woff2';

import GTLightItalicWoff from '@fonts/gt-super/GT-Super-Display-Light-Italic.woff';
import GTLightItalicWoff2 from '@fonts/gt-super/GT-Super-Display-Light-Italic.woff2';
import GTBoldItalicWoff from '@fonts/gt-super/GT-Super-Display-Bold-Italic.woff';
import GTBoldItalicWoff2 from '@fonts/gt-super/GT-Super-Display-Bold-Italic.woff2';

import Inter from '@fonts/inter/Inter.woff2';
import InterUpright from '@fonts/inter/Inter-upright.woff2';
import InterItalic from '@fonts/inter/Inter-italic.woff2';


const gtNormalWeights = {
  300: [GTLightWoff, GTLightWoff2],
  500: [GTBoldWoff, GTBoldWoff2]
};

const gtItalicWeights = {
  300: [GTLightItalicWoff, GTLightItalicWoff2],
  500: [GTBoldItalicWoff, GTBoldItalicWoff2]
};

const interNormalWeights = {
  400: Inter,
  600: InterUpright,
};

const interItalicWeights = {
  400: InterItalic
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

const gtNormal = createFontFaces(GTDisplay);
const gtItalic = createFontFaces(GTDisplay, 'italic');

const interNormal = createFontFaces(inter);
const interItalic = createFontFaces(inter, 'italic');

const Fonts = css`
  ${gtNormal + gtItalic + interNormal + interItalic}
`;

export default Fonts;
