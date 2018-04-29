import processColor from './processColor';
import type { Color } from './processColor';
import styled from 'styled-components/primitives';

export const colors = {
  Primary: '#41B987',
  Success: '#02694E',
  Warning: '#EF6B1F',
  Info: '#0C4164',
  Danger: '#B81E4F',
  Black: '#000000',
  White: '#FFFFFF',
  Purple: '#4B3190',
  PurpleLight: '#6B56A4',
  PurpleLighter: '#8976B7',
  PurpleLightest: '#B7A8D1',
  Red: '#B81E4F',
  RedLight: '#ED2169',
  RedLighter: '#EE4F91',
  RedLightest: '#F5A8CB',
  Blue: '#0C4164',
  BlueLight: '#316F9B',
  BlueLighter: '#4293C2',
  BlueLightest: '#76B6D6',
  Green: '#02694E',
  GreenLight: '#41B987',
  GreenLighter: '#72C5A0',
  GreenLightest: '#9CD3B6',
  Orange: '#EF6B1F',
  OrangeLight: '#F68A31',
  OrangeLighter: '#FABA8E',
  OrangeLightest: '#FED7BE',
  Yellow: '#FCB722',
  YellowLight: '#FFC861',
  YellowLighter: '#FFD285',
  YellowLightest: '#FFE2B3',
  GrayDark: '#2A2C2D',
  Gray: '#3B3B3B',
  GrayLight: '#63605F',
  GrayLighter: '#AEADAD',
  GrayLightest: '#F6F6F9',
};

export const buttonColors = {
  Primary: '#41B987',
  Success: '#02694E',
  Warning: '#EF6B1F',
  Info: '#0C4164',
  Danger: '#B81E4F',
};

const typeSizes = [70, 55, 43, 32, 24, 20, 16];

export const spacing = {
    xSmall: 4,
    Small: 8,
    Medium: 16,
    Large: 32,
    xLarge: 64,
};

export const typeRamp = {
    xSmall: 7,
    Small: 12,
    Medium: 16,
    Large: 24,
    xLarge: 36,
};

const fontFamilies = {
  display: 'Roboto',
  body: 'Roboto',
};

const fontWeights = {
  regular: 'regular',
  bold: 'bold',
};

export const fonts = {
  'h1. HxUI heading': {
    color: colors.Black,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.regular,
    lineHeight: 80,
  },
  'h2. HxUI heading': {
    color: colors.Primary,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.regular,
    lineHeight: 48,
  },
  'h3. HxUI heading': {
    color: colors.GrayDark,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.regular,
    lineHeight: 36,
  },
  'h4. HxUI heading': {
    color: colors.GrayDark,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  'h5. HxUI heading': {
    color: colors.GrayDark,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  Body: {
    color: colors.Black,
    fontSize: typeSizes[6],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 24,
  },
};

export const buttonSizes = {
  Small: { fontSize: fonts.Body.fontSize - 4, padding: 8 },
  Normal: { fontSize: fonts.Body.fontSize, padding: 10 },
  Large: { fontSize: fonts.Body.fontSize + 5, padding: 12 },
};

export default {
  colors: Object.keys(colors).reduce(
    (acc, name) => ({
      ...acc,
      [name]: processColor(colors[name]),
    }),
    {},
  ),
  buttonColors: Object.keys(buttonColors).reduce(
    (acc, name) => ({
      ...acc,
      [name]: processColor(buttonColors[name]),
    }),
    {},
  ),
  fonts,
  spacing,
  buttonSizes,
};

export type DesignSystem = {
  fonts: any,
  colors: { [key: string]: Color },
  buttonColors: { [key: string]: Color},
  buttonSizes: any,
};
