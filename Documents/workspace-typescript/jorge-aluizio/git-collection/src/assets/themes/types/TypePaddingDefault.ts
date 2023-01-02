import { TypeThemeNumberDefault } from '../ThemeType';

type TypeUnit = 'px' | '%' | 'rem' | 'vw' | 'vh';
type TypePosition = 'padding' | 'top' | 'right' | 'left' | 'bottom';

export type TypePaddingDefault = {
  unit?: TypeUnit;
  value?: TypeThemeNumberDefault;
  valueX?: TypeThemeNumberDefault;
  valueY?: TypeThemeNumberDefault;
  valueTop?: TypeThemeNumberDefault;
  valueBottom?: TypeThemeNumberDefault;
  valueRight?: TypeThemeNumberDefault;
  valueLeft?: TypeThemeNumberDefault;
  vstatic?: TypeThemeNumberDefault;
  vdynamic?: TypeThemeNumberDefault;
  vs?: TypeThemeNumberDefault;
  vd?: TypeThemeNumberDefault;
  hs?: TypeThemeNumberDefault;
  hd?: TypeThemeNumberDefault;
  type?: TypePosition;
};
