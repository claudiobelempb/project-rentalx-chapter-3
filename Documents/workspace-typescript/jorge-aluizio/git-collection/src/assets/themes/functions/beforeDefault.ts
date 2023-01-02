import { css } from 'styled-components';
import {
  ThemeColorsText,
  THEME_COLORS_DEFAULT,
  TypeThemeNumberDefault,
} from '../ThemeType';

// type TypeTansFormDefault = {
//   /* Function values */
//   matrix?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
//   matrix3d?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
//   perspective?: (
//     valueNumber: TypeThemeNumberDefault,
//     valueString: string,
//   ) => FlattenSimpleInterpolation;
//   rotate?: (
//     value: TypeThemeNumberDefault | string,
//   ) => FlattenSimpleInterpolation;
//   rotate3d?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
//   rotateX?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
//   rotateY?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
//   rotateZ?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
//   translate?: (
//     ...value: TypeThemeNumberDefault[]
//   ) => FlattenSimpleInterpolation;
//   translate3d?: (
//     ...value: TypeThemeNumberDefault[]
//   ) => FlattenSimpleInterpolation;
//   translateX?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
//   translateY?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
//   translateZ?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
//   scale?: 'scale';
//   scale3d?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
//   scaleX?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
//   scaleY?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
//   scaleZ?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
//   skew?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
//   skewX?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
//   skewY?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;

//   /* Multiple function values */
//   transformMult?: TypeTansFormDefault[];
//   // transform: translateX(10px) rotate(10deg) translateY(5px);
//   // transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

//   /* Global values */
//   globalValues?:
//     | 'none'
//     | 'inherit'
//     | 'initial'
//     | 'revert'
//     | 'revert-layer'
//     | 'unset';
// };

export type TypeBeforeDefault = {
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  zIndex?: TypeThemeNumberDefault;
  top?: TypeThemeNumberDefault;
  bottom?: TypeThemeNumberDefault;
  left?: TypeThemeNumberDefault;
  right?: TypeThemeNumberDefault;
  width?: TypeThemeNumberDefault;
  height?: TypeThemeNumberDefault;
  backgroundImg?: string;
  backgroundColor?: ThemeColorsText;
  clipPath?: boolean;
  transformX?: boolean;
  transformY?: boolean;
  translate?: TypeThemeNumberDefault;
  isEffect?: boolean;
  value?: TypeThemeNumberDefault[];
  transitionValue?: TypeThemeNumberDefault[];
  unit?: 'px' | 'rem' | '%' | 'vw' | 'vh';
  transform?:
    | 'transform'
    | 'none'
    | 'matrix'
    | 'matrix3d'
    | 'perspective'
    | 'scale'
    | 'rotate'
    | 'rotate3d'
    | 'rotateX'
    | 'rotateY'
    | 'rotateZ'
    | 'translateX'
    | 'translate'
    | 'translate3d'
    | 'translateX'
    | 'translateY'
    | 'translateZ'
    | 'scale'
    | 'scale3d'
    | 'scaleX'
    | 'scaleY'
    | 'scaleZ'
    | 'skew'
    | 'skewX'
    | 'skewY';
  transitionProperty?:
    | 'none'
    | 'all'
    | 'height'
    | 'color'
    | 'background'
    | 'transform'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  element?:
    | 'none'
    | 'all'
    | 'height'
    | 'color'
    | 'background-color'
    | 'background'
    | 'img'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  transitionDuration?: TypeThemeNumberDefault;
  transitionTimingFunction?:
    | 'ease'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'linear'
    | 'step-start'
    | 'step-end'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  transformOrigin?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset';
  transitionDelay?: TypeThemeNumberDefault;
  secondsDuration?: 's' | 'sm';
  secondsDelay?: 's' | 'sm';
};

/*
  beforeDefault?: () => FlattenSimpleInterpolation;

  beforeDefault={props.beforeDefault}

  ${props.beforeDefault && props.beforeDefault()}

*/

export const beforeDefault = ({
  position = 'absolute',
  zIndex = 0,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  width = 0,
  height = 0,
  backgroundColor,
  backgroundImg = '',
  clipPath = false,
  transformX = false,
  transformY = false,
  translate = 0,
  unit,
  transitionValue = [0],
  transform,
  transitionTimingFunction = 'ease-in-out',
  transitionProperty,
  secondsDuration = 's',
  transitionDuration = 0.6,
  secondsDelay = 's',
  transitionDelay = 0,
  transformOrigin,
}: TypeBeforeDefault) => css`
  &::before {
    content: '';
    position: ${position};
    z-index: ${zIndex};
    top: calc(16 * ${top}%);
    bottom: calc(16 * ${bottom}%);
    left: calc(16 * ${left}%);
    right: calc(16 * ${right}%);
    width: calc(16 * ${width}%);
    height: calc(16 * ${height}%);
    background-image: url(${backgroundImg && backgroundImg});
    background-color: ${
      backgroundColor && THEME_COLORS_DEFAULT[backgroundColor]
    };
    ${
      clipPath &&
      css`
      clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%, 0% 0%);
    `
    }
    ${
      transformX &&
      css`
      transform: translateX(${translate}0%);
    `
    }
      ${
        transformY &&
        css`
      transform: translateX(${translate}0%);
    `
      }
    transform: ${transform}(${transitionValue}${unit && unit});
    transition: ${transitionProperty} ${transitionDuration}${
  secondsDuration || secondsDuration
} ${transitionTimingFunction} ${transitionDelay}${secondsDelay || secondsDelay};
    transform-origin: ${transformOrigin && transformOrigin};
  }
`;
