import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';
import { TypeVariant } from './colorDefault';

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

export type TypeFontDefault = {
  variant?: TypeVariant;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: TypeThemeNumberDefault;
  dynamic?: TypeThemeNumberDefault;
  fontFamily?: TypeFontFamily;
  fontStyle?: TypeFontStyle;
  fontLineHeight?: TypeFontLineHeight;
  fontWeigh?: TypeFontWeigh;
  fontSizeStatic?: TypeFontSizeStatic;
  fontSizeIcon?: TypeFontSizeStatic;
  fontSizeDynamic?: TypeFontSizeDynamic;
};

type TypeFontSizeStatic = {
  variant?: TypeVariant;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: TypeThemeNumberDefault;
  dynamic?: TypeThemeNumberDefault;
};

type TypeFontSizeDynamic = {
  variant?: TypeVariant;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: TypeThemeNumberDefault;
  dynamic?: TypeThemeNumberDefault;
};

export type TypeFontFamily =
  | 'Roboto'
  | 'Roboto Mono'
  | 'baloo'
  | 'oswald'
  | 'plusJakarta';

export type TypeFontStyle =
  | 'normal'
  | 'italic'
  | 'oblique'
  | 'initial'
  | 'inherit';

export type TypeFontLineHeight = '65%' | '130%' | '160%';

export type TypeFontWeigh =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'bold'
  | 'extraBold';

export const fontDefault = {
  fontDefault: ({
    fontFamily,
    fontSizeStatic,
    fontSizeDynamic,
    fontStyle,
    fontLineHeight,
    fontWeigh,
    fontSizeIcon,
  }: TypeFontDefault) => css`
    ${
      fontFamily &&
      css`
      font-family: ${fontFamily};
    `
    };
    ${
      fontSizeStatic?.value &&
      css`
      font-size: calc(10 * ${fontSizeStatic.value}${(fontSizeStatic.unit =
        'rem')});
    `
    };
    ${
      fontSizeIcon?.value &&
      css`
      font-size: calc(10 * ${fontSizeIcon.value}${(fontSizeIcon.unit = 'rem')});
    `
    };
    ${
      fontSizeDynamic?.value &&
      css`
      font-size: calc(10 * ${fontSizeDynamic.value}${(fontSizeDynamic.unit =
        'vw')});
    `
    };
     ${
       fontStyle &&
       css`
      font-style: ${fontStyle};
    `
     };
     ${
       fontLineHeight &&
       css`
      line-height: ${fontLineHeight};
    `
     };
     ${
       fontWeigh &&
       css`
      font-weight: ${fontWeigh};
    `
     };
  `,
};
