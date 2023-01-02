import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

export type TypeValueFlexDefault =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'stretch'
  | 'baseline'
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'now-rap'
  | 'wrap'
  | 'cover'
  | 'contain'
  | 'repeat'
  | 'no-repeat'
  | 'wrap-reverse';

export type TypeFlexGapDefault = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  row?: TypeThemeNumberDefault;
  column?: TypeThemeNumberDefault;
};

export type TypeFlexDefaultProps = {
  flexDefault?: 'flex';
  flexGapDefault?: TypeFlexGapDefault;
  flexDirectionDefault?: TypeValueFlexDefault;
  flexAlignSelfDefault?: TypeValueFlexDefault;
  flexJustifyContentDefault?: TypeValueFlexDefault;
  flexAlignItemsDefault?: TypeValueFlexDefault;
  flexBasisDefault?: TypeValueFlexDefault;
  flexGrowDefault?: TypeValueFlexDefault;
  flexWrapDefault?: 'wrap' | 'nowrap';
};

export const flexDefault = {
  flexDefault: ({
    flexDefault,
    flexGapDefault,
    flexAlignItemsDefault,
    flexAlignSelfDefault,
    flexBasisDefault,
    flexDirectionDefault,
    flexGrowDefault,
    flexJustifyContentDefault,
    flexWrapDefault,
  }: TypeFlexDefaultProps) => css`
    ${
      flexDefault &&
      css`
      display: ${flexDefault};
    `
    };
    ${
      flexGapDefault &&
      css`
      gap: ${flexGapDefault.row}${flexGapDefault.unit} ${flexGapDefault.column}${flexGapDefault.unit};
    `
    };
    ${
      flexAlignItemsDefault &&
      css`
      align-items: ${flexAlignItemsDefault};
    `
    };
    ${
      flexAlignSelfDefault &&
      css`
      align-self: ${flexAlignSelfDefault};
    `
    };
    ${
      flexBasisDefault &&
      css`
      flex-basis: calc(10 * ${flexBasisDefault}%);
    `
    };
    ${
      flexDirectionDefault &&
      css`
      flex-direction: ${flexDirectionDefault};
    `
    };
    ${
      flexGrowDefault &&
      css`
      flex-grow: ${flexGrowDefault};
    `
    };
    ${
      flexJustifyContentDefault &&
      css`
      justify-content: ${flexJustifyContentDefault};
    `
    };
    ${
      flexWrapDefault &&
      css`
      flex-wrap: ${flexWrapDefault};
    `
    };
    // sm applies to x-small devices (portrait phones, less than 576px)
    @media (max-width: 320px) {

    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {

    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {

    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {

    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
      flex-wrap: nowrap;
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {

    }
  `,
};
