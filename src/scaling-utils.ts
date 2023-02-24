import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
export const globalDimension = {
  widthh: width,
  heightt: height,
};
export const Scale = size =>
  (globalDimension.widthh * size) / guidelineBaseWidth;
export const scale = size =>
  (globalDimension.widthh * size) / guidelineBaseWidth;
export const scale2 = (size, widthh?) => (size * widthh) / guidelineBaseWidth;
export const verticalScale = size =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
