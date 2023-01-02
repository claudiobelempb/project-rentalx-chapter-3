import 'styled-components';

import { ThemeDefault } from '../assets/themes/themeDefault';

type TypeThemeDefault = typeof ThemeDefault;

declare module 'styled-components' {
  export interface DefaultTheme extends TypeThemeDefault {}
}
