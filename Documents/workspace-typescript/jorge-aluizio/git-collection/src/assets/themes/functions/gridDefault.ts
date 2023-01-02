import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

type TypeGridPropsDefault = {
  minMax?: TypeThemeNumberDefault;
  start?: TypeThemeNumberDefault;
  span?: 'span' | '';
  repeat?: 'rows' | 'columns';
  end?: TypeThemeNumberDefault;
  repeatColumns?: TypeThemeNumberDefault;
  repeatRows?: TypeThemeNumberDefault;
  type?:
    | 'grid-colum'
    | 'grid-row'
    | 'grid-template-columns'
    | 'gap'
    | 'row-gap'
    | 'column-gap';
};

export type TypeGridDefault = {
  gridDefault?: 'grid';
  gridTemplateColumnsDefault?: TypeGridPropsDefault;
  gridTemplateColumnsStaticDefault?: TypeGridPropsDefault;
  gridTemplateRowsDefault?: TypeGridPropsDefault;
  gridColumnDefault?: TypeGridPropsDefault;
  gridRowDefault?: TypeGridPropsDefault;
  overallDefault?: string;
};

export const gridDefault = {
  gridDefault: ({
    gridDefault,
    gridTemplateColumnsDefault,
    gridColumnDefault,
    gridRowDefault,
    gridTemplateColumnsStaticDefault,
    gridTemplateRowsDefault,
    overallDefault,
  }: TypeGridDefault) =>
    css`
      ${
        gridDefault &&
        css`
        display: ${gridDefault};
      `
      };
      ${
        gridTemplateColumnsDefault &&
        css`
      display: grid;
      grid-template-columns:
      [container-start] repeat(${gridTemplateColumnsDefault.repeatColumns}, minmax(min-content, 1fr))
      [container-end];
      `
      };
      ${
        gridColumnDefault &&
        css`
      ${
        gridColumnDefault.span === 'span' &&
        css`
      grid-column: ${gridColumnDefault.start} / ${gridColumnDefault.span} ${gridColumnDefault.end};
    `
      }
    ${
      gridColumnDefault.span === '' &&
      css`
      grid-column: ${gridColumnDefault.start} / ${gridColumnDefault.end};
    `
    }
      `
      };
      ${
        gridRowDefault &&
        css`
      ${
        gridRowDefault.span === 'span' &&
        css`
      grid-row: ${gridRowDefault.start} / ${gridRowDefault.span} ${gridRowDefault.end};

    `
      }
    ${
      gridRowDefault.span === '' &&
      css`
      grid-row: ${gridRowDefault.start} / ${gridRowDefault.end};
    `
    }
      `
      };
      ${
        gridTemplateColumnsStaticDefault &&
        css`
      grid-template-columns: repeat(
      ${gridTemplateColumnsStaticDefault.repeatColumns},
      minmax(${gridTemplateColumnsStaticDefault.minMax} 0rem, 1fr)
    );
      `
      };
      ${gridTemplateRowsDefault && css``};
      ${
        overallDefault &&
        css`
      grid-column: container-start / container-end;
      `
      };
    `,
};
