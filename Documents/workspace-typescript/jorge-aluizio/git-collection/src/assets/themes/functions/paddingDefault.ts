import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

type TypePaddingDefault = {
  value?: TypeThemeNumberDefault;
  vstatic?: TypeThemeNumberDefault;
  vdynamic?: TypeThemeNumberDefault;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
};

export type TypePaddingDefaultProps = {
  paddingStaticDefault?: TypePaddingDefault;
  paddingTopStaticDefault?: TypePaddingDefault;
  paddingRightStaticDefault?: TypePaddingDefault;
  paddingLeftStaticDefault?: TypePaddingDefault;
  paddingBottomStaticDefault?: TypePaddingDefault;
  paddingXStaticDefault?: TypePaddingDefault;
  paddingYStaticDefault?: TypePaddingDefault;
  paddingDynamicDefault?: TypePaddingDefault;
};

export const paddingDefault = {
  paddingDefault: ({
    paddingStaticDefault,
    paddingDynamicDefault,
    paddingBottomStaticDefault,
    paddingLeftStaticDefault,
    paddingRightStaticDefault,
    paddingTopStaticDefault,
    paddingXStaticDefault,
    paddingYStaticDefault,
  }: TypePaddingDefaultProps) => css`
    ${
      paddingStaticDefault &&
      css`
      padding: ${paddingStaticDefault.vstatic}rem;
    `
    };
    ${
      paddingTopStaticDefault &&
      css`
      padding-top: ${paddingTopStaticDefault.vstatic}rem;
    `
    };
    ${
      paddingRightStaticDefault &&
      css`
      padding-right: ${paddingRightStaticDefault.vstatic}rem;
    `
    };
    ${
      paddingLeftStaticDefault &&
      css`
      padding-left: ${paddingLeftStaticDefault.vstatic}rem;
    `
    };
    ${
      paddingBottomStaticDefault &&
      css`
      padding-bottom: ${paddingBottomStaticDefault.vstatic}rem;
    `
    };
    ${
      paddingXStaticDefault &&
      css`
      padding-right: calc(10 * ${paddingXStaticDefault.vstatic}${paddingXStaticDefault.unit});
      padding-left: calc(10 * ${paddingXStaticDefault.vstatic}${paddingXStaticDefault.unit});
    `
    };
    ${
      paddingYStaticDefault &&
      css`
      padding-top: calc(10 * ${paddingYStaticDefault.vstatic}${paddingYStaticDefault.unit});
      padding-bottom: calc(10 * ${paddingYStaticDefault.vstatic}${paddingYStaticDefault.unit});
    `
    };
    ${
      paddingDynamicDefault &&
      css`
      padding: calc(${paddingDynamicDefault.vstatic}rem + ${paddingDynamicDefault.vdynamic}vw);
    `
    };
  `,
};
