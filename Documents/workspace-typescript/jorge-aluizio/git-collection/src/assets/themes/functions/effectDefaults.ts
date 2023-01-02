import { css, FlattenSimpleInterpolation } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';
import { TypeVariant, VariantObjDefault } from './colorDefault';

export type TypeTansFormDefault = {
  /* Function values */
  matrix?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
  matrix3d?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
  perspective?: (
    valueNumber: TypeThemeNumberDefault,
    valueString: string,
  ) => FlattenSimpleInterpolation;
  rotate?: (
    value?: TypeThemeNumberDefault | string,
  ) => FlattenSimpleInterpolation;
  rotate3d?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
  rotateX?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  rotateY?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  rotateZ?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  translate?: (
    ...value: TypeThemeNumberDefault[]
  ) => FlattenSimpleInterpolation;
  translate3d?: (
    ...value: TypeThemeNumberDefault[]
  ) => FlattenSimpleInterpolation;
  translateX: (value: TypeThemeNumberDefault) => number;
  translateY?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  translateZ?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  scale?: 'scale';
  scale3d?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
  scaleX?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  scaleY?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  scaleZ?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  skew?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
  skewX?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  skewY?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;

  /* Multiple function values */
  transformMult?: TypeTansFormDefault[];
  // transform: translateX(10px) rotate(10deg) translateY(5px);
  // transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

  /* Global values */
  globalValues?:
    | 'none'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
};

type TypeEffectDefault = {
  transformValue?: TypeThemeNumberDefault[];
  translateValueX?: TypeThemeNumberDefault[];
  translateValueY?: TypeThemeNumberDefault[];
  tranHover?: TypeThemeNumberDefault[];
  tranValue?: TypeThemeNumberDefault[];
  transformArray?: TypeTansFormDefault;
  rotateDefault?: TypeThemeNumberDefault | string;
  transformOrigin?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'center'
    | 'initial'
    | 'unset'
    | 'unset'
    | 'revert'
    | 'inherit';

  colorDefault?: TypeVariant;
  transformUnit?: 'px' | 'rem' | '%' | 'vw' | 'vh' | 'deg';
  transform?:
    | 'scale'
    | 'translateX'
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
  translateX?:
    | 'scale'
    | 'translateX'
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
  translateY?:
    | 'scale'
    | 'translateX'
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
    | 'a'
    | 'img'
    | 'p'
    | 'color'
    | 'background-color'
    | 'background'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  isElement?: boolean;
  transitionDuration?: TypeThemeNumberDefault;
  secondsDuration?: 's' | 'sm';
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
  transitionDelay?: TypeThemeNumberDefault;
  secondsDelay?: 's' | 'sm';
};

export type TypeEffectPropsDefault = {
  effectDefault?: TypeEffectDefault;
  effectHoverDefault?: TypeEffectDefault;
  effectHoverBeforeDefault?: TypeEffectDefault;
  effectHoverAfterDefault?: TypeEffectDefault;
  effectRotateDefault?: TypeThemeNumberDefault | string;
  effectTranslateXDefault?: TypeThemeNumberDefault | string;
  effectTranslateYDefault?: TypeThemeNumberDefault | string;
};

export const effectDefault = {
  effectDefault: ({ effectDefault }: TypeEffectPropsDefault) => css`
    ${
      effectDefault &&
      css`
        transition: ${effectDefault.transitionProperty}${
        effectDefault.transitionDuration
      }${effectDefault.secondsDuration}${
        effectDefault.transitionTimingFunction
      }${effectDefault.transitionDuration}${effectDefault.secondsDelay};
        &:hover {
          transform: translateX(${effectDefault.translateValueX}${
        effectDefault.transformUnit
      });
          transform: translateY(${effectDefault.translateValueY}${
        effectDefault.transformUnit
      });
          transform: rotate(${effectDefault.rotateDefault}deg);
          transform-origin: ${effectDefault.transformOrigin};
          ${
            effectDefault.colorDefault?.backgroundColorDefalut &&
            css`
          background-color: ${
            VariantObjDefault[
              effectDefault.colorDefault.backgroundColorDefalut.index
            ][effectDefault.colorDefault.backgroundColorDefalut.value]
          };
          `
          }
          ${
            effectDefault.colorDefault?.colorDefalut &&
            css`
          color: ${
            VariantObjDefault[effectDefault.colorDefault.colorDefalut.index][
              effectDefault.colorDefault.colorDefalut.value
            ]
          };
          `
          }
        };
        &:hover::after {
          transform: translateX(${effectDefault.translateValueX}${
        effectDefault.transformUnit
      });
          transform: translateY(${effectDefault.translateValueY}${
        effectDefault.transformUnit
      });
          transform: rotate(${effectDefault.rotateDefault}deg);
          transform-origin: ${effectDefault.transformOrigin};
          ${
            effectDefault.colorDefault?.backgroundColorDefalut &&
            css`
          background-color: ${
            VariantObjDefault[
              effectDefault.colorDefault.backgroundColorDefalut.index
            ][effectDefault.colorDefault.backgroundColorDefalut.value]
          };
          `
          }
          ${
            effectDefault.colorDefault?.colorDefalut &&
            css`
          color: ${
            VariantObjDefault[effectDefault.colorDefault.colorDefalut.index][
              effectDefault.colorDefault.colorDefalut.value
            ]
          };
          `
          }
        };
        &:hover::before {
          background-color: red;
          transform: translateX(${effectDefault.translateValueX}${
        effectDefault.transformUnit
      });
          transform: translateY(${effectDefault.translateValueY}${
        effectDefault.transformUnit
      });
          transform: rotate(${effectDefault.rotateDefault}deg);
          transform-origin: ${effectDefault.transformOrigin};
          ${
            effectDefault.colorDefault?.backgroundColorDefalut &&
            css`
          background-color: ${
            VariantObjDefault[
              effectDefault.colorDefault.backgroundColorDefalut.index
            ][effectDefault.colorDefault.backgroundColorDefalut.value]
          };
          `
          }
          ${
            effectDefault.colorDefault?.colorDefalut &&
            css`
          color: ${
            VariantObjDefault[effectDefault.colorDefault.colorDefalut.index][
              effectDefault.colorDefault.colorDefalut.value
            ]
          };
          `
          }
        };
      `
    };
  `,
};

/* Keyword values
transform: none;
*/

/* Function values
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);

transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
*/

/* Multiple function values
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);
*/

/* Global values
transform: inherit;
transform: initial;
transform: revert;
transform: revert-layer;
transform: unset;
*/
