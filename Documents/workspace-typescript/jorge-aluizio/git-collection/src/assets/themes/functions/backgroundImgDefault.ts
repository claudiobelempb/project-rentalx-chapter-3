import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';
import { TypeVariant, VariantObjDefault } from './colorDefault';

export type TypeBackgroundImgDefault = {
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  backgroundAttachment?:
    | 'fixed'
    | 'scroll'
    | 'inherit'
    | 'initial'
    | 'local'
    | 'revert-layer'
    | 'unset'
    | 'revert';
  backgroundSize?:
    | 'auto'
    | 'contain'
    | 'cover'
    | 'inherit'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  backgroundPosition?:
    | 'bottom'
    | 'center'
    | 'inherit'
    | 'initial'
    | 'left'
    | 'right'
    | 'top'
    | 'revert-layer'
    | 'unset'
    | 'revert';
  zIndex?: TypeThemeNumberDefault;
  top?: TypeThemeNumberDefault;
  bottom?: TypeThemeNumberDefault;
  left?: TypeThemeNumberDefault;
  right?: TypeThemeNumberDefault;
  width?: TypeThemeNumberDefault;
  height?: TypeThemeNumberDefault;
  url?: string;
  defaultColor?: TypeVariant;
  clipPath?: boolean;
  transformX?: boolean;
  transformY?: boolean;
  translate?: TypeThemeNumberDefault;
};

export const backgroundImgDefault = {
  backgroundImgDefault: ({
    position,
    backgroundAttachment,
    zIndex,
    top,
    bottom,
    left,
    right,
    width,
    height,
    defaultColor,
    url,
    translate,
    clipPath,
    backgroundSize,
    backgroundPosition,
  }: TypeBackgroundImgDefault) => css`

      ${position && css`position: ${position};`};
      ${zIndex && css`z-index: ${zIndex};`};
      ${top && css`top: calc(10 * ${top}%);`};
      ${bottom && css`bottom: calc(10 * ${bottom}%);`};
      ${left && css`left: calc(10 * ${left}%);`};
      ${right && css`right: calc(10 * ${right}%);`};
      ${width && css`width: calc(10 * ${width}%);`};
      ${height && css`height: calc(10 * ${height}%);`};
      ${url && css`background-image: url(${url});`};
      ${
        defaultColor?.backgroundColorDefalut &&
        css`
      background-color: ${
        VariantObjDefault[defaultColor.backgroundColorDefalut.index][
          defaultColor.backgroundColorDefalut.value
        ]
      };
      `
      }
      ${
        backgroundAttachment &&
        css`background-attachment: ${backgroundAttachment};`
      };
      ${backgroundSize && css`background-size: ${backgroundSize};`};
      ${backgroundPosition && css`background-position: ${backgroundPosition};`};

      background-repeat: no-repeat;


      ${
        clipPath &&
        css`
      clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%, 0% 0%);
      `
      }
      ${
        translate &&
        css`
      transform: translateX(${translate}0);
      transform: translateX(${translate}0);

      `
      };
  `,
};
