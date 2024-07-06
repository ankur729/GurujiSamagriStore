interface FontFamily {
  font_black: string;
  font_bold: string;
  font_light: string;
  font_medium: string;
  font_regular: string;
  font_thin: string;
}

export const FONTFAMILY: FontFamily = {
  font_black: 'Roboto-Black',
  font_bold: 'Roboto-Bold',
  font_light: 'Roboto-Light',
  font_medium: 'Roboto-Medium',
  font_regular: 'Roboto-Regular',
  font_thin: 'Roboto- Thin',
};

interface Color {
  primaryGreenHex: string;
  primaryYellowHex: string;
  secondaryHex: string;
  primaryWhiteHex: string;
  textHex: string;
  primaryLightGreyHex: string;
  secondaryLightGreyHex: string;
  primaryBlackRGBA: string;
  primaryBlack: string;
  secondaryBlackRGBA: string;
  darkGray: string;
}

export const COLORS: Color = {
  primaryGreenHex: '#389C9A',
  primaryYellowHex: '#c6c6c6',
  primaryWhiteHex: '#FFFFFF',
  primaryBlack: '#000',
  textHex: '#1D1D1D',
  secondaryHex: '#F8F8F8',
  darkGray: '#808080',
  primaryLightGreyHex: '#52555A',
  secondaryLightGreyHex: '#eeeeef',
  primaryBlackRGBA: 'rgba(12,15,20,0.5)',
  secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
};
