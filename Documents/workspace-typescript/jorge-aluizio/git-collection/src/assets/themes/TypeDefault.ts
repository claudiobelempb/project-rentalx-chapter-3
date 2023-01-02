import { FlattenSimpleInterpolation } from 'styled-components';
import { TypeAfterDefault } from './functions/afterDefault';
import { TypeBackgroundImgDefault } from './functions/backgroundImgDefault';
import { TypeBeforeDefault } from './functions/beforeDefault';
import {
  TypeBorderPropsDefault,
  TypeBorderRadiusPropsDefault,
} from './functions/borderDefault';
import { TypeVariant } from './functions/colorDefault';
import { TypeEffectPropsDefault } from './functions/effectDefaults';
import { TypeFlexDefaultProps } from './functions/flexDefault';
import { TypeFontDefault } from './functions/fontDefault';
import { TypeGridDefault } from './functions/gridDefault';
import { TypeHeightPropsDefault } from './functions/heightDefault';
import { TypeMarginDefaultProps } from './functions/marginDefault';
import { TypePaddingDefaultProps } from './functions/paddingDefault';
import { TypePositionDefault } from './functions/positionDefault';
import { TypeTextDefault } from './functions/textDefault';
import { TypeUtilsPropsDefault } from './functions/utilsDefault';
import { TypeWidthPropsDefault } from './functions/widthDefault';
import {
  CategoryDefault,
  LinksTypeDefault,
  PLansTypeDefault,
  PlansTypeOptionDefault,
  ThemeMediaText,
  TypeThemeNumberDefault,
} from './ThemeType';
import {
  ColorIndex,
  ColorValue,
  TypeVariantDefault,
  TypeVariantIndexDefault,
} from './types/TypeColorDefault';
export type TypeDefault = {
  target?: '_blank' | '_self';
  href?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  fontColor?: TypeVariantDefault;
  bgColor?: TypeVariantDefault;
  colorIndex?: TypeVariantIndexDefault;
  colorValue?: ColorValue;
  colorType?: ColorIndex;

  text?: string;
  src?: string;
  alt?: string;
  label?: string;
  url?: string;
  size?: string;
  xsmall?: ThemeMediaText;
  small?: boolean;
  medium?: ThemeMediaText;
  large?: ThemeMediaText;
  xlarge?: ThemeMediaText;
  xxlarge?: ThemeMediaText;
  children?: React.ReactNode;
  // onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  // onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  // onClick?: () => void;

  as?:
    | 'fieldset'
    | 'header'
    | 'main'
    | 'footer'
    | 'section'
    | 'article'
    | 'aside'
    | 'nav'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'small'
    | 'form'
    | 'ul'
    | 'li'
    | 'a'
    | 'img'
    | 'figure'
    | 'label'
    | 'select'
    | 'textarea'
    | 'strong';
  isGridRepeat?: TypeThemeNumberDefault;
  visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit';

  isIconLeft?: boolean;
  isIconRight?: boolean;

  isActive?: boolean;

  isBorder?: boolean;
  isOverflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  isOpenNav?: boolean;
  hasError?: boolean;

  categories?: CategoryDefault[];
  category?: string;
  price?: number;
  priceCut?: number;
  lowerPrice?: number;
  discount?: number;
  isCheck?: boolean;
  listPlans?: PLansTypeDefault[];
  plansOptions?: PlansTypeOptionDefault[];
  links?: LinksTypeDefault[];
  model?: 1 | 2 | 3 | 4 | 5;
  date?: string;

  textDefault?: TypeTextDefault;
  variant?: TypeVariant;
  /*FONT DEFAULT */
  fontDefault?: TypeFontDefault;
  isHover?: boolean;

  isGridColumnsDefault?: boolean;
  positionDefault?: TypePositionDefault;
  beforeDefault?: TypeBeforeDefault;
  afterDefault?: TypeAfterDefault;
  /* Padding Dynamic */
  effectDefault?: TypeEffectPropsDefault;

  backgroundImgDefault?: TypeBackgroundImgDefault;
  /* Padding DEFAULT */
  paddingDefault?: TypePaddingDefaultProps;
  /* Margin DEFAULT*/
  marginDefault?: TypeMarginDefaultProps;
  /*HEIGHT DEFAULT */
  heightDefault?: TypeHeightPropsDefault;
  /*WIDTH DEFAULT */
  widthDefault?: TypeWidthPropsDefault;

  /*BORDER DEFAULT */
  borderDefault?: TypeBorderPropsDefault;
  /*BORDER RADIUS DEFAULT */
  borderRadiusDefault?: TypeBorderRadiusPropsDefault;

  /*GRID DEFAULT */
  gridTemplateColumnsStaticDefault?: () => FlattenSimpleInterpolation;
  gridDefault?: TypeGridDefault;
  gridTemplateColumnsDefault?: () => FlattenSimpleInterpolation;
  gridTemplateRowsDefault?: () => FlattenSimpleInterpolation;
  gridColumnDefault?: () => FlattenSimpleInterpolation;
  gridRowDefault?: () => FlattenSimpleInterpolation;

  /*FLEX DEFAULT */
  flexDefault?: TypeFlexDefaultProps;
  /*COLOR DEFAULT */
  colorDefault?: TypeVariant;
  iconDefault?: () => FlattenSimpleInterpolation;
  /* UTILS DEFAULT */
  ultilsDefault?: TypeUtilsPropsDefault;
};
