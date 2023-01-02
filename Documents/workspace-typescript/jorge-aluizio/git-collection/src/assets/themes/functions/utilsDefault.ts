import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';
import { TypeVariant, VariantObjDefault } from './colorDefault';

export type TypeUtilsPropsDefault = {
  zIndexDefault?: TypeThemeNumberDefault;
  overflowDefault?: TypeOverflow;
  displayDefault?: TypeDisplay;
  visibilityDefault?: TypeVisibility;
  boxShadowDefault?: TypeBoxShadonw;
  positionDefault?: TypeProsition;
};

export type TypeBoxShadonw = {
  colorDefault?: TypeVariant;
  offsetY?: TypeThemeNumberDefault;
  offsetX?: TypeThemeNumberDefault;
  blurRadius?: TypeThemeNumberDefault;
  spreadRadius?: TypeThemeNumberDefault;
};

export type TypeOverflow = {
  value?: 'hidden' | 'overlay' | 'scroll' | 'visible';
};

export type TypeProsition = {
  value?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
};

export type TypeVisibility = {
  value?: 'hidden' | 'overlay' | 'scroll' | 'visible';
};

export type TypeDisplay = {
  value: 'flex' | 'grid' | 'block' | 'inline-block';
};

/**
  zIndexDefault?: TypeThemeNumberDefault;
  boxShadowDefault?: TypeBoxShadonwPropsDefault;
  displayDefault?: TypeDisplay;
  overflowDefault?: TypeOverflow;
  visibilityDefault?: TypeVisibility;
  imparDefault?: () => FlattenSimpleInterpolation;
  parDefault?: () => FlattenSimpleInterpolation;

  zIndexDefault={props.zIndexDefault}
  visibilityDefault={prpos.visibilityDefault}
  imparDefault={props.imparDefault}
  parDefault={props.parDefault}
  boxShadowDefault={props.boxShadowDefault}
  displayDefault={props.displayDefault}
  overflowDefault={props.overflowDefault}

  ${props.zIndexDefault && utilsDefault.zIndexDefault(props.zIndexDefault)}
  ${props.imparDefault && utilsDefault.imparDefault(props.imparDefault)}
  ${props.parDefault && utilsDefault.parDefault(props.parDefault)}
  ${props.boxShadowDefault && utilsDefault.boxShadowDefault(props.boxShadowDefault)}
  ${props.displayDefault && utilsDefault.displayDefault(props.displayDefault)}
  ${props.overflowDefault && utilsDefault.overflowDefault(props.overflowDefault)}

*/

export const utilsDefault = {
  utilsDefault: ({
    boxShadowDefault,
    displayDefault,
    overflowDefault,
    positionDefault,
    visibilityDefault,
    zIndexDefault,
  }: TypeUtilsPropsDefault) =>
    css`
    ${
      zIndexDefault &&
      css`
      z-index: ${zIndexDefault};
    `
    };
    ${
      boxShadowDefault &&
      css`
      box-shadow: ${boxShadowDefault.offsetX}px ${boxShadowDefault.offsetY}px ${
        boxShadowDefault.blurRadius
      }px ${boxShadowDefault.spreadRadius}px
        ${
          boxShadowDefault.colorDefault?.colorDefalut &&
          VariantObjDefault[boxShadowDefault.colorDefault.colorDefalut?.index][
            boxShadowDefault.colorDefault.colorDefalut?.value
          ]
        };
    `
    };
    ${
      positionDefault &&
      css`
      position: ${positionDefault};
    `
    };
    ${
      visibilityDefault &&
      css`
      visibility: ${visibilityDefault};
      display: none;
      display: flex;
    `
    };
    ${
      overflowDefault &&
      css`
      overflow: ${overflowDefault};
    `
    };
    ${
      displayDefault &&
      css`
      display: ${displayDefault};
    `
    };
  `,
};
