import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';
import { colorDefault, TypeVariant } from './colorDefault';

export type TypeBorderDefault = {
  unit?: 'px' | '%' | 'rem' | 'w' | 'h';
  type?:
    | 'border'
    | 'radius'
    | 'radius-top'
    | 'radius-bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottom';
  width?: TypeThemeNumberDefault;
  style?: 'solid' | 'dashed ';
  colorDefault?: TypeVariant;
};

export type TypeBorderPropsDefault = {
  borderDefault?: TypeBorderDefault;
  borderTopDefault?: TypeBorderDefault;
  borderRightDefault?: TypeBorderDefault;
  borderLeftDefault?: TypeBorderDefault;
  borderBottomDefault?: TypeBorderDefault;
};

export type TypeBorderRadiusPropsDefault = {
  borderRadiusDefault?: TypeBorderDefault;
  borderTopRightRadiusDefault?: TypeBorderDefault;
  borderTopLeftRadiusDefault?: TypeBorderDefault;
  borderBottomRightRadiusDefault?: TypeBorderDefault;
  borderBottomLeftRadiusDefault?: TypeBorderDefault;
};

export const borderDefault = {
  borderDefault: ({
    borderDefault,
    borderTopDefault,
    borderRightDefault,
    borderLeftDefault,
    borderBottomDefault,
  }: TypeBorderPropsDefault) => css`
    ${
      borderDefault &&
      css`
      /* border: 2px solid red; */
    border: ${borderDefault.width}${borderDefault.unit} ${
        borderDefault.style
      } ${
        borderDefault.colorDefault &&
        colorDefault.colorDefault(borderDefault.colorDefault)
      };

    `
    };
    ${
      borderTopDefault &&
      css`
    border-top: ${borderTopDefault.width}${borderTopDefault.unit} ${borderTopDefault.style};

    `
    };
    ${
      borderRightDefault &&
      css`
    border-right: ${borderRightDefault.width}${borderRightDefault.unit} ${borderRightDefault.style};

    `
    };
    ${
      borderLeftDefault &&
      css`
    border-left: ${borderLeftDefault.width}${borderLeftDefault.unit} ${borderLeftDefault.style};

    `
    };
    ${
      borderBottomDefault &&
      css`
    border-bottom: ${borderBottomDefault.width}${borderBottomDefault.unit} ${borderBottomDefault.style};

    `
    };
  `,
};

export const borderRadiusDefault = {
  borderRadiusDefault: ({
    borderRadiusDefault,
    borderTopRightRadiusDefault,
    borderTopLeftRadiusDefault,
    borderBottomRightRadiusDefault,
    borderBottomLeftRadiusDefault,
  }: TypeBorderRadiusPropsDefault) => css`
    ${
      borderRadiusDefault &&
      css`
    border-radius: ${borderRadiusDefault.width}${borderRadiusDefault.unit} ${borderRadiusDefault.style};

    `
    };
    ${
      borderTopRightRadiusDefault &&
      css`
    border-top-right-radius: ${borderTopRightRadiusDefault.width}${borderTopRightRadiusDefault.unit} ${borderTopRightRadiusDefault.style};

    `
    };
    ${
      borderTopLeftRadiusDefault &&
      css`
   border-top-left-radius: ${borderTopLeftRadiusDefault.width}${borderTopLeftRadiusDefault.unit} ${borderTopLeftRadiusDefault.style};

    `
    };
    ${
      borderBottomRightRadiusDefault &&
      css`
    border-bottom-right-radius: ${borderBottomRightRadiusDefault.width}${borderBottomRightRadiusDefault.unit} ${borderBottomRightRadiusDefault.style};

    `
    };
    ${
      borderBottomLeftRadiusDefault &&
      css`
    border-bottom-left-radius: ${borderBottomLeftRadiusDefault.width}${borderBottomLeftRadiusDefault.unit} ${borderBottomLeftRadiusDefault.style};

    `
    };
  `,
};
