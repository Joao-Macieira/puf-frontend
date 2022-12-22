const baseColors = {
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF647C',
  green: '#0BD9B3',
  blue: '#487FD9',
  yellow: '#EBC455',
  gray: '#a0a2ae',
};

const brandColors = {
  raisinBlack: '#16171C',
  caribbeanGreen: baseColors.green,
};

const colors = {
  ...brandColors,
  ...baseColors,
};

const fontSizes = [10, 12, 14, 16, 18, 21, 24, 27, 30, 36, 42, 48];
const spaces = [4, 8, 12, 16, 20, 24, 28, 32, 64, 128];

export const definitions = {
  colors,
  fontSizes,
  spaces,
};
