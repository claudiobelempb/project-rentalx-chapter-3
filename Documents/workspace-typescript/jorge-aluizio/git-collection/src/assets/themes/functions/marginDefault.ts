import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

type TypeMarginDefault = {
  value?: TypeThemeNumberDefault;
  vstatic?: TypeThemeNumberDefault;
  vdynamic?: TypeThemeNumberDefault;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
};

export type TypeMarginDefaultProps = {
  marginStaticDefault?: TypeMarginDefault;
  marginTopStaticDefault?: TypeMarginDefault;
  marginRightStaticDefault?: TypeMarginDefault;
  marginLeftStaticDefault?: TypeMarginDefault;
  marginBottomStaticDefault?: TypeMarginDefault;
  marginXStaticDefault?: TypeMarginDefault;
  marginYStaticDefault?: TypeMarginDefault;
  marginDynamicDefault?: TypeMarginDefault;
};

export const marginDefault = {
  marginDefault: ({
    marginStaticDefault,
    marginDynamicDefault,
    marginBottomStaticDefault,
    marginLeftStaticDefault,
    marginRightStaticDefault,
    marginTopStaticDefault,
    marginXStaticDefault,
    marginYStaticDefault,
  }: TypeMarginDefaultProps) => css`
    ${
      marginStaticDefault &&
      css`
      margin: ${marginStaticDefault.vstatic}rem;
    `
    };
    ${
      marginTopStaticDefault &&
      css`
      margin-top: ${marginTopStaticDefault.vstatic}rem;
    `
    };
    ${
      marginRightStaticDefault &&
      css`
      margin-right: ${marginRightStaticDefault.vstatic}rem;
    `
    };
    ${
      marginLeftStaticDefault &&
      css`
      margin-left: ${marginLeftStaticDefault.vstatic}rem;
    `
    };
    ${
      marginBottomStaticDefault &&
      css`
      margin-bottom: ${marginBottomStaticDefault.vstatic}rem;
    `
    };
    ${
      marginXStaticDefault &&
      css`
      margin-right: ${marginXStaticDefault.vstatic}rem;
      margin-left: ${marginXStaticDefault.vstatic}rem;
    `
    };
    ${
      marginYStaticDefault &&
      css`
      margin-top: ${marginYStaticDefault.vstatic}rem;
      margin-bottom: ${marginYStaticDefault.vstatic}rem;
    `
    };
    ${
      marginDynamicDefault &&
      css`
      margin: calc(${marginDynamicDefault.vstatic}rem + ${marginDynamicDefault.vdynamic}vw);
    `
    };
  `,
};
