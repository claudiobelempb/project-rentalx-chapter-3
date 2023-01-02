import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

/**
 *
  fontSizeStatic?: TypeFontDefault;
  fontSizeDynamic?: TypeFontDefault;
  textTransform?: TypeFontDefault;
  textAlign?: TypeFontDefault;
  textTitle?: TypeFontDefault;
  textParagraph?: TypeFontDefault;
  fontFamily?: TypeFontDefault;
  fontStyle?: TypeFontDefault;
  fontLineHeight?: TypeFontDefault;
  textLineThrough?: TypeFontDefault;

  fontSizeStatic={props.fontSizeStatic}
  fontSizeDynamic={props.fontSizeDynamic}
  textTransform={props.textTransform}
  textAlign={props.textAlign}
  textTitle={props.textTitle}
  textParagraph={props.textParagraph}
  fontFamily={props.fontFamily}
  fontStyle={props.fontStyle}
  fontLineHeight={props.fontLineHeight}
  textLineThrough={props.textLineThrough}

  ${props.fontSizeStatic && props.fontSizeStaticDefault(props.fontSizeStatic)}
  ${props.fontSizeDynamic && props.fontSizeDynamicDefault(props.fontSizeDynamic)}
  ${props.textTransform && props.textTransformDefault(props.textTransform)}
  ${props.textAlign && props.textAlignDefault(props.textAlign)}
  ${props.textTitle && props.textTitleDefault(props.textTitle)}
  ${props.textParagraph && props.textparagraphDefault(props.textParagraph)}
  ${props.fontFamily && props.fontFamilyDefault(props.fontFamily)}
  ${props.fontStyle && props.fontStyleDefault(props.fontStyle)}
  ${props.fontLineHeight && props.fontLineHeightDefault(props.fontLineHeight)}
  ${props.textLineThrough && props.textDecoretionlineThrough(props.textLineThrough)}


  fontSizeStaticDefault?: () => FlattenSimpleInterpolation;
  fontSizeDynamicDefault?: () => FlattenSimpleInterpolation;
  textTransformDefault?: () => FlattenSimpleInterpolation;
  textAlignDefault?: () => FlattenSimpleInterpolation;
  tetxTitleDefault?: () => FlattenSimpleInterpolation;
  textParagraphDefault?: () => FlattenSimpleInterpolation;
  fontFamilyDefault?: () => FlattenSimpleInterpolation;
  fontStyleDefault?: () => FlattenSimpleInterpolation;
  fontLineHeightDefault?: () => FlattenSimpleInterpolation;
  textDecoretionlineThrough?: () => FlattenSimpleInterpolation;

  fontSizeStaticDefault={props.fontSizeStaticDefault}
  fontSizeDynamicDefault={props.fontSizeDynamicDefault}
  textTransformDefault={props.textTransformDefault}
  textAlignDefault={props.textAlignDefault}
  textTitleDefault={props.textTitleDefault}
  textParagraphDefault={props.textParagraphDefault}
  fontFamilyDefault={props.paddingTopDefault}
  fontStyleDefault={props.fontStyleDefault}
  fontLineHeightDefault={props.fontLineHeightDefault}
  textDecoretionlineThrough={props.textDecoretionlineThrough}

  ${props.fontSizeStaticDefault && props.fontSizeStaticDefault()}
  ${props.fontSizeDynamicDefault && props.fontSizeDynamicDefault()}
  ${props.textTransformDefault && props.textTransformDefault()}
  ${props.textAlignDefault && props.textAlignDefault()}
  ${props.textTitleDefault && props.textTitleDefault()}
  ${props.textParagraphDefault && props.textparagraphDefault()}
  ${props.fontFamilyDefault && props.fontFamilyDefault()}
  ${props.fontStyleDefault && props.fontStyleDefault()}
  ${props.fontLineHeightDefault && props.fontLineHeightDefault()}
  ${props.textDecoretionlineThrough && props.textDecoretionlineThrough()}

*/

export type TypeTextDefault = {
  textLineThrough?: 'line-through';
  textTransform?: TypeTextTransform;
  textAlign?: TypeTetxAlign;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: TypeThemeNumberDefault;
  dynamic?: TypeThemeNumberDefault;
};

export type TypeTextTransform =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'full-width'
  | 'full-size-kana';

export type TypeTetxAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'justify-all'
  | 'match-parent';

export const textDefault = {
  text: ({ textTransform, textAlign, textLineThrough }: TypeTextDefault) => css`
    ${
      textTransform &&
      css`
      text-transform: ${textTransform};
    `
    };
    ${
      textAlign &&
      css`
      text-align: ${textAlign};
    `
    };
    ${
      textLineThrough &&
      css`
    text-decoration: ${textLineThrough};
    `
    }

  `,
};
