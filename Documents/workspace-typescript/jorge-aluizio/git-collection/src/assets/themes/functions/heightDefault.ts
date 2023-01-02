import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

export type TypeHeightDefault = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: TypeThemeNumberDefault;
};

export type TypeHeightPropsDefault = {
  heightDefault?: TypeHeightDefault;
  maxHeightDefault?: TypeHeightDefault;
  minHeightDefault?: TypeHeightDefault;
};

export const heightDefault = {
  heightDefault: ({
    heightDefault,
    maxHeightDefault,
    minHeightDefault,
  }: TypeHeightPropsDefault) => css`
  ${
    heightDefault &&
    css`
  height: calc(10 * ${heightDefault.value}${heightDefault.unit});
  `
  }
  ${
    maxHeightDefault &&
    css`
  max-height: calc(10 * ${maxHeightDefault.value}${maxHeightDefault.unit});
  `
  }
  ${
    minHeightDefault &&
    css`
  min-height: calc(10 * ${minHeightDefault.value}${minHeightDefault.unit});
  `
  }
  `,
};
