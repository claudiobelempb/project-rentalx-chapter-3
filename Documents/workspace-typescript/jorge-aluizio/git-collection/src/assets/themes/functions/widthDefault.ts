import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

export type TypeWidthDefault = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: TypeThemeNumberDefault;
};

export type TypeWidthPropsDefault = {
  widthDefault?: TypeWidthDefault;
  maxWidthDefault?: TypeWidthDefault;
  minWidthDefault?: TypeWidthDefault;
};

export const widthDefault = {
  widthDefault: ({
    widthDefault,
    maxWidthDefault,
    minWidthDefault,
  }: TypeWidthPropsDefault) => css`
  ${
    widthDefault &&
    css`
  width: calc(10 * ${widthDefault.value}${widthDefault.unit});
  `
  }
  ${
    maxWidthDefault &&
    css`
  max-width: calc(10 * ${maxWidthDefault.value}${maxWidthDefault.unit});
  `
  }
  ${
    minWidthDefault &&
    css`
  min-width: calc(10 * ${minWidthDefault.value}${minWidthDefault.unit});
  `
  }
  `,
};
