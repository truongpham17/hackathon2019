import { StyleSheet } from 'react-native';
import { colors } from './color';

// const FONT_LIGHT = 'Montserrat-Light';
// const FONT_REGULAR = 'Montserrat-Regular';
// const FONT_BOLD = 'Montserrat-SemiBold';
// const FONT_THIN = 'Montserrat-Thin';
const FONT_LIGHT = 'Roboto-Light';
const FONT_REGULAR = 'Roboto-Regular';
const FONT_BOLD = 'Roboto-Bold';
const FONT_THIN = 'Roboto-Thin';

export const textStyles = StyleSheet.create({
  smallDark: {
    // fontFamily: FONT_LIGHT,
    fontSize: 12,
    color: colors.black,
  },
  smallLight: {
    // fontFamily: FONT_LIGHT,
    fontSize: 12,
    color: colors.white,
  },
  normalDark: {
    // fontFamily: FONT_LIGHT,
    fontSize: 14,
    color: colors.black,
  },
  bigDark: {
    // fontFamily: FONT_LIGHT,
    fontSize: 16,
    color: colors.black,
  },
  bigLight: {
    // fontFamily: FONT_LIGHT,
    fontSize: 16,
    color: colors.white,
  },
  normalDarkEmphasize: {
    // fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: colors.black,
  },
  bigDarkEmphasize: {
    // fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: colors.black,
  },
  bigLightEmphasize: {
    // fontFamily: FONT_BOLD,
    fontSize: 16,
    color: colors.white,
  },
  normalHighlight: {
    // fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: colors.primaryColor,
  },
  normalLight: {
    // fontFamily: FONT_LIGHT,
    fontSize: 14,
    color: colors.white,
  },
  bigHighlight: {
    // fontFamily: FONT_LIGHT,
    fontSize: 16,
    color: colors.primaryColor,
  },
  description: {
    // fontFamily: FONT_LIGHT,
    fontSize: 12,
    color: colors.darkNeutral,
  },
  lightDescription: {
    // fontFamily: FONT_LIGHT,
    fontSize: 12,
    color: colors.white,
  },
  bigDescription: {
    // fontFamily: FONT_THIN,
    fontSize: 14,
    color: colors.neutral,
  },
  title: {
    // fontFamily: FONT_REGULAR,
    fontSize: 20,
    color: colors.black,
  },
  titleLight: {
    // fontFamily: FONT_REGULAR,
    fontSize: 20,
    color: colors.white,
  },
  subTitle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: colors.black,
  },
  subTitleEmphasize: {
    // fontFamily: FONT_BOLD,
    fontSize: 16,
    color: colors.black,
  },
  normalItalic: {},
  buttonText: {
    // fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: colors.white,
  },
  bigTitle: {
    // fontFamily: FONT_REGULAR,
    fontSize: 32,
    color: colors.black,
    fontWeight: 'bold',
  },
  superBigTitle: {
    // fontFamily: FONT_REGULAR,
    fontSize: 48,
    color: colors.primaryColor,
  },
  bigTitleLight: {
    // fontFamily: FONT_REGULAR,
    fontSize: 22,
    color: colors.white,
  },
  bigTitleHighLight: {
    // fontFamily: FONT_REGULAR,
    fontSize: 22,
    color: colors.primaryColor,
  },
});

export const distance = {
  defaultMargin: 12,
  defaultPadding: 12,
  defaultPaddingItem: 12,
  paddingMainScreen: 24,
  smallDistance: 4,
  defaultDistance: 12,
  longDistance: 24,
  screenPadding: 8,
};

export const buttonDimension = {
  xSmall: {
    width: 64,
    height: 32,
  },
  small: {
    width: 100,
    height: 32,
  },
  normal: {
    width: 180,
    height: 48,
  },
  xBig: {
    width: 240,
    height: 54,
  },
  xxBig: {
    width: 300,
    height: 54,
  },
};
